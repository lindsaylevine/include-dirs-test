import fs from 'fs'
import Link from "next/link";

const Show = ({ show, content }) => {
  return (
    <>
      <h1>About</h1>
      <hr />

      <p>content: {content}</p>

      <h1>Show #{show.id}</h1>
      <p>{show.name}</p>

      <hr />

      <Link href="/">
        <a>Go back home</a>
      </Link>
    </>
  );
};

export async function getStaticPaths() {
  const paths = [{ params: { slug: ["3"] }}, { params: { slug: ["4"] } }];

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  // The ID to render
  const { slug } = params;

  // what Asana is trying to do
  // const content = getContent('d[gflf')
  // where getContent tries to read md files from a path using process.cwd

  // this would be a general hack
  // let content;
  // try {
  //   content = fs.readFileSync(process.cwd() + '/src/out_functions/next_slug/test.md', 'utf8')
  // } catch (e) {
  //   content = 'fail'
  // }

  // actual repro of error with expectation of how itd "just work"
  const content = fs.readFileSync(process.cwd() + '/test.md', 'utf8'); // or something

  const id = slug && slug.length && slug.length > 0 ? slug[0] : '10';

  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const data = await res.json();

  return {
    props: {
      show: data,
      content
    },
    revalidate: 10
  };
}

export default Show;
