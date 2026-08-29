import { createFileRoute } from '@tanstack/react-router'
import pageMeta from "../lib/seo"
import { company } from "../data/site"
import Register from "../components/Auth/Register"

export const Route = createFileRoute('/')({
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
      <Register mode="sign-in" />
    </>
  )
}
