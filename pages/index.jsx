import { withAssetBasePath } from '../lib/asset-paths';
import fs from 'node:fs';
import path from 'node:path';
export async function getStaticProps() {
 return { props: { html: withAssetBasePath(fs.readFileSync(path.join(process.cwd(), 'content/body.html'), 'utf8')) } };
}
export default function Home({html}) { return <div dangerouslySetInnerHTML={{__html: html}} />; }
