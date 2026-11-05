---
title: Reports
description: "The reports that ship with dbu6, how to write your own reports with a coding agent, and how to export your books to hledger."
---

The Reports page groups the reports that ship with dbu6 by the questions they
answer, and lists any reports of your own under "Your reports".

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
  the ledger, or the drafts, differ from a statement's balances.
* *Last Reconciled Balances* — the last statement posted for each account, and
  which statements to import next.
* *Duplicate Drafts* — drafts that may repeat an entry already in the books.

For a one-off question, such as "what did we spend on travel this year?", you
can ask your coding agent, which reads your books and answers in the terminal
(see [Things to ask your agent](/docs/ask-your-agent/#ask-about-your-money)).

## Reports of your own

If you want to see something regularly, you can ask your coding agent for a
report of it in your own words in the terminal, or click **Create a report** on
the Reports page. When building a report, the agent follows
`npx dbu6 docs reports`, which includes one complete worked report.

A report is code in `reports/<id>/`, written the same way as dbu6's own
reports, with a route that computes the report and a React screen that shows
it, so you have full control of the screen. Because the code is in
`reports/<id>/`, dbu6 finds the folder, lists the report under "Your reports",
and typechecks and tests it when you run `npx dbu6 check`.

If you want to add pages and routes that are not reports, put them in
`frontend.tsx` and `dbu6.config.ts` (see `npx dbu6 docs customizing`).

## hledger export

You can render posted journals as an [hledger](https://hledger.org) journal
file from the journals table, and **All tools → Render draft hledger** previews
drafts the same way. Each account is written as its path through the account
tree, such as `Expenses:Food:Dining Out`, so you can drop the export into an
existing hledger setup.
