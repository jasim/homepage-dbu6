---
title: Doing it by hand
description: "The step-by-step screens in dbu6 for people who want to drive each step themselves: setting up by hand, importing one account at a time, reviewing drafts check by check, writing rules, recording opening balances and editing the chart."
---

The rest of these docs describe your coding agent running each job from start
to finish. Every screen in dbu6 also has a smaller link beside the agent's
button for doing the same job yourself, one step at a time. This page
describes those screens.

Many of these screens still use the coding agent, but for one problem at a
time: a button hands that problem to the agent with a prompt, and you decide
what to do next. The agent shows you its plan first and changes nothing until
you say go.

## Set up your books by hand

**Set up by hand**, on **Let's set up your books**, starts the step-by-step
setup:

1. Choose a chart of accounts. You can start from dbu6's starter chart, or
   describe your finances in a sentence and your coding agent proposes a chart
   from it.
2. Add one bank or card at a time, with **Add a bank or card**.
3. Import each account's statements on **Import statements, guided**.

## Import statements one account at a time

**Import statements, guided** (under **Tools**, and as a link beside the drop
area on **Update**) imports the statements of one account at a time. dbu6
reads each file, recognizes its layout and account, checks its balances, and
imports the rows into Review.

If dbu6 can't import a file, the screen says why, and a button beside the
file hands that problem to your coding agent. For example, a layout no parser
reads shows **Set up this format**. The agent reads
`npx dbu6 docs parser-guide`, writes a parser for the layout with a test, and
then you import the file again. The button opens the agent in a new terminal
window on macOS, and gives you a command to run on Linux. Its arrow has **Copy
prompt** and **View prompt**.

**Import freeform transactions**, under **Tools**, imports transactions that
are not a statement, such as text copied from a web page or a list you typed.
It gives you a prompt for your coding agent, which turns the transactions
into a statement, asks you which account they belong to and its opening and
closing balances, and imports them into Review.

## Review by hand

**Review** lists each account with transactions waiting. Open an account to
see its three checks:

| Check | When it fails |
| --- | --- |
| Every transaction goes to an account | **See them in Drafts** opens the transactions with no account |
| No possible duplicates | **See the duplicates** lists transactions that may repeat one already in your books |
| Your books agree with the bank | **See the balance checks** shows the first day the balances differ |

![Standard Chartered on Review, not ready to add yet: 3 transactions need an account, 2 possible duplicates and 22 balance checks failing from 3 October](/assets/docs/review-stanc-before.webp)

Each check has a tab:

- **Drafts** lists every transaction with the account it goes to. A change you
  make there applies to that one transaction only.
- **Duplicates** and **Balance checks** list what fails. Each tab also has a
  button that hands that problem to your coding agent.
- **Improve categorization** collects rule requests: you pick transactions and
  say where that kind of transaction belongs, and your coding agent turns the
  requests into rules.
- **Run categorizer** runs your rules and the AI categorizer again over the
  account's transactions that have no account yet.

When the checks pass, **Add to my books** on the account adds its
transactions to your books. If the account's balance checks count another
account's transactions, for example a card bill paid from your bank, the two
accounts go into your books together, and Review's **Add N entries from M
accounts to my books** adds them in one go.

## Write rules by hand

Your rules are in `user-config/transaction_mappings.mjs`, and your
instructions for the AI categorizer are in the `custom_mappings_*.prompt`
files next to it. You can edit both yourself.
[Categorization](/docs/categorization/) describes their format.

## Record an opening balance by hand

On **Settings** › **Opening balances**, **Record a balance by hand** records
what one account held, or what you owed on it, on the day your books start.

![Record an opening balance: the account, the balance and the date it was held](/assets/docs/add-other.webp)

## Edit the chart one account at a time

On **Accounts**, you can open any account and change its name or the account
it belongs under. Moving the transactions of one account
into another, or splitting an account in two, is easier with
**Reorganize my chart**, which hands the whole change to your agent.
