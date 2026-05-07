import Link from "next/link";

const scriptCards = [
    {
        title: "File Organizer",
        description: "Sort files into folders by extension so messy download directories are easier to clean up.",
        command: "python organize_files.py",
    },
    {
        title: "CSV Cleaner",
        description: "Load a CSV, remove duplicate rows, and normalize column values before analysis.",
        command: "python clean_csv.py",
    },
    {
        title: "API Health Check",
        description: "Ping an endpoint, capture the status code, and log the response time for quick checks.",
        command: "python health_check.py",
    },
    {
        title: "Log Parser",
        description: "Scan log files for errors and extract the lines you need for debugging or reporting.",
        command: "python parse_logs.py",
    },
    {
        title: "Azure Blob Upload",
        description: "Upload a local CSV file into Azure Blob Storage by authenticating with DefaultAzureCredential.",
        command: "python upload_blob.py",
        steps: [
            "Import Azure identity and blob storage helpers needed for authentication and upload operations.",
            "Define the storage account name, blob container, local file path, and destination blob name.",
            "Build the storage account URL so the SDK knows which Azure Storage account to connect to.",
            "Create a DefaultAzureCredential so the script can use your signed-in Azure identity or local developer credentials.",
            "Create a BlobServiceClient, then a BlobClient for the specific container and blob target.",
            "Open the local CSV file in binary mode and upload it to Azure Blob Storage with overwrite enabled.",
            "Print a success message after the upload completes.",
        ],
        script: `from azure.identity import DefaultAzureCredential
from azure.storage.blob import BlobServiceClient

STORAGE_ACCOUNT_NAME = "jclabstorage26"
CONTAINER_NAME = "raw-data"
LOCAL_FILE_PATH = "data/energy_transactions_2024_2026.csv"
BLOB_NAME = "energy_transactions.csv"

account_url = f"https://${"{"}STORAGE_ACCOUNT_NAME{"}"}.blob.core.windows.net"

credential = DefaultAzureCredential()
blob_service_client = BlobServiceClient(account_url, credential=credential)

blob_client = blob_service_client.get_blob_client(
        container=CONTAINER_NAME,
        blob=BLOB_NAME,
)

with open(LOCAL_FILE_PATH, "rb") as data:
        blob_client.upload_blob(data, overwrite=True)

print("Upload successful!")`,
    },
    {
        title: "Energy Data Processor",
        description: "Load an energy transactions CSV with pandas, clean key fields, classify each transaction, and save a processed output file.",
        command: "python process_energy_data.py",
        steps: [
            "Import pandas so the script can read, transform, and save tabular CSV data.",
            "Load the energy transactions file into a DataFrame and print a quick preview of the original rows.",
            "Standardize the column names by trimming spaces, lowercasing them, and replacing spaces with underscores.",
            "Define a helper function that labels positive amounts as Charges and non-positive amounts as Payments.",
            "Apply that function to the amount column and store the result in a new transaction_category column.",
            "Convert the date column into proper datetime values and coerce any invalid dates to missing values.",
            "Extract the month from each date so the data is easier to group and analyze later.",
            "Save the cleaned dataset to a new CSV file and print a success message when processing is complete.",
        ],
        script: `import pandas as pd

# Load data
df = pd.read_csv("data/energy_transactions_2024_2026.csv")

print("Original data preview:")
print(df.head())


# Clean column names (good habit)
df.columns = df.columns.str.strip().str.lower().str.replace(" ", "_")


# Create transaction category (Charge / Payment)
def classify_transaction(amount):
    if amount > 0:
        return "Charge"
    else:
        return "Payment"


df["transaction_category"] = df["amount"].apply(classify_transaction)


# Convert date column (important step)
df["date"] = pd.to_datetime(df["date"], errors="coerce")

# Extract month for analysis
df["month"] = df["date"].dt.to_period("M")


# Save cleaned data
df.to_csv("data/processed_energy.csv", index=False)

print("Processed file saved successfully!")`,
    },
    {
        title: "Azure Blob Batch Upload",
        description: "Upload multiple processed CSV files to Azure Blob Storage, including summary reports stored in a reports folder path.",
        command: "python upload_reports.py",
        steps: [
            "Import Azure identity and blob storage SDK clients needed for authentication and upload operations.",
            "Set the storage account and container names where files will be uploaded.",
            "Define a list of local file paths and their destination blob names, including nested blob paths for reports.",
            "Build the storage account URL so the SDK can connect to your Azure Storage account.",
            "Create a DefaultAzureCredential and initialize a BlobServiceClient.",
            "Loop through each file mapping and create a BlobClient for the matching blob target.",
            "Open each local file in binary mode and upload it with overwrite enabled.",
            "Print progress for each file and a final success message after all uploads complete.",
        ],
        script: `from azure.identity import DefaultAzureCredential
from azure.storage.blob import BlobServiceClient

STORAGE_ACCOUNT_NAME = "jclabstorage26"
CONTAINER_NAME = "raw-data"

files_to_upload = [
    {
        "local_path": "data/processed_energy.csv",
        "blob_name": "processed_energy.csv"
    },
    {
        "local_path": "data/charges_summary.csv",
        "blob_name": "reports/charges_summary.csv"
    },
    {
        "local_path": "data/monthly_summary.csv",
        "blob_name": "reports/monthly_summary.csv"
    },
    {
        "local_path": "data/energy_summary.csv",
        "blob_name": "reports/energy_summary.csv"
    }
]

account_url = f"https://{STORAGE_ACCOUNT_NAME}.blob.core.windows.net"

credential = DefaultAzureCredential()
blob_service_client = BlobServiceClient(account_url, credential=credential)

for file in files_to_upload:
    blob_client = blob_service_client.get_blob_client(
        container=CONTAINER_NAME,
        blob=file["blob_name"]
    )

    with open(file["local_path"], "rb") as data:
        blob_client.upload_blob(data, overwrite=True)

    print(f"Uploaded {file['local_path']} to {file['blob_name']}")

print("All files uploaded successfully!")`,
    },
    {
        title: "Energy Charts Generator",
        description: "Read summary CSV files with pandas and generate monthly, category, and fuel-type charts using matplotlib.",
        command: "python create_energy_charts.py",
        steps: [
            "Import pandas, matplotlib, and os so the script can load data, generate charts, and create folders.",
            "Create a charts folder if it does not exist to store output PNG images.",
            "Load the monthly, charges, and energy summary CSV files from the data folder.",
            "Build and save a monthly totals line chart using month and amount fields.",
            "Build and save a charges vs payments bar chart using transaction category totals.",
            "Build and save an energy type totals bar chart using fuel type totals.",
            "Close each figure after saving to avoid overlapping plots and memory issues.",
            "Print a success message after all chart files are created.",
        ],
        script: `import pandas as pd
import matplotlib.pyplot as plt
import os

# Create charts folder if it does not already exist
os.makedirs("charts", exist_ok=True)

# Load summary files
monthly_summary = pd.read_csv("data/monthly_summary.csv")
charges_summary = pd.read_csv("data/charges_summary.csv")
energy_summary = pd.read_csv("data/energy_summary.csv")


# 1. Monthly totals chart
plt.figure(figsize=(10, 5))
plt.plot(monthly_summary["month"], monthly_summary["amount"], marker="o")
plt.title("Monthly Energy Transaction Totals")
plt.xlabel("Month")
plt.ylabel("Amount")
plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig("charts/monthly_totals.png")
plt.close()


# 2. Charges vs Payments chart
plt.figure(figsize=(6, 4))
plt.bar(charges_summary["transaction_category"], charges_summary["amount"])
plt.title("Charges vs Payments")
plt.xlabel("Transaction Category")
plt.ylabel("Amount")
plt.tight_layout()
plt.savefig("charts/charges_vs_payments.png")
plt.close()


# 3. Energy type totals chart
plt.figure(figsize=(6, 4))
plt.bar(energy_summary["fueltype"], energy_summary["amount"])
plt.title("Energy Type Totals")
plt.xlabel("Fuel Type")
plt.ylabel("Amount")
plt.tight_layout()
plt.savefig("charts/energy_type_totals.png")
plt.close()

print("Charts created successfully!")`,
    },
];


export default function PythonScripts() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex w-full flex-1 flex-col items-center px-4 py-10 text-center sm:px-6 lg:px-10">
                <div className="flex w-full max-w-4xl flex-col items-stretch gap-4 text-left sm:flex-row sm:items-center">
                    <button className="rounded bg-zinc-200 px-3 py-2 text-left hover:bg-zinc-300 transition-colors dark:bg-zinc-800 dark:hover:bg-zinc-700 sm:w-auto w-full">
                        <Link href="/">&#8592; Back to Home</Link>
                    </button>
                    <div className="mx-auto flex flex-col items-center px-2 text-center sm:px-0">
                        <h1 className="text-3xl font-bold sm:text-4xl">Python Scripts</h1>
                        <h2 className="mt-3 text-base sm:text-xl">This is a collection of useful Python scripts</h2>
                    </div>
                </div>
                <section className="mt-8 w-full max-w-5xl text-left sm:mt-10">
                    <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-6">
                        {scriptCards.map((card) => (
                            <article
                                key={card.title}
                                className="rounded-xl border border-zinc-300 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6"
                            >
                                <h4 className="text-xl font-semibold">{card.title}</h4>
                                <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">{card.description}</p>
                                <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm break-words dark:bg-zinc-800">
                                    <span className="font-medium">Run:</span> <code>{card.command}</code>
                                </div>
                                {card.steps && (
                                    <div className="mt-4">
                                        <h5 className="text-sm font-semibold uppercase tracking-wide text-zinc-600 dark:text-zinc-400">
                                            What It Does
                                        </h5>
                                        <ol className="mt-2 list-decimal pl-5 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                                            {card.steps.map((step) => (
                                                <li key={step}>{step}</li>
                                            ))}
                                        </ol>
                                    </div>
                                )}
                                {card.script && (
                                    <pre className="mt-4 overflow-x-auto rounded-lg bg-zinc-950 p-3 text-[11px] leading-5 text-zinc-100 sm:p-4 sm:text-xs sm:leading-6">
                                        <code>{card.script}</code>
                                    </pre>
                                )}
                            </article>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
