# PostgreSQL, pgAdmin & PostgreSQL Server

------------------------------------------------------------------------

# PostgreSQL

PostgreSQL (often called Postgres) is an open-source relational database
management system (RDBMS) that uses SQL to store and manage data.

## How It Works

-   You create a Database
-   Inside it, you create Tables
-   Each table contains:
    -   Columns (fields)
    -   Rows (records)

Example table: users

  id   name    email
  ---- ------- ------------
  1    Ahmed   a@test.com
  2    Sara    s@test.com

## Common SQL Commands

-   SELECT → Retrieve data\
-   INSERT → Add new data\
-   UPDATE → Modify existing data\
-   DELETE → Remove data\
-   CREATE TABLE → Create a new table

## Key Features

-   Free and open source\
-   Highly reliable and stable\
-   Strong data integrity and security\
-   Supports advanced data types like JSON\
-   Handles complex queries efficiently\
-   Supports relationships between tables (Foreign Keys)

## Where It's Used

-   Web applications\
-   Backend development (Node.js, Django, Laravel, etc.)\
-   Enterprise systems\
-   Large-scale applications

------------------------------------------------------------------------

# pgAdmin

pgAdmin is a graphical management tool (GUI) used to manage PostgreSQL
databases.

## What You Can Do with pgAdmin

-   Create databases
-   Create and edit tables
-   Run SQL queries
-   Manage users and permissions
-   View and edit data visually

It works like a control panel for PostgreSQL.

------------------------------------------------------------------------

# PostgreSQL Server

PostgreSQL Server is the actual database system running in the
background.

## What the Server Does

-   Stores your data
-   Listens for connections
-   Processes SQL queries
-   Returns results to applications

------------------------------------------------------------------------

# Difference Between Them

  PostgreSQL Server           pgAdmin
  --------------------------- ---------------------------------
  Database engine             Management tool
  Stores and processes data   Controls and manages the server
  Runs in background          Has graphical interface

------------------------------------------------------------------------

# Simple Workflow

1.  Install PostgreSQL → installs the server.
2.  Install pgAdmin → manage the server visually.
3.  pgAdmin connects to PostgreSQL server.
