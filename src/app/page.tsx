"use client";
import Image from "next/image";
import Header from "./Components/HeaderComponent";
import AIPoweredPedagogy from "./Components/AIPoweredPedagogyComponent";
import FooterComponent from "./Components/FooterComponent";
import HeroSection from "./Components/HeroSectionComponent";
import AIMentorComponent from "./Components/AIMentorsComponent";
import GoalsVideo from "./Components/AchieveNEPComponent";
import CardSlider from "./Components/CardSliderComponent";
import Carousel from "./Components/ImageGallary";
import VideoCarousel from "./Components/ImageGallary";
import { useRef } from "react";

export default function Home() {
  const footerRef = useRef<HTMLElement>(null);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const images = [
    "/mentor/mentor1.png",
    "/mentor/mentor2.png",
    "/mentor/mentor2.png",
    "/mentor/mentor1.png",
  ];

  return (
    <>
      <Header scrollToFooter={scrollToFooter} />
      <HeroSection />
      <GoalsVideo />
      <AIMentorComponent />
      <AIPoweredPedagogy />
      {/* <Carousel /> */}
      <VideoCarousel />
      <CardSlider />
      <FooterComponent ref={footerRef} />
    </>
  );
}
