export type MarkdownMeta = {
   slug: string;
   title: string;
   excerpt: string;
   coverImage: string;
   date: string;
   authorName: string;
   authorImage?: string;
   ogImageURL?: string;
   content: string;
};

export type MarkdownPost = {
   [K in keyof MarkdownMeta]: string;
};

export type MarkdownField = keyof MarkdownMeta;
