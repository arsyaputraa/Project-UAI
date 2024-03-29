import React from "react";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsappStyled = styled.a`
  text-decoration: none;
  z-index: 1000;
  background-color: #25d366;
  color: #fff;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  box-shadow: 3px 5px 10px #555;
  position: fixed;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  &:active {
    color: #fff;
  }
  &:hover {
    border: 2px solid #fff;
    transform: scale(1.1);
    transition: 0.3s all ease-in-out;
  }
`;
const FloatingWhatsapp = () => {
  return (
    <FloatingWhatsappStyled
      href="https://wa.me/628119444283?text=Hello,%20I'm%20interested%20in%20your%20product%20,I%20want%20to%20know%20more"
      target="_blank"
    >
      <FaWhatsapp />
    </FloatingWhatsappStyled>
  );
};

export default FloatingWhatsapp;
