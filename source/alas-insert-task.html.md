---
title: --insert-task
layout: alas
---

`alas --insert-task "Upgrade OS" plan.md` will insert a new task for today with
the title "Upgrade OS".

It's usually easier to add new tasks to the plan file with an editor. However,
`--insert-task` is useful for scripting and automation. For example, you can
write a script that will fetch open pull requests from a GitHub repository and
insert a review task for each pull request.

Example:

```bash
alas --insert-task "Upgrade OS" plan.md
```

**Note:** Alas will insert a task only if today is already present in the
plan. If the day doesn't exist, `--insert-task` won't insert a day.  This means
that it's best to use `--insert-task` in combination with `--insert-days`. Alas
will make sure that `--insert-days` is always executed before `--insert-task`.
