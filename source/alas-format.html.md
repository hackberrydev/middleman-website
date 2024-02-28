---
title: Alas Format
layout: alas
project_name: Alas
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
  They have a new apartment. It's closer to our place.
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

Each day starts with a day title, optionally followed by events, optionally
followed by tasks. Events and tasks can't be mixed.

A day starts with the date title in the following form - the title mark (`##`),
followed by a date in the following form `YYYY-MM-DD`, followed by a comma,
followed by a day name (`Monday`, `Tuesday`, etc.)

For example:

```markdown
## 2022-07-28, Thursday
```

## Events

Each event starts with a dash (`-`), followed by an event title, optionally
followed by an event body.

They are used to log stuff that happened that you want to remember.

The following event has only a title:

```markdown
- Met with Mike and Molly
```

The following 2 events have a body. A body is optional. A body is all text that
follows the event title and it's indented 2 spaces. It can, but it doesn't have
to start with a dash or some other symbol.

```markdown
- Saw a wryneck
  I was suprised to see a wryneck. They shouldn't get back for another month.
  I guess that's because it's so hot this year.
- Jane called me today
  - They have a dog
  - They plan a trip in May
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
