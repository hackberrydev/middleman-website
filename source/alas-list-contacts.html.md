---
title: --list-contacts
layout: alas
project_name: Alas
---

Each contact is stored in a separate Markdown file. All contact files should
be in a single directory, separate from other Markdown files. For example:

```
├── contacts
│   ├── john-doe.md
│   ├── mary-doe.md
│   ├── jack-black.md
│   ├── ...
├── diary.md
├── plan.md
└── scheduled.md
```

Each contact file has the same structure - the contact name, details and the
log of communication.

```markdown
# John Doe

- Birthday: 04-27
- Category: B

## 2022-02-15

Talked over the phone about stuff.

## 2022-01-28

Grabbed a beer and talked about stuff.
```

The first line is the title that holds the contact name.

Then, there's a list of details. Each detail has the same structure:

```markdown
- Detail name: Detail value
```

A contact can have as many details as you need. However, 2 details are special:
`Birthday` and `Category`.

If a contact has a `Birthday` detail and the value matches today's date, Alas
will schedule a reminder to congratulate the person's birthday.

A contact `Category` can have one of these 4 values: A, B, C and D. The
idea was taken from Derek Siver's [article](https://sive.rs/hundreds) where
categories are defined as:

- A list: Very important people. Contact every three weeks.
- B list: Important people. Contact every two months.
- C list: Most people. Contact every six months.
- D list: Other people. Contact once a year, to make sure you still have
  their correct info.

The command input requires a path to the directory that holds the contact
files. For example:
