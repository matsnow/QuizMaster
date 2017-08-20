FROM ruby:2.3.3
RUN curl -sL https://deb.nodesource.com/setup_7.x | bash -
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs net-tools
RUN npm install -g yarn
RUN mkdir /quiz-master
WORKDIR /quiz-master
ADD Gemfile /quiz-master/Gemfile
ADD Gemfile.lock /quiz-master/Gemfile.lock
RUN bundle install
