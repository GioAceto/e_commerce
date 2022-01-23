import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./product/Product";

const products = [
  {
    id: 1,
    name: "Nike Revolution 5",
    description: "Men's Road Running Shoes",
    price: "$60",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/qwqfyddzikcgc4ozwigp/revolution-5-mens-road-running-shoes-ZXqS6C.png",
  },
  {
    id: 2,
    name: "Macbook Air",
    description: "Apple Macbook Air",
    price: "$1200",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-macbook-air-silver-202002?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1592437168000",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
