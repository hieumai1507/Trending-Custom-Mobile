// scripts/generate-product-data.js
const productData = require("../data/product-data/products-data.json"); // Adjust the path
const fs = require("fs");
const path = require("path");

const generateProductData = () => {
  const productMap = {};

  productData.data.forEach((item) => {
    item.line_items.forEach((lineItem) => {
      const productId = lineItem.product_id;
      const skuName = lineItem.sku_name;

      if (!productMap[productId]) {
        productMap[productId] = {
          _id: item._id, // Use order _id.  Consider generating a UUID if needed.
          product_id: productId,
          product_name: lineItem.product_name,
          sale_price: lineItem.sale_price,
          sku_image: lineItem.sku_image, // Initial sku_image
          sku_name: skuName, // Keep original Sku name
          original_price: lineItem.original_price,
          department: item.department ? item.department.name : "N/A",
          display_status: lineItem.display_status,
          sizes: [],
          colors: [],
          images: [], // Initialize the images array
        };
      }

      // Extract color and size more robustly
      let color = "";
      let size = "";

      const parts = skuName.split(",");
      if (parts.length >= 2) {
        color = parts[0].trim();
        size = parts[1].trim();
        if (parts.length > 2) {
          size = parts[1].trim() + ", " + parts[2].trim(); //Handle cases with extra commas
        }
      }

      // Add color and size to respective arrays if not already present
      if (color && !productMap[productId].colors.includes(color)) {
        productMap[productId].colors.push(color);
      }
      if (size && !productMap[productId].sizes.includes(size)) {
        productMap[productId].sizes.push(size);
      }

      // Add the image to the images array, ensuring uniqueness (BOTH URL and COLOR)
      const existingImage = productMap[productId].images.find(
        (img) => img.color === color
      );
      if (!existingImage) {
        productMap[productId].images.push({
          url: lineItem.sku_image,
          color: color,
        });
      }
    });
  });

  // Ensure the first image is the default sku_image
  const processedProducts = Object.values(productMap).map((product) => {
    if (
      product.images.length > 0 &&
      product.images[0].url !== product.sku_image
    ) {
      const firstImageIndex = product.images.findIndex(
        (image) => image.url === product.sku_image
      );

      if (firstImageIndex !== -1) {
        // Get the image at firstImageIndex
        const firstImage = product.images[firstImageIndex];

        // Remove the image from its current position
        product.images.splice(firstImageIndex, 1);

        // Add the image to the beginning of the array
        product.images.unshift(firstImage);
      }
    }
    return product;
  });

  const outputPath = path.join(
    __dirname,
    "../data/product-data/processed-products.json"
  );

  // Delete the old file (if it exists)
  try {
    fs.unlinkSync(outputPath);
    console.log(`Old ${outputPath} deleted.`);
  } catch (error) {
    if (error.code !== "ENOENT") {
      console.error(`Error deleting old ${outputPath}:`, error);
    }
  }

  fs.writeFileSync(
    outputPath,
    JSON.stringify({ data: processedProducts }, null, 2)
  );

  console.log(`Processed product data saved to ${outputPath}`);
};

generateProductData();
