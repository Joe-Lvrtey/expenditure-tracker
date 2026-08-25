import { createFileRoute } from '@tanstack/react-router'
import AppSidebar from "../pages/Dashboard/App-Dashboard"
export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      <AppSidebar />
    </>
  )
}
