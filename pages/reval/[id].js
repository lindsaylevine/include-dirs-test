import Head from 'next/head';
import { useRouter } from "next/router";
import Link from "next/link";
import RenderRouter from "../../components/RenderRouter";

const styles = {}

export default function Home() {
  const router = useRouter();
  return (
    <>
      <RenderRouter router={router}>
        <h1>About</h1>
      <Link href="/">
        <a>Go back home</a>
      </Link>
      </RenderRouter>
    </>
  );
}

export async function getStaticPaths() {
  // Define the paths we want to prerender
  const paths = [];
  for (let id = 1; id <= 10; id++) {
    paths.push({ params: { id: String(id) } });
  }

  // We'll pre-render only these paths at build time.
  // { fallback: true } means other routes will be server-side rendered.
  return { paths, fallback: false };
}

export async function getStaticProps() {
  return {
    props: {
    },
    revalidate: 1
  };
}
