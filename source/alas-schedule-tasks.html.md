---
title: --schedule-tasks
layout: alas
project_name: Alas
---

Alas allows keeping a list of scheduled tasks in a separate file. For example:

```markdown
# My Scheduled Tasks

- Meeting with John (on 2022-05-12)
- Tina's birthday (every year on 10-11)
- Clean air purifier filters (every month on 15)
- Run 20 minutes (every Monday)
- Run 20 minutes (every Thursday)
- #work - Weekly meeting (every Tuesday)
- #work - Deploy new version (every weekday)
- #work - Review logs (every last weekday)
- #work - Generate monthly report (every month)
- #work - Generate quarterly report (every 3 months)
```

You can then run the following command to insert matching scheduled tasks into
your plan:

```bash
alas --insert-days 3 --schedule-tasks scheduled.md plan.md
```

Alas supports the following schedule options:

- Specific day of the week - `every Monday`, `every Tuesday`, etc.
- Specific date in a month - `every month on 12` - every month on 12th. (Note
that using "30" or "31" will skip some months such as February and months
that don't have 13 days.)
- On weekdays - `every weekday` - any day of the week except Saturday and Sunday.
- On every last weekday in a month - `every last weekday` - the last weekday
(Friday or some other day) in a month.
- The first day of the month - `every month`.
- The last day of the month - `every last day`.
- The last Friday of the month - `every last Friday`.
- The first day of the quarter - `every 3 months` - January 1st, April 1st, July 1st, October 1st.
- A specific day every year - `every year on 05-15`.
- A specific date - `on 2025-05-15`.

**Note:** Alas will insert scheduled tasks only for days that are already
present in the plan. If a day doesn't exist, `--schedule-tasks` won't insert
a day.  This means that it's best to use `--schedule-tasks` in combination
with `--insert-days`. Alas will make sure that `--insert-days` is always
executed before `--schedule-tasks`.

If you don't use `--insert-days`, you need to insert empty days manually or in
some other way before running `--schedule-tasks`.

## Missed Scheduled Tasks

If you don't run Alas every day, it's possible to miss scheduling a task. If a
task scheduling is missed, the task will be scheduled the next time you execute
`--schedule-tasks`.

Alas will schedule only missed tasks that are not older than 30 days.

Missed tasks are marked. For example `- Review logs (missed on 2022-09-05)`.
