---
title: Reports
description: "The reports dbu6 ships, writing reports of your own with a coding agent, and exporting your books to hledger."
---

The Reports page groups what dbu6 ships by what it answers, and lists any
reports of your own under "Your reports".

## Built-in reports

**Income and spending**

* *Income and Expenses* — what you spent against income, by month.
* *Expense Breakdown* — spending by expense account, largest first.
* *Accounts by Month* — any group of accounts, month by month.
* *Monthly Summary* — income, expenses and savings rate for each month.
* *Income Statement* — income and expense totals per account, with net income.

**Balances**

* *Balance Sheet* — what you own, what you owe, and your net worth.
* *Net Worth Over Time* — assets, liabilities and net worth, month by month.
* *Trial Balance* — every account and its balance.

**Ledgers**

* *Account Ledger* — the complete statement of one account.
* *Day Book* — every journal and its lines, day by day.
* *Asset Inflows* — money that came in from outside your accounts.

**Checks**

* *Reconciliation Differences* and *Draft Reconciliation Differences* — where
  the ledger, or the drafts, disagree with a statement's balances.
* *Last Reconciled Balances* — the last statement posted for each account, and
  which statements to import next.
* *Duplicate Drafts* — drafts that may repeat an entry already in the books.

For a one-off question, such as "what did we spend on travel this year?",
ask your coding agent. It reads your books and answers in the terminal
([Things to ask your agent](/docs/ask-your-agent/#ask-about-your-money)).

## Reports of your own

If you want to see something regularly, ask your coding agent for a report of
it, in your own words in the terminal, or with **Create a report** on the
Reports page. The agent follows `npx dbu6 docs reports`, which has one
complete worked report.

A report is code in `reports/<id>/`, written the way dbu6's own reports are: a
route that computes it and a React screen that shows it, with full control of
the screen. dbu6 finds the folder, lists the report under "Your reports", and
typechecks and tests it under `npx dbu6 check`.

Pages and routes that are not reports go in `frontend.tsx` and
`dbu6.config.ts` (`npx dbu6 docs customizing`).

## hledger export

Posted journals can be rendered as an [hledger](https://hledger.org) journal
file from the journals table, and **All tools → Render draft hledger** previews
drafts the same way. Each account is written as its path through the account
tree, such as `Expenses:Food:Dining Out`, so the export drops into an existing
hledger setup.
