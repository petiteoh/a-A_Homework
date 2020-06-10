require_relative 'questions_database'
require_relative 'question.rb'
require_relative 'user.rb'

class QuestionFollow < Questions_database
     attr_reader :id
    
     def self.find_by_id(id)
        id = QuestionsDatabase.instance.execute(<<-SQL, id)
        SELECT
            *
        FROM
            question_follows
        WHERE
            questions_follows.id = ?
        SQL
     end
end