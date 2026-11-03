---
title: Importing statements
description: "How dbu6 reads bank and card statements: bundled parsers, a coding agent writing one for a new layout, freeform transactions, and balance checks."
---

A statement comes in as a file from your bank and leaves as journal entries in
your books. dbu6 reads it, recognizes its layout and account, checks its
balances, and holds the rows in Review as drafts until you add them to your
books.

Your coding agent imports statements in a run: you drop the files on
**Update** and press **Add N files to my books**, or tell the agent where the
files are. dbu6 saves dropped files in `tmp/statement-inbox/`, and the agent
imports all of them at once
([Set up your books with your coding agent](/docs/first-books/)). To import
one account's statements at a time yourself, see
[Doing it by hand](/docs/by-hand/#import-statements-one-account-at-a-time).

## Parsers

A parser reads one statement layout and turns it into the rows and balances
dbu6 works with. dbu6 ships parsers for the layouts it already knows, all
Indian banks and cards: Standard Chartered bank statements (PDF and CSV) and
credit card statements (PDF), HDFC credit card statements (XLS and CSV) and
bank statements (XLS), and Federal Bank statements (XLS).

dbu6 recognizes a layout by trying each parser against the file. When no
parser reads a statement, the agent writes one for that layout, with a test,
before it imports anything. It follows `npx dbu6 docs parser-guide`, and
`npx dbu6 docs parsers` has the conventions a parser follows. Later
statements in that layout are read by the new parser, without the agent.

A parser of your own goes in your folder's `custom-built-parsers/`, and
shadows a bundled one of the same name. Never edit anything under
`node_modules`.

## Transactions that are not a statement

Text copied from a PDF or a web page, HTML, CSV, or a list you typed can go
on Update with your statements, saved as a text file. In its plan, the agent
asks which account the file belongs to and what its opening and closing
balances are, and then imports the transactions as it does a statement. The
guide it follows is `npx dbu6 docs freeform-guide`.

## Balance checks

Before a statement is accepted, dbu6 looks up the last posted entry and balance
for that account and works out where the new statement should start. It then
checks the statement's balances against what the books compute from the
imported rows. A mismatch stops the import.

For bank statements with a running balance, every row is checked. For credit
card statements, which usually have no per-row balance, the opening and closing
balances of the statement are used instead.

Imported rows are held as drafts in Review. In a run, the agent categorizes
them, removes duplicates and settles failing balance checks, and its report
says what is left. Nothing reaches the books until you add the drafts, so a
draft that turns out to be wrong can be removed without touching your books.
