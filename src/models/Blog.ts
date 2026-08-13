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
  // Champs alimentés par le webhook PHARE.
  markdown?: string
  /** JSON-LD prêt à l'emploi, injecté tel quel par le gabarit d'article. */
  jsonLd?: string
  /** "phare" pour les articles déposés par le webhook, absent pour les autres. */
  source?: string
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
  moderateComments: boolean
  updatedAt: Date
}

export interface IBlogComment extends Document {
  postSlug: string
  author: string
  email: string
  content: string
  approved: boolean
  createdAt: Date
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
    markdown: String,
    jsonLd: String,
    source: String,
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
    enabled: { type: Boolean, default: true },
    title: { type: String, default: 'Nos dernières actualités' },
    description: { type: String, default: 'Retrouvez nos conseils, nos projets récents et les tendances du secteur.' },
    eyebrow: { type: String, default: 'Blog' },
    heroImage: String,
    categories: [{ type: String }],
    moderateComments: { type: Boolean, default: false },
  },
  { timestamps: true }
)

const BlogCommentSchema = new Schema<IBlogComment>(
  {
    postSlug: { type: String, required: true, index: true },
    author: { type: String, required: true, trim: true, maxlength: 80 },
    email: { type: String, required: true, trim: true, maxlength: 160 },
    content: { type: String, required: true, trim: true, maxlength: 2000 },
    approved: { type: Boolean, default: true },
  },
  { timestamps: true }
)

export const BlogPost = mongoose.models.BlogPost ||
  mongoose.model<IBlogPost>('BlogPost', BlogPostSchema)

export const BlogSettings = mongoose.models.BlogSettings ||
  mongoose.model<IBlogSettings>('BlogSettings', BlogSettingsSchema)

export const BlogComment = mongoose.models.BlogComment ||
  mongoose.model<IBlogComment>('BlogComment', BlogCommentSchema)
