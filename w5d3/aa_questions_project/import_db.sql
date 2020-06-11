DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS replies;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS question_likes;
DROP TABLE IF EXISTS question_follows;



PRAGMA foreign_keys = ON;

CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    fname TEXT NOT NULL,
    lname TEXT NOT NULL

);
INSERT INTO
    users (fname, lname)
VALUES
    ('Nikki', 'Teoh'),
    ('Torin', 'Donahue');

CREATE TABLE questions (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    user_id INTEGER NOT NULL,
    
    FOREIGN KEY (user_id) REFERENCES users(id)

);

INSERT INTO
    questions (title, body, user_id)
VALUES 
    ('SQL', 'What is SQL?', (SELECT id FROM users WHERE fname = 'Nikki')),
    ('LRU cache', 'What is LRU cache?', (SELECT id FROM users WHERE fname = 'Torin'));

CREATE TABLE question_follows (
    id INTEGER PRIMARY KEY,
    question_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,

    FOREIGN KEY (question_id) REFERENCES questions(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO 
    question_follows (question_id, user_id)
VALUES
    ((SELECT id FROM questions WHERE title = 'LRU cache'),
    (SELECT id FROM users WHERE fname = 'Nikki'));


CREATE TABLE replies (
    id INTEGER PRIMARY KEY,
    body TEXT NOT NULL,
    question_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,

    FOREIGN KEY (question_id) REFERENCES questions(id)
    FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO
    replies (body, question_id, user_id)
VALUES
    ('structured query language', (SELECT id FROM questions WHERE title = 'SQL'), (SELECT id FROM users WHERE fname = 'Torin'));

CREATE TABLE question_likes (
    id INTEGER PRIMARY KEY,
    question_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    
    FOREIGN KEY (question_id) REFERENCES questions(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO 
    question_likes (question_id, user_id)
VALUES
    ((SELECT id FROM questions WHERE title = 'SQL'), (SELECT id FROM users WHERE fname = 'Torin'))


-- SELECT * FROM questions JOIN users ON questions.user_id = users.id
-- SELECT questions.body, questions.title  FROM questions JOIN users ON questions.user_id = users.id;
-- SELECT * FROM users JOIN question_follows ON question_follows.user_id = users.id
-- JOIN questions ON question_follows.question_id = questions.id; 


-- sqlite> SELECT questions.body, questions.title  FROM questions JOIN users ON questions.user_id = users.id;

-- SELECT * 
-- FROM users
-- JOIN questions 
--     ON question_follows.question_id = questions.id 
-- JOIN question_follows 
--     ON question_follows.user_id = users.id;

-- SELECT authors.fname AS "Author", questions.title, followers.fname AS "Follower"
-- FROM questions
-- JOIN question_follows 
--     ON question_follows.question_id = questions.id
-- JOIN users AS followers
--     ON question_follows.user_id = followers.id
-- JOIN users AS authors
--     ON questions.user_id = authors.id;


