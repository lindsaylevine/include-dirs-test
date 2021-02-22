import fs from "fs";
import path from "path";
import execa from 'execa';
const dataRoot = path.resolve(process.cwd(), '_content');

const getContent = (slug) => {
  console.log('HELLO', process.cwd(), __dirname, __filename)
  let content;
  try {
    content = fs.readFileSync(`${dataRoot}/${slug}.md`, 'utf8');
  } catch (e) {
    content = fs.readFileSync(`${dataRoot.replace('/var/task', 'src/out_functions/next_slug')}/${slug}.md`, 'utf8');
  }
  if (!content) content = '';
  return content;
}

export default getContent;
