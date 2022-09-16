import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
<h1 className=" text-5xl md:text-6xl font-extrabold leading-tighter mb-4">
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-508 to-teal-400 py-2">
    Hello People!
</span>
</h1>
</Layout>
  )
}
