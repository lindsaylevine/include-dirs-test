import React from "react";
import { useRouter } from "next/router";
import RenderRouter from "../components/RenderRouter";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <RenderRouter router={router}>
        <h1>About</h1>
      </RenderRouter>
    </>
  );
}

export async function getInitialProps() {
  return {
    props: {
    },
  };
}
