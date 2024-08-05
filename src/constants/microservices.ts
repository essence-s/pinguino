const BASE = process.env.NEXT_PUBLIC_MICROSERVICE_PATH || 'dev-api'

const COMMUNITY = process.env.NEXT_PUBLIC_COMMUNITY_MICROSERVICE_PATH || 'dev-forum'

const BILLING = process.env.NEXT_PUBLIC_BILLING_MICROSERVICE_PATH || 'dev-billing'

const BLOG = process.env.NEXT_PUBLIC_BLOG_MICROSERVICE_PATH || 'dev-api-blog'

const ELASTIC = process.env.NEXT_PUBLIC_ELASTIC_MICROSERVICE_PATH || 'dev-seeker'

const CACHE = process.env.NEXT_PUBLIC_CACHE_MICROSERVICE_PATH || 'dev-cache'

const STUDIES = process.env.NEXT_PUBLIC_STUDIES_MICROSERVICE_PATH || 'dev-studies'

const CHAT_EDT = process.env.NEXT_PUBLIC_CHAT_EDT_MICROSERVICE_PATH || 'dev-chat-edt'

const CRON = process.env.NEXT_PUBLIC_CRON_MICROSERVICE_PATH || 'dev-cron'

export const MICROSERVICES = {
  BASE: BASE,
  COMMUNITY: COMMUNITY,
  BILLING: BILLING,
  BLOG: BLOG,
  ELASTIC: ELASTIC,
  CACHE: CACHE,
  STUDIES: STUDIES,
  CHAT_EDT: CHAT_EDT,
  CRON: CRON
}
