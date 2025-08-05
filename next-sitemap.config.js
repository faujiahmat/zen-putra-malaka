/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://zenputramalaka.com',
  generateRobotsTxt: true, // agar membuat file robots.txt secara otomatis
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  generateIndexSitemap: true,
  exclude: [], // tidak ada halaman yang dikecualikan

  // Optional: menambahkan path khusus untuk halaman
  additionalPaths: async (config) => {
    return [
      await config.transform(config, '/'),
      await config.transform(config, '/tentang'),
      await config.transform(config, '/proyek'),
      await config.transform(config, '/dokumentasi'),
      await config.transform(config, '/kontak'),
    ];
  },
};
