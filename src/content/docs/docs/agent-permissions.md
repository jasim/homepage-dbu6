---
title: Agent permissions
description: "What the coding agent can change after you approve its plan in a dbu6 run, what it asks you about first, what it never does, where your data goes, and how it resumes a run after you stop it."
---

During a run, the agent follows a guide that ships with dbu6 (`npx dbu6 docs run`),
which specifies what the agent can change once you approve the plan, what it
must ask you about first, and what it never changes.

## Covered by your yes to the plan

After you say go to Message 1, the agent goes ahead with these changes without
asking again:

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

All of these change only what is waiting in Review, apart from the opening
balances of the banks and cards that the agent adds.

## Asked in Message 2

In Message 2, the agent asks before it makes any of these changes:

- creating an account, for example a new category,
- renaming, merging or dropping a category,
- categorizing any transaction it isn't sure about,
- setting opening balances for cash, deposits, investments and loans.

## Asked separately

- changing a transaction already in your books,
- deleting a transaction for any reason other than the two above,
- changing an opening balance already in your books,
- a change to dbu6 itself, for example when a statement and dbu6 disagree on
  how to read it.

## Never done

The agent never does any of the following:

- change a balance that a statement prints,
- delete transactions so that a balance check passes,
- edit dbu6's own program files, which an upgrade replaces,
- write to the database file directly. The agent changes your books only
  through dbu6, the same way the app does.

## Adding to your books

The agent doesn't add anything from Review to your books unless you ask it
to. By default, you add the ready accounts on **Review**. When you ask the
agent instead, it adds the same accounts that Review would.

## Your data

Your books and your statements stay on your computer, and because the coding
agent runs with your own subscription, your statements and transactions are
sent only to the AI model your agent already uses.

Also, dbu6 keeps no log of a run, because a log would be another copy of your
financial data. A statement you drop on Update stays in your books folder's
`tmp/` until its transactions are in Review, and then the agent deletes it.
If you tell the agent where your statements are instead, it reads them there
and copies nothing.

## Stopping halfway

A run keeps no separate state, because the state is your books: the banks and
cards set up, the transactions in Review and their categories, and your rules.
If you close the agent, you can start the run again with the same button or the
same request. The agent then reads your books again, says what is already done,
and picks up from there without asking again about what you already answered.
