import Prismic from '@prismicio/client'
import { DefaultClient } from '@prismicio/client/types/client'

export function initPrismicApi(request?: unknown): DefaultClient {
  return Prismic.client(process.env.NEXT_PUBLIC_PRISMIC_API_URL, {
    req: request,
  })
}

export const prismic = initPrismicApi()
