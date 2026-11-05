---
title: Categorization
description: "How dbu6 assigns an account to each imported transaction: it runs exact and substring mapping rules first, and then runs your coding agent with your own instructions."
---

dbu6 assigns an account to each imported transaction in two passes: it runs
your own rules first, and then uses a language model for whatever they miss.
During a run, your coding agent asks you about the transactions that neither
pass could categorize, and it turns your answers into rules or into lines in
your instructions so the same payee is categorized automatically next time
([Set up your books with your coding agent](/docs/first-books/#message-2-your-money-and-its-questions)).

To change how something is categorized, you can tell your agent (for example,
"always put SWIGGY under Food Delivery") and it will write the rule in the
files below, or you can edit the files yourself.

## Your rules

`user-config/transaction_mappings.mjs` maps a narration to an account:

```js
export const mappings = {
    exact: {"ACME SUPERMARKET": "Groceries"},
    includes: [
        {account: "Fuel", direction: "withdrawal", values: ["FUELS"]},
    ],
};
```

* `exact` matches the whole narration and runs before `includes`.
* `includes` matches a substring. Its entries are checked in order, and each
  one can be limited to `withdrawal` or `deposit`.

Rules use the bare account name, because each name is unique in your books
([Your books](/docs/your-books/#accounts-and-journal-entries)).

## The LLM

dbu6 sends anything the rules miss to a coding agent on your own machine,
logged in with your own plan, along with your accounts (all except Equity, from
the Accounts table) and your written instructions on how to categorize
transactions. If the agent is not confident in its answer, dbu6 leaves the
entry blank for you.

If no agent is installed, only your rules run. If dbu6 cannot reach the agent,
the import still completes and reports how many descriptions were left
uncategorized and why. **Settings** shows which agent dbu6 uses, and you can
switch between Claude Code, Codex and Pi there.

## Your instructions

The prompt files sent to the agent are in `user-config/`, and you can use one
file per bank or card. When setup creates your chart of accounts and there is
no `custom_mappings_default.prompt` yet, it writes one from the notes on the
accounts (the ones you see on hover). If no account has a note, setup does not
create a file. dbu6 never rewrites this file, so you can edit it to describe
your own habits.

Each bank or card's import preset can point to a different prompt file. The
presets are stored in the database, and your coding agent changes them for you
(`npx dbu6 docs books`).
