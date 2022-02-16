import { usePosts } from './use-posts'
import { UseSiteMeata } from './use-site-meta'
import { useFaqs } from './use-faqs'
import { useFeatures } from './use-features'

interface Post {
  id: string
  title: string
  slug: string
  body?: any
}
interface File {
  fluid: any
  id: string
  title: string
}

interface AccordianDataSchema {
  id: string
  title: string
  open: boolean
}
export type { Post, File, AccordianDataSchema }
export { usePosts, UseSiteMeata, useFaqs, useFeatures }
