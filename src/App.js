import React from "react";
import Card from "./Card";
import "./styles.css";

export default function App() {
  return (
    <>
      <h2 className="heading">{"object-fit: contain:"}</h2>
      <div className="container">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
