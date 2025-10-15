/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.growedgex.com', // ✅ your live domain
  generateRobotsTxt: true,              // also creates robots.txt automatically
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/404'],                    // exclude unwanted pages
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.growedgex.com/sitemap-0.xml',
    ],
  },
};
