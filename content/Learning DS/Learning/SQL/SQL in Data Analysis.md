## I. Introduction to Databases
#### 1. Database Motivation and Definition
**The problem for large datasets:** Manually managing hundreds of thousands of customer records and their associated products and orders becomes unmanageable without a structured database.

A **database** is a collection of information or data. It is **stored and organized in some format** to be easily accessed, managed, and retrieved.

We use Database Management System (**DBMS**), which is a **software** or **application** that allows users to interact with the database. Users then give instructions to the DBMS, which executes them and returns results from the database.

Databases can be broadly categorized as **Relational** or **Non-relational**. Relational databases organize data into one or more tables (or *relations*) of rows and columns. These tables can be linked by common fields.

*Example*: A simple schema contains Customer, Product, Order, and Order Detail tables.

![[Fig-Ex-Simp-DTB.svg]]

Key concepts in relational databases include:
- **Primary Key (PK):** an index or value that uniquely identifies a record in a table. For example, ``C_ID`` for customer, ``P_ID`` for Product, and ``O_ID`` for Order. It cannot contain NULL values and **must be unique.**
- **Foreign Key (FK):** An index or value that links to a primary key in another table, establishing relationships between tables.
#### 2. MySQL and Database Creation

To download MySQL, visit the website: https://www.mysql.com/downloads/

The process of storing data in a MySQL Database involves six key steps:
- **[[#3. How to Draw an ER Diagram|Design Database Schema]]**
- **Create a Database**: The ``CREATE DATABASE`` statement is used to create a new SQL database
```MySQL
CREATE DATABASE databasename;
```
$\quad$ The ``DROP DATABASE`` statement can be used to remove an existing database; as a best practice, include the ``IF EXISTS`` clause to prevent an error if the database doesn't already exist.
```MySQL
DROP DATABASE IF EXISTS databasename;
```
	NOTE: Be careful before dropping a database. Deleting a database will result in loss of complete information stored in the database!
- **Create Tables**: The ``CREATE TABLE`` statement is used to create a new table in a database.
```MySQL
CREATE TABLE tablename(
	column1 datatype,
	column2 datatype,
	column3 datatype,
	...
);
```
$\quad$ Example:
```MySQL
CREATE TABLE Customer(
	C_ID int NOT NULL,
	Name varchar(255),
	Address varchar(255),
	PRIMARY KEY (C_ID)
);
```

- **Insert Data**: The ``INSERT INTO`` statement is used to insert new records in a table.
```MySQL
INSERT INTO tablename(column1, column2, column3,...)
VALUES (value1, value2, value3, ...);
```
- **Retrieve Data** from tables using [[#II. SQL Queries|Query Data]] statements.
- **Update or Delete Data**

We can also create databases from a pre-created script by opening the script file and executing it using the thunder icon in MySQL Workbench.
![[Pic-Thunder-Icon.png]]

Explore the data in created schemas and tables by clicking the `view icon in the Navigation panel`. 
![[Pic-Views-Icon.png]]
## II. SQL Queries (Basic)

SQL (Structured Query Language) is a powerful tool for data analysis, allowing efficient querying and manipulation of databases.
#### 1. ``SELECT`` Statement
- **Select all data from a table**
```MySQL
SELECT * FROM <schema>.<table>;

-- Example
SELECT * FROM sql_store.orders;
```
$\quad$ We can specify the schema beforehand using ``USE <schema>``
- **Select specific columns**
```MySQL
SELECT <column>,<column>,<...>
FROM <table>;

-- Example
SELECT first_name, last_name 
FROM customers;
```
- **Select with modify values/calculations**: perform arithmetic operations on columns.
```MySQL
-- Example
SELECT points, points + 10, points / 10 
FROM customers;
```
- **Select with Alias (``AS``)** : assign a temporary name (alias) to a column or expression.
```MySQL
SELECT <column> AS <alias> FROM <table>;

-- Example
SELECT points, points * 1.1 AS VAT FROM customers;
SELECT name, unit_price, unit_price * 1.1 AS new_price FROM products;
```
- **Select unique values of a column**: Use `DISTINCT` to return only unique values.
```MySQL
-- Example
SELECT DISTINCT state FROM customers;
```
#### 2. WHERE Clause

The `WHERE` clause is used to filter records based on a specified condition.
- **Select data with condition**
```MySQL
SELECT <column>
FROM <table> 
WHERE <condition>;

-- Example
SELECT *
FROM customers
WHERE points > 3000;
```
- **Comparison Operators**: Common operators include `<`, `>`, `<=`, `>=`, `=`, `!=`, `<>`.
```MySQL
-- Example: Select every customer from state 'VA'
SELECT *
FROM customers
WHERE state = "VA";

-- Example: Select every customer not from state 'VA'
SELECT *
FROM customers
WHERE state != "VA";
```
- **AND, OR, and NOT Operators**: Used to combine multiple conditions.
```MySQL
-- Example: From order_items table, get order_id #6 and total price less than 30
SELECT *, unit_price * quantity AS total_price
FROM order_items
WHERE order_id = 6 AND unit_price * quantity < 30;
```
#### 3. IN and BETWEEN Clauses
- **IN Clause**: Used to specify multiple possible values for a column (more concise).
```MySQL
-- Example: Select all customers from states 'VA', 'GA', 'FL'
SELECT *
FROM customers
WHERE state in ("VA", "GA", "FL");
-- Similar to: WHERE state = ‘VA’ OR state = ‘GA’ OR state = ‘FL’;
```
- **BETWEEN Clause**: Used to select values within a specified range (inclusive)
```MySQL
-- Example: Select all customers from 'VA', 'GA', 'FL' with points between 300 and 2000.
SELECT *
FROM customers
WHERE state IN ("VA", "GA", "FL")
```
#### 4. IS NULL, ORDER BY, and LIMIT Clauses
- **IS NULL/ IS NOT NULL**: Used to check for null or non-null values.
```MySQL
-- Example: Select all customers who don't have a phone number
SELECT *
FROM customers
WHERE phone IS NULL;
```
- **ORDER BY**: Used to sort the result set. Default is ascending (`ASC`), use `DESC` for descending order.
```MySQL
-- Example: Get customers with points < 1000 and order them in descending order by points.
SELECT *
FROM customers
WHERE points < 1000 ORDER BY points DESC;
```
- **LIMIT**: Used to restrict the number of rows returned by the query.
	- `LIMIT count`: Returns the first `count` rows.
	- `LIMIT offset, count`: Skips `offset` rows and returns the next `count` rows.
```MySQL 
-- Example: Get three customers with the highest points.
SELECT *
FROM customers
ORDER BY points DESC LIMIT 3;

-- Example: Get four customers with the highest points (not including the first 3)
SELECT *
FROM customers
ORDER BY points DESC LIMIT 3, 4;
```
Here, `3` is the offset (skip first 3 rows), and `4` is the count (return the next 4 rows).
#### 5. LIKE and REGEXP Clauses
These clauses are used for **pattern matching** in strings.
- **LIKE**: Used for simple pattern matching.
	- `%` (percent sign): Represents **any number of characters** (including zero).
	- `_` (underscore): Represents **exactly one characters**.
```MySQL
-- Example: Select customers whose last name starts with 'B'.
SELECT *
FROM customers
WHERE last_name LIKE "B%";

-- Example: Select customers who have a 'b' in their last name.
SELECT *
FROM customers
WHERE last_name LIKE "%B$";

-- Example: Select customers whose last name is 6 letters long and ends with 'y'.
SELECT *
FROM customers
WHERE last_name LIKE "_____y";

-- Example: Get customers whose addresses contain 'TRAIL' or 'AVENUE'.
SELECT *
FROM customers
WHERE address LIKE "%trail%" or address LIKE "%avenue%";

-- Example: Get customers whose phone numbers and with 9 and have 3 characters after 9.
SELECT *
FROM customers
WHERE phone LIKE "%9___";
```
- **REGEXP (Regular Expressions)**: Provides more powerful and flexible pattern matching.
	- `|`: Represents **alternation (OR)**.
	- `$`: Used to **match the end of a string**.
	- `^`: Used to **match the beginning of a string**.
	- `[]`: Used to **match any characters within the brackets**.
```MySQL
-- Example: Get customers whose first name are ELKA or AMBUR.
SELECT *
FROM customers
WHERE first_name REGEXP 'ELKA|AMBUR';

-- Example: Get customers whose last name ends with EY or ON.
SELECT * 
FROM customers 
WHERE last_name REGEXP 'EY$|ON$';

-- Example: Get customers whose last name starts with MY or contains SE.
SELECT *
FROM customers
WHERE last_name REGEXP '^MY|SE';

-- Example: Get customers whose last name contains B followed by R or U.
SELECT *
FROM customers
WHERE last_name REGEXP 'B[RU]';
```
## III. Entity Relationship Diagrams (ERD)

An **Entity Relationship Diagram (ERD)** is a visual representation of different entities within a system and how they relate to each other. It is a fundamental tool for designing and modeling relational databases, showing the logical structure of the databases.
#### 1. ERD Notations
- **Chen's Notation**
![[Pic-Symbol-Chen.png]]
- **Crow's Foot Notation**:
![[Pic-Crow's-Foot.png]]
#### 2. Components of an ER Diagram
- **Entities**: Represent by a rectangle and named using singular nouns (e.g., Customer, Product, Order). An entity should appear only once in a diagram.
	- **Weak Entity**: An entity that depends on the existence of another entity and cannot be uniquely identified by its attributes alone (e.g., Order Item depends on an Order).
	- **Associative Entity**: An entity used to resolve many-to-many relationships, representing an extra table.
![[Pic-Entity.png]]
- **Attributes**: Represented by an oval containing the attribute's name in Chen notation.
	- **Key Attribute:** an attribute that uniquely identifies a particular entity. The name is underscored (e.g., `CustomerID`).
	- **Composite Attributes:** Attributes that can be subdivided into smaller parts (e.g., `address` into street name, city, state, zip code).
	- **Multivalued Attribute**: An attribute that can have more than one value (e.g., multiple phone numbers).
	- **Derived Attribute**: An attribute whose value is based on another attribute (e.g., Area derived from Radius).
![[Pic-Attribute.png]]
- **Relationships**: Connect entities and describe how they interact. Represented by a diamond in Chen's notation.
	- **One-to-one (1:1)**
	- **One-to-many (1:N)**
	- **Many-to-many (N:N)**
![[Pic-Def-Relation.png]]
![[Pic-Relationship.png]]
- **Participation Constraints**
	- **Total participation**: Every entity in the set is involved in the relationship.
	- **Partial participation:** Not all entities in the set are involved in the relationship.
#### 3. How to Draw an ER Diagram
- **Identify all entities** in the system. Create rectangles and name them properly.
- **Identify relationships** between entities. Connect them with a line and add a diamond in the middle describing the relationship.
- **Add attributes** for entities, giving meaningful names.
#### 4. ERD Examples and Problem Resolution
- **Many-to-Many Relationship Problem**: A direct many-to-many relationship between `Customer` and `Product` (e.g., a customer buys many products, and a product is bought by many customers) is problematic in relational databases. It leads to data duplication and difficulty in tracking.
	- **Solution:** Introduce an **associative entity** (like `Order` or `Order Detail`) to resolve many-to-many relationship into two one-to-many relationships.
		- `Customer` 1:N `Order`
		- `Product` 1:N `OrderDetail`
		- `Order` 1:N `OrderDetail`
- **Composite Primary Key**: A primary key consisting of two or more attributes that uniquely identify a record (e.g., `(CustomerID, ProductID, OrderDate)` in a combined Order table or `(OrderID, ProductID)` in an Order Detail table).
#### 5. Implementing an ER Diagram: Order of Table Creation.
When implementing an ERD in a DBMS, the order of table creation is crucial due to foreign key constraints. **Parent tables (those whose primary keys are referenced as foreign keys in other tables) must be created before child tables (those containing the foreign keys).**
## IV. Database Normalization
**Normalization** is a database design technique that reduces data redundancy. It involves dividing larger tables into smaller, more manageable tables and linking them using relationships.
#### 1. Why Database Normalization?
Normalization aims to prevent anomalies that can occur in unnormalized databases:
- **Insertion Anomalies:** Occur when data cannot be inserted due to missing attributes or the need to insert redundant information.
![[Pic-DB-Insertion.png]]
	- **Redundant data insertion:** Inserting a new student into a course might require re-inserting course information that already exists.
![[Pasted image 20250713231257.png]]
	- **Partial Data Insertion**: Adding a new course without enrolled students might be difficult if course details are tied to student records.
![[Pasted image 20250713231305.png]]
	- **Null Value Issues**: If a new student is admitted without course enrollment, inserting their data might lead to null values in course-related columns.
![[Pasted image 20250713231313.png]]
- **Updation Anomalies:** Occur when changes to repeated data items are not consistently applied, leading to inconsistencies.
![[Pasted image 20250713230845.png]]
	- **Redundant Data Update:** If an instructor's name changes, the change must be made in multiple rows.
![[Pasted image 20250713231036.png]]
	- **Inconsistent Data**: If only one instance is updated, the database will contain conflicting information.
![[Pasted image 20250713231052.png]]
- **Delete Anomalies**: Occur when deleting one part of the data unintentionally deletes other necessary information.
![[Pasted image 20250713231536.png]]
	- **Unintended Data Loss**: Deleting a student's record might inadvertently remove information about courses they were enrolled in if stored in the same table.
![[Pasted image 20250713231545.png]]
	- **Orphan Records**: Deleting a record referenced by others can lead to orphaned data.
#### 2. Terminology
- **Super Key**: A super key is any set of one or more attributes (columns) of a relation/table that **uniquely** identifies each tuple (row) in that relation.
- **Candidate Key**: A candidate key is a **minimal** super key. It uniquely identifies tuples (so it's a super key), **and no proper subset** of it is also a super key. In other words, we can't drop any attribute from a candidate key without losing uniqueness.

*Example: Consider a table **Student(ID, Email, Name, Major)** where **ID** is unique for each student, and **Email** is also unique.*
	- Super keys include: `{ID}, {Email}, {ID, Email}, {ID, Name}, {ID, Major}, {ID, Name, Major},`... and even `{ID, Email, Name, Major}`
	- **Candidate keys** are the **minimal** ones: `{ID}`, `{Email}`. We cannot drop any attribute from these and still maintain uniqueness.

- **Primary Key:** A single column value (or set of columns) is chosen to uniquely identify a database record.
![[Pasted image 20250713234523.png]]
#### 3. Normalization Forms
Normalization forms provide a set of guidelines to structure databases:
##### a. First Normal Form (1NF)
A relation is in 1NF if all its attributes have an **atomic value**.
**Conditions:**
- All attributes (columns) contain only **atomic (indivisible) values**.
- Each column contains values of a **single type**.
- Each record (row) is **unique**, identifiable by a primary key.
- There are no **repeating groups or arrays** in any row.
![[Pasted image 20250713235010.png]]
*Example of a non-1NF table:* `Phone Number` contains multiple values in a single cell. To achieve 1NF, each phone number be on a separate row, making each cell atomic and each row unique.
##### b. Second Normal Form (2NF)
A relation is in 2NF if it is in 1NF and all non-key attributes are **fully functionally dependent on the primary key**. This means **no partial dependencies.**
	`Partial Dependency`: Occurs when a non-key attribute is dependent on only a *part* of the primary key (if the primary key is composite).
![[Pasted image 20250713235459.png]]![[Pasted image 20250713235507.png]]
*Example of a non-2NF table*: If `(Student Code, Project ID)` is the composite primary key, and `Project Name` only depends on `Project ID` (part of the PK), it's not in 2NF. To achieve 2NF, decompose the table into smaller tables where non-key attributes are fully dependent on the entire primary key.
##### c. Third Normal Form (3NF)
A relation is in 3NF if it is 2NF and there is **no transitive dependency**.
	`Transitive Dependency`: Occurs when a non-key attribute depends on another non-key attribute, rather than directly on the primary key. If `X->Y` and `Y->Z`, then `X->Z` is a transitive dependency (where `Y` is not a super key and `Y` does not determine `X`).
![[Pasted image 20250714000213.png]]![[Pasted image 20250714000241.png]]
*Example of a non-3NF table*: If `Student Code` is PK, `Student->Student Zipcode`, and `Student Zipcode->Student City`. Here `Student City` transitively depends on `Student Code` through `Student Zipcode`. To achieve 3NF, decompose the table to remove transitive dependencies. 
##### d. Boyce-Codd Normal Form (BCNF/3.5 NF)
An advanced version of 3NF with additional constraints.
**Conditions:**
- The table must be in 3NF.
- For every non-trivial functional dependency `X->Y`, `X`**must be a super key** of the table. This means `X` cannot be a non-prime attribute if **Y** is a prime attribute.
	`Trivial Dependency`: A function dependency $X\rightarrow Y$ is **trivial** if $\begin{equation*}Y\subseteq X\end{equation*}$, i.e. every attribute on the right side already appears on the left.
![[Pasted image 20250714011836.png]]![[Pasted image 20250714011844.png]]
*Example of a non-BCNF table:* 
- Candidate keys: `(Student ID, Course ID)`, `(Student ID, Instructor ID)`.
- Functional Dependencies: `Instructor ID->Course ID` (each instructor teaches only one course), `Instructor ID->Instructor Name`.
Here, `Instructor ID` is not a super key, but it determines `Course ID`. This violates BCNF.
*To achieve BCNF*: Decompose the table based on the violating functional dependency.
##### e. Fourth Normal Form (4NF)
**Conditions:**
- It should be in BCNF
- The table should **not have any Multi-valued Dependency (MVD)**.
	`Multi-value Dependency (MVD)`:
	- For a dependency `A->->B` (A multi-determines B), if for a single value of `A`, multiple values of `B` exist, then the table may have an MVD.
	- A table must have at least 3 columns for an MVD to exist.
	- For a relation `R(A, B, C)`, if there is an MVD between `A` and `B`, then `B` and `C` should be independent of each other.
![[Pasted image 20250714013141.png]]*Example of a non-4NF table*: A model can have multiple colors, and a model can be assembled at multiple locations, independently of each other. This creates redundant entries like `M1, Red, Factory_A` and `M1, Red, Factory_B`. 
*To achieve 4NF*: Decompose the table to eliminate MVDs.
- `Model_Color` table: `Primary key(Model_ID, Color)`
- `Model_Assembly_Location` table: `Primary key(Model_ID, Assembly_Location)`
##### f. Fifth Normal Form (5NF)
**Conditions:**
- It's in 4NF.
- If the table can be further broken down to remove redundancy and anomaly, and then re-joined using candidate keys without losing original data or creating new records (lossless join decomposition), it's not in 5NF.
- In other words, combining two or more deconstructed tables should not result in loss of records or creation of new records.
**A relation is in 5NF if it is in 4NF and every decomposition of the relation into smaller tables is a lossless join decomposition, and it cannot be further decomposed while maintaining losslessness.**
## V. Advanced SQL Queries
#### 1. SQL JOINs
![[Pasted image 20250714101105.png]]
Joins are used to combine rows from two or more tables based on a related column between them.
- **INNER JOIN**: Returns only the rows where there is match in *both* tables based on the join condition.
```MySQL
SELECT ...
FROM table1
INNER JOIN table2 ON table1.column = table2.column;
```
![[Pasted image 20250714014805.png]]
```MySQL
-- Example: Get the order id, first and last name of every customer placing orders
SELECT o.order_id, first_name, last_name
FROM orders o 
INNER JOIN customers c
	ON o.customer_id = c.customer_id
```
![[Pasted image 20250714015211.png]]
```MySQL
-- Example: Join the order_items table with the products table return the product_id, name, quantity, unit_price, and price = quantity * unit_price.

SELECT oi.product_id, p.name, oi.quantity, oi.unit_price, oi.quantity * oi.unit_price AS price
FROM order_items oi
JOIN products p
on oi.product_id = p.product_id
```
- **SELF JOIN**
Joining a table to itself. This is useful when data in one column depends on data in another column *within the same table*.
![[Pasted image 20250714015628.png]]
*Example:* Let take a look at the sql_hr schema, here is the data from the employees table. This is the ID of the manager for that employee, and we can see that the manager ID is related back to the same table. Get the first and last name of every employee and their respective manager.
```MySQL
USE sql_hr;

SELECT 
	e.employee_id,
	e.first_name,
	e.last_name,
	m.employee_id as manager_id,
	m.first_name,
	m.last_name
FROM employees e
JOIN employees m
	ON e.reports_to = m.employee_id;
```
![[Pasted image 20250714015929.png]]
Note: When performing a self-join, we **must use different aliases** for the same table to distinguish between the two "copies" of the table.
- **JOINING MULTIPLE TABLES**: We can join more than two tables by chaining `JOIN` clauses.
![[Pasted image 20250714100521.png]]
*Example:* We want to get the order_id, order_date from the orders table, the first and last name of the customer placing the order, and the status of that order?
```MySQL
SELECT 
	o.order_id, 
	o.order_date,
	c.last_name,
	c.first_name,
	s.name AS status
FROM orders o
JOIN customers c
	ON o.customer_id = c.customer_id
JOIN order_statuses s
	ON o.status = s.order_status_id;
```
*Example:* From the invoicing database, retrieve respective to payments table:
- payment_id, date, amoint from payments table
- name, phone from clients table
- the invoice number, invoice_total, payment_total from invoices table
- and the payment method name from from payment_methods table
![[Pasted image 20250714102011.png]]
```MySQL
USE sql_invoicing;

SELECT 
	p.payment_id, p.date, p.amount,
	c.name, c.phone,
	i.number, i.invoice_total, i.payment_total,
	pm.name AS payment_method
FROM payments p
JOIN clients c ON p.client_id = c.client_id
JOIN invoices i ON i.client_id = p.client_id
JOIN payment_methods pm ON
pm.payment_method_id = p.payment_method;
```
- **COMPOUND JOIN CONDITIONS**: Used when tables are related by a **composite primary key**, meaning multiple columns are needed to uniquely identify a record. ![[Pasted image 20250714103104.png]]
*Example*: Retrieve notes for respective order items where `order_items` and `order_item_notes` tables are joined on both `order_id` and `product_id`.
```MySQL
SELECT * 
FROM order_items oi
JOIN order_items_notes oin
	ON oi.order_id = oin.order_id
	AND oi.product_id = oin.product_id;
```
- **IMPLICIT JOIN SYNTAX**: An older syntax for joins using `FROM table1, table2 WHERE condition`. While functional, it's generally **harder to distinguish between join conditions and filtering conditions** and is less recommended than explicit `JOIN` syntax.
	- *Explicit JOIN Example*:
```MySQL
SELECT *
FROM orders o
JOIN customers c
	ON o.customer_id = c.customer_id;
```
-  *Implicit JOIN example:*
```MySQL
SELECT *
FROM orders o, customers c
WHERE o.customer_id = c.customer_id;
```
- **OUTER JOIN (LEFT JOIN, RIGHT JOIN)**: Returns all records from one table and the matching records from the other table. If no match, NULLs are returned for the columns from the non-matching table.
![[Pasted image 20250714104454.png]]
- **INNER JOIN Limitation:** Only returns customers who have placed an order.
- **LEFT JOIN**: Returns all records from the **left table** (first table in `FROM` clause) and the matching records from the right table.
*Example:* 
```MySQL
SELECT c.customer_id, c.first_name, o.order_id
FROM customers c
LEFT JOIN orders o
	ON c.customer_id = o.customer_id
ORDER BY c.customer_id
```
![[Pasted image 20250714104907.png]]
This will show all customer IDs, even those without orders, with `NULL` for `order_id` if no order exists.
- **RIGTH JOIN**: Returns all records from the **right table** and the matching records from the left table.
*Example:* 
```MySQL
SELECT c.customer_id, c.first_name, o.order_id
FROM customers c
RIGHT JOIN orders o
	ON c.customer_id = o.customer_id
ORDER BY c.customer_id;
```
![[Pasted image 20250714105446.png]]
This will return all order IDs, even if a customer ID is not explicitly listed in the `customers` table, though this scenario is less common.
- **Chaining Outer Joins**: You can chain `LEFT JOIN` (or `RIGHT JOIN`) to include data from multiple tables even if there's no direct match.
*Example:* Get customer ID, first name, order ID, and shipper name for that order, including customers without orders and orders without shippers.
- **USING CLAUSE**: A simplified `JOIN` syntax that can be used when the columns in the join condition have the **same name** in both tables.
	- *Traditional Join:* `ON c.customer_id = o.customer_id;`
	- *USING Clause:* `USING (customer_id);`
	- This is especially useful for **compound join conditions** with multiple matching column names.
		- *Traditional:* `ON O.order_id = n.order_id AND o.product_id = n.product_id;`
		- *USING:* `USING (order_id, product_id);`
#### 2. UNIONS
The `UNION` operator is used to combine the result sets of two or more `SELECT` statements into a single result set.
**Conditions:**
- Each `SELECT` statement within the `UNION` must have the **same number of columns**.
- The columns must have **similar data types**.
- The columns in each `SELECT` statement must be in the **same order**.
*Example*: Categorize customers into tiers (Bronze: < 2000 points, Silver: 2000-3000 points, Gold: >3000 points).
```MySQL
SELECT customer_id, first_name, points, 'Bronze' AS tier
FROM customers
WHERE points < 2000
UNION
SELECT customer_id, first_name, points, 'Silver' AS tier
FROM customers
WHERE points BETWEEN 2000 AND 3000
UNION
SELECT customer_id, first_name, points, 'Gold' AS tier
FROM customers
WHERE points < 3000;
```
#### 3. Common Table Expressions (CTE)
A CTE (Common Table Expression) is a named temporary result set that you can reference within a single SQL statement (SELECT, INSERT, UPDATE, or DELETE). They improve readability and maintainability of complex queries.
![[Pasted image 20250714111000.png]]![[Pasted image 20250714111032.png]]
*Example:* We need to sum all the invoice values, group by the client id, then we have to order them by the sum. After that we take the first client id, which is the person have the highest total invoice and query their information.
```MySQL
WITH invoice_amount AS(
	SELECT client_id, SUM(invoice_total) AS invoice_amount
	FROM invoices
	GROUP BY client_id
	ORDER BY SUM(invoice_total) DESC
	LIMIT 1
)
SELECT c.client_id, c.name, i.invoice_amount
FROM clients c 
JOIN invoice_amount i
USING (client_id);
```
#### 4. SQL Subqueries
A **subquery** (or inner query) is a query nested inside another SQL query. Subqueries are used to return data will be used in the main query as a condition.
*Example:* 
```MySQL
SELECT client_id, name,
	(SELECT SUM(invoice_total)
	FROM invoices i
	WHERE c.client_id = i.client_id) AS invoice_amount
FROM clients c
ORDER BY invoice_amount DESC
LIMIT 1;
```
The Subquery will be calculated first where it will calculate the sum of invoice based on the condition given by ours main query.
#### 5. SQL Temp Table
A **temporary table** is a special type of table that stores a temporary result set. These tables are only visible to the session that created them and are automatically dropped when the session ends.
*Example:*
```MySQL
CREATE TEMPORARY TABLE temp_invoice(
client_id INT,
invoice_sum DECIMAL(10,2),
invoice_avg DECIMAL(10,2)
);

INSERT INTO temp_invoice
SELECT client_id,
	SUM(invoice_total) AS invoice_sum,
	AVG(invoice_total) AS invoice_avg
FROM invoices
GROUP BY client_id;

SELECT * FROM temp_invoice;
```
![[Pasted image 20250714113245.png]]
```MySQL
SELECT client_id, name,
	(SELECT invoice_sum
	FROM temp_invoice
	WHERE c.client_id = client_id) AS invoice_sum
FROM clients c
ORDER BY invoice_sum DESC
LIMIT 1;
```
![[Pasted image 20250714113447.png]]
#### 6. SQL Stored Procedures
A **stored procedure** is a pre-compiled collection of one or more SQL statements or a batch of SQL statements that are stored in the database. They can be executed by name can accept parameters, improving performance and security.
*Example:* We want a function to create our temporary table and insert the data into it.
```MySQL
DELIMITER//
CREATE PROCEDURE create_temp_invoice()
BEGIN
	DROP TABLE IF EXISTS temp_invoice;
	CREATE TEMPORARY TABLE temp_invoice(
		client_id INT,
		invoice_sum DECIMAL(10,2),
		invoice_avg DECIMAL(10,2));

	INSERT INTO temp_invoice
	SELECT client_id, SUM(invoice_total) AS invoice_sum, AVG(invoice_total) AS invoice_avg
	FROM invoices
	GROUP BY client_id;
END;
//
DELIMITER;
```
If we check in the sql_invoicing schema - Stored Procedures section we will see our created procedures.
![[Pasted image 20250714114209.png]]
To use it, we simply call that procedure.
```MySQL
CALL create_temp_invoice();
```
#### 7. SQL Trigger
A **trigger** is a set of SQL statements that automatically run (are "triggered") every time a specified event (insert, update, or delete) occurs on a particular table.
*Example*: A trigger could insert a new row into a `hiring` table every time a row is inserted into the `employees` table.
```MySQL
CREATE TABLE employees(
	id bigint primary key auto_increment,
	first_name varchar(100),
	last_name varchar(100)
);

CREATE TABLE hiring(
	emp_id bigint,
	hire_date timestamp
);

CREATE TRIGGER 
	hire_log -- the name of the trigger
	AFTER -- before or after the change
	INSERT -- which kind of change, (insert, update, or delete)
	ON employees -- the name of the table to watch for changes
	FOR EACH ROW -- boilerplate to begin the trigger body
	INSERT INTO hiring values (new.id, current_time()) -- trigger body
; 
```