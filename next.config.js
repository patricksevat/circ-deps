import theme from 'shiki/themes/nord.json' assert { type: "json" }
import { remarkCodeHike } from '@code-hike/mdx';
import remarkGfm from 'remark-gfm';
import nextMDX from '@next/mdx';

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkGfm,
      [remarkCodeHike, { theme, lineNumbers: true }]
    ],
  },
})

export default withMDX({
  pageExtensions: [
    "ts", "tsx", "js", 
    "jsx", "md", "mdx"
  ],
})