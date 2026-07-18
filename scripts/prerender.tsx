import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import ReactDOMServer from 'react-dom/server';
import App from '../App';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const templatePath = path.resolve(__dirname, '../dist/index.html');

try {
  let template = fs.readFileSync(templatePath, 'utf-8');
  
  // Render the app to a string
  const appHtml = ReactDOMServer.renderToString(<App />);
  
  // Inject the rendered app into the HTML
  template = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  
  fs.writeFileSync(templatePath, template);
  console.log('Prerendering successful.');
} catch (error) {
  console.error('Error during prerendering:', error);
  process.exit(1);
}
