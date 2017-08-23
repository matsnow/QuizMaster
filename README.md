# Quiz Master

Quiz Master offers QuizMode to play quizzes and ManageMode to manage quiz list.

<img width="1487" alt="demo" src="https://user-images.githubusercontent.com/18232350/29609515-6cadca18-8832-11e7-893a-529deeec29cb.png">

## Description

Quiz Master has two main features.
1. You can play QuizMode (display questions and input answers).
2. You can manage the quiz list, such as add any questions and answers.

Quiz Master's technical stack is follow.
* Server: Rails 5.1.3
* Front: React 15.6.1 / Reflux 6.4.1
* Database: PostgreSQL (newest)
* Infrastructure: Docker
* Testing: Minitest (Rails default) and Jest

## Requirement

Software:
- Git (Version 2.14.1)
- Docker (Version 17.06.1-ce)

Environment:
- Port 80

## Installation

1. Install Git   
see https://git-scm.com/book/ja/v1/%E4%BD%BF%E3%81%84%E5%A7%8B%E3%82%81%E3%82%8B-Git%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB

2. Install Docker   
see https://docs.docker.com/engine/installation/

3. Install Quiz Master   
```sh
    $ git clone git@github.com:matsnow/QuizMaster.git
    $ cd QuizMaster
    $ docker-compose build
    $ docker-compose run --rm web yarn 
    $ docker-compose up
```

4. Access the site    
The default url is `http://localhost`

If you fail to install, this site may your help.   
https://docs.docker.com/compose/rails/#connect-the-database

## TODO
* Add sample quizzes.
* Improve UI/UX.
* Add quiz category.
* More test and coverage.
* Add user creation.
* Change to SPA (Single Page Application).
* Use Redux with flux framework (Trying).

## Author

[@matsnow](https://twitter.com/matsnow0)

## License

[MIT](http://b4b4r07.mit-license.org)
