import Head from 'next/head';
import { useRouter } from "next/router";
import RenderRouter from "../components/RenderRouter";

const styles = {}

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

export async function getStaticProps() {
  return {
    props: {
    },
    revalidate: 1
  };
}
