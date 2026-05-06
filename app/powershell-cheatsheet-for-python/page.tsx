import Link from "next/link";


export default function PowerShellCheatSheetForPython() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center  w-full flex-1 p-20 text-center">
        <div className="w-full max-w-4xl flex-col sm:flex-row text-left flex items-center gap-4">
          <button className="px-3 py-2 bg-zinc-200 dark:bg-zinc-800 rounded hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors">
            <Link href="/">&#8592; Back to Home</Link>
          </button>
          <div className="flex flex-col mx-auto items-center">
            <h1 className="text-4xl font-bold">PowerShell CheatSheet for Python</h1>
            <h2 className="text-xl mt-4">This is a cheat sheet for using PowerShell with Python</h2>
          </div>
        </div>
        <section className="w-full max-w-4xl mt-8 text-left">
          <h3 className="text-2xl mt-4">PowerShell Commands</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border border-zinc-300 dark:border-zinc-700 text-sm">
              <thead className="bg-zinc-100 dark:bg-zinc-900">
                <tr>
                  <th className="border border-zinc-300 dark:border-zinc-700 px-3 py-2 text-left font-semibold">Command</th>
                  <th className="border border-zinc-300 dark:border-zinc-700 px-3 py-2 text-left font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2"><code>ls</code></td>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2">List files and folders in the current directory.</td>
                </tr>
                <tr>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2"><code>cd &lt;folder&gt;</code></td>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2">Move into a folder.</td>
                </tr>
                <tr>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2"><code>cd ..</code></td>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2">Move up one level.</td>
                </tr>
                <tr>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2"><code>pwd</code></td>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2">Show your current path.</td>
                </tr>
                <tr>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2"><code>mkdir &lt;foldername&gt;</code></td>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2">Create a new folder.</td>
                </tr>
                <tr>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2"><code>New-Item &lt;filename&gt;</code></td>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2">Create a new file (for example, a Python file).</td>
                </tr>
                <tr>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2"><code>ni &lt;filename&gt;</code></td>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2">Shortcut for <code>New-Item</code>.</td>
                </tr>
                <tr>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2"><code>rm &lt;file&gt;</code></td>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2">Delete a file.</td>
                </tr>
                <tr>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2"><code>rm -r &lt;folder&gt;</code></td>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2">Delete a folder and its contents.</td>
                </tr>
                <tr>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2"><code>mv &lt;old&gt; &lt;new&gt;</code></td>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2">Rename or move a file.</td>
                </tr>
                <tr>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2"><code>cp &lt;source&gt; &lt;destination&gt;</code></td>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2">Copy a file.</td>
                </tr>
                <tr>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2"><code>cat &lt;file&gt;</code></td>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2">Show the contents of a file.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl mt-10">Run Python</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border border-zinc-300 dark:border-zinc-700 text-sm">
              <thead className="bg-zinc-100 dark:bg-zinc-900">
                <tr>
                  <th className="border border-zinc-300 dark:border-zinc-700 px-3 py-2 text-left font-semibold">Command</th>
                  <th className="border border-zinc-300 dark:border-zinc-700 px-3 py-2 text-left font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2"><code>python script.py</code></td>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2">Run a Python script.</td>
                </tr>
                <tr>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2"><code>python -m module_name</code></td>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2">Run a module as a script.</td>
                </tr>
                <tr>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2"><code>python -i script.py</code></td>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2">Run a script and stay in interactive mode.</td>
                </tr>
                <tr>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2"><code>python --version</code></td>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2">Show the active Python version.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl mt-10">Virtual Environments</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border border-zinc-300 dark:border-zinc-700 text-sm">
              <thead className="bg-zinc-100 dark:bg-zinc-900">
                <tr>
                  <th className="border border-zinc-300 dark:border-zinc-700 px-3 py-2 text-left font-semibold">Command</th>
                  <th className="border border-zinc-300 dark:border-zinc-700 px-3 py-2 text-left font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2"><code>python -m venv .venv</code></td>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2">Create a virtual environment in <code>.venv</code>.</td>
                </tr>
                <tr>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2"><code>.\.venv\Scripts\Activate.ps1</code></td>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2">Activate the virtual environment in PowerShell.</td>
                </tr>
                <tr>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2"><code>deactivate</code></td>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2">Deactivate the current virtual environment.</td>
                </tr>
                <tr>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2"><code>Get-ChildItem .venv\Scripts</code></td>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2">List virtual environment scripts and executables.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl mt-10">Pip Package Management</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border border-zinc-300 dark:border-zinc-700 text-sm">
              <thead className="bg-zinc-100 dark:bg-zinc-900">
                <tr>
                  <th className="border border-zinc-300 dark:border-zinc-700 px-3 py-2 text-left font-semibold">Command</th>
                  <th className="border border-zinc-300 dark:border-zinc-700 px-3 py-2 text-left font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2"><code>python -m pip install package_name</code></td>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2">Install a package with pip.</td>
                </tr>
                <tr>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2"><code>python -m pip install -r requirements.txt</code></td>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2">Install dependencies from a requirements file.</td>
                </tr>
                <tr>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2"><code>python -m pip freeze &gt; requirements.txt</code></td>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2">Export installed packages to a requirements file.</td>
                </tr>
                <tr>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2"><code>python -m pip list</code></td>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2">List installed packages.</td>
                </tr>
                <tr>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2"><code>python -m pip uninstall package_name</code></td>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2">Remove an installed package.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl mt-10">Search, Logs, and Help</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border border-zinc-300 dark:border-zinc-700 text-sm">
              <thead className="bg-zinc-100 dark:bg-zinc-900">
                <tr>
                  <th className="border border-zinc-300 dark:border-zinc-700 px-3 py-2 text-left font-semibold">Command</th>
                  <th className="border border-zinc-300 dark:border-zinc-700 px-3 py-2 text-left font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2"><code>Get-Content app.log -Tail 50</code></td>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2">Show the last 50 lines of a log file.</td>
                </tr>
                <tr>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2"><code>Get-Content app.log -Wait</code></td>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2">Follow a log file in real time.</td>
                </tr>
                <tr>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2"><code>ls -Recurse | Select-String &quot;TODO&quot;</code></td>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2">Search recursively for matching text in files.</td>
                </tr>
                <tr>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2"><code>Get-Help Get-ChildItem -Examples</code></td>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2">Show examples for a PowerShell command.</td>
                </tr>
                <tr>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2"><code>Get-Command *python*</code></td>
                  <td className="border border-zinc-300 dark:border-zinc-700 px-3 py-2">Find available commands related to Python.</td>
                </tr>
              </tbody>
            </table>
          </div>

        </section>
      </main>
    </div>
  );
}
