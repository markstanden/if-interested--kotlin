import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { MarkdownMeta, MarkdownField, MarkdownPost } from '../types/MarkdownMeta'

const postsDirectory = join(process.cwd(), 'posts')

// get the filenames of the files in the posts directory
export const getPostSlugs = () => {
  return fs.readdirSync(postsDirectory)
}

export const getPostBySlug = (slug: String, fields: MarkdownField[]): MarkdownPost => {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: { [key: string]: string } = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items as MarkdownPost
}

export const getAllPosts = (fields: MarkdownField[]): MarkdownPost[] => {
  const slugs = getPostSlugs()
  const posts = slugs.map(slug => getPostBySlug(slug, fields))
  const sortedPosts = posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return sortedPosts
}
