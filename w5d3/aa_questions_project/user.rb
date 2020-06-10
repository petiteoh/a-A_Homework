require_relative 'questions_database'
require_relative 'question'

class User < QuestionsDatabase 
    attr_reader :id
    attr_accessor :fname, :lname
    def self.find_by_id(id)
        user = QuestionsDatabase.instance.execute(<<-SQL, id)
            SELECT
                *
            FROM
                users
            WHERE
                users.id = ?
        SQL
        user.map {|datum| User.new(datum)}
    end

    def self.find_by_name(fname, lname)
        user_name = QuestionsDatabase.instance.execute(<<-SQL, fname, lname)
        SELECT 
            *
        FROM
            users
        WHERE
            users.fname = ? AND users.lname = ?
        SQL

    end

    def initialize(options)
        @id = options['id']
        @fname = options['fname']
        @lname = options['lname']
    end

    def authored_questions(Question.find_by_author_id)
        q = QuestionsDatabase.instance.execute(<<-SQL, title, body)
        SELECT 
            *
        FROM 
            questions
        WHERE
            questions.title = ? AND question.body = ?
        SQL
    end
end