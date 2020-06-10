require_relative 'questions_database'
require_relative 'user.rb'

class Question < QuestionsDatabase
    attr_reader :id
    attr_accessor :title, :body

    def self.find_by_id(id)
        q_id = QuestionsDatabase.instance.execute(<<-SQL, id)
        SELECT
            *
        FROM
            questions
        WHERE
            questions.id = ?
        SQL
        q_id.map {|datum| Question.new(datum)}
    end

    def self.find_by_title(title)
        bodie = QuestionsDatabase.instance.execute(<<-SQL, title)
        SELECT 
            *
        FROM
            questions
        WHERE
            questions.title = ?
        SQL
    end

    def self.find_by_author_id(user)
        author = QuestionsDatabase.instance.execute(<<-SQL, id)
        SELECT 
            *
        FROM
            question_follows
        WHERE
            question_follows.id = ?
        SQL
    end

    def initialize(options)
        @id = options['id']
        @title = options['title']
        @body = options['body']
    end
end