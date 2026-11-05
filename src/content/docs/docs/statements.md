---
title: Importing statements
description: "How dbu6 reads bank and card statements with bundled or agent-written parsers, imports freeform transactions, and checks balances."
---

dbu6 reads a statement file from your bank, recognizes its layout and account,
checks its balances, and holds the rows in Review as drafts until you add them
to your books as journal entries.

Your coding agent imports statements in a run when you drop the files on
**Update** and press **Add N files to my books**, or when you tell the agent
where the files are. dbu6 saves dropped files in `tmp/statement-inbox/`, and
the agent imports all of them at once
([Set up your books with your coding agent](/docs/first-books/)). To import
one account's statements at a time yourself, see
[Doing it by hand](/docs/by-hand/#import-statements-one-account-at-a-time).

## Parsers

A parser reads one statement layout and turns it into the rows and balances
that dbu6 works with. All of dbu6's bundled parsers are for Indian banks and
cards: Standard Chartered bank statements (PDF and CSV) and credit card
statements (PDF), HDFC credit card statements (XLS and CSV) and bank statements
(XLS), and Federal Bank statements (XLS).

dbu6 recognizes a layout by trying each parser against the file. When no
parser can read a statement, the agent writes a new parser for that layout,
with a test, before it imports anything, following the guide in
`npx dbu6 docs parser-guide` and the parser conventions in
`npx dbu6 docs parsers`. The new parser then reads later statements in that
layout without the agent.

Your own parsers go in your folder's `custom-built-parsers/` directory and
shadow any bundled parser of the same name, so never edit anything under
`node_modules`.

## Transactions that are not a statement

You can also save text copied from a PDF or a web page, HTML, CSV, or a list
you typed as a text file and put it on Update with your statements. In its
plan, the agent asks which account the file belongs to and what its opening
and closing balances are, and then imports the transactions as it does a
statement by following `npx dbu6 docs freeform-guide`.

## Balance checks

Before accepting a statement, dbu6 looks up the last posted entry and balance
for that account to work out where the new statement should start. It then
checks the statement's balances against what the books compute from the
imported rows, and stops the import if they do not match.

For bank statements with a running balance, dbu6 checks every row. Because
credit card statements usually have no per-row balance, dbu6 uses the opening
and closing balances of the statement instead.

Because dbu6 holds imported rows in Review as drafts, the agent can categorize
them during a run, remove duplicates, settle failing balance checks, and report
what is left. Nothing reaches the books until you add the drafts, so you can
remove a draft that turns out to be wrong without touching your books.
