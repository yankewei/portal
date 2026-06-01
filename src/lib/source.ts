import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';

const articles = docs.toFumadocsSource();

function isDraft(data: unknown) {
  return typeof data === 'object' && data !== null && 'draft' in data && data.draft === true;
}

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: '/articles',
  source: {
    ...articles,
    files: () => {
      const files = typeof articles.files === 'function' ? articles.files() : articles.files;

      return files.filter((file) => file.type !== 'page' || !isDraft(file.data));
    },
  },
});
