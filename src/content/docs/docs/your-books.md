---
title: Your books
description: "What a dbu6 books folder contains, how accounts and journal entries are stored, what you can configure, and how to upgrade and work with a coding agent."
---

A books folder from the inside: what `dbu6 init` wrote, how the books are kept,
and what is yours to change.

## The folder

```
my-books/
  package.json            one dependency: @dbu6/app, pinned to an exact version
  package-lock.json       what that installed
  tsconfig.json           so your reports typecheck under `dbu6 check`
  AGENTS.md               how a coding agent works in this folder
  Dockerfile              the folder as a container, when you want one
  .dockerignore
  sapporta.json           the project's name
  .env.development.example  the defaults `dbu6 setup` copies to .env.development
  .env.development        ports, mail, the auth secret; gitignored
  .env.agent              the agent's token; gitignored, written by `dbu6 agent env` or the app
  tmp/                    statements you dropped, until they are imported; gitignored
  user-config/            mapping rules and categorization prompts
  data/sqlite.db          the books; gitignored
  data/previous-versions/ the books as they were before each database migration; gitignored
```

You can also add two directories and two files to the folder:
`custom-built-parsers/` for your own parsers
([Importing statements](/docs/statements/)), `reports/` for your own reports
([Reports](/docs/reports/)), `dbu6.config.ts` for your own categorizer and
server routes that are not reports, and `frontend.tsx` for your own pages and
navigation entries (`npx dbu6 docs customizing`).

The program itself is the `@dbu6/app` package in `node_modules`, while the
books folder is yours. Nothing in the folder refers to dbu6's code until you
add a report or a `frontend.tsx`. Never edit anything under
`node_modules/@dbu6/app`, because an install or an upgrade replaces it.

## Accounts and journal entries

Every transaction is a journal entry between two accounts, for example
`HDFC Bank` and `Groceries`. Accounts are named in plain words and nest under
one another. For example, `Assets` holds `Bank`, which holds `HDFC Bank`, and
`Expenses` holds `Food`, which holds `Dining Out`. Each name is unique in your
books, so mapping rules refer to an account by its name alone.

dbu6 follows the GAAP approach, so it includes standard accounting reports like
trial balance, balance sheet and account ledger, alongside reports tuned for
personal finance such as net worth over time and monthly cashflow.

## Configuration

Everything specific to you is kept in the folder. `data/` is gitignored
([Back up your data](/docs/backups/) describes how to copy it), and the rest is
worth committing:

```
user-config/
  transaction_mappings.mjs     narration → account rules, applied before the LLM
  custom_mappings_*.prompt     your categorization instructions for the LLM
```

`init` fills `user-config/` from dbu6's examples, and `npx dbu6 setup` does the
same for any file that is missing, but it never overwrites a file you have
edited. Both kinds of file are explained in
[Categorization](/docs/categorization/).

The import presets (which parser reads each bank's statements, and which
prompts each account uses) are kept in the database rather than in a file, and
your coding agent changes them through the API (`npx dbu6 docs books`).

## Upgrading

`npx dbu6 upgrade` updates the package to a newer version, migrates the
database on a verified copy, stores the old database in
`data/previous-versions/`, and then runs `npx dbu6 check`. `dbu6 start` and
`dbu6 migrate` also migrate the database when a migration is pending, while
nothing else does, and no other tool may change the database's schema.

`npx dbu6 check` reports everything an upgrade can break: the tools it needs,
pending migrations, your reports' types and tests, your parsers' tests, and
`user-config/`. Fix what it reports.

## Working with a coding agent

dbu6 is a [Sapporta](https://sapporta.com) application, and a coding agent
works in this folder through `AGENTS.md` and the guides included in the
installed package. The skill is installed once:

```sh
npx skills add https://github.com/jasim/sapporta-skills --skill sapporta --global --yes
```

The `sapporta` command that the agent uses for your books comes with dbu6, so
there is nothing else to install. Because the command needs a token, the app
mints one whenever it passes a prompt to your coding agent and the folder has
no working token. You can also mint a token for the folder and check it with
these commands:

```sh
npx dbu6 agent env
npx sapporta api get /api/auth-context
```

The first command writes `.env.agent` (a gitignored credential with one token
per folder), and the second command shows which user and workspace the token
acts as. An agent given a prompt runs the first command itself when it has to.

Most of the work is one run: when you give the agent your statements, it
imports and categorizes them, asks what it can't settle in one round, and stops
with each account ready for you to add on Review
([Set up your books with your coding agent](/docs/first-books/)). The agent
also does the other jobs in your books, either from the app's buttons or from a
request in your own words
([Things to ask your agent](/docs/ask-your-agent/)).
`npx dbu6 docs` lists the guides that the agent follows.
