import React from "react";
import { useRouter } from "next/router";
import RenderRouter from "../../components/RenderRouter";

function Post() {
  const router = useRouter();
  return (
    <>
      <RenderRouter router={router}>
        <h1>Post</h1>
      </RenderRouter>
    </>
  );
}

export default Post;
