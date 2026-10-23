const isGitHubPages = process.env.GITHUB_PAGES === 'true';
module.exports = {
  ...(isGitHubPages ? { output: 'export', basePath: '/flealala-website', trailingSlash: true } : {}),
};
