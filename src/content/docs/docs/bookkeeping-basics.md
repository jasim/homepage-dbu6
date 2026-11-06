---
title: Bookkeeping basics
description: "The bookkeeping terms dbu6 uses, for people new to personal finance: accounts and their five types, double-entry, the chart of accounts, drafts, balance checks and opening balances."
---

dbu6 keeps your books with double-entry bookkeeping, the method businesses
use. Your coding agent handles most of the mechanics, and this page explains
the terms you will see in dbu6 so you can read the reports and answer the
agent's questions.

## Accounts

An **account** is a named place where money is counted. For example, your
savings account at a bank, your credit card, spending categories such as
Groceries or Rent, and income sources such as Salary are all accounts.

Every account has one of five **types**:

| Type | What it counts | Examples |
| --- | --- | --- |
| Asset | What you own | Bank accounts, cash, investments, money someone owes you |
| Liability | What you owe | Credit cards, a car loan, a home loan |
| Income | Money that comes in | Salary, interest, dividends |
| Expense | Money that goes out and is gone | Groceries, rent, fuel, school fees |
| Equity | Where your books start | Opening Balances |

Your **net worth** is your assets minus your liabilities.

## The chart of accounts

The **chart of accounts** is the list of all your accounts, arranged in a
tree. For example, Expenses holds Food, and Food holds Groceries and Dining
Out. Reports add up each branch, so Overview can show Food as one line and
open it to show Groceries and Dining Out.

Each account name is unique in your books, so you can refer to an account by
its name alone, for example "Groceries" rather than "Expenses > Food >
Groceries".

You don't need to design a chart of accounts yourself, because when you start
with your statements, your coding agent starts you on a standard chart and
fits it to the transactions it finds. To change it later, tell your agent, for
example "move Rent under Housing", or press **Reorganize my chart** on the
**Accounts** page.

## Double-entry

Every transaction moves money from one account to another, so it is recorded
in two places at once as a **journal entry**. The amounts on the two sides are
always equal, which keeps the books balanced.

Here are three transactions from a typical month:

| What happened | Money comes from | Money goes to |
| --- | --- | --- |
| Your salary of 5,000 is paid into your bank | Salary (Income) | Bank account (Asset) |
| You buy groceries for 120 with your credit card | Credit card (Liability) | Groceries (Expense) |
| You pay the card bill of 950 from your bank | Bank account (Asset) | Credit card (Liability) |

The third transaction is a **transfer** between two of your own accounts.
Because each entry has two sides, a card payment or a transfer between your
own accounts is never counted as spending. For example, the groceries were
already counted when you bought them, so paying the bill only lowers what you
owe on the card.

Accountants call the two sides **debit** and **credit**, while dbu6's screens
mostly show **Withdrawal** and **Deposit**, as your bank statement does.

## Statements, drafts and posting

When dbu6 imports a statement, each row becomes a **draft**, which is a
transaction that is not in your books yet. A draft has the account it came
from (the bank or card) and the account the agent or a rule assigned to the
other side (for example Groceries), and you can change any draft.

**Posting** a draft adds it to your books, and only posted entries count in
your reports. In dbu6 you post on the **Review** page by pressing **Add to my
books**, or by asking your coding agent to add them.

**Categorization** means choosing the other account for each draft. dbu6 uses
your rules first (for example "anything containing DMART goes to
Groceries"), and then uses your coding agent for the rest. See
[Categorization](/docs/categorization/).

## Balance checks

Your bank statement prints a balance after each transaction, or at least at
the start and end of the statement, and dbu6 compares each of those balances
with the balance your books add up to on that day. This comparison is called
**reconciliation**, and dbu6 shows it on Review as **balance checks**.

When every balance check passes, the transactions in your books match the
bank's exactly. If a check fails, it usually means a duplicate, a missing
statement or a transfer counted twice, and Review shows which day it starts
on.

## Opening balances

Your books start on a particular day, usually the day before your earliest
statement. An **opening balance** is what an account held on that day, and
dbu6 records it against the Opening Balances account (Equity).

dbu6 reads the opening balance of a bank account or card from its first
statement. Because cash, fixed deposits, investments and loans usually have no
statement, your coding agent asks you for their balances once
([Things to ask your agent](/docs/ask-your-agent/#record-cash-deposits-investments-and-loans)).

## Next

[Set up your books with your coding agent](/docs/first-books/), once you have
[installed dbu6](/docs/install/).
