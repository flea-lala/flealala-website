import { withAssetBasePath } from '../lib/asset-paths';
import { Html, Head, Main, NextScript } from 'next/document';
import { createElement } from 'react';
import fs from 'node:fs';
import path from 'node:path';
const source = withAssetBasePath(fs.readFileSync(path.join(process.cwd(), 'content/head.html'), 'utf8'));
const elements = [...source.matchAll(/<(meta|link)\b([^>]*?)\/?\s*>|<(title|style|script|noscript)\b([^>]*)>([\s\S]*?)<\/\3>/gi)].map((match, key) => {
 const tag = (match[1] || match[3]).toLowerCase();
 const attributes = match[2] || match[4] || '';
 const props = { key };
 for (const attr of attributes.matchAll(/([^\s=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g)) {
  let name = attr[1];
  if (/^on/i.test(name)) continue;
  name = ({ charset: 'charSet', crossorigin: 'crossOrigin', 'http-equiv': 'httpEquiv' })[name] || name;
  props[name] = attr[2] ?? attr[3] ?? attr[4] ?? '';
 }
 if (match[3]) props.dangerouslySetInnerHTML = { __html: match[5] };
 return createElement(tag, props);
});
export default function Document() {
 return <Html lang="en"><Head>{elements}</Head><body><Main /><NextScript /></body></Html>;
}
