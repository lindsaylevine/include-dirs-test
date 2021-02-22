import path from "path";
import Link from "next/link";
import getContent from '../helpers/getContent';

const dataRoot = path.resolve(__dirname, '_content');

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
  // const paths = 
  const paths = [{ params: { slug: ["test"] }}, { params: { slug: ["jason"] } }];

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  // The ID to render
  const { slug } = params;

  console.log('WTF', __filename)

  const fileName = slug && slug.length && slug.length > 0 ? slug[0] : 'something';
  // const content = require(`../_content/${fileName}.md`).default
  const content = getContent(fileName);

  return {
    props: {
      show: { id: 10, name: 'whatever' },
      content
    },
    revalidate: 10
  };
}

export default Show;
