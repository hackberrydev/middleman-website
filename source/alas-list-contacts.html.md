---
title: --list-contacts
layout: alas
project_name: Alas
---

The command input requires a path to the directory that holds the contact
files. For example:

```bash
alas --skip-backup --list-contacts contacts plan.md
```

The command prints the output in a CSV format:

```bash
Name,Category,Birthday,Last Contact
Jane Doe,c,04-23,2023-06-29
John Doe,c,02-13,2023-06-03
Jack Black,b,,2023-09-26
```

You can redirect this output to a file:

```bash
alas --skip-backup --list-contacts contacts plan.md > ~/contacts.csv
```

Or you can print it as a table:

```bash
alas --skip-backup --list-contacts contacts plan.md | column -t -s ","
Name                Category  Birthday  Last Contact
Jane Doe            c         04-23     2023-06-29
John Doe            c         02-13     2023-06-03
Jack Black          b                   2023-09-26
```
