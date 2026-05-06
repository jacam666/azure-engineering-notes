export default function SQLCommands() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-10 sm:px-6 lg:px-8">
        <section className="rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-100 via-white to-zinc-100 px-6 py-8 text-left shadow-sm dark:border-zinc-800 dark:from-zinc-900 dark:via-zinc-950 dark:to-black sm:px-10 sm:py-12">
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
        <section>
            <h2 className="mt-10 text-xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-2xl">Common SQL Commands</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Here are some frequently used SQL commands for various database operations.</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-6">

                <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
                    <h4 className="text-xl font-semibold">Select All Records</h4>
                    <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Retrieve all records from a specific table.</p>
                    <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                        <span className="font-medium">Command:</span> <code>SELECT * FROM table_name;</code>
                    </div>
                </article>

                <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
                    <h4 className="text-xl font-semibold">Select with Condition</h4>
                    <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Retrieve rows that match a specific condition.</p>
                    <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                        <span className="font-medium">Command:</span> <code>SELECT * FROM table_name WHERE column = &apos;value&apos;;</code>
                    </div>
                </article>

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
                    <h4 className="text-xl font-semibold">Order Results</h4>
                    <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Sort query results by a column in ascending or descending order.</p>
                    <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                        <span className="font-medium">Command:</span> <code>SELECT * FROM table_name ORDER BY column DESC;</code>
                    </div>
                </article>

                <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
                    <h4 className="text-xl font-semibold">Count Rows</h4>
                    <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Return the total number of rows in a table or matching a condition.</p>
                    <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                        <span className="font-medium">Command:</span> <code>SELECT COUNT(*) FROM table_name;</code>
                    </div>
                </article>

                <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
                    <h4 className="text-xl font-semibold">Group and Aggregate</h4>
                    <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Group rows by a column and apply an aggregate function like SUM or COUNT.</p>
                    <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                        <span className="font-medium">Command:</span> <code>SELECT column, COUNT(*) FROM table_name GROUP BY column;</code>
                    </div>
                </article>

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
                    <h4 className="text-xl font-semibold">Distinct Values</h4>
                    <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Return only unique values from a column, removing duplicates.</p>
                    <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                        <span className="font-medium">Command:</span> <code>SELECT DISTINCT column FROM table_name;</code>
                    </div>
                </article>

                <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
                    <h4 className="text-xl font-semibold">Limit Results</h4>
                    <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Restrict the number of rows returned by a query.</p>
                    <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                        <span className="font-medium">Command:</span> <code>SELECT * FROM table_name LIMIT 10;</code>
                    </div>
                </article>

            </div>

        </section>
      </main>
    </div>
  );
}
