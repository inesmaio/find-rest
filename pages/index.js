import Head from 'next/head'
import { Landing } from "../components/search/"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
  
    </div>
  )
}
