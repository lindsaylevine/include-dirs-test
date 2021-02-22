import fs from 'fs';
import path from 'path';
import execa from 'execa';

function getDataRoot() {
  if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
    console.log({
      __dirname,
      path: path.resolve('./_content'),
      modulePath: module.path,
      'process.env.LAMBDA_TASK_ROOT': process.env.LAMBDA_TASK_ROOT,
      'process.env.LAMBDA_RUNTIME_DIR': process.env.LAMBDA_RUNTIME_DIR,
      global: global,
      __filename,
      'require.main.filename': require.main.filename,
      // 'import.meta.url': import.meta.url,
    });
    return path
      .resolve('./_content')
      .replace('/var/task', '/var/task/src/out_functions/next_slug');
  } else {
    return path.resolve(process.cwd(), '_content');
  }
}

const dataRoot = getDataRoot();

const getContent = (slug) => {
  console.log('HELLO', process.cwd(), __dirname, __filename);
  let content = fs.readFileSync(`${dataRoot}/${slug}.md`, 'utf8');

  if (!content) {
    const filepath = `${dataRoot}/${slug}.md`;
    console.log(`couldn't load file ${filepath}`);
    content = '';
  }
  return content;
};

export default getContent;
