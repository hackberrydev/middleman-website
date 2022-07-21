---
title: Tips for Using Alas
layout: alas
---

Alas is usually executed with the same command every day. For example:

```bash
alas --insert-days 3 \
  --remove-empty-days \
  --skip-backup \
  --schedule-tasks scheduled.md \
  --schedule-contacts contacts \
  plan.md
```

To avoid typing the long command, you can create an alias for your shell or
a small script and run that instead.

Here's an example script that runs Alas on a plan file, runs Tmux and opens
the plan file in Vim:

```bash
#!/usr/bin/env bash

cd ~/wiki
alas --insert-days 3 --remove-empty-days --skip-backup --schedule-tasks scheduled.md --schedule-contacts contacts plan.md
tmux new-session -d 'vim plan.md'
tmux -2 attach-session -d
```
