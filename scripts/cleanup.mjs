import "dotenv/config";

import { createClient } from "@sanity/client";

const {
  NEXT_PUBLIC_SANITY_PROJECT_ID,
  NEXT_PUBLIC_SANITY_DATASET,
  NEXT_PUBLIC_SANITY_AUTH_TOKEN,
} = process.env;

if (!NEXT_PUBLIC_SANITY_PROJECT_ID || !NEXT_PUBLIC_SANITY_AUTH_TOKEN) {
  console.error(
    "Missing required environment variables. Please check your .env.local file.",
  );
  process.exit(1);
}

const targetClient = createClient({
  projectId: NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: false,
  apiVersion: "2023-01-01",
  token: NEXT_PUBLIC_SANITY_AUTH_TOKEN,
});

async function deleteDocumentsByType(documentType) {
  try {
    console.log(`Fetching documents of type: ${documentType}...`);
    const documents = await targetClient.fetch(`*[_type == "${documentType}"]`);

    if (documents.length === 0) {
      console.log(`No documents found for type: ${documentType}`);
      return;
    }

    console.log(`Found ${documents.length} documents. Deleting...`);

    for (const doc of documents) {
      await targetClient.delete(doc._id);
      console.log(`Deleted document: ${doc._id} (${doc.title || "No Title"})`);
    }

    console.log(
      `All documents of type "${documentType}" deleted successfully.`,
    );
  } catch (error) {
    console.error(
      `Error deleting documents of type "${documentType}":`,
      error.message,
    );
  }
}

async function cleanupData() {
  console.log("Starting data cleanup...");

  try {
    await deleteDocumentsByType("products");

    await deleteDocumentsByType("categories");

    console.log("Data cleanup completed successfully!");
  } catch (error) {
    console.error("Error during cleanup:", error.message);
    process.exit(1);
  }
}

cleanupData();
