import React from "react";
import CSS from "./Services.module.css";
import ServiceCard from "./ServiceCard/ServiceCard";
const Services = [
  {
    heading: "WEBSITE DEVELOPMENT",
    text: "Your technical partner towards web success.",
    bullets: [
      "E Commerce Store",
      "WordPress Web",
      "ReactJS",
      "React Native",
      "MERN/Full Stack Progressive Web Apps"
    ]
  },
  {
    heading: "MOBILE APP DEVELOPMENT",
    text: "We make your mobile app idea a reality.",
    bullets: ["Android", "iOS", "Cross Platform", "React Native"]
  },
  {
    heading: "BRANDING DESIGN",
    text:
      "Design is more than just a few tricks to the eye, it's a few tricks to the brain -- Neville Brody",
    bullets: [
      "Logo Designing",
      "Branding",
      "User Interface",
      "Prototype Designing",
      "Printing and Packaging"
    ]
  },
  {
    heading: "CONTENTS",
    text: "Content isn't king, its the kingdom",
    bullets: [
      "Good Strategy Stories",
      "Content Strategy",
      "Copywriting",
      "Research Papers",
      "Thesis Writing"
    ]
  },
  {
    heading: "MARKETING",
    text: "Bespoke, effective marketing solutions for you",
    bullets: [
      "Growth Marketing",
      "Social Media",
      "Advertisement Campaigns",
      "Search Engine Optimization",
      "Land Research",
      "Sales and Aftersales Support"
    ]
  }
];
export default props => (
  <div className={CSS.main}>
    <h1>OUR SERVICES</h1>
    <p>
      Dopment strive to make your business match up the steps of this
      technologically advanced world. Our team comprises of technology freaks,
      and we are the product of it! We develop apps and software that helps you
      attain your business goals, Dopment expertise in:
    </p>
    <div className={CSS.cards}>
      {Services.map((it, k) => (
        <ServiceCard {...it} key={k} />
      ))}
    </div>
  </div>
);
