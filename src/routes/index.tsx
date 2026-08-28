import { createFileRoute } from '@tanstack/react-router'
import AppSidebar from "../pages/Dashboard/App-Dashboard"
import SignUp from "../components/Auth/SignUp"
import SignIn from "../components/Auth/SignIn"
import pageMeta from "../lib/seo"
import { company } from "../data/site"
import Register from "../components/Auth/Register"

export const Route = createFileRoute('/')({
  //   head: () => ({
  //     meta: pageMeta({
  //       title: company.name,
  //       description: company.description
  //     }),
  //     component: Home
  //   })
  // })
  head: () => ({
    meta: pageMeta({
      title: company.name,
      description: company.description,
    }),
  }),
  component: Home,
})

function Home() {
  return (
    <>
      <Register mode="Sign-in" />
    </>
  )
}
