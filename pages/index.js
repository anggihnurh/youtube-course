import React from "react";
import { FooterBanner, HeroBanner, Product } from "../components";
import { client } from "../lib";

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner data={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {products.length &&
          products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
      </div>
      <FooterBanner data={bannerData.length && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      products,
      bannerData,
    },
  };
};

export default Home;
