const urls = [
  {
    name: 'YAML Spec',
    path: '/examples/using-single-yaml/',
  },
  { name: 'URL Spec', path: '/examples/using-remote-url/' },
  { name: 'Schema Imports', path: '/docs/guides/schema-imports' },
];

const baseUrl = process.env.TARGET_URL || 'http://localhost:3000';

module.exports = urls.map(({ name, path }) => {
  return {
    name,
    url: `${baseUrl}${path}`,
    additionalSnapshots: [
      {
        suffix: ' (Dark Mode)',
        execute() {
          document
            .querySelector('[title^="Switch between dark and light mode"]')
            // @ts-ignore
            ?.click();
        },
      },
    ],
  };
});