---
title: Importing statements
description: "How dbu6 reads bank and card statements: bundled parsers, a coding agent writing one for a new layout, freeform transactions, and balance checks."
---

A statement comes in as a file from your bank and leaves as journal entries in
your books. dbu6 reads it, recognizes its layout and account, checks its
balances, and holds the rows as drafts until you post them.

There are two ways to import:

* **Drop the files on Update** (or on the first screen of new books) and
  press **Add N files to my books**. dbu6 saves the files in
  `tmp/statement-inbox/`, and your coding agent imports all of them in one run
  ([Do your books from your statements](/docs/first-books/)). Use this for
  your first setup and every month after.
* **Import statements, guided** imports one account's statements at a time,
  with the screens below. Use it when you want to import without the agent
  run.

## Parsers

A parser reads one statement layout and turns it into the rows and balances
dbu6 works with. dbu6 ships parsers for the layouts it already knows, all
Indian banks and cards: Standard Chartered bank statements (PDF and CSV) and
credit card statements (PDF), HDFC credit card statements (XLS and CSV) and
bank statements (XLS), and Federal Bank statements (XLS).

A parser of your own goes in your folder's `custom-built-parsers/`, and shadows
a bundled one of the same name. Never edit anything under `node_modules`.

## A statement dbu6 cannot read

dbu6 recognizes a layout by trying each parser against the file. In a run of
**Do my books**, the agent writes a parser for each layout no parser reads,
before it imports anything. On **Import statements, guided**, a layout no
parser reads shows **Set up this format**, with a prompt for your coding
agent:

* Copy the prompt and paste it into your agent, or
* click **Open in Claude Code** (or **Codex**, or **Pi**) to start the agent on
  it in a new terminal window, in your books folder. On Linux the button gives
  you a command to run in a terminal instead.

Either way the agent reads `npx dbu6 docs parser-guide`, which is written so it
can produce an accurate parser in one shot, and every prompt asks it to show
you its steps first and do nothing until you say go. `npx dbu6 docs parsers`
has the conventions a parser follows.

## Transactions that are not a statement

Text copied from a PDF or a web page, HTML, CSV, or a list you typed can go
on Update with your statements, saved as a text file. In the run, the agent
asks you in its plan which account the file belongs to and what its opening
and closing balances are. Without the run, the Import freeform transactions
screen gives you a prompt for your coding agent, which turns the
transactions into a statement, asks you the same questions, and imports
them into Drafts. The guide is `npx dbu6 docs freeform-guide`.

## Balance checks

Before a statement is accepted, dbu6 looks up the last posted entry and balance
for that account and works out where the new statement should start. It then
checks the statement's balances against what the books compute from the
imported rows. A mismatch stops the import.

For bank statements with a running balance, every row is checked. For credit
card statements, which usually have no per-row balance, the opening and closing
balances of the statement are used instead.

Imported rows are held as drafts. In Review you reclassify what needs it, check
for duplicates against earlier imports, confirm the balance checks pass, and
post. After a run, most of that is done, and Review says what is left.
Nothing reaches the books until you post; a draft that turns out to be wrong
can be discarded without touching them.
