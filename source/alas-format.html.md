---
title: Alas Format
layout: alas
---

Alas is using [Markdown](https://en.wikipedia.org/wiki/Markdown) format with
some constraints.

The following example shows all special forms of the Alas plan file format.

```markdown
# My Plan

## Inbox

- [ ] Buy new sneakers
- [ ] #home - Fix the lamp
- [ ] #work - Schedule a meeting with the new administration person

## 2022-07-28, Thursday

- [ ] Develop photos
- [X] Pay bills

## 2022-07-27, Wednesday

- Met with Mike and Molly
- [X] #work - Weekly meeting
  - Discuss slow tests
  - Should we migrate to a new server?
- [X] #work - Review open pull requests
  Jane made 2 pull requests related to the billing system. Review those
  carefully.
- [X] #work - Fix the flaky test
```

## Title

Each plan has a title with the plan name such as `# My Plan`.

## Inbox

After the title, there's the optional inbox section that starts with `## Inbox`.
The inbox section has tasks, but it can also be empty.

## Days

A day starts with the date title in the following form - the title mark (`##`),
followed by a date in the following form `YYYY-MM-DD`, followed by a comma,
followed by a day name (`Monday`, `Tuesday`, etc.)

For example:

```markdown
## 2022-07-28, Thursday
```

## Tasks

Each task starts with a dash (`-`), followed by a checkbox (`[ ]` or `[X]`),
followed by a task title, optionally followed by a task body.

This task has an unchecked checkbox, which means it's uncompleted:

```markdown
- [ ] Buy new sneakers
```

The following task is completed. It also shows that `#work - Fix the flaky test`
is a valid title. The title has a tag (`#work`). At the moment of writing,
tags don't have a special meaning in Alas, but you can use them to organize
your tasks.

```markdown
- [X] #work - Fix the flaky test
```

The following 2 tasks have a body. A body is optional. A body is all text that
follows the task title and it's indented 2 spaces. It can, but it doesn't have
to start with a dash or some other symbol.

```markdown
- [X] #work - Weekly meeting
  - Discuss slow tests
  - Should we migrate to a new server?
- [X] #work - Review open pull requests
  Jane made 2 pull requests related to the billing system. Review those
  carefully.
```

## Events

Events have a single line. They start with a dash and don't have a
checkbox. They are used to log stuff that happened and you want to remember.

For example:

```markdown
- Met with Mike and Molly
```
