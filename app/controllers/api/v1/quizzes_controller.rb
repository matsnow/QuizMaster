class Api::V1::QuizzesController < ApplicationController
    protect_from_forgery with: :null_session

    def show
        quizzes = Quiz.all
      #  render json: quizzes
        render json: {result: quizzes}
    end

    def create
        @quiz = Quiz.new(quiz_params)
        if @quiz.save
            render json: {result: true}
        else
            render json: {result: false}
        end
    end

    def update
        @quiz = Quiz.find(params[:id])
        if @quiz.update(quiz_params)
            render json: {result: true}
        else
            render json: {result: false}
        end
    end

    def destroy
        @quiz = Quiz.find(params[:id])
        if @quiz.destroy
            render json: {result: true}
        else
            render json: {result: false}
        end
    end

  private
    def quiz_params
      params.require(:quiz).permit(:question, :answer, :category, :answer_type)
    end
end
