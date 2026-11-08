---
title: Introduction to dbu6
description: "What dbu6 shows about your money, and how it keeps your books from your bank and card statements with your coding agent."
---

dbu6 is an open-source personal finance app that runs on your own computer
and keeps your books from the statements your banks and card issuers already
give you. Your coding agent (Claude Code, Codex or Pi) reads the statements,
sets up your accounts and categorizes each transaction, and then you check its
work and add it to your books.

You don't need to know bookkeeping to use dbu6. However, if the terms on this
site are new to you, read [Bookkeeping basics](/docs/bookkeeping-basics/)
first, which takes about ten minutes.

## Your reports

Reports such as **Overview**, *Net Worth Over Time* and *Income and Expenses*
help you answer questions like these:

- How much did I earn, spend and save last month?
- Is this month's spending higher than usual?
- Where does my money go?
- What am I worth today, and is it growing?
- What did I spend on dining out this year?

![Overview for September: income, spending and savings beside their averages, spending by category with a sparkline for each, net worth, and each bank and card's balance](/assets/docs/overview.webp)

*Overview, from the sample books used throughout these docs.*

Each spending category and net worth group on **Overview** links to the
entries behind it, so you can check where a number comes from.

![Income and Expenses for the last 12 months: income and spending by account, a bar chart by month, and the largest spending entries](/assets/docs/income-expenses.webp)

You can also ask your coding agent questions about your money in plain
language, such as "how much did we spend on the kids' activities since
April?", and the agent can write new reports or reorganize your categories
for you (see [Things to ask your agent](/docs/ask-your-agent/)).

## The agent run

During a run from your statements, your coding agent does the bookkeeping and
you answer its questions:

1. You download statements for each bank account and credit card as PDF,
   Excel, CSV or text files.
2. You drop the files on dbu6 to give them to your coding agent.
3. The agent reads the statements and replies with a plan that lists the
   accounts it found, what it will do and anything it needs from you before
   it can import.
4. After you say go, the agent teaches dbu6 to read new statement layouts,
   imports every transaction, categorizes them and checks every balance
   against the statements.
5. When the import finishes, the agent shows you what your statements say
   about your money and asks you about everything it couldn't settle. After
   you reply, it turns your answers into rules so it doesn't ask about the
   same payees again.
6. Finally, you add the ready accounts to your books on **Review**.

After the first time, you repeat the run once a month with the new
statements. Each month, **Update** lists which statements you still need to
download, and your rules from earlier answers categorize most new
transactions, so the agent has fewer questions.

For a full walkthrough, [Set up your books with your coding
agent](/docs/first-books/) follows a first run, message by message. Every
screen in dbu6 also has a link for doing each step yourself, one at a time,
and [Doing it by hand](/docs/by-hand/) describes those screens.

## Your data

The books are a SQLite database in a folder on your computer, and dbu6 has no
cloud service and no account with us. Also, the coding agent runs on your
computer with your own subscription, so your statements go only to the agent
you already use.

To back up your books, copy the `data/` folder (see
[Back up your data](/docs/backups/)).

## Next

1. [Bookkeeping basics](/docs/bookkeeping-basics/), if accounts, debits and
   double-entry are new to you.
2. [Install dbu6](/docs/install/), which has a prompt you can paste into your
   coding agent so the agent installs dbu6 for you.
3. [Set up your books with your coding agent](/docs/first-books/).
4. [Keep your books up to date](/docs/keeping-up/), once a month.
