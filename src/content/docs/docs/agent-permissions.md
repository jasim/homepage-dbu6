---
title: What your agent does on its own
description: "What your yes to the coding agent's plan covers in a dbu6 run, what it asks you first, what it never does, where your data goes, and how a run picks up again after you stop it."
---

The agent follows a guide that ships with dbu6 (`npx dbu6 docs run`). The
guide says which changes your yes to the plan covers, which ones the agent
asks you about first, and which ones it never makes.

## What your yes to the plan covers

After you say go to Message 1, the agent goes ahead with these without asking
again:

- starting your chart of accounts from dbu6's standard set, if your books
  have none,
- teaching dbu6 to read a statement layout it can't read yet,
- adding the banks and cards in the plan, with the opening balance each one's
  first statement prints, and importing their statements,
- categorizing the imported transactions,
- writing rules for the payees it is sure about,
- deleting a transaction that is an exact copy of the same statement row,
- keeping one copy of a transfer or card bill that appears on two of your
  statements.

All of these change only what waits in Review, apart from the opening
balances of the banks and cards it adds.

## What it asks you in Message 2

- creating an account, for example a new category,
- renaming, merging or dropping a category,
- categorizing any transaction it isn't sure about,
- opening balances for cash, deposits, investments and loans.

## What it asks you about separately

- changing a transaction already in your books,
- deleting a transaction for any reason other than the two above,
- changing an opening balance already in your books,
- a change to dbu6 itself, for example when a statement and dbu6 disagree on
  how to read it.

## What it never does

- change a balance that a statement prints,
- delete transactions to make a balance check pass,
- edit dbu6's own program files, which an upgrade replaces,
- write to the database file directly. The agent changes your books only
  through dbu6, the same way the app does.

## Adding to your books

The agent doesn't add anything from Review to your books unless you ask it
to. By default you add the ready accounts on **Review**. When you ask the
agent instead, it adds the same accounts that Review would.

## Where your data goes

Your books and your statements stay on your computer. The coding agent runs
with your own subscription, so your statements and transactions are sent only
to the AI model your agent already uses.

dbu6 keeps no log of a run, because a log would be another copy of your
financial data. A statement you drop on Update waits in your books folder's
`tmp/` until its transactions are in Review, and the agent deletes it then.
If you tell the agent where your statements are instead, it reads them there
and copies nothing.

## If you stop halfway

A run keeps no state of its own. The state is your books: the banks and cards
set up, the transactions in Review and their categories, and your rules. If
you close the agent, start the run again with the same button or the same
request. The agent reads your books again, says what is already done and
picks up from there, and it doesn't ask again what you already answered.
