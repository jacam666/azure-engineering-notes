import Link from "next/link";

export default function AzureSynapseReference() {
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
            Azure Synapse
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            Azure Synapse Reference
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base">
            Serverless SQL pool patterns for querying external data, creating external tables, writing results back to storage, and common Synapse-specific techniques.
          </p>
        </section>

        {/* Querying External Data */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-2xl">Querying External Data</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Use OPENROWSET to query files in Azure Blob Storage or ADLS Gen2 without loading data first.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-6">
            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Query CSV from Blob Storage</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Read a CSV file directly from Azure Blob Storage using the serverless SQL pool. FIRSTROW = 2 skips the header row.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <pre className="whitespace-pre-wrap">
                  <code>{`SELECT *\nFROM OPENROWSET(\n    BULK 'https://jamiedatalake666.blob.core.windows.net/synapse-data/processed_energy.csv',\n    FORMAT = 'CSV',\n    PARSER_VERSION = '2.0',\n    FIRSTROW = 2\n) AS data;`}</code>
                </pre>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Query with Explicit Column Types</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Define the schema inline using WITH to enforce data types on the incoming file columns.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <pre className="whitespace-pre-wrap">
                  <code>{`SELECT *\nFROM OPENROWSET(\n    BULK 'https://<storage>.blob.core.windows.net/<container>/file.csv',\n    FORMAT = 'CSV',\n    PARSER_VERSION = '2.0',\n    FIRSTROW = 2\n) WITH (\n    date DATE,\n    amount FLOAT,\n    fueltype VARCHAR(50),\n    transaction_category VARCHAR(50),\n    month VARCHAR(10)\n) AS data;`}</code>
                </pre>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Query Parquet File</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Read a Parquet file from ADLS Gen2. Schema is inferred automatically from the file metadata.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <pre className="whitespace-pre-wrap">
                  <code>{`SELECT *\nFROM OPENROWSET(\n    BULK 'https://<storage>.dfs.core.windows.net/<container>/file.parquet',\n    FORMAT = 'PARQUET'\n) AS data;`}</code>
                </pre>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Query a Folder Wildcard</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Use wildcards to query multiple partitioned files in one statement.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <pre className="whitespace-pre-wrap">
                  <code>{`SELECT *\nFROM OPENROWSET(\n    BULK 'https://<storage>.dfs.core.windows.net/<container>/year=2026/month=*/*.parquet',\n    FORMAT = 'PARQUET'\n) AS data;`}</code>
                </pre>
              </div>
            </article>
          </div>
        </section>

        {/* External Tables */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-2xl">External Tables</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Point a reusable table definition at files in storage so queries look like standard SQL.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-6">
            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Create External Data Source</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Register the storage location once so all external objects can reference it by name.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <pre className="whitespace-pre-wrap">
                  <code>{`CREATE EXTERNAL DATA SOURCE my_storage\nWITH (\n    LOCATION = 'https://<storage>.dfs.core.windows.net/<container>'\n);`}</code>
                </pre>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Create External File Format</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Define the file format separately so it can be reused across multiple external table definitions.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <pre className="whitespace-pre-wrap">
                  <code>{`CREATE EXTERNAL FILE FORMAT csv_format\nWITH (\n    FORMAT_TYPE = DELIMITEDTEXT,\n    FORMAT_OPTIONS (\n        FIELD_TERMINATOR = ',',\n        FIRST_ROW = 2\n    )\n);`}</code>
                </pre>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Create External Table</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Map a table definition to a file path so you can query it with a simple SELECT.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <pre className="whitespace-pre-wrap">
                  <code>{`CREATE EXTERNAL TABLE transactions_ext (\n    date DATE,\n    amount FLOAT,\n    fueltype VARCHAR(50),\n    transaction_category VARCHAR(50),\n    month VARCHAR(10)\n)\nWITH (\n    LOCATION = '/processed_energy.csv',\n    DATA_SOURCE = my_storage,\n    FILE_FORMAT = csv_format\n);`}</code>
                </pre>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Query External Table</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Once defined, query the external table exactly like a standard table.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <pre className="whitespace-pre-wrap">
                  <code>{`SELECT transaction_category, SUM(amount) AS total\nFROM transactions_ext\nGROUP BY transaction_category;`}</code>
                </pre>
              </div>
            </article>
          </div>
        </section>

        {/* CETAS */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-2xl">CETAS — Write Results to Storage</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Create External Table As Select materialises query output back to ADLS as files.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-6">
            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">CETAS to Parquet</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Run a query and persist its results as Parquet files in a storage folder.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <pre className="whitespace-pre-wrap">
                  <code>{`CREATE EXTERNAL TABLE monthly_summary\nWITH (\n    LOCATION = '/output/monthly_summary/',\n    DATA_SOURCE = my_storage,\n    FILE_FORMAT = parquet_format\n) AS\nSELECT month, SUM(amount) AS total_amount\nFROM transactions_ext\nGROUP BY month;`}</code>
                </pre>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Create Parquet File Format</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Define a Parquet output format to use in CETAS statements.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <pre className="whitespace-pre-wrap">
                  <code>{`CREATE EXTERNAL FILE FORMAT parquet_format\nWITH (\n    FORMAT_TYPE = PARQUET,\n    DATA_COMPRESSION = 'org.apache.hadoop.io.compress.SnappyCodec'\n);`}</code>
                </pre>
              </div>
            </article>
          </div>
        </section>

        {/* Serverless SQL Tips */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-2xl">Serverless SQL Tips</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Common patterns and gotchas when working in Synapse serverless SQL pools.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-6">
            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Filter by Partition Path</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Use filepath() to expose the partition folder as a column and filter on it to reduce data scanned.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <pre className="whitespace-pre-wrap">
                  <code>{`SELECT data.filepath(1) AS year, *\nFROM OPENROWSET(\n    BULK 'https://<storage>.dfs.core.windows.net/<container>/year=*/data.parquet',\n    FORMAT = 'PARQUET'\n) AS data\nWHERE data.filepath(1) = '2026';`}</code>
                </pre>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Create a View Over OPENROWSET</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Wrap OPENROWSET in a view so downstream queries stay clean and storage paths are centralised.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <pre className="whitespace-pre-wrap">
                  <code>{`CREATE VIEW vw_transactions AS\nSELECT *\nFROM OPENROWSET(\n    BULK 'https://<storage>.blob.core.windows.net/<container>/processed_energy.csv',\n    FORMAT = 'CSV',\n    PARSER_VERSION = '2.0',\n    FIRSTROW = 2\n) AS data;`}</code>
                </pre>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
