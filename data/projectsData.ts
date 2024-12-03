interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'JsAudio-Android',
    description: `Implement Web Audio by NAPI in Android. 
    This project aims to run Web Audio API in Android with javascript code. 
    Most of the available APIs have passed wpt test cases.`,
    imgSrc: '/static/images/JsAudio-Android.png',
    href: 'https://github.com/Intro1997/JsAudio-Android',
  },
]

export default projectsData
