import React from "react";
import Home from "./home";

function IndexPage() {
  return <Home />;
}

export const Head = () => (
  <>
    <title>Portfolio 💼</title>;
    <link
      href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900"
      rel="stylesheet"
    />
  </>
);
export default IndexPage;
