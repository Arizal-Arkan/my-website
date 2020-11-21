import Navbar from '../components/Navbar';
import Head from 'next/head';

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            <section className="hero">
                <div className="container">
                    <div className="text-wrapper full">
                        <h1 className="title">Contact</h1>

                        <p>Berikut adalah kontak yang bisa anda hubungi : </p>

                        <ul className="contact-link">
                            <li className="contact-item">Email: arizalarkan@gmail.com</li>
                            <li className="contact-item">Whatapps: 085717617899</li>
                            <li className="contact-item">Facebook: Arkan</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}