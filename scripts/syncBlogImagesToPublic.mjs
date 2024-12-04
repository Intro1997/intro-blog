// refer to 
// https://github.com/ygweric/ygweric.github.io/blob/main/scripts/syncBlogImagesToPublic.mjs

import syncDirectory from 'sync-directory'

export const syncBlogImagesToPublic = (watch = true) => {
  const srcDir = './data/blog/'
  const targetDir = './public/blog/'

  syncDirectory(srcDir, targetDir, {
    watch,
    exclude: [/.*(md|mdx)$/i],
  })
}
