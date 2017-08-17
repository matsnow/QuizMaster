class CreateQuizzes < ActiveRecord::Migration[5.1]
  def change
    create_table :quizzes do |t|
      t.text :question
      t.text :answer
      t.integer :category
      t.integer :answer_type

      t.timestamps
    end
  end
end
