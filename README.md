https://lorisleiva.com/create-a-solana-dapp-from-scratch/integrating-with-solana-wallets
https://lorisleiva.com/create-a-solana-dapp-from-scratch

```html
"<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 350 350">
  <style>
    .base {
      fill: white;
      font-family: serif;
      font-size: 24px;
    }
  </style>
  <rect width="100%" height="100%" fill="black" />
  <text x="50%" y="50%" class="base" dominant-baseline="middle" text-anchor="middle"></text></svg
>"
```

```json
{
  "name": "PIZZA",
  "symbol": "",
  "image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHByZXNlcnZlQXNwZWN0UmF0aW89J3hNaW5ZTWluIG1lZXQnIHZpZXdCb3g9JzAgMCAzNTAgMzUwJz48c3R5bGU+LmJhc2UgeyBmaWxsOiB3aGl0ZTsgZm9udC1mYW1pbHk6IHNlcmlmOyBmb250LXNpemU6IDI0cHg7IH08L3N0eWxlPjxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9J2JsYWNrJyAvPjx0ZXh0IHg9JzUwJScgeT0nNTAlJyBjbGFzcz0nYmFzZScgZG9taW5hbnQtYmFzZWxpbmU9J21pZGRsZScgdGV4dC1hbmNob3I9J21pZGRsZSc+cGl6emE8L3RleHQ+PC9zdmc+",
  "properties": {
    "creators": [
      {
        "address": "GAGWQgDJ9r98TuVSed2DyctDeZ69qqc4qkUNJrTvfPY3",
        "share": 100
      }
    ]
  }
}
```

# Passages UI

Decentralized story telling. Allowing others to contribute to one narrative story. Each block in the story becomes an NFT.

## Installation

### Rust

- Don't use Homebrew because the rest of the CLI tools will fail
- [Rust Guide](https://doc.rust-lang.org/book/ch01-01-installation.html)

```
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
# Rust is installed now. Great!
rustc --version
rustup update
rustup --version
rustc --version
cargo --version
```

### Solana

```
sh -c "$(curl -sSfL https://release.solana.com/stable/install)"
Please update your PATH environment variable to include the solana programs:
solana --version
```

```
solana config set --url localhost
solana config set --url devnet
```

```
solana-test-validator
# confirm this works, then quit it
# if SSL error
brew install openssl
```

```
# generate local wallet, passphrase doesn't matter for now
# if you already have a local wallet, you can skip
solana-keygen new
# see address
solana address
```

```
# For local deploys run in a new tab
solana-test-validator
anchor deploy
# To reset
solana-test-validator --reset
```

### Anchor

```
cargo install --git https://github.com/project-serum/anchor anchor-cli --locked
anchor --version
```

- uses chai + mocha for JS tests. Open issue to switch to Jest https://github.com/project-serum/anchor/issues/1069

### Prerequisites

- Download the latest version of [Node](https://nodejs.org/en/) and NPM.

### Startup

- Run `npm run dev` and visit `http://localhost:3000/`

### Tech

- [Svelte](https://svelte.dev).
- [TailwindCSS](https://tailwindcss.com).
- [TypeScript](https://www.typescriptlang.org).
- [Vite](https://vitejs.dev).

## Structure and Content

- `./entry`: CSS + JavaScript entry files.
- `./src`: Source files, including components and types.
- `./tests`: All tests live in a flat directory so import statements match elsewhere.

# Deploying

```
solana config set --url devnet

// Make sure you're on devnet.
solana config get

anchor build

// Get the new program id.
solana address -k target/deploy/myepicproject-keypair.json
solana address -k target/deploy/passages-keypair.json

// Update Anchor.toml and lib.rs w/ new program id.
// Make sure Anchor.toml is on devnet.

// Build again.
anchor build
```
