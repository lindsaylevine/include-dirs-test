import fs from 'fs';
import path from 'path';

const dataRoot = path.resolve(process.cwd(), '_content');
const otherData = path.resolve(process.cwd(), '_other');

export const getContentSlugs = () => {
  const contentSlugs = fs.readdirSync(dataRoot);
  const otherSlugs = fs.readdirSync(otherData);
  return [...contentSlugs, ...otherSlugs];
};

const getContent = (slug) => {
  let content;

  try {
    content = fs.readFileSync(`${dataRoot}/${slug}.md`, 'utf8');
  } catch (e) {
    content = fs.readFileSync(`${otherData}/${slug}.md`, 'utf8');
  }

  if (!content) {
    const filepath = `${dataRoot}/${slug}.md`;
    console.log(`couldn't load file ${filepath}`);
    content = '';
  }
  return content;
};

export default getContent;
