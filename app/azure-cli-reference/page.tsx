import Link from "next/link";

export default function AzureCLIReference() {
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
            Azure CLI
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            Azure CLI Reference
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base">
            Practical command patterns for daily Azure engineering tasks: authentication, deployment, troubleshooting, and operations.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-2xl">Authentication & Subscription</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Log in, inspect accounts, and select the target subscription safely.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-6">
            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Sign In</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Authenticate your CLI session interactively.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>az login</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">List Subscriptions</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">View all accessible subscriptions and IDs.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>az account list --output table</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Set Active Subscription</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Target the subscription for all subsequent commands.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>az account set --subscription "SUBSCRIPTION_NAME_OR_ID"</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Show Current Subscription</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Verify the active subscription before deployment.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>az account show --output table</code>
              </div>
            </article>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-2xl">Resource Groups & Deployments</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Create and inspect resource groups, then deploy infrastructure templates.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-6">
            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Create Resource Group</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Create a container for related Azure resources.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>az group create --name rg-demo --location eastus</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">List Resource Groups</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Review existing groups and regions.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>az group list --output table</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Deploy Bicep Template</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Deploy infrastructure to a resource group from a Bicep file.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>az deployment group create --resource-group rg-demo --template-file main.bicep</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Show Deployment Operations</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Inspect per-resource deployment results for failures.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>az deployment operation group list --resource-group rg-demo --name deploymentName --output table</code>
              </div>
            </article>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-2xl">App Service & Compute</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Common commands for web apps and virtual machines.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-6">
            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">List App Services</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">List web apps in a resource group.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>az webapp list --resource-group rg-demo --output table</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Tail App Service Logs</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Stream live logs from an App Service instance.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>az webapp log tail --name my-webapp --resource-group rg-demo</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">List VMs</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">See VM names, states, and public IP details quickly.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>az vm list --show-details --output table</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Start or Stop VM</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Control VM runtime state during maintenance windows.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>az vm start --name vm1 --resource-group rg-demo</code>
              </div>
            </article>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-2xl">Storage & Data Movement</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Manage storage accounts, containers, and blob uploads.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-6">
            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">List Storage Accounts</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">View storage accounts in a resource group.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>az storage account list --resource-group rg-demo --output table</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Create Blob Container</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Create a container for blobs in an existing account.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>az storage container create --name raw --account-name mystorageacct --auth-mode login</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Upload Blob</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Upload a local file into a blob container.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>az storage blob upload --account-name mystorageacct --container-name raw --name data.csv --file .\\data.csv --auth-mode login</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Download Blob</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Download a blob to a local path.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>az storage blob download --account-name mystorageacct --container-name raw --name data.csv --file .\\downloads\\data.csv --auth-mode login</code>
              </div>
            </article>
          </div>
        </section>

        <section className="mt-10 mb-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-2xl">Diagnostics & Troubleshooting</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Fast checks to validate configuration and inspect failures.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-6">
            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Find a Resource</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Locate resources by name or type across subscriptions.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>az resource list --name my-resource --output table</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Query Activity Log</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Inspect recent operations in a resource group.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>az monitor activity-log list --resource-group rg-demo --offset 1d --output table</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Use JMESPath Query</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Filter command output to only the fields you need.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>az vm list --query "[].&#123;&#123;name:name, location:location&#125;&#125;" --output table</code>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6">
              <h4 className="text-xl font-semibold">Show CLI Version</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">Check the installed Azure CLI version and extensions.</p>
              <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                <code>az version</code>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}