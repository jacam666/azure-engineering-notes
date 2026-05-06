import Link from "next/link";

export default function PandasReference() {
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
            Pandas Reference
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            Pandas Cheat Sheet
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base">
            A practical reference for the most commonly used pandas methods for loading, inspecting, cleaning, transforming, and exporting data.
          </p>
        </section>

        {/* Loading Data */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-2xl">Loading Data</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Read data into a DataFrame from various file formats.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-6">

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Read CSV</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Load a CSV file into a DataFrame.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>df = pd.read_csv(&apos;file.csv&apos;)</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Read Excel</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Load an Excel file into a DataFrame.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>df = pd.read_excel(&apos;file.xlsx&apos;)</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Read JSON</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Load a JSON file into a DataFrame.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>df = pd.read_json(&apos;file.json&apos;)</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Read SQL Query</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Load results from a SQL query into a DataFrame.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>df = pd.read_sql(&apos;SELECT * FROM t&apos;, conn)</code>
              </div>
            </article>

          </div>
        </section>

        {/* Inspecting Data */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-2xl">Inspecting Data</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Quickly understand the shape and content of your DataFrame.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-6">

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Preview Rows</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Show the first or last N rows of the DataFrame.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>df.head(5) &nbsp;/&nbsp; df.tail(5)</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Shape and Info</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Check row/column counts and column data types.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>df.shape &nbsp;/&nbsp; df.info()</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Summary Statistics</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Get count, mean, min, max and percentiles for numeric columns.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>df.describe()</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Column Names and Types</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">List all column names and their data types.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>df.columns &nbsp;/&nbsp; df.dtypes</code>
              </div>
            </article>

          </div>
        </section>

        {/* Cleaning Data */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-2xl">Cleaning Data</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Handle missing values, duplicates, and column formatting.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-6">

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Drop Missing Values</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Remove rows that contain any NaN values.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>df.dropna()</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Fill Missing Values</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Replace NaN values with a specified value.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>df.fillna(0)</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Drop Duplicates</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Remove duplicate rows from the DataFrame.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>df.drop_duplicates()</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Rename Columns</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Rename one or more columns by mapping old names to new names.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>df.rename(columns=&#123;&apos;old&apos;: &apos;new&apos;&#125;)</code>
              </div>
            </article>

          </div>
        </section>

        {/* Filtering & Selecting */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-2xl">Filtering & Selecting</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Select rows and columns with precision using loc, iloc, and conditions.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-6">

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Select Column</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Select a single column as a Series.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>df[&apos;column_name&apos;]</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Filter by Condition</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Keep only rows where a condition is true.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>df[df[&apos;amount&apos;] &gt; 0]</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">loc — Label Based</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Select rows and columns by label.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>df.loc[0, &apos;column_name&apos;]</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">iloc — Position Based</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Select rows and columns by integer position.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>df.iloc[0, 2]</code>
              </div>
            </article>

          </div>
        </section>

        {/* Transforming Data */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-2xl">Transforming Data</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Apply functions, convert types, and create new columns.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-6">

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Apply a Function</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Apply a function to each value in a column.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>df[&apos;col&apos;].apply(lambda x: x * 2)</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Convert to DateTime</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Parse a string column into datetime objects.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>pd.to_datetime(df[&apos;date&apos;])</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">String Methods</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Use .str accessor for string operations on a column.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>df[&apos;col&apos;].str.lower()</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Add New Column</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Create a new column from existing column values.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>df[&apos;new_col&apos;] = df[&apos;a&apos;] + df[&apos;b&apos;]</code>
              </div>
            </article>

          </div>
        </section>

        {/* Grouping & Aggregating */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-2xl">Grouping & Aggregating</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Summarise data by category using groupby and aggregate functions.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-6">

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Group By</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Group rows by a column and apply an aggregate function.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>df.groupby(&apos;col&apos;)[&apos;val&apos;].sum()</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Multiple Aggregations</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Apply several aggregation functions at once.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>df.groupby(&apos;col&apos;).agg(&#123;&apos;val&apos;: [&apos;sum&apos;, &apos;mean&apos;]&#125;)</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Value Counts</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Count occurrences of each unique value in a column.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>df[&apos;col&apos;].value_counts()</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Pivot Table</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Summarise data in a pivot table with rows, columns, and values.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>df.pivot_table(values=&apos;v&apos;, index=&apos;r&apos;, columns=&apos;c&apos;)</code>
              </div>
            </article>

          </div>
        </section>

        {/* Exporting Data */}
        <section className="mt-10 mb-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-2xl">Exporting Data</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Save your processed DataFrame to a file.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-6">

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Export to CSV</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Save the DataFrame as a CSV file without the index column.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>df.to_csv(&apos;output.csv&apos;, index=False)</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Export to Excel</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Save the DataFrame as an Excel file.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>df.to_excel(&apos;output.xlsx&apos;, index=False)</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Export to JSON</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Save the DataFrame as a JSON file.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>df.to_json(&apos;output.json&apos;, orient=&apos;records&apos;)</code>
              </div>
            </article>

          </div>
        </section>

      </main>
    </div>
  );
}
