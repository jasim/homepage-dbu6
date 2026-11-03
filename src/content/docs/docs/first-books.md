---
title: Do your books from your statements
description: "Set up your books by dropping every bank and card statement on dbu6: your coding agent proposes a chart of accounts, imports and categorizes the statements, asks you once about what it can't settle, and you add each account on Review."
---

The quickest way to start is to give dbu6 all your bank and card statements at
once. Your coding agent then works out which statement belongs to which
account, proposes a chart of accounts that fits your transactions, imports
everything as drafts and categorizes it. It asks you only about what it can't
work out, and you add the result to your books yourself.

This page follows one run on sample statements: two bank accounts and two
credit cards, with one month of statements each. The screenshots are from
that run. The plan, questions and report are examples in the format the run
guide asks for, so your agent's wording and numbers will differ.

:::note
**Do my books** is new and is not in a published release yet. Install dbu6
0.6.0 or later when it is out, or run `npx dbu6 upgrade` in a books folder
you already have. A books folder made before this release needs one line in
its `AGENTS.md`: "When the person asks you to do their books, or points you
at their statements, follow `npx dbu6 docs run`."
:::

## Before you start

- dbu6 is installed and running, and you have signed up
  ([Install dbu6](/docs/install/)).
- A coding agent is set up. **Settings** › **Coding agent** shows a green
  tick beside its name.

## Download your statements

Download statements for every bank account and credit card you want in your
books, from your bank's website or app.

- **Formats:** PDF, Excel (XLS or XLSX), CSV or text. Choose the format your
  bank offers that lists every transaction. Text copied from a web page or an
  app works too.
- **Period:** any period, in any order. Your books start on the day before
  your earliest statement, so download back as far as you want reports to
  go. A few months is enough to start, and you can add earlier statements
  later.
- **Gaps:** for each account, download every statement between its first and
  its last. The agent reports a missing month, and imports the account up to
  the gap.

dbu6 reads the statements of some banks already. For any other bank, the
agent writes a parser (a small program that reads one statement layout) the
first time it sees that layout.

## Drop them on dbu6

New books open on **Let's set up your books**. Drop all your statement files
on it, or press **Choose files**.

![Let's set up your books, with a large drop area for statement files and a Set up by hand link](/assets/docs/first-run.webp)

The files are listed under **Files to add**. You can drop more files, and a
file you drop twice is added once. **Remove** takes a file off the list.
dbu6 only saves the files at this point, and has read nothing.

![Four statement files listed under Files to add, each with its size and a Remove button, and the Add 4 files to my books button](/assets/docs/first-run-files.webp)

## Start the run

Press **Add 4 files to my books**. What happens next depends on your computer:

- **On macOS**, dbu6 opens your coding agent in a new terminal window, in your
  books folder, with the prompt already given.
- **On Linux**, dbu6 shows a command. Run it in a terminal to start the agent.
- **Without a coding agent**, dbu6 copies the prompt to the clipboard. Open
  your agent in your books folder and paste it.

The arrow beside the button has the other ways: **Copy prompt** and **View
prompt**.

![The menu beside the Add files to my books button on Linux, with Command for Claude Code, Copy prompt and View prompt](/assets/docs/agent-menu.webp)

The prompt is short, because the steps are in a guide that ships with dbu6
(`npx dbu6 docs run`):

```text
Outcome: Turn the statements waiting in the statement inbox into books ready
for me to add, asking me only what you can't settle.

Statements: 4 files in the inbox.

Follow `npx dbu6 docs run`.

Your first reply is the survey and plan the guide describes: read the
statements and the books, change nothing, and wait until I say go.
```

You can also start a run without the app. Open your agent in the books folder
and tell it where the statements are, for example "Do my books from the
statements in ~/Downloads/statements". The agent reads the files where they
are.

## Read the plan, then say go

The agent's first reply is a plan, and it changes nothing until you say go.
The plan has a row for each account it found in the files:

```text
Account              Files  From        To          State   Needs
Standard Chartered     1    2026-10-01  2026-10-30  new     -
Federal Bank           1    2026-10-01  2026-10-10  new     -
HDFC Millennia         1    2026-10-03  2026-10-31  new     -
StanC Super Value      1    2026-10-02  2026-10-20  new     -
```

Under the table are:

- **The chart of accounts**, if your books have none yet. The agent starts
  from dbu6's starter chart and changes it to fit what your statements show,
  for example adding Food Delivery or House Help, or dropping accounts you
  will never use. It shows the chart as an indented tree.
- **The questions it already has**, numbered. For example, the bank's name
  when a statement doesn't print it, the opening balance of a card whose
  statement prints none, or which account a text file belongs to.

Answer the questions and reply "go", or ask for changes first, for example
"put Rent under Housing" or "I don't need an EPF account".

## What the agent does after you say go

The agent works through these steps on its own, and reports each one in one
line:

- It creates the chart of accounts.
- It writes a parser for each statement layout dbu6 can't read yet, with a
  test.
- It adds each bank and card, with its opening balance from the statement,
  and imports the statements as drafts. The import categorizes most drafts
  with your rules and the coding agent.
- It looks at what is still uncategorized across all accounts together. It
  finds transfers between your own accounts and card payments that appear on
  both statements, and settles each pair into one draft. It groups the rest by
  what they are.
- It removes exact duplicate drafts and checks each account's balance checks.

In a run, the agent never adds anything to your books. It also never changes
a balance that a statement prints, and never deletes a draft to make a check
pass.

## Answer its questions

When the agent has done what it can, it asks you about the rest in one
message. Each group of transactions has a number, its count and total, and
options:

```text
Doing these unless you say otherwise
  1  AMAZON PAY INDIA (3 · 2,270)         → Shopping        rule: contains "AMAZON PAY"
  2  MYNTRA DESIGNS (1 · 1,810)           → Clothing        rule: contains "MYNTRA"
  3  BILLPAY HDFC CREDIT CARD (1 · 31,279) → HDFC Millennia  transfer, both statements

Need your call
  4  ACH D- HDFC BANK CAR LOAN EMI (1 · 10,000)   2026-10-05
       a) HDFC Car Loan   b) Loan Interest   c) something else   e) skip
  5  IMPS CR/SAMPLE SENDER (1 · 1,500)            2026-10-09
       a) Gifts Received   b) Receivables   c) something else   e) skip

Accounts I'll create
  6  HDFC Car Loan   under Liabilities:Loans     (for 4a, if you pick it)
  7  Gifts Received  under Income                (for 5a, if you pick it)
```

You can answer in shorthand. `ok` accepts the first block, `4a 5a` picks
options, `6 no` declines an account, and `rest skip` skips everything you
didn't answer. Plain sentences work too.

The agent turns each answer into a rule where it applies to more than one
transaction, so the same payee is categorized on its own next month. There is
no second round of questions: anything left open is listed in the report.

## Read the report

The run ends with a report. It starts with a link to Review and lists what
the run changed:

```text
Review your books: http://localhost:2345/review

Ready to add         Drafts  Rules   AI  You  Dups removed  Checks
Standard Chartered       41     12   26    3             0   31/31
Federal Bank              5      2    3    0             0     5/5
HDFC Millennia           19      8   11    0             0     1/1
StanC Super Value         5      0    1    4             0     1/1

Add in this order: Standard Chartered, then Federal Bank, HDFC Millennia and
StanC Super Value (transfers and card payments tie them).

New accounts      HDFC Car Loan (under Liabilities:Loans), Gifts Received (under Income)
New rules         contains "AMAZON PAY" → Shopping (3), contains "MYNTRA" → Clothing (1)
Still open        -
```

## Add each account on Review

Open the link, or **Review** from **Update**. Review lists each account with
its drafts and whether it is ready to add.

![Review listing four accounts: Federal Bank, HDFC Millennia and StanC Super Value say Add Standard Chartered first, and Standard Chartered says 1 needs an account](/assets/docs/review-list.webp)

Some accounts have to wait for another. In this example the transfer from
Standard Chartered to Federal Bank, and the card payments from Standard
Chartered, are kept as one draft on Standard Chartered. The other accounts'
balance checks count those drafts, so Review asks you to add Standard
Chartered first.

Open an account to see its checks:

- **Every transaction goes to an account.** A blank one links to the
  **Drafts** tab, where you can choose its account.
- **No possible duplicates.**
- **Your books agree with the bank**, which means every balance check passes.

![Standard Chartered on Review: Ready to add to your books, with all three checks passed, a summary of 41 transactions from 1 to 30 October, and the Add to my books button](/assets/docs/review-ready.webp)

The **Drafts** tab lists every transaction with the account it goes to. You
can change any of them before you add the account.

![The Drafts tab: date, account, comment, withdrawal, deposit and the narration from the statement for each draft](/assets/docs/drafts-stanc.webp)

When the checks pass, press **Add to my books**. The account's transactions
are posted, and they show in your reports.

![Added to your books: 5 transactions added, with See your money and Import another statement](/assets/docs/after-add-315.webp)

Add the other accounts the same way.

## Cash, investments and loans

Cash, fixed deposits, investments and loans usually have no statements you can
import. To include them in your net worth, record what each one held on the
day your books start. Go to **Settings** › **Opening balances** and press
**Record a balance**.

![Record an opening balance: the account, the balance and the date it was held](/assets/docs/add-other.webp)

The report at the end of a run reminds you of this.

## If you stop halfway

A run keeps no state of its own. The state is your books: the banks and cards
set up, the drafts and their accounts, and the rules in `user-config/`. If you
close the agent, start the run again with the same button. The agent
surveys the books again and continues, and it doesn't ask again what you
already answered.

## Setting up by hand

**Set up by hand**, on the first screen, is the older step-by-step setup. You
choose a chart of accounts (the starter chart, or one your coding agent
proposes from a sentence about your finances), add one bank or card at a time
and import its statements on **Import statements, guided**. Use it if you
want to set up each account yourself.

## Next

Once your accounts are added, **Overview** shows your money, and
[Keep your books up to date](/docs/keeping-up/) describes the monthly
routine.
