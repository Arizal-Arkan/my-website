import Navbar from '../components/Navbar';
import DX from '../assets/image/DX.png';
import Palapa from '../assets/image/Palapa.png';
import Head from 'next/head';

export default function Portofolio() {
    return (
        <>
            <Head>
                <title>Portofolio</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            <section className="hero">
                <div className="container">
                    <div className="text-wrapper full">
                        <h1 className="title">Portofolio</h1>

                        <div className="portofolio-wrapper">
                            <div className="portofolio-item">
                                <img src={DX} alt="" className="portofolio-img" />

                                <h4 className="portofolio-title">Data Exchange</h4>
                                <div className="portofolio-desc">Web E-commerce insight</div>
                            </div>

                            <div className="portofolio-item">
                                <img src={Palapa} alt="" className="portofolio-img" />

                                <h4 className="portofolio-title">PalapaOne</h4>
                                <div className="portofolio-desc">A event organize website</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}