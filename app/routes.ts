import {
  index,
  layout,
  prefix,
  route,
  type RouteConfig,
} from '@react-router/dev/routes'

export default [
  index('routes/_index.tsx'),
  ...prefix('blog', [
    index('./blog/_index.tsx'),
    layout('./blog/layout.tsx', [route('test', './blog/posts/test.mdx')]),
  ]),
  route('about', './routes/about.tsx'),
] satisfies RouteConfig
