---
title: Set up dbu6
description: "Install dbu6 on macOS or Linux, create a books folder, set up your accounts, connect a coding agent, or test-drive with sample data."
---

This guide walks you through setting up a working set of books from scratch.

`dbu6` keeps your books in a self-contained folder on your machine. The `dbu6` application installs directly into that folder's `node_modules` directory, so you never have to clone a repository or build anything from source.

## Prerequisites

Before you begin, make sure your system has the required tools installed.

### Required

- **Node.js 22.18 or later** (includes `npm`) — Runs the core `dbu6` application.

### Required for importing statements

If you plan to import bank or card statements (rather than entering every transaction by hand), you also need:

- **`uv`** — Runs the statement parsers (which are written in Python).
- **`pdftotext`** — Extracts text from PDF statements (included with `poppler`).

### Optional

- **`git`** — If installed, `dbu6` automatically initializes a repository and creates your first commit.
- **A coding agent** (Claude Code, Codex, or Pi) — Automatically categorizes transactions, proposes a chart of accounts, and writes parsers for new statement formats. If you don't use an agent, imports still work, and transactions are categorized using your manual mapping rules. You can view or switch your active agent at any time in **Settings**.

### Installing dependencies

Run the appropriate commands for your operating system:

```sh
# macOS (via Homebrew)
brew install node uv poppler

# Debian and Ubuntu
sudo apt install poppler-utils
curl -LsSf https://astral.sh/uv/install.sh | sh
# For Node.js 22.18+, install via https://nodejs.org/en/download, nvm, or NodeSource.
# (Default apt packages for nodejs are usually too old.)
```

:::tip
You don't need the statement tools just to create your folder or keep books manually. Once you create a folder, you can run `npx dbu6 check` at any time to see which optional or statement tools are missing.
:::

## 1. Create your books folder

Run `npm init @dbu6` to create a new folder and set up your project:

```sh
npm init @dbu6 my-books
cd my-books
```

The target folder must either not exist yet or be completely empty.

### What happens behind the scenes?

`npm init @dbu6` is shorthand for running the `@dbu6/create` package, which executes `dbu6 init` from the latest `@dbu6/app` release. (To pin a specific version, run `npm init @dbu6@1.2.3` instead.)

The initializer stays strictly inside your new folder and performs the following setup:

1. Writes the base project files and installs `@dbu6/app` into `node_modules`.
2. Creates `.env.development` (which holds the configuration and generated auth secret used by every `dbu6` command).
3. Populates `user-config/` with starter templates.
4. Creates the local SQLite database and, if `git` is installed, makes an initial Git commit.

For a full breakdown of the folder structure, see [Your books](/docs/your-books/).

## 2. Start the local server

Start the development server from inside your new folder:

```sh
npx dbu6 dev
```

This command runs database migrations, starts the web server, and prints the local URL (by default, <http://localhost:2345>).

1. Open <http://localhost:2345> in your browser and sign up for an account.
2. Keep the terminal running while you use `dbu6`. Press **Ctrl+C** when you want to stop the server.

:::note
By default, new accounts don't require email verification. Any emails `dbu6` generates are printed directly to your terminal output. When you want to run the server without live-reloading, use `npx dbu6 start` instead.
:::

## 3. Set up your books

Until you post your first transaction, `dbu6` guides you through the initial setup step by step:

1. **Choose a chart of accounts.** Start with the built-in template, or describe your finances in a single sentence (for example: *"Salaried in Bengaluru, paying rent, two kids in school, a car loan, and some freelance income"*). If you have a coding agent connected, it will propose a tailored chart of accounts. Nothing is saved until you approve it.
2. **Add a bank or card.** Create your first institution from the setup prompt (or add more later via **Update** → **+ Add**, or **Settings** → **Banks and cards**). Give the institution a name and link it to the corresponding account in your chart of accounts.
3. **Import a recent statement.** Download a PDF, CSV, or XLS statement from your bank and drop it into **Import statements**. `dbu6` detects the layout, extracts the starting balance, and previews the rows it found. This first import establishes the starting date for your books.
4. **Add opening balances (optional).** Enter the starting balances for your cash, investments, and loans as of your books' start date so your balance sheet is accurate from day one.
5. **Review and post your transactions.** The **Update** page alerts you whenever draft transactions are waiting. Open **Review** to adjust categories, check for duplicates against earlier imports, verify balance checks, and post. **Nothing affects your books until you post it.**

### Navigating the app

Once you post your first transactions, `dbu6` opens to the **Overview** dashboard. Here you can compare your monthly income, spending, and savings against your typical averages, see your largest spending categories, track your net worth over the last 12 months, and see each bank or card's balance along with the date its books are complete until.

To prevent unimported statements from skewing your numbers, **Overview** defaults to the most recent month where *all* of your accounts have complete data.

Use the **Update** tab for your routine bookkeeping. It shows each account, the date of its last import, and any pending drafts, with one-click shortcuts to **Import** and **Review**.

For deeper dives into steps 3 and 5, read [Importing statements](/docs/statements/) and [Categorization](/docs/categorization/).

## Try it with sample data

Want to explore `dbu6` before importing your own bank statements? While `npx dbu6 dev` is running, open a second terminal in your project folder and run:

```sh
npx dbu6 seed
```

This populates a demo account with a full year of sample personal finances. Past months are already posted, and the current month is staged as drafts so you can test the review workflow.

* **Email:** `demo@example.com`
* **Password:** `demo-password`

Running `npx dbu6 seed` again resets and replaces the demo account's data.

## Everyday commands

Run these commands from your project folder:

| Command | Description |
| --- | --- |
| `npx dbu6 dev` | Starts the server with live-reload (best during initial setup or parser creation). |
| `npx dbu6 start` | Starts the server without live-reload (best for daily use or after a reboot). |
| `npx dbu6 upgrade` | Upgrades `dbu6` to the latest version, runs database migrations, and verifies your setup. |
| `npx dbu6 check` | Checks your environment and reports any missing dependencies or upgrade issues. |
| `npx dbu6 docs` | Lists the documentation guides bundled with your installed version. |

`npm run dev`, `npm start`, `npm run check`, and `npm run upgrade` do the same as their `npx dbu6` counterparts.

## Connect a coding agent

`dbu6` can delegate tasks to a coding agent—such as categorizing unfamiliar transactions, designing a chart of accounts, or writing a Python parser for an unsupported bank statement.

Two components allow your agent to talk to `dbu6`:

### 1. The Sapporta skill (install once per machine)

`dbu6` is built on [Sapporta](https://sapporta.com). Installing the Sapporta skill teaches your local coding agents how to interact with Sapporta-based apps:

```sh
npx skills add https://github.com/jasim/sapporta-skills --skill sapporta --global --yes
```

### 2. The Sapporta CLI (included with `dbu6`)

The agent reads and updates your books through `dbu6`'s HTTP API using the Sapporta CLI (`npx sapporta …`), which is already installed in your project folder. It finds the app's address and the agent's token on its own.

After you create your user account in the browser, generate an access token for your agent and verify it:

```sh
npx dbu6 agent env
npx sapporta api get /api/auth-context
```

* **`npx dbu6 agent env`** accesses the database directly (no running server required), generates an API token for your user account, revokes any previously generated token, and saves the new one to `.env.agent`. (This file is gitignored—never commit it.) If your project has multiple users, specify which one to use with `--user you@example.com`.
* **`npx sapporta api get /api/auth-context`** requires the server to be running. It tests the token and prints the authenticated user and workspace.

:::note
When `dbu6` hands a prompt to an agent, the agent runs these setup commands automatically. We show them here so you can manually test and verify the agent's access beforehand. Once connected, the agent follows the instructions in [DBU6-BOOKS.md](https://github.com/jasim/dbu6/blob/main/DBU6-BOOKS.md).
:::

## Back up your books

:::caution
Your entire database lives in the `data/` folder. `dbu6` does not make automatic backups or keep cloud copies.
:::

To back up your books:

1. Stop the `dbu6` server.
2. Copy the entire `data/` directory to your backup location.

Your custom mapping rules and categorization instructions live alongside `data/` in the `user-config/` folder. Because `user-config/` contains plain-text configuration rather than financial records, you should commit and track it with Git.

## Next steps

* **[Your books](/docs/your-books/)** — Learn how the project folder, accounts, and journal entries are structured.
* **[Importing statements](/docs/statements/)** — Understand how parsers work and how to handle unsupported statement formats.
* **[Categorization](/docs/categorization/)** — Set up deterministic mapping rules and customize LLM instructions.
* **[Reports](/docs/reports/)** — Explore built-in financial reports and learn how to build your own.
* **[DBU6-BOOKS.md](https://github.com/jasim/dbu6/blob/main/DBU6-BOOKS.md)** — Read the reference manual that coding agents use to perform common accounting tasks via the API.
* **[DEPLOYMENT.md](https://github.com/jasim/dbu6/blob/main/DEPLOYMENT.md)** — Host your books on a remote server.
