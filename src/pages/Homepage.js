import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header/Header'

import AOS from 'aos';
import TextLoop from "react-text-loop";
import { motion, useAnimation } from "framer-motion"
import Typing from 'react-typing-animation';
import { AnimatedBg, Transition } from 'scroll-background';
import { PRIMARY, PRIMARY_DARK } from '../utils/Colors'
import { FaQuoteLeft } from 'react-icons/fa'
import Footer from '../components/Footer/Footer'
import SingleArrowButton from '../components/Buttons/SingleArrowButton'

const widths = {
    zero: { width: "0px", transition: {duration: 0.7, type: "tween" } },
    full: { width: "auto", transition: {duration: 0.9, type: "tween" } }
}

const Container = styled.div`
    @keyframes backgroundMove {
        0% { background-position: 20px 30vh; }
        25% { background-position: 0px 32vh; }
        50% { background-position: -20px 30vh }
        75% { background-position: 0px 28vh; }
    }
    .top-container {
        background: url('/static/hometop.png');
        background-size: 120%;
        background-repeat: no-repeat;
        background-position: 20px 30vh;
        animation: backgroundMove ease 9s infinite;
    }
    .img-container {
        text-align: center;
    }
    .img-container img {
        max-width: 78%;
        max-height: 480px;
    }
    .grey-dash {
        display: inline-block;
        height: 4px;
        width: 50px;
        margin-bottom: 3px;
        border-radius: 3px;
        background: grey;
    }
    .home-span {
        overflow: auto;
        display: inline-block;
        font-family: "madetommy-regular";
        color: ${PRIMARY_DARK};
    }
    .home-heading {
        font-size: 4.2rem;
        font-family: "madetommy-light";
    }
    .home-heading-mobile {
        font-size: 2.7rem;
        font-family: "madetommy-light";
    }
    @media(max-width: 991px){
        .home-heading {
            font-size: 1.9rem;
        }
        .top-container {
            background-size: cover;
        }
    }
    .culture-section {
        background: url('/static/worldmap.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;    
    }
    .text-content {
        text-align: justify;
    }
`

export default function Outsource(){
    const [ white, setWhite ] = React.useState(true)
    const web = useAnimation()
    const product = useAnimation()
    const creative = useAnimation()
    const advertising = useAnimation()
    React.useEffect(() => {
        if(window){
            AOS.init({
                duration: 1400,
            })
            document.addEventListener("aos:in", ({ detail }) => {
                console.log("white in", detail)
            })
        }
        setTimeout(() => {
            web.start("full")
        } ,800)
        setTimeout(() => {
            web.start("zero")
        } ,2400)
        setTimeout(() => {
            product.start("full")
        } ,3200)
        setTimeout(() => {
            product.start("zero")
        } ,4800)
        setTimeout(() => {
            creative.start("full")
        } ,5600)
        setTimeout(() => {
            creative.start("zero")
        } ,7200)
        setTimeout(() => {
            advertising.start("full")
        } ,8000)
        setTimeout(() => {
            advertising.start("zero")
        } ,9600)
        setInterval(() => {
            setTimeout(() => {
                web.start("full")
            } ,800)
            setTimeout(() => {
                web.start("zero")
            } ,2400)
            setTimeout(() => {
                product.start("full")
            } ,3200)
            setTimeout(() => {
                product.start("zero")
            } ,4800)
            setTimeout(() => {
                creative.start("full")
            } ,5600)
            setTimeout(() => {
                creative.start("zero")
            } ,7200)
            setTimeout(() => {
                advertising.start("full")
            } ,8000)
            setTimeout(() => {
                advertising.start("zero")
            } ,9600)
        } ,9600)
    } ,[])
    return (
        <Container>
            <div>
                <Header white={white} full />
            </div>
            <div className="background-fade">
                <AnimatedBg>
                    <div className="hero-container top-container">
                        <div className="container">
                            <div className="p-3 heading d-block d-md-none">
                                <h1 data-aos="fade-up" className="text-white home-heading-mobile">
                                    We are<br />
                                    your <br />
                                    on Demand<br />
                                    <motion.div animate={web} variants={widths} initial={"zero"} className="home-span">Web</motion.div>
                                    <motion.div animate={product} variants={widths} initial={"zero"} className="home-span">Product</motion.div>
                                    <motion.div animate={creative} variants={widths} initial={"zero"} className="home-span">Creative</motion.div>
                                    <motion.div animate={advertising} variants={widths} initial={"zero"} className="home-span">Advertising</motion.div>
                                    <div className="home-span text-white">{" "}<Cursor /></div>
                                    <div className="text-white">Team</div>
                                </h1>
                            </div>
                            <div className="p-3 heading d-none d-md-block">
                                <h1 data-aos="fade-up" className="text-white home-heading">
                                    We are<br />
                                    your on Demand<br />
                                    <motion.div animate={web} variants={widths} initial={"zero"} className="home-span">Web</motion.div>
                                    <motion.div animate={product} variants={widths} initial={"zero"} className="home-span">Product</motion.div>
                                    <motion.div animate={creative} variants={widths} initial={"zero"} className="home-span">Creative</motion.div>
                                    <motion.div animate={advertising} variants={widths} initial={"zero"} className="home-span">Advertising</motion.div>
                                    <div className="home-span text-white">{" "}<Cursor />Team</div>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white py-4 px-2 py-lg-5" data-aos-id="white-bg">
                        <div className="row no-gutters align-items-center justify-content-between container-lg mx-auto p-0">
                            <div className="col-12 col-lg-6 p-2 text-muted font-14 heading">
                                Cubefarms is a full stack digital agency working remotely with clients to provide compelling solutions through
                            </div>
                            <div className="col-12 col-lg-5 p-2 d-flex justify-content-center heading-bold font-27" style={{color: PRIMARY_DARK}}>
                                <div className="text-left" style={{minWidth: "340px"}}>         
                                    <div>Strategy. Design.</div>
                                    <div>Content. Technology.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="py-3 py-lg-5 px-3 px-lg-2 container-lg">
                            <div className="font-21 heading text-white">
                                Why choose Us?
                            </div>
                        </div>
                    </div>
                    <div className="mini-hero-container container-lg">
                        <div className="py-3 py-lg-5">
                            <div className="row no-gutters align-items-center">
                                <div className="col-12 col-lg-6 p-3 px-lg-0 order-2 order-lg-1">
                                    <div data-aos="fade-right" className="heading font-32">
                                        Product design
                                    </div>
                                    <div data-aos="fade-right" data-aos-delay={400} className="heading-thin text-content font-18 text-muted py-3">
                                        We work with startups and brands to create amazing MVPs, app prototypes and custom apps. Pair with our expert product designers for a user centric product.
                                    </div>
                                    <div data-aos="fade-right" data-aos-delay={800} className="text-muted">
                                        <div className="grey-dash"></div> Corporate Design, Logo Design, Professional Motion Graphics, Product label Design
                                    </div>
                                    <div data-aos="fade-right" data-aos-delay={1200} className="py-3 py-lg-5">
                                        <div>
                                            <SingleArrowButton>
                                                Explore
                                            </SingleArrowButton>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 p-3 order-1 order-lg-2">
                                    <div className="d-flex align-items-center justify-content-center img-container">
                                        <img src="/static/homepage/product.png" alt="Creative Services" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Transition key={1} height="100px" from="#000000" to="#ffffff" />
                    <div className="mini-hero-container container-lg text-black">
                        <div className="py-3 py-lg-5">
                            <div className="row no-gutters align-items-center">
                                <div className="col-12 col-lg-6 p-3 order-1">
                                    <div className="d-flex align-items-center justify-content-center img-container">
                                        <img src="/static/homepage/web.png" alt="Creative Services" />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 p-3 px-lg-0 order-2">
                                    <div data-aos="fade-right" className="heading font-32 text-black">
                                        Web Studio
                                    </div>
                                    <div data-aos="fade-right" data-aos-delay={400} className="heading-thin text-content font-18 text-muted py-3">
                                        The internet is a virtual world. We help business to design, develop and manage websites that stand out and communicate clearly in this virtual world.
                                    </div>
                                    <div data-aos="fade-right" data-aos-delay={800} className="text-muted">
                                        <div className="grey-dash"></div> Corporate Design, Logo Design, Professional Motion Graphics, Product label Design
                                    </div>
                                    <div data-aos="fade-right" data-aos-delay={1200} className="py-3 py-lg-5">
                                        <div>
                                            <SingleArrowButton>
                                                Explore
                                            </SingleArrowButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Transition key={2} height="100px" from="#ffffff" to="#000000" />
                    <div className="mini-hero-container container-lg">
                        <div className="py-3 py-lg-5">
                            <div className="row no-gutters align-items-center">
                                <div className="col-12 col-lg-6 p-3 px-lg-0 order-2 order-lg-1">
                                    <div data-aos="fade-left"className="heading font-32">
                                        Digital Advertising
                                    </div>
                                    <div data-aos="fade-left" data-aos-delay={400} className="heading-thin text-content font-18 text-muted py-3">
                                        We use a data driven transparent approach to achieve your online objectives. Our digital branding services have proven to increase traggic, conversions and revenue.
                                    </div>
                                    <div data-aos="fade-left" data-aos-delay={800} className="text-muted">
                                        <div className="grey-dash"></div> Corporate Design, Logo Design, Professional Motion Graphics, Product label Design
                                    </div>
                                    <div data-aos="fade-left" data-aos-delay={1200} className="py-3 py-lg-5">
                                        <div>
                                            <SingleArrowButton white>
                                                Explore
                                            </SingleArrowButton>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 p-3 order-1 order-lg-2">
                                    <div className="d-flex align-items-center justify-content-center img-container">
                                        <img src="/static/homepage/digital.png" alt="Creative Services" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Transition key={3} height="100px" from="#000000" to="#ffffff" />
                    <div className="mini-hero-container container-lg text-black">
                        <div className="py-3 py-lg-5">
                            <div className="row no-gutters align-items-center">
                                <div className="col-12 col-lg-6 p-3">
                                    <div className="d-flex align-items-center justify-content-center img-container">
                                        <img src="/static/homepage/creative.png" alt="Creative Services" />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 p-3 px-lg-0">
                                    <div data-aos="fade-left" className="heading font-32">
                                        Creative Services
                                    </div>
                                    <div data-aos="fade-left" data-aos-delay={400} className="heading-thin text-content font-18 text-muted py-3">
                                        Good design is good business. Out team of expert creative directors deliver high end designs which complement your brand, product and services.
                                    </div>
                                    <div data-aos="fade-left" data-aos-delay={800} className="text-muted">
                                        <div className="grey-dash"></div> Corporate Design, Logo Design, Professional Motion Graphics, Product label Design
                                    </div>
                                    <div data-aos="fade-left" data-aos-delay={1200} className="py-3 py-lg-5">
                                        <div>
                                            <SingleArrowButton white>
                                                Explore
                                            </SingleArrowButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Transition key={4} height="50px" from="#ffffff" to="#f3f5fa" />
                    <div className="hero-container text-black culture-section">
                        <div className="py-3 py-lg-5 px-3 heading">
                            <div style={{maxWidth: "1000px"}}>
                                <div className="font-3 heading">
                                    Inspiring the<br />
                                    <span style={{color: PRIMARY_DARK}}>remote working culture</span>
                                </div>
                                <div className="py-3 py-lg-5 font-2 heading-thin">
                                    Here at Cubefarms we are making work from home a reality. All you need is laptop, Wi-Fi and sheer dedication towards your job
                                </div>
                                <div className="heading font-15">
                                    The future of work is here
                                </div>
                                <div className="pt-3">
                                    <div style={{fontFamily: "madetommy-bold"}}>
                                        <SingleArrowButton>
                                            JOIN US
                                        </SingleArrowButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Transition key={5} height="100px" from="#f3f5fa" to="#f3f5fa" />
                    <div className="mini-hero-container bg-black text-white">
                        <div className="py-5 px-3 heading text-center">
                            <div style={{maxWidth: "1000px"}}>
                                <div className="font-3 heading-regular">
                                    Our client stories
                                </div>
                                <div className="py-3 py-lg-5">
                                    <img src="static/quote.png" />
                                </div>
                                <div className="py-3 py-lg-5 font-18">
                                    Here at Cubefarms we are making work from home a reality. All you need is laptop, Wi-Fi and sheer dedication towards your job
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedBg>
            </div>
            <div>
                <Footer />
            </div>
        </Container>
    )
}

function Cursor() {
    return (
        <span style={{width: "5px", height: "40px", background: "white", padding: "2px"}} className="mr-3 ml-1">
            
        </span>
    )
}