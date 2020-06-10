require_relative 'questions_database'
require_relative 'question.rb'
require_relative 'user.rb'

class Reply < questions_database
    attr_reader :id, :body, :question_id, :user_id

    def self.find_by_user_id(user_id)
        user = QuestionsDatabase.instance.execute(<<-SQL, id)
            SELECT
                *
            FROM
                users
            WHERE
                users.id = ?
        SQL
    end
end