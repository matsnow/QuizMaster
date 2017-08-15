FROM ruby:2.3.3
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN mkdir /quiz-master
WORKDIR /quiz-master
ADD Gemfile /quiz-master/Gemfile
ADD Gemfile.lock /quiz-master/Gemfile.lock
RUN bundle install
