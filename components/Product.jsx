/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { urlFor } from "../lib";

export const Product = ({ product }) => {
  const { slug, image, name, price } = product;
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            alt={name}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};
