import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import { Prism as SyntaxHighlighter, SyntaxHighlighterProps } from 'react-syntax-highlighter'
//import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { prism as light_theme, darcula as dark_theme } from 'react-syntax-highlighter/dist/cjs/styles/prism'

type MarkdownArticleProps = {
  markdown: string
  darkMode: boolean
}

const MarkdownArticle = ({ markdown, darkMode }: MarkdownArticleProps) => {
  const theme = darkMode ? dark_theme : light_theme

  const components = {
    code({ node, inline, className, children, ...props }: SyntaxHighlighterProps) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter
          style={theme}
          language={match[1]}
          PreTag="div"
          children={String(children).replace(/\n$/, '')}
          {...props}
        />
      ) : (
        <code className={className} {...props} />
      )
    },
  }

  return (
    <ReactMarkdown components={components} remarkPlugins={[gfm]}>
      {markdown}
    </ReactMarkdown>
  )
}

export default MarkdownArticle
