import React from 'react'
import { Service } from "./service/Service";
import { Content } from "./content/Content";
import { Footer } from "./footer/Footer";
import { Banner } from "./banner/Banner";

export const Home = () => {
  return (
    <>
        <Banner />
        <Service />
        <Content />
        <Footer/>
    </>
  )
}
