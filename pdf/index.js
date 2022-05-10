const bannerDetails = require("./bannerDetails.json");
const fs = require("fs");
const PDFDocument = require("pdfkit");

const doc = new PDFDocument({
  layout: "portrait",
  autoFirstPage: false,
});
var background = doc.openImage(bannerDetails.background.image);
doc.addPage({
  size: [background.width, background.height],
});
doc.image(
  background,
  bannerDetails.background.position.x,
  bannerDetails.background.position.y
);
bannerDetails.products.forEach((product) => {
  let productImage = doc.openImage(product.image);
  doc
    .image(productImage, product.position.x, product.position.y, {
      width: product.dimensions.width,
      height: product.dimensions.height,
    })
    .link(
      product.position.x,
      product.position.y,
      product.dimensions.width,
      product.dimensions.height,
      product.url
    );
});
doc.pipe(fs.createWriteStream("offerBanner.pdf"));

doc.end();

console.log("Done");
