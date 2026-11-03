---
title: Install dbu6
description: "A prompt to paste into your coding agent so it installs dbu6 for you, and the installation steps it follows: prerequisites on macOS and Linux, creating a books folder, starting the app, and connecting the agent."
---

dbu6 runs on macOS and Linux. It keeps your books in a folder of its own,
with the dbu6 program installed inside that folder, so you never clone or
build anything.

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

The agent reads the rest of this page and runs the commands in it. When it is
done, open the address it gives you (usually <http://localhost:2345>) and
sign up. The account you create is stored in your books folder only.

The rest of this page is the installation itself, written for the agent and
for anyone who wants to run the commands by hand.

## Prerequisites

| Tool | Needed for | Check with |
| --- | --- | --- |
| Node.js 22.18 or newer, with npm | dbu6 itself | `node --version` |
| uv | Reading statements (the statement parsers are Python) | `uv --version` |
| pdftotext, part of poppler | Reading PDF statements | `pdftotext -v` |
| git (optional) | A first commit of your books folder | `git --version` |
| A coding agent (optional) | Setting up and categorizing from statements | **Settings** › **Coding agent**, once dbu6 runs |

dbu6 works with Claude Code, Codex and Pi, installed and logged in on the same
computer. Without an agent, imports still work and your own rules categorize
transactions, but the agent-led setup in
[Do your books from your statements](/docs/first-books/) is not available.

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

`init` writes only inside the new folder. It installs dbu6 into
`node_modules`, writes `.env.development` (the settings every `dbu6` command
reads, with a generated secret), fills `user-config/` with starter files,
creates the database and, if git is installed, makes the first commit.
[Your books](/docs/your-books/) describes each file.

Then check the folder:

```sh
npx dbu6 check
```

It reports any prerequisite that is missing.

## Install the Sapporta skill

dbu6 is built on [Sapporta](https://sapporta.com). The Sapporta skill tells
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
`npx dbu6 dev` does not exit. Start it in the background (or ask the person
to run it in a terminal of their own), wait until it prints the address, and
then give the person that address. Don't sign up on the person's behalf.
:::

Open the address and sign up. New accounts don't need email verification,
and any email dbu6 sends is printed in the terminal.

For everyday use after a restart, `npx dbu6 start` runs the same app without
reloading on code changes.

## Connect the coding agent

Open **Settings** › **Coding agent** to see which agent dbu6 found and to
switch between them.

![Settings, with Coding agent set to Claude Code, and the Banks & cards, Opening balances and Categorization rules rows](/assets/docs/settings.webp)

When dbu6 hands a prompt to your agent, it also gives your books folder an
access token for the agent, in `.env.agent`, if the folder doesn't have one
that works. You don't need to do anything else.

To create the token yourself, for example to try the agent's access before
you start, run this after you have signed up:

```sh
npx dbu6 agent env
npx sapporta api get /api/auth-context
```

The first command writes `.env.agent`. This file is a credential: it is
gitignored, and you should never commit or share it. Creating a new token
revokes the tokens dbu6 created for that account before. The second command
needs the app running, and prints the user and workspace the token acts for.
If more than one person has signed up in this folder, name the account:
`npx dbu6 agent env --user you@example.com`.

## Everyday commands

Run these in your books folder:

| Command | What it does |
| --- | --- |
| `npx dbu6 start` | Starts the app |
| `npx dbu6 dev` | Starts the app, and restarts it when a file it loads changes (for example your own reports) |
| `npx dbu6 upgrade` | Moves to the latest dbu6, migrates the database and runs `check` |
| `npx dbu6 check` | Reports missing tools and anything an upgrade broke |
| `npx dbu6 docs` | Lists the guides your coding agent follows |

`npm start`, `npm run dev`, `npm run check` and `npm run upgrade` do the same.

## Back up your books

Your books are in the `data/` folder, and dbu6 makes no other copy. To back
them up, stop dbu6 and copy the whole `data/` folder.

`user-config/` is beside `data/`, not inside it. It holds your categorization
rules and instructions, and it belongs in git.

## Next

[Do your books from your statements](/docs/first-books/).
