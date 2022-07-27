---
title: Getting Started With Alas
layout: alas
---

## Warning

Alas updates your backup file. Using `alas` can destroy your data due to
unintended use or a bug in Alas. **Always keep a backup of your plan file.**

Alas has a built in backup, but it's best to use a separate backup solution as
well.

A version control system, such as [Git](https://git-scm.com/) is a convenient
option.

## Plan Template

First, use your favorite text editor to create a plan file (e.g. `plan.md`):

```markdown
# My Plan

## Inbox

## 2022-05-12, Thursday
```

Start adding new days and tasks. You can use this plan file even without
the `alas` command utility.

## Installing Alas

If you are using MacOS or a Linux based operating system, visit the Alas
[releases](https://github.com/hackberrydev/alas/releases) page and download
the latest release for your operating system. Add the Alas executable path
to your `PATH`. Now you can run `alas` with your plan file.

You can also put the executable in the same directory as your plan file and
use the relative path to run Alas:

```bash
./alas plan.md
```

### Windows

At the moment, we don't provide an executable for Windows. However, you
can try compiling Alas on Windows and running it. To compile Alas, you
need [Janet](https://janet-lang.org) and JPM. See Janet [installation
instructions](https://janet-lang.org/1.21.0/docs/index.html) for more
information.

Since Janet wasn't tested on Windows, we expect some problems. You can
try running `alas` from the same directory as you plan file, to avoid path
related issues.

## Running Multiple Commands

Alas supports running multiple commands:

```bash
alas --insert-days 3 --remove-empty-days --schedule-tasks scheduled.md plan.md
```
