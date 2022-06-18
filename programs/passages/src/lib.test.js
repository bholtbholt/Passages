const anchor = require('@project-serum/anchor');
const assert = require('assert');
const bs58 = require('bs58');
// import * as anchor from '@project-serum/anchor';
// import type { Program } from '@project-serum/anchor';
// import type { Passages } from '../../../target/types/passages';
// import * as assert from 'assert';

anchor.setProvider(anchor.Provider.env());
const program = anchor.workspace.Passages; // as Program<Passages>;

it('should add a passage', async () => {
  // Before sending the transaction to the blockchain.
  const passage = anchor.web3.Keypair.generate();
  await program.rpc.addPassage(1, 'Give me pizza!', {
    accounts: {
      passage: passage.publicKey,
      author: program.provider.wallet.publicKey,
      systemProgram: anchor.web3.SystemProgram.programId,
    },
    signers: [passage],
  });

  const passageAccount = await program.account.passage.fetch(passage.publicKey);

  assert.equal(passageAccount.author.toBase58(), program.provider.wallet.publicKey.toBase58());
  assert.equal(passageAccount.chapter, 1);
  assert.equal(passageAccount.html, 'Give me pizza!');
  assert.ok(passageAccount.timestamp);
});

it('should add a passage from another account', async () => {
  const otherUser = anchor.web3.Keypair.generate();
  // airdrop to other user
  const signature = await program.provider.connection.requestAirdrop(
    otherUser.publicKey,
    1000000000,
  );
  await program.provider.connection.confirmTransaction(signature);

  const passage = anchor.web3.Keypair.generate();
  await program.rpc.addPassage(1, "It's under the sauce.", {
    accounts: {
      passage: passage.publicKey,
      author: otherUser.publicKey,
      systemProgram: anchor.web3.SystemProgram.programId,
    },
    signers: [otherUser, passage],
  });

  const passageAccount = await program.account.passage.fetch(passage.publicKey);

  assert.equal(passageAccount.author.toBase58(), otherUser.publicKey.toBase58());
  assert.equal(passageAccount.chapter, 1);
  assert.equal(passageAccount.html, "It's under the sauce.");
  assert.ok(passageAccount.timestamp);
});

it('should increment chapters', async () => {
  // Before sending the transaction to the blockchain.
  const passage = anchor.web3.Keypair.generate();
  await program.rpc.addPassage(2, 'Whip cream flowing like waterfalls.', {
    accounts: {
      passage: passage.publicKey,
      author: program.provider.wallet.publicKey,
      systemProgram: anchor.web3.SystemProgram.programId,
    },
    signers: [passage],
  });

  const passageAccount = await program.account.passage.fetch(passage.publicKey);

  assert.equal(passageAccount.author.toBase58(), program.provider.wallet.publicKey.toBase58());
  assert.equal(passageAccount.chapter, 2);
  assert.equal(passageAccount.html, 'Whip cream flowing like waterfalls.');
  assert.ok(passageAccount.timestamp);
});

it('should limit html content to 512 characters', async () => {
  try {
    const passage = anchor.web3.Keypair.generate();
    const longPassage = 'x'.repeat(516);
    await program.rpc.addPassage(1, longPassage, {
      accounts: {
        passage: passage.publicKey,
        author: program.provider.wallet.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      },
      signers: [passage],
    });
  } catch (error) {
    assert.equal(error.msg, 'Html must be less than 512 characters');
    return;
  }

  assert.fail('Html must be less than 512 characters');
});

it('should fetch all passages', async () => {
  const passageAccount = await program.account.passage.all();
  assert.equal(passageAccount.length, 3);
});

it('should filter passages by chapter', async () => {
  const authorPublicKey = program.provider.wallet.publicKey;
  const passageAccounts = await program.account.passage.all([
    {
      memcmp: {
        offset: 8, // Discriminator.
        bytes: bs58.encode(Buffer.from([1])),
      },
    },
  ]);

  assert.equal(passageAccounts.length, 2);
  assert.ok(
    passageAccounts.every((passageAccount) => {
      return passageAccount.account.chapter === 1;
    }),
  );
});
