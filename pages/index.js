import Layout from "@/components/Layout"
import Link from "next/link"
import {API_URL} from "@/config/index"
import EventItem from "@/components/EventItem"

export default function Home({events}) {
  console.log(events)
  return (
    <Layout>
       {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />  
  ))}
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()
  console.log(events)
  return {
    props: {events},
    revalidate: 1,
  }
}
