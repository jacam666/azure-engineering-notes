import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center  w-full flex-1 p-20 text-center">
        <h1 className="text-4xl font-bold">Azure Engineering NoteBook</h1>
        <h2 className="text-xl mt-4">This a site to store notes for all things azure engineering related</h2>
        <section className="w-full max-w-4xl mt-8 text-left">
          <h3 className="text-2xl mt-4">Categories</h3>
          <ul className="list-disc list-inside mt-2">
            {/* <li>Azure DevOps</li>
                <li>Azure Kubernetes Service (AKS)</li>
                <li>Azure Functions</li>
                <li>Azure Storage</li>
                <li>Azure Networking</li>
                <li>Azure Security</li>
                <li>Azure Monitoring and Logging</li>
                <li>Azure Identity and Access Management (IAM)</li>
                <li>Azure Cost Management</li> */}
            <Link href="/powershell-cheatsheet-for-python">
              <li>PowerShell CheatSheet for Python</li>
            </Link>
            <Link href="/python-scripts">
              <li>Python Scripts</li>
            </Link>
          </ul>
        </section>
      </main>
    </div>
  );
}
