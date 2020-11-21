import Navbar from '../components/Navbar';
import Head from 'next/head';

export default function About() {
    return (
        <>
            <Head>
                <title>About</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            <section className="hero">
                <div className="container">
                    <div className="text-wrapper full">
                        <h1 className="title">Profile</h1>
                        <p className="desc">Saya seorang Frontend Developer, UI/UX Entushiast dan tertarik di dunia pemerograman</p>
                    </div>
                </div>
            </section>
        </>
    )
}