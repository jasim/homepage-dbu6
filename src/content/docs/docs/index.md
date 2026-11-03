---
title: What dbu6 does
description: "What dbu6 can tell you about your money, and how it keeps your books from your bank and card statements with your coding agent."
---

dbu6 is an open-source personal finance app. It runs on your own computer and
keeps your books from the statements your banks and card issuers already give
you. Your coding agent (Claude Code, Codex or Pi) reads the statements, sets
up your accounts and categorizes each transaction. You check its work and add
it to your books.

You don't need to know bookkeeping to use dbu6. If the terms on this site are
new to you, read [Bookkeeping basics](/docs/bookkeeping-basics/) first. It
takes about ten minutes.

## What you can find out

Once your statements are in, dbu6 can answer questions like these:

| Question | Where dbu6 shows it |
| --- | --- |
| How much did I earn, spend and save last month? | **Overview** |
| Is this month's spending higher than usual? | **Overview**, beside each figure's 12-month average |
| Where does my money go? | **Overview** › Spending by category, and **Income & expenses** |
| What am I worth today, and is it growing? | **Overview** › Net worth, **Balance sheet**, *Net Worth Over Time* |
| What did I spend on dining out this year? | **Income & expenses**, or the account's ledger |
| Which statements do I still need to download? | **Update** |

![Overview for September: income, spending and savings beside their averages, spending by category with a sparkline for each, net worth, and each bank and card's balance](/assets/docs/overview.webp)

*Overview, from the sample books used throughout these docs.*

Each spending category and net worth group on Overview links to the entries
behind it, so you can check where a number comes from.

![Income and Expenses for the last 12 months: income and spending by account, a bar chart by month, and the largest spending entries](/assets/docs/income-expenses.webp)

You can also ask your coding agent questions about your money in plain
language, such as "how much did we spend on the kids' activities since
April?", and it can write reports of its own for you
([Reports](/docs/reports/)).

## How it works

1. You download statements for each bank account and credit card, as PDF,
   Excel, CSV or text files.
2. You drop them on dbu6 and press **Add 4 files to my books** (the number is
   how many files you dropped).
3. Your coding agent reads the statements and proposes a plan: the accounts
   it found, a chart of accounts that fits your transactions, and the
   questions it already has. It changes nothing until you say go.
4. After you say go, the agent imports the statements and categorizes the
   transactions. It writes rules for the ones it is sure about and asks you
   once about the rest.
5. You open **Review**, check each account and press **Add to my books**.
   Nothing reaches your books before you do that.

After the first time, you repeat steps 1, 2 and 5 once a month. dbu6 lists
which statements it needs, and the rules from the first run categorize most
new transactions on their own.

[Do your books from your statements](/docs/first-books/) walks through the
first run with screenshots.

## Where your data is

The books are a SQLite database in a folder on your computer. dbu6 has no
cloud service and no account with us. The coding agent runs on your computer
with your own subscription, so your statements go only to the agent you
already use.

dbu6 makes no backups, so back up the `data/` folder yourself
([Install dbu6](/docs/install/#back-up-your-books)).

## Where to start

1. [Bookkeeping basics](/docs/bookkeeping-basics/), if accounts, debits and
   double-entry are new to you.
2. [Install dbu6](/docs/install/). It has a prompt you can paste into your
   coding agent, which then installs dbu6 for you.
3. [Do your books from your statements](/docs/first-books/).
4. [Keep your books up to date](/docs/keeping-up/), once a month.
