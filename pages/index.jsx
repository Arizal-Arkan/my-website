import Link from 'next/link'
import HeroImg from '../public/arkan.svg';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Head from "next/head";
import getConfig from 'next/config'

export default function Home() {
  const { publicRuntimeConfig } = getConfig()
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
            <h1 className="title">Hallo, saya Arizal Arkan</h1>
            <p className="desc">Saya seorang Frontend Developer, UI/UX Entushiast dan tertarik di dunia pemerograman</p>

            <Link href="/contact"><a className="cta">Kontak Saya</a></Link>
          </div>

          <div className="img-wrapper">
            <img src={HeroImg} alt="hero image" className="img-hero" />
            {/* <Image src={HeroImg} alt='arkan' width="200" height="64" /> */}
          </div>
        </div>
      </section>
    </>
  )
}
