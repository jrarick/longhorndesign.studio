import { Outlet } from 'react-router'

export default function BlogLayout() {
  return (
    <div className="px-6 py-32 lg:px-8">
      <div className="prose mx-auto dark:prose-invert">
        <Outlet />
      </div>
    </div>
  )
}
