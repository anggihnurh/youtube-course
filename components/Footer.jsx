/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
export const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 JSM Headphones All right reserved</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};
