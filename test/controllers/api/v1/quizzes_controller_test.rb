require 'test_helper'

class Api::V1::QuizzesControllerTest < ActionDispatch::IntegrationTest
  fixtures :quizzes

  def test_show
    get '/api/v1/quiz'
    assert_response :success
    json_res = JSON.parse(response.body)
    assert_equal 'MyText', json_res['result'][0]['question']
  end

  def test_create
    # パラメータが適切
    post '/api/v1/quiz', :params => {:quiz => {'question' => 'abc', 'answer' => '1', 'category' => 2, 'answer_type' => 1 }}
    assert_response :success
    json_res = JSON.parse(response.body)
    assert_equal 12, json_res['id']

    # サーバが未定義のパラメータを追加 & answer_typeなし
    post '/api/v1/quiz', :params => {:quiz => {'question' => 'abc', 'answer' => '1', 'category' => 2, 'test' => 'nothing' }}
    assert_response :success
    json_res = JSON.parse(response.body)
    assert_equal 13, json_res['id']

    # モデルのバリデーションエラー(questionが空)
    post '/api/v1/quiz', :params => {:quiz => {'question' => '', 'answer' => '1', 'category' => 2, 'answer_type' => 1 }}
    assert_response :error
    json_res = JSON.parse(response.body)
    assert_equal false, json_res['result']

    # モデルのバリデーションエラー(answerが空)
    post '/api/v1/quiz', :params => {:quiz => {'question' => 'a', 'answer' => '', 'category' => 2, 'answer_type' => 1 }}
    assert_response :error
    json_res = JSON.parse(response.body)
    assert_equal false, json_res['result']

    # モデルのバリデーションエラー(categoryが整数以外)
    post '/api/v1/quiz', :params => {:quiz => {'question' => 'a', 'answer' => 'b', 'category' => 1.2, 'answer_type' => 1 }}
    assert_response :error
    json_res = JSON.parse(response.body)
    assert_equal false, json_res['result']

    # モデルのバリデーションエラー(answer_typeが整数以外)
    post '/api/v1/quiz', :params => {:quiz => {'question' => 'a', 'answer' => 'b', 'category' => 1, 'answer_type' => 1.1 }}
    assert_response :error
    json_res = JSON.parse(response.body)
    assert_equal false, json_res['result']

    # モデルのバリデーションエラー(questionなし)
    post '/api/v1/quiz', :params => {:quiz => {'answer' => '1', 'category' => 2, 'answer_type' => 1 }}
    assert_response :error
    json_res = JSON.parse(response.body)
    assert_equal false, json_res['result']

    # モデルのバリデーションエラー(answerなし)
    post '/api/v1/quiz', :params => {:quiz => {'question' => 'a', 'category' => 2, 'answer_type' => 1 }}
    assert_response :error
    json_res = JSON.parse(response.body)
    assert_equal false, json_res['result']

    # モデルのバリデーションエラー(categoryなし)
    post '/api/v1/quiz', :params => {:quiz => {'question' => 'a', 'answer' => 'b', 'answer_type' => 1 }}
    assert_response :error
    json_res = JSON.parse(response.body)
    assert_equal false, json_res['result']
  end

  def test_update
    # パラメータが適切
    put '/api/v1/quiz', :params => {:id => 1, :quiz => {'question' => 'あいう', 'answer' => 'テスト', 'category' => 8, 'answer_type' => 0, 'test' => 'nothing' }}
    assert_response :success
    json_res = JSON.parse(response.body)
    assert_equal true, json_res['result']

    get '/api/v1/quiz'
    json_res = JSON.parse(response.body)
    target = json_res['result'].find {|item| item['id'] == 1 }
    assert_equal 'あいう', target['question']

    # データfindエラー(IDなし)
    put '/api/v1/quiz', :params => {:quiz => {'question' => 'a', 'answer' => '1', 'category' => 2, 'answer_type' => 1 }}
    assert_response :error
    json_res = JSON.parse(response.body)
    assert_equal false, json_res['result']

    # モデルのバリデーションエラー(questionが空)
    put '/api/v1/quiz', :params => {:id => 1, :quiz => {'question' => '', 'answer' => '1', 'category' => 2, 'answer_type' => 1 }}
    assert_response :error
    json_res = JSON.parse(response.body)
    assert_equal false, json_res['result']

    # モデルのバリデーションエラー(answerが空)
    put '/api/v1/quiz', :params => {:id => 1, :quiz => {'question' => 'a', 'answer' => '', 'category' => 2, 'answer_type' => 1 }}
    assert_response :error
    json_res = JSON.parse(response.body)
    assert_equal false, json_res['result']

    # モデルのバリデーションエラー(categoryが整数以外)
    put '/api/v1/quiz', :params => {:id => 1, :quiz => {'question' => 'a', 'answer' => 'b', 'category' => 1.2, 'answer_type' => 1 }}
    assert_response :error
    json_res = JSON.parse(response.body)
    assert_equal false, json_res['result']

    # モデルのバリデーションエラー(answer_typeが整数以外)
    put '/api/v1/quiz', :params => {:id => 1, :quiz => {'question' => 'a', 'answer' => 'b', 'category' => 1, 'answer_type' => 1.1 }}
    assert_response :error
    json_res = JSON.parse(response.body)
    assert_equal false, json_res['result']

    # モデルのバリデーションエラー(questionなし) -> すでにDBに値があるので発生しないこと
    put '/api/v1/quiz', :params => {:id => 1, :quiz => {'answer' => '1', 'category' => 2, 'answer_type' => 1 }}
    assert_response :success
    json_res = JSON.parse(response.body)
    assert_equal true, json_res['result']

    # モデルのバリデーションエラー(answerなし) -> 同じく発生しないこと
    put '/api/v1/quiz', :params => {:id => 1, :quiz => {'question' => 'a', 'category' => 2, 'answer_type' => 1 }}
    assert_response :success
    json_res = JSON.parse(response.body)
    assert_equal true, json_res['result']

    # モデルのバリデーションエラー(categoryなし) -> 同じく発生しないこと
    put '/api/v1/quiz', :params => {:id => 1, :quiz => {'question' => 'a', 'answer' => 'b', 'answer_type' => 1 }}
    assert_response :success
    json_res = JSON.parse(response.body)
    assert_equal true, json_res['result']
  end

  def test_destroy
    # パラメータが適切
    delete '/api/v1/quiz', :params => {:id => 2}
    assert_response :success
    json_res = JSON.parse(response.body).with_indifferent_access
    assert_equal true, json_res[:result]

    # データfindエラー(IDなし)
    delete '/api/v1/quiz', :params => {}
    assert_response :error
    json_res = JSON.parse(response.body)
    assert_equal false, json_res['result']
  end

  def test_challenges
    # 10個のクイズが返ってくること
    get '/api/v1/quiz/challenges'
    assert_response :success
    json_res = JSON.parse(response.body)
    assert_equal 10, json_res['result'].length
  end

  def test_is_correct
    # クイズに正解した場合
    post '/api/v1/quiz/is_correct', :params => {:question_id => 1, :answer => 'MyText'}
    assert_response :success
    json_res = JSON.parse(response.body)
    assert_equal true, json_res['result']

    # クイズに不正解の場合
    post '/api/v1/quiz/is_correct', :params => {:question_id => 1, :answer => 'MyText2'}
    assert_response :success
    json_res = JSON.parse(response.body)
    assert_equal false, json_res['result']

    # クイズのIDが正しく無い場合
    post '/api/v1/quiz/is_correct', :params => {:question_id => 100, :answer => 'MyText'}
    assert_response :success
    json_res = JSON.parse(response.body)
    assert_equal false, json_res['result']
  end
end
