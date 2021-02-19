import React from "react";
import { useRouter } from "next/router";
import RenderRouter from "../components/RenderRouter";

function About() {
  const router = useRouter();
  return (
    <>
      <RenderRouter router={router}>
        <h1>About</h1>
      </RenderRouter>
    </>
  );
}

export default About;
