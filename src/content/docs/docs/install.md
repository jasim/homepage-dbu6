---
title: Install dbu6
description: "A prompt to paste into your coding agent so it installs dbu6 for you, along with the installation steps it follows for prerequisites on macOS and Linux, creating a books folder, starting the app and connecting the agent."
---

## Install with your coding agent

If you use Claude Code, Codex or Pi, open it in your home folder (or any
folder other than the one you want the books in) and paste this prompt:

```text
Install dbu6, the open-source personal finance app, on this computer.
Follow the instructions at https://dbu6.com/docs/install.md

- Put my books in ~/my-books.
- Check which prerequisites are missing, and ask me before you install any.
- Start the app, and tell me the address to open in my browser.
```

The agent reads the installation steps on the rest of this page and runs the
commands in them (these steps are written for the agent and for anyone who
wants to run the commands by hand). When the agent is done, open the address
it gives you (usually <http://localhost:2345>) and sign up. The account you
create is stored in your books folder only.

:::note[For coding agents]
The homepage gives a shorter prompt that names only this page. If the user
names no books folder, put the books in `~/my-books`. Before you install a
missing prerequisite, ask the user. When the app is running, give the user
its address.
:::

## Prerequisites

dbu6 runs on macOS and Linux.

| Tool | Needed for | Check with |
| --- | --- | --- |
| Node.js 22.18 or newer, with npm | dbu6 itself | `node --version` |
| uv | Reading statements (the statement parsers are Python) | `uv --version` |
| pdftotext, part of poppler | Reading PDF statements | `pdftotext -v` |
| A coding agent | Doing your books from your statements | **Settings** › **Coding agent**, once dbu6 runs |
| git (optional) | A first commit of your books folder | `git --version` |

dbu6 works with Claude Code, Codex and Pi when they are installed and logged in
on the same computer. The agent does the bookkeeping in
[Set up your books with your coding agent](/docs/first-books/) and every month
after. Without an agent, the step-by-step screens can still import statements
in the layouts dbu6 already reads, and your own rules categorize transactions
([Doing it by hand](/docs/by-hand/)).

To install the prerequisites:

```sh
# macOS, with Homebrew
brew install node uv poppler

# Debian and Ubuntu
sudo apt install poppler-utils
curl -LsSf https://astral.sh/uv/install.sh | sh
# Node 22.18 or newer: https://nodejs.org/en/download, nvm or NodeSource.
# The nodejs package in most distributions is older than that.
```

## Create the books folder

```sh
npm init @dbu6 ~/my-books
cd ~/my-books
```

The folder must not exist yet, or must be empty. `npm init @dbu6` runs
`dbu6 init` from the latest release of dbu6 (the `@dbu6/app` package). To
use a particular version, run `npm init @dbu6@1.2.3` instead.

`init` writes only inside the new folder:

- `node_modules/` gets dbu6 itself, the npm package `@dbu6/app`. The package
  puts the `dbu6` and `sapporta` commands in `node_modules/.bin`, and
  `npx dbu6` and `npx sapporta` run them from there.
- `.env.development` gets the settings every `dbu6` command reads, with a
  generated secret.
- `user-config/` gets starter files.
- `data/` gets a new database.
- If git is installed, `init` also makes the first commit.

[Your books](/docs/your-books/) describes each file.

Then check the folder:

```sh
npx dbu6 check
```

This command reports any missing prerequisite.

## Install the Sapporta skill

dbu6 is built on [Sapporta](https://sapporta.com), and the Sapporta skill tells
coding agents how to work with a Sapporta app. Install it once per computer:

```sh
npx skills add https://github.com/jasim/sapporta-skills --skill sapporta --global --yes
```

The `sapporta` command that the agent uses to read and change your books
comes with dbu6, so there is nothing else to install.

## Start the app

```sh
npx dbu6 dev
```

`dev` migrates the database, starts the app and prints its address,
<http://localhost:2345> by default. It keeps running until you press
**Ctrl-C**, so run it in a terminal of its own.

:::note[For coding agents]
`npx dbu6 dev` does not exit, so start it in the background (or ask the user
to run it in a terminal of their own), wait until it prints the address, and
then give the user that address. Don't sign up on the user's behalf.
:::

Open the address and sign up. New accounts don't need email verification,
and any email dbu6 sends is printed in the terminal.

For everyday use after a restart, `npx dbu6 start` runs the same app without
reloading on code changes.

## Connect the coding agent

Open **Settings** › **Coding agent** to see which agent dbu6 found and to
switch between them.

![Settings, with Coding agent set to Claude Code, and the Banks & cards, Opening balances and Categorization rules rows](/assets/docs/settings.webp)

When dbu6 passes a prompt to your agent, it also writes an access token for the
agent to `.env.agent` in your books folder if the folder doesn't have one that
works, so you don't need to do anything else.

To create the token yourself, for example to try the agent's access before
you start, run this after you have signed up:

```sh
npx dbu6 agent env
npx sapporta api get /api/auth-context
```

`npx dbu6 agent env` writes `.env.agent` and revokes any tokens dbu6 created
for that account before (if more than one person has signed up in this folder,
name the account with `npx dbu6 agent env --user you@example.com`). Because
`.env.agent` is a credential, it is gitignored, and you should never commit or
share it. The second command needs the app running, and prints the user and
workspace the token acts for.

## Everyday commands

Run these in your books folder:

| Command | What it does |
| --- | --- |
| `npx dbu6 start` | Starts the app |
| `npx dbu6 dev` | Starts the app, and restarts it when a file it loads changes (for example your own reports) |
| `npx dbu6 upgrade` | Installs the latest dbu6, migrates the database and runs `check` |
| `npx dbu6 check` | Reports missing tools and anything an upgrade broke |
| `npx dbu6 docs` | Lists the guides your coding agent follows |

`npm start`, `npm run dev`, `npm run check` and `npm run upgrade` do the same.

## Next

1. [Introduction to dbu6](/docs/), which describes what dbu6 does.
2. [Set up your books with your coding agent](/docs/first-books/).
