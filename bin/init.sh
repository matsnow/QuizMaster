#!/bin/bash
bundle exec rails log:clear
bundle exec rails tmp:clear
bundle exec rails db:create
bundle exec rails db:migrate
bundle exec rails s -p 3000 -b '0.0.0.0' -e development
