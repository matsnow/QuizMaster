class AddAnswerTypeDefault < ActiveRecord::Migration[5.1]
  def change
    change_column :quizzes, :answer_type, :integer, default: 1
  end
end
