// refer to
// https://github.com/ygweric/ygweric.github.io/blob/main/scripts/prebuild.mjs

import { syncBlogImagesToPublic } from './syncBlogImagesToPublic.mjs'

async function prebuild() {
  await syncBlogImagesToPublic(process.env.WATCH === 'true')
}

prebuild()
