import mongoose, { Schema, Document } from 'mongoose'

export interface IFaqItem {
  question: string
  answer: string
}

export interface IBlogPost extends Document {
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  coverImageAlt: string
  category: string
  tags: string[]
  author: string
  published: boolean
  publishedAt?: Date
  metaTitle?: string
  metaDescription?: string
  focusKeyword?: string
  secondaryKeywords: string[]
  canonicalUrl?: string
  noIndex: boolean
  faq: IFaqItem[]
  createdAt: Date
  updatedAt: Date
}

export interface IBlogSettings extends Document {
  enabled: boolean
  title: string
  description?: string
  eyebrow?: string
  heroImage?: string
  categories: string[]
  updatedAt: Date
}

const BlogPostSchema = new Schema<IBlogPost>(
  {
    title: { type: String, required: [true, 'Title is required'] },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, default: '' },
    content: { type: String, default: '' },
    coverImage: { type: String, default: '' },
    coverImageAlt: { type: String, default: '' },
    category: { type: String, default: 'Général' },
    tags: [{ type: String }],
    author: { type: String, default: '' },
    published: { type: Boolean, default: false },
    publishedAt: { type: Date },
    metaTitle: String,
    metaDescription: String,
    focusKeyword: { type: String, default: '' },
    secondaryKeywords: [{ type: String }],
    canonicalUrl: { type: String, default: '' },
    noIndex: { type: Boolean, default: false },
    faq: [{
      question: { type: String, required: true },
      answer: { type: String, required: true },
    }],
  },
  { timestamps: true }
)

const BlogSettingsSchema = new Schema<IBlogSettings>(
  {
    enabled: { type: Boolean, default: false },
    title: { type: String, default: 'Nos dernières actualités' },
    description: { type: String, default: 'Retrouvez nos conseils, nos projets récents et les tendances du secteur.' },
    eyebrow: { type: String, default: 'Blog' },
    heroImage: String,
    categories: [{ type: String }],
  },
  { timestamps: true }
)

export const BlogPost = mongoose.models.BlogPost ||
  mongoose.model<IBlogPost>('BlogPost', BlogPostSchema)

export const BlogSettings = mongoose.models.BlogSettings ||
  mongoose.model<IBlogSettings>('BlogSettings', BlogSettingsSchema)
