// Raw HTML asset URLs need the same prefix as Next.js on project Pages sites.
export function withAssetBasePath(html) {
  const prefix = process.env.GITHUB_PAGES === 'true' ? '/flealala-website' : '';
  return html.replace(/((?:src|href)=["'])\/(?!\/)/g, (_, attribute) => `${attribute}${prefix}/`);
}
