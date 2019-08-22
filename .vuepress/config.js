module.exports = {
  title: `GRI\+D`,
  port: '9001',
  host: '0.0.0.0',
  base: '/gib-docs/',
  dest: 'docs',
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css'
      }
    ]
  ],
  themeConfig: {
    sidebar: [
      ['/', 'Introduccion'],
      ['/definiciones', 'Definiciones'],
      ['/fuentes', 'Fuentes de datos']
    ],
    nav: [
      // { text: 'Home', link: '/' },
      // { text: 'Github', link: 'https://github.com/emigpa' }
    ]
  },
  markdown: {
    toc: { includeLevel: [1, 2] },
    config: md => {
      md.use(require('markdown-it-katex'))
    }
  }
}
