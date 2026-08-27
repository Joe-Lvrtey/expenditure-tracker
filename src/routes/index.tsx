import { createFileRoute } from '@tanstack/react-router'
import AppSidebar from "../pages/Dashboard/App-Dashboard"
import SignUp from "../components/Auth/SignUp"
import SignIn from "../components/Auth/SignIn"
export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      <SignUp />
    </>
  )
}
