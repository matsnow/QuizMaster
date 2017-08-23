require 'test_helper'

class QuizTest < ActiveSupport::TestCase
  fixtures :quizzes

  def test_quiz_fixture
    quiz = quizzes(:one)
    assert_equal "MyText", quiz.question
  end

  def test_quiz_fixture_from_db
    quiz = Quiz.find(1)
    assert_equal quizzes(:one), quiz
  end

  def test_normalizeString
    quiz = Quiz.find(1)
    str = quiz.normalizeString('13')
    assert_equal 'thirteen', str

    str = quiz.normalizeString('13.1')
    assert_equal 'thirteen point one', str

    str = quiz.normalizeString('one')
    assert_equal 'one', str

    str = quiz.normalizeString('0')
    assert_equal 'zero', str
  end
end
