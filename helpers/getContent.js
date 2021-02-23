import fs from 'fs';
import path from 'path';

const dataRoot = path.resolve(process.cwd(), '_content');

export const getContentSlugs = () => {
  return fs.readdirSync(dataRoot);
};

const getContent = (slug) => {
  let content = fs.readFileSync(`${dataRoot}/${slug}.md`, 'utf8');

  if (!content) {
    const filepath = `${dataRoot}/${slug}.md`;
    console.log(`couldn't load file ${filepath}`);
    content = '';
  }
  return content;
};

export default getContent;
