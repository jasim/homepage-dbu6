---
title: Back up your data
description: "How to copy your dbu6 data to a safe place, with dbu6 stopped or running, what else in the books folder to keep, and how to restore from a copy."
---

Your data is in the `data/` folder inside your books folder, and the books
themselves are the file `data/sqlite.db`. To back them up, copy them to another
disk or computer with one of the commands below.

Run the commands on this page in your books folder.

## Copy the data folder

Stop dbu6 first, because a copy made while dbu6 is running can miss recent
changes. Then copy the whole `data/` folder:

```sh
cp -R data /path/to/backups/data-$(date +%F)
```

## Copy while dbu6 is running

SQLite's `.backup` command makes a consistent copy of the database even while
dbu6 is writing to it, so you can run this command on a schedule:

```sh
sqlite3 data/sqlite.db ".backup /path/to/backups/sqlite-$(date +%F).db"
```

macOS includes `sqlite3`. On Debian and Ubuntu, install it with
`sudo apt install sqlite3`.

## Previous versions from upgrades

When `npx dbu6 upgrade` migrates your database, dbu6 stores the database as it
was in `data/previous-versions/`, so you don't need to make a copy before you
upgrade. Each file name starts with the date, for example
`sqlite-2026-11-08-a1b2c3.db`, and dbu6 keeps all of these files.

## Keep the rest of the folder in git

`user-config/` is beside `data/` (not inside it) and holds your categorization
rules and instructions. If you added `custom-built-parsers/` or `reports/`,
they are also outside `data/`. All of these belong in the books folder's git
repository, and you can push that repository to a private remote to keep a
copy on another computer.

## Restore from a copy

Stop dbu6 before you restore.

To restore a copy of the `data/` folder, replace the `data/` folder in your
books folder with the copy.

To restore a single file, either one made with `.backup` or one from
`data/previous-versions/`, replace `data/sqlite.db` with a copy of the file, and
delete `data/sqlite.db-wal` and `data/sqlite.db-shm` if they exist.

If the copy came from an older version of dbu6, `npx dbu6 start` migrates it
the next time the app starts.
