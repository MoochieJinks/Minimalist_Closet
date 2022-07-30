
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "closet" (
	"id" SERIAL PRIMARY KEY,
	"type" VARCHAR (64),
	"color" VARCHAR (32),
	"user_id" integer
);

SELECT * FROM closet WHERE user_id = $1; -- allows us to select all items in the (logged in) user's closet

INSERT INTO closet ( type, color, size, description, user_id ) VALUES ( $1, $2, $3, $4, $5 ); -- allows us to insert new items into the (logged in) user's closet

UPDATE closet SET type = $1, color = $2, size = $3, description = $4 WHERE id = $5; -- allows us to update an item in the (logged in) user's closet

DELETE FROM closet WHERE id = $1; -- allows us to delete an item in the (logged in) user's closet