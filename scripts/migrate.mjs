import "dotenv/config";

import { createClient } from "@sanity/client";

const {
  NEXT_PUBLIC_SANITY_PROJECT_ID,
  NEXT_PUBLIC_SANITY_DATASET,
  NEXT_PUBLIC_SANITY_AUTH_TOKEN,
  BASE_URL = "https://giaic-hackathon-template-08.vercel.app",
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

async function uploadImageToSanity(imageUrl) {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error(`Failed to fetch image: ${imageUrl}`);
    const buffer = await response.arrayBuffer();

    const uploadedAsset = await targetClient.assets.upload(
      "image",
      Buffer.from(buffer),
      {
        filename: imageUrl.split("/").pop(),
      },
    );

    return uploadedAsset._id;
  } catch (error) {
    console.error("Error uploading image:", error.message);
    return null;
  }
}

async function migrateData() {
  console.log("Starting data migration...");

  try {
    const categoriesResponse = await fetch(`${BASE_URL}/api/categories`);
    if (!categoriesResponse.ok) throw new Error("Failed to fetch categories.");
    const categoriesData = await categoriesResponse.json();

    const productsResponse = await fetch(`${BASE_URL}/api/products`);
    if (!productsResponse.ok) throw new Error("Failed to fetch products.");
    const productsData = await productsResponse.json();

    const categoryIdMap = {};

    for (const category of categoriesData) {
      console.log(`Migrating category: ${category.title}`);
      const imageId = await uploadImageToSanity(category.imageUrl);

      const newCategory = {
        _id: category._id,
        _type: "categories",
        title: category.title,
        image: imageId
          ? { _type: "image", asset: { _ref: imageId } }
          : undefined,
      };

      const result = await targetClient.createOrReplace(newCategory);
      categoryIdMap[category._id] = result._id;
      console.log(`Migrated category: ${category.title} (ID: ${result._id})`);
    }

    for (const product of productsData) {
      console.log(`Migrating product: ${product.title}`);
      const imageId = await uploadImageToSanity(product.imageUrl);

      const newProduct = {
        _type: "products",
        title: product.title,
        price: product.price,
        priceWithoutDiscount: product.priceWithoutDiscount,
        badge: product.badge,
        image: imageId
          ? { _type: "image", asset: { _ref: imageId } }
          : undefined,
        category: {
          _type: "reference",
          _ref: categoryIdMap[product.category._id],
        },
        description: product.description,
        inventory: product.inventory,
        tags: product.tags,
      };

      const result = await targetClient.create(newProduct);
      console.log(`Migrated product: ${product.title} (ID: ${result._id})`);
    }

    console.log("Data migration completed successfully!");
  } catch (error) {
    console.error("Error during migration:", error.message);
    process.exit(1);
  }
}

migrateData();
