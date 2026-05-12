import Link from "next/link";

export default function SQLQueries() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-10 sm:px-6 lg:px-8">
        <section className="rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-100 via-white to-zinc-100 px-6 py-8 text-left shadow-sm dark:border-zinc-800 dark:from-zinc-900 dark:via-zinc-950 dark:to-black sm:px-10 sm:py-12">
          <div className="flex w-full flex-col items-start gap-4 sm:flex-row sm:items-center">
            <button className="rounded bg-zinc-200 px-3 py-2 text-left transition-colors hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700">
              <Link href="/">&#8592; Back to Home</Link>
            </button>
          </div>
          <p className="mt-6 inline-flex rounded-full border border-zinc-300 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
            SQL Queries
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            SQL Query Reference
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base">
            Practical query patterns for filtering, joining, aggregating, and analyzing relational data quickly.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-2xl">Filtering & Sorting</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Build reliable read queries with predicates, ordering, and limits.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-6">
            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Create Transactions Table</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Create the base schema for storing fuel transactions.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <pre className="whitespace-pre-wrap">
                  <code>{`CREATE TABLE transactions (\n    date DATE,\n    amount FLOAT,\n    fueltype VARCHAR(50),\n    transaction_category VARCHAR(50),\n    month VARCHAR(10)\n);`}</code>
                </pre>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Conditional Filter</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Return rows that match one or more conditions.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>SELECT * FROM orders WHERE status = &apos;Completed&apos; AND total_amount &gt; 1000;</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Pattern Match</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Find text values using wildcard matching.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>SELECT customer_name FROM customers WHERE customer_name LIKE &apos;A%&apos;;</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Ordered Top N</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Sort by metric and keep only the highest rows.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>SELECT product_id, revenue FROM product_sales ORDER BY revenue DESC LIMIT 10;</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Date Range Filter</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Restrict records to a specific reporting window.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>SELECT * FROM events WHERE event_date BETWEEN &apos;2026-01-01&apos; AND &apos;2026-03-31&apos;;</code>
              </div>
            </article>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-2xl">Joins & Relationships</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Combine normalized tables for enriched insights.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-6">
            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Inner Join</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Keep only records that match in both tables.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>SELECT o.order_id, c.customer_name FROM orders o INNER JOIN customers c ON o.customer_id = c.customer_id;</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Left Join</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Preserve all rows from the left table with optional right-side matches.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>SELECT c.customer_id, o.order_id FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id;</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Join With Aggregation</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Group joined data to produce customer-level metrics.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>SELECT c.customer_name, COUNT(o.order_id) AS orders_count FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id GROUP BY c.customer_name;</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Self Join</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Relate rows in the same table, such as employee-manager links.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>SELECT e.employee_name, m.employee_name AS manager_name FROM employees e LEFT JOIN employees m ON e.manager_id = m.employee_id;</code>
              </div>
            </article>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-2xl">Aggregation & Analysis</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Summarize data and compute analytical metrics for dashboards and reports.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-6">
            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Group By With Total</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Calculate totals by category.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>SELECT region, SUM(total_amount) AS total_revenue FROM orders GROUP BY region;</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">HAVING Clause</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Filter grouped results based on aggregate values.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>SELECT region, COUNT(*) AS order_count FROM orders GROUP BY region HAVING COUNT(*) &gt;= 100;</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Window Function Rank</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Rank rows within each category without collapsing detail rows.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>SELECT region, salesperson, revenue, RANK() OVER (PARTITION BY region ORDER BY revenue DESC) AS sales_rank FROM sales;</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Common Table Expression</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Structure complex logic into readable query steps.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>WITH monthly AS (SELECT DATE_TRUNC(&apos;month&apos;, order_date) AS month, SUM(total_amount) AS revenue FROM orders GROUP BY DATE_TRUNC(&apos;month&apos;, order_date)) SELECT * FROM monthly ORDER BY month;</code>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
