---
title: Keep your books up to date
description: "The monthly routine in dbu6: download the statements Update lists, drop them on Update for your coding agent to import and categorize, add each account on Review, and read Overview."
---

Once your books are set up, keeping them current takes a few minutes a month.
You download the new statements, drop them on **Update**, and add the result
on **Review**.

## Download the statements Update lists

**Update** lists each bank and card under **Download these statements**:

| Column | What it means |
| --- | --- |
| Download from | The month the next statement should start in |
| Imported until | The last day the account's statements cover, posted or in drafts |

![Update your books: a card saying draft entries are waiting, the Download these statements list, and the drop area](/assets/docs/update-demo.webp)

For example, an account imported until 30 September asks for October, and an
account imported until 13 October also asks for October, because its October
statement is not complete yet. Download each account's statements from that
month to today.

## Drop them on Update

Drop the files on **Drop them here**, and press **Add N files to my books**.
This starts the same run as the first time
([Do your books from your statements](/docs/first-books/)), but there is
less to do:

- The accounts are already set up, so the agent imports the new statements
  into them.
- Your rules, including the ones from earlier answers, categorize most of the
  new transactions, and the coding agent categorizes most of the rest.
- The agent asks only about new payees and transactions it can't settle.

If you add a new bank or card, drop its statements with the others. The agent
sets it up as it did the first ones.

**Import statements, guided** is the step-by-step import, one account at a
time, for when you want to import without the agent run.

## Review and add

**Update** shows how many accounts have drafts waiting, and **Review drafts**
opens Review. Each account has three checks, and **Add to my books** posts its
drafts once they pass:

| Check | When it fails |
| --- | --- |
| Every transaction goes to an account | **See them in Drafts** opens the drafts with no account |
| No possible duplicates | **See the duplicates** lists drafts that may repeat an entry already in your books |
| Your books agree with the bank | **See the balance checks** shows the first day the balances differ |

![Standard Chartered on Review, not ready to add yet: 3 transactions need an account, 2 possible duplicates and 22 balance checks failing from 3 October](/assets/docs/review-stanc-before.webp)

Each tab on Review also has a button that hands that problem to your coding
agent, with the prompt for it. The screenshot above is from before the run's
clean-up, when the transfer from Standard Chartered to Federal Bank was still
on both statements. Settling the transfer fixed the duplicates and the balance
checks together.

To fix a draft yourself, open **Drafts** and choose the account. A change you
make there applies to that one draft only. To categorize the same payee the
same way every time, add a rule ([Categorization](/docs/categorization/)), or
ask your coding agent to add one.

## Read Overview

**Overview** opens on the current month. The month picker at the top, or the
`[` and `]` keys, step to other months.

- **Income, Spent, Saved and Saved %** for the month, each with a sparkline
  of the months before it.
- **Spending by category**, the month's largest categories with Other and the
  total. Each category opens its month-by-month chart or its entries.
- **Net worth** on the last day of the month, by group of assets and
  liabilities.
- **Accounts**, each bank and card's balance, and the last day its books are
  complete (**Books until**).

A month is complete only when every account's statements cover it. Early in a
month, the current month shows little, so step back to the last complete
month.

**Income & expenses**, **Balance sheet** and **All reports** have more
detail ([Reports](/docs/reports/)).
