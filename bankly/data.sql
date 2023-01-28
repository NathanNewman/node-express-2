
/* FIXED BUG

data.sql does not create a database and there are no other files that create one. Without
a data base, there is nothing to create a table into. Also wrote code to create a test
database and table. Originally, code only contained one CREATE TABLE users().

*/

DROP DATABASE bankly;
CREATE DATABASE bankly;
\connect bankly

CREATE TABLE users (
    username text PRIMARY KEY,
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text NOT NULL,
    phone text NOT NULL,
    password text NOT NULL,
    admin boolean DEFAULT false
);

DROP DATABASE bankly_test;
CREATE DATABASE bankly_test;
\connect bankly_test

CREATE TABLE users (
    username text PRIMARY KEY,
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text NOT NULL,
    phone text NOT NULL,
    password text NOT NULL,
    admin boolean DEFAULT false
);

