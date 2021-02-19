import React from "react";
import { useRouter } from "next/router";
import RenderRouter from "../components/RenderRouter";

export default function ErrorPage() {
  const router = useRouter();
  return (
    <>
      <RenderRouter router={router}>
        <h1>error smilew</h1>
      </RenderRouter>
    </>
  );
}
