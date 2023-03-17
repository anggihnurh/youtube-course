/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { urlFor } from "../lib";

export const FooterBanner = ({ data }) => {
  const {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    product,
    buttonText,
    image,
    desc,
  } = data;
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
          <img
            src={urlFor(image)}
            alt="image"
            className="footer-banner-image"
          />
        </div>
      </div>
    </div>
  );
};
