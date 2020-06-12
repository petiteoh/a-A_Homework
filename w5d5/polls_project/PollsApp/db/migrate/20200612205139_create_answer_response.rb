class CreateAnswerResponse < ActiveRecord::Migration[5.1]
  def change
    create_table :answer_responses do |t|
      t.integer :user_id, null: false
      t.integer :question_id, null: false
      t.integer :answer_choice_id, null: false

      t.timestamps
    end
    add_index :answer_responses, :user_id
    add_index :answer_responses, :question_id
    add_index :answer_responses, :answer_choice_id
  end
end
