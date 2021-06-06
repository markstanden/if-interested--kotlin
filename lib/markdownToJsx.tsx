import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

// Declaring type of props - see "Typing Component Props" for more examples
type MarkdownArticleProps = {
  markdown: string
}

const MarkdownArticle = ({ markdown }: MarkdownArticleProps) => (
  <ReactMarkdown remarkPlugins={[gfm]}>{markdown}</ReactMarkdown>
)

export default MarkdownArticle
