use anchor_lang::prelude::*;
use anchor_lang::solana_program::system_program;

declare_id!("2WHLLSwc7wsRen7w75Y6hUDeasf5Fjj1CPcuxzSXp9Qn");

#[program]
pub mod passages {
  use super::*;
  pub fn add_passage(ctx: Context<AddPassage>, chapter: u16, html: String) -> ProgramResult {
    let passage: &mut Account<Passage> = &mut ctx.accounts.passage;
    let author: &Signer = &ctx.accounts.author;
    let clock: Clock = Clock::get().unwrap();

    // validattion for chapter too
    // validation for html
    if html.chars().count() > 512 {
      return Err(ErrorCode::HtmlTooLong.into())
    }

    passage.chapter = chapter;
    passage.timestamp = clock.unix_timestamp;
    passage.author = *author.key;
    passage.html = html;

    Ok(())
  }
}

#[derive(Accounts)]
pub struct AddPassage<'info> {
  #[account(init, payer = author, space = Passage::LEN)]
  pub passage: Account<'info, Passage>,
  #[account(mut)]
  pub author: Signer<'info>,
  #[account(address = system_program::ID)]
  pub system_program: AccountInfo<'info>,
}

#[account]
pub struct Passage {
  pub chapter: u16,
  pub author: Pubkey,
  pub timestamp: i64,
  pub html: String,
}

// Reference + Guide
// https://lorisleiva.com/create-a-solana-dapp-from-scratch/structuring-our-tweet-account#size-recap
const DISCRIMINATOR_LENGTH: usize = 8;  // Stores the type of account
const CHAPTER_LENGTH: usize = 2;
const AUTHOR_PUBKEY_LENGTH: usize = 32;
const TIMESTAMP_LENGTH: usize = 8;
const STRING_LENGTH_PREFIX: usize = 4;  // Stores the size of the string.
const MAX_HTML_LENGTH: usize = 512 * 4; // 512 chars max.

impl Passage {
  // Total number of bytes to reserve
  const LEN: usize = DISCRIMINATOR_LENGTH
    + CHAPTER_LENGTH
    + AUTHOR_PUBKEY_LENGTH
    + TIMESTAMP_LENGTH
    + STRING_LENGTH_PREFIX + MAX_HTML_LENGTH;
}

#[error]
pub enum ErrorCode {
  #[msg("Html must be less than 512 characters")]
  HtmlTooLong,
  // Add chapter validation too,
}
