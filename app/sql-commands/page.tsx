import Link from "next/link";

export default function SQLCommands() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-10 sm:px-6 lg:px-8">
        <section className="rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-100 via-white to-zinc-100 px-6 py-8 text-left shadow-sm dark:border-zinc-800 dark:from-zinc-900 dark:via-zinc-950 dark:to-black sm:px-10 sm:py-12">
          <div className="mb-6">
            <button className="rounded bg-zinc-200 px-3 py-2 text-left transition-colors hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700">
              <Link href="/">&#8592; Back to Home</Link>
            </button>
          </div>
          <p className="inline-flex rounded-full border border-zinc-300 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
            SQL Commands
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            SQL Command Reference
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base">
            A collection of commonly used SQL commands and queries for database management and data manipulation.
          </p>
        </section>

        {/* Querying Data */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-2xl">Querying Data</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Core SELECT commands for reading data from tables.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-6">

                <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
                    <h4 className="text-xl font-semibold">Select All Records</h4>
                    <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Retrieve all records from a specific table.</p>
                    <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                        <span className="font-medium">Command:</span> <code>SELECT * FROM table_name;</code>
                    </div>
                </article>

                <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
                    <h4 className="text-xl font-semibold">Select Specific Columns</h4>
                    <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Retrieve only the columns you need instead of all of them.</p>
                    <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                        <span className="font-medium">Command:</span> <code>SELECT col1, col2 FROM table_name;</code>
                    </div>
                </article>

                <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
                    <h4 className="text-xl font-semibold">Distinct Values</h4>
                    <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Return only unique values from a column, removing duplicates.</p>
                    <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                        <span className="font-medium">Command:</span> <code>SELECT DISTINCT column FROM table_name;</code>
                    </div>
                </article>

                <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
                    <h4 className="text-xl font-semibold">Order Results</h4>
                    <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Sort query results by a column in ascending or descending order.</p>
                    <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                        <span className="font-medium">Command:</span> <code>SELECT * FROM table_name ORDER BY column DESC;</code>
                    </div>
                </article>

                <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
                    <h4 className="text-xl font-semibold">Limit Results</h4>
                    <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Restrict the number of rows returned by a query.</p>
                    <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                        <span className="font-medium">Command:</span> <code>SELECT * FROM table_name LIMIT 10;</code>
                    </div>
                </article>

                <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
                    <h4 className="text-xl font-semibold">Column Alias</h4>
                    <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Rename a column in the output using an alias.</p>
                    <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                        <span className="font-medium">Command:</span> <code>SELECT column AS alias FROM table_name;</code>
                    </div>
                </article>
            </div>
        </section>

        {/* Filtering Data */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-2xl">Filtering Data</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Narrow down results using conditions and pattern matching.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-6">

                <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
                    <h4 className="text-xl font-semibold">WHERE Condition</h4>
                    <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Retrieve rows that match a specific condition.</p>
                    <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                        <span className="font-medium">Command:</span> <code>SELECT * FROM table_name WHERE column = &apos;value&apos;;</code>
                    </div>
                </article>

                <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
                    <h4 className="text-xl font-semibold">AND / OR</h4>
                    <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Combine multiple conditions in a WHERE clause.</p>
                    <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                        <span className="font-medium">Command:</span> <code>WHERE col1 = &apos;a&apos; AND col2 &gt; 10;</code>
                    </div>
                </article>

                <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
                    <h4 className="text-xl font-semibold">LIKE — Pattern Match</h4>
                    <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Filter rows where a column matches a text pattern.</p>
                    <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                        <span className="font-medium">Command:</span> <code>WHERE column LIKE &apos;%value%&apos;;</code>
                    </div>
                </article>

                <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
                    <h4 className="text-xl font-semibold">IN — Match List</h4>
                    <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Filter rows where a column matches any value in a list.</p>
                    <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                        <span className="font-medium">Command:</span> <code>WHERE column IN (&apos;a&apos;, &apos;b&apos;, &apos;c&apos;);</code>
                    </div>
                </article>

                <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
                    <h4 className="text-xl font-semibold">BETWEEN — Range</h4>
                    <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Filter rows where a value falls within a range.</p>
                    <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                        <span className="font-medium">Command:</span> <code>WHERE column BETWEEN 10 AND 50;</code>
                    </div>
                </article>

                <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
                    <h4 className="text-xl font-semibold">IS NULL / IS NOT NULL</h4>
                    <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Filter rows where a column has or is missing a value.</p>
                    <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                        <span className="font-medium">Command:</span> <code>WHERE column IS NULL;</code>
                    </div>
                </article>
          </div>
        </section>

        {/* Modifying Data */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-2xl">Modifying Data</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Insert, update, and delete rows in a table.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-6">

                <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
                    <h4 className="text-xl font-semibold">Insert a Record</h4>
                    <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Add a new row of data into a table.</p>
                    <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                        <span className="font-medium">Command:</span> <code>INSERT INTO table_name (col1, col2) VALUES (&apos;val1&apos;, &apos;val2&apos;);</code>
                    </div>
                </article>

                <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
                    <h4 className="text-xl font-semibold">Update a Record</h4>
                    <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Modify existing data in a table based on a condition.</p>
                    <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                        <span className="font-medium">Command:</span> <code>UPDATE table_name SET column = &apos;value&apos; WHERE id = 1;</code>
                    </div>
                </article>

                <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
                    <h4 className="text-xl font-semibold">Delete a Record</h4>
                    <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Remove rows from a table that match a condition.</p>
                    <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                        <span className="font-medium">Command:</span> <code>DELETE FROM table_name WHERE id = 1;</code>
                    </div>
                </article>

                <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
                    <h4 className="text-xl font-semibold">Truncate Table</h4>
                    <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Remove all rows from a table quickly without logging individual deletes.</p>
                    <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                        <span className="font-medium">Command:</span> <code>TRUNCATE TABLE table_name;</code>
                    </div>
                </article>
          </div>
        </section>

        {/* Aggregates */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-2xl">Aggregates & Grouping</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Summarise and group data using aggregate functions.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-6">

                <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
                    <h4 className="text-xl font-semibold">Count Rows</h4>
                    <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Return the total number of rows matching a condition.</p>
                    <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                        <span className="font-medium">Command:</span> <code>SELECT COUNT(*) FROM table_name;</code>
                    </div>
                </article>

                <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
                    <h4 className="text-xl font-semibold">SUM / AVG / MIN / MAX</h4>
                    <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Calculate totals, averages, and min/max values on a numeric column.</p>
                    <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                        <span className="font-medium">Command:</span> <code>SELECT SUM(amount), AVG(amount) FROM table_name;</code>
                    </div>
                </article>

                <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
                    <h4 className="text-xl font-semibold">Group and Aggregate</h4>
                    <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Group rows by a column and apply an aggregate function.</p>
                    <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                        <span className="font-medium">Command:</span> <code>SELECT column, COUNT(*) FROM table_name GROUP BY column;</code>
                    </div>
                </article>

                <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
                    <h4 className="text-xl font-semibold">HAVING — Filter Groups</h4>
                    <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Filter grouped results after a GROUP BY using an aggregate condition.</p>
                    <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                        <span className="font-medium">Command:</span> <code>GROUP BY column HAVING COUNT(*) &gt; 5;</code>
                    </div>
                </article>
          </div>
        </section>

        {/* Joins */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-2xl">Joins</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Combine rows from two or more tables based on a related column.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-6">

                <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
                    <h4 className="text-xl font-semibold">Inner Join</h4>
                    <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Return rows where there is a match in both tables.</p>
                    <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                        <span className="font-medium">Command:</span> <code>SELECT * FROM a INNER JOIN b ON a.id = b.a_id;</code>
                    </div>
                </article>

                <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
                    <h4 className="text-xl font-semibold">Left Join</h4>
                    <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Return all rows from the left table, with matched rows from the right.</p>
                    <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                        <span className="font-medium">Command:</span> <code>SELECT * FROM a LEFT JOIN b ON a.id = b.a_id;</code>
                    </div>
                </article>

                <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
                    <h4 className="text-xl font-semibold">Right Join</h4>
                    <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Return all rows from the right table, with matched rows from the left.</p>
                    <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                        <span className="font-medium">Command:</span> <code>SELECT * FROM a RIGHT JOIN b ON a.id = b.a_id;</code>
                    </div>
                </article>

                <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
                    <h4 className="text-xl font-semibold">Full Outer Join</h4>
                    <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Return all rows from both tables, filling NULLs where there is no match.</p>
                    <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                        <span className="font-medium">Command:</span> <code>SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;</code>
                    </div>
                </article>
          </div>
        </section>

        {/* Schema Management */}
        <section className="mt-10 mb-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-2xl">Schema Management</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Create, modify, and remove tables and columns.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-6">

                <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
                    <h4 className="text-xl font-semibold">Create Table</h4>
                    <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Define a new table with specified columns and data types.</p>
                    <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                        <span className="font-medium">Command:</span> <code>CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(100));</code>
                    </div>
                </article>

                <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
                    <h4 className="text-xl font-semibold">Drop Table</h4>
                    <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Permanently delete a table and all its data from the database.</p>
                    <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                        <span className="font-medium">Command:</span> <code>DROP TABLE table_name;</code>
                    </div>
                </article>

                <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
                    <h4 className="text-xl font-semibold">Alter Table — Add Column</h4>
                    <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Add a new column to an existing table without losing data.</p>
                    <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                        <span className="font-medium">Command:</span> <code>ALTER TABLE table_name ADD column_name VARCHAR(50);</code>
                    </div>
                </article>

                <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
                    <h4 className="text-xl font-semibold">Alter Table — Drop Column</h4>
                    <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Remove a column from an existing table.</p>
                    <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                        <span className="font-medium">Command:</span> <code>ALTER TABLE table_name DROP COLUMN column_name;</code>
                    </div>
                </article>

                <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
                    <h4 className="text-xl font-semibold">Create Index</h4>
                    <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Add an index to a column to speed up queries on that column.</p>
                    <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                        <span className="font-medium">Command:</span> <code>CREATE INDEX idx_name ON table_name (column);</code>
                    </div>
                </article>

                <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
                    <h4 className="text-xl font-semibold">Create View</h4>
                    <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Save a query as a virtual table that can be reused like a real table.</p>
                    <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                        <span className="font-medium">Command:</span> <code>CREATE VIEW view_name AS SELECT * FROM table_name;</code>
                    </div>
                </article>
          </div>
        </section>

      </main>
    </div>
  );
}
