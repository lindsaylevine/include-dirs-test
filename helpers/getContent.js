import path from "path";
const dataRoot = path.resolve(process.cwd(), '_content');
console.log('hi', __filename, __dirname, process.cwd())
console.log('dataroot', dataRoot)

const getContent = (slug) => {
  return require(`${dataRoot}/${slug}.md`).default;
}

export default getContent;
