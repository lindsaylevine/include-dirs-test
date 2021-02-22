import Link from 'next/link';
import getContent from '../helpers/getContent';

const Show = ({ fileName, content }) => {
  return (
    <>
      <h1>Demonstrating Dynamically Loaded Content From Disk</h1>

      <hr />

      <p>This is the content of {fileName}.md:</p>
      <pre>{content}</pre>

      <hr />

      <Link href="/">
        <a>Go back home</a>
      </Link>
    </>
  );
};

export async function getStaticPaths() {
  const paths = [{ params: { slug: ['test'] } }, { params: { slug: ['two'] } }];

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  const fileName = slug && slug.length && slug.length > 0 ? slug[0] : 'test';
  const content = getContent(fileName);

  return {
    props: {
      fileName,
      content,
    },
    revalidate: 10,
  };
}

export default Show;
