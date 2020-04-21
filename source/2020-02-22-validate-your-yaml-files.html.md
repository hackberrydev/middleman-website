---
title: Validate Your YAML Files
---

# Validate Your YAML Files

A few months ago, a client project we're working on started using
[sidekiq-scheduler](https://github.com/Moove-it/sidekiq-scheduler) for handling
scheduled jobs. The tools works well and we started migrating more and more Cron
jobs to Sidekiq.

After deploying a new set of jobs, we scheduled a few of them to test if
everything works correctly in production. However, we realized that no jobs are
logged in the Sidekiq log file. For this project, Sidekiq is managed by systemd,
so after inspecting the status of the service with `systemctl` and `journalctl`
we quickly found out that `sidekiq.yml` file is not a valid YAML file, which
prevents Sidekiq from booting.

This raised 2 important questions:

- How can we prevent deploying an invalid `sidekiq.yml` file to the server?
- How can we be notified when the Sidekiq service or any other systemd service
  fails to start?

As the first line of defence, we decided to implement a simple script to
validate if `sidekiq.yml` is a valid YAML file and to run the script as part of
our Continuous Integration pipeline.

After a few minutes, we had a working version of the script:

    #!/usr/bin/env ruby

    require "yaml"

    sidekiq_yml = File.open("config/sidekiq.yml")

    begin
      YAML.load(sidekiq_yml)
      puts "sidekiq.yml is valid"
    rescue => ex
      puts "sidekiq.yml is not valid"
      puts "Error: #{ex.message}"
      exit 1
    end

The script works fine, but the name of the YAML file is hard-coded and it's a
bit verbose. The second version is a Ruby one-liner that can be executed
directly from a console:

    ruby -e "require 'yaml'; YAML.load(\$stdin.read);" < sidekiq.yml

This simple one-liner doesn't solve all problems. It confirms that a file is a
valid YAML file, but it's still possible to deploy a file that contains an
invalid configuration for a library or a service. In some case, the library
might validate that the configuration is valid, but in others you might want to
do that yourself. We're still working on a good solution for that problem. For
now, a smoke test one-liner within a CI pipeline will do the trick.

In following blog posts were going to explore ways to monitor a Sidekiq service
and notify developers if anything goes wrong.

What's your solution for validating YAML files and other configuration?