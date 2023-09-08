-- seed.sql

-- Insert sample users
INSERT INTO users (username, email, password)
VALUES
  ('john_doe', 'john@example.com', 'hashed_password_1'),
  ('jane_smith', 'jane@example.com', 'hashed_password_2');

-- Insert sample posts
INSERT INTO posts (user_id, content)
VALUES
  (1, 'Hello, world!'),
  (2, 'Welcome to my profile!');
