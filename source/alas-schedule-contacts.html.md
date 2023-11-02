---
title: --schedule-contacts
layout: alas
project_name: Alas
---

The command input requires a path to the directory that holds the contact
files. For example:

```bash
alas --insert-days 3 --schedule-contacts contacts plan.md
```

This command might insert new contact tasks for today:

```markdown
# My Plan

## Inbox

- [ ] #home - Fix the lamp

## 2020-08-01, Saturday

- [ ] Contact John Doe
- [ ] Congratulate birthday to Marry Doe
- [X] Pay bills
```

**Note:** Alas will insert contact tasks only for days that are already
present in the plan. If a day doesn't exist, `--schedule-contacts` won't
insert a day.  This means that it's best to use `--schedule-contacts` in
combination with `--insert-days`. Alas will make sure that `--insert-days`
is always executed before `--schedule-contacts`.

## Missed Birthday Reminders

If you don't run Alas every day, it's possible to miss scheduling a birthday
reminder. If a birthday reminder scheduling is missed, the task will be
scheduled the next time you execute `--schedule-contacts`.

Missed tasks are marked. For example `- Congratulate birthday to Jane
(missed on 2022-09-05)`.
