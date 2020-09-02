import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header/Header'
import WhyChooseUs from '../components/OutSource/WhyChooseUs'
import OurStandards from '../components/OutSource/OurStandards'
import OurServices from '../components/OutSource/OurProcess'
import StaticSidePanelSection from '../components/StaticSidePanelSection'
import LookingForSomethingElse from '../components/OutSource/LookingForSomethingElse'

import AOS from 'aos';
import TextLoop from "react-text-loop";
import { motion, useAnimation } from "framer-motion"
import Typing from 'react-typing-animation';
import { AnimatedBg, Transition } from 'scroll-background';
import { PRIMARY, PRIMARY_DARK } from '../utils/Colors'
import { FaQuoteLeft } from 'react-icons/fa'
import Footer from '../components/Footer/Footer'

const widths = {
    zero: { width: "0px", transition: {duration: 0.7, type: "tween" } },
    full: { width: "auto", transition: {duration: 0.9, type: "tween" } }
}

const Container = styled.div`
    .grey-dash {
        display: inline-block;
        height: 4px;
        width: 50px;
        margin-bottom: 3px;
        border-radius: 3px;
        background: grey;
    }
    .background-fade>div {
        transition: background-color 1s ease;
    }
    .home-span {
        overflow: hidden;
        display: inline-block;
        color: ${PRIMARY_DARK};
    }
`

export default function Outsource(){
    const web = useAnimation()
    const product = useAnimation()
    const creative = useAnimation()
    const advertising = useAnimation()
    React.useEffect(() => {
        if(window){
            AOS.init({
                duration: 1400,
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
            <div className="bg-black">
                <div className="container">
                    <Header white full />
                </div>
            </div>
            <div className="background-fade">
                <AnimatedBg>
                    <div className="hero-container">
                        <div className="container">
                            <div className="p-3">
                                <h1 data-aos="fade-up" className="font-5 text-white">
                                    We are<br />
                                    your on Demand<br />
                                    <motion.div animate={web} variants={widths} initial={"zero"} className="home-span">Web</motion.div>
                                    <motion.div animate={product} variants={widths} initial={"zero"} className="home-span">Product</motion.div>
                                    <motion.div animate={creative} variants={widths} initial={"zero"} className="home-span">Creative</motion.div>
                                    <motion.div animate={advertising} variants={widths} initial={"zero"} className="home-span">Advertising</motion.div>
                                    <div className="home-span text-white">{" "}<Cursor /> Team</div>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white py-3 py-lg-5">
                        <div data-aos="fade-up" className="row no-gutters align-items-center justify-content-around container-lg mx-auto">
                            <div className="col-12 col-lg-6 p-3 text-muted font-14 heading">
                                Cubefarms is a full stack digital agency working remotely with clients to provide compelling solutions through
                            </div>
                            <div className="col-12 col-lg-5 p-3 d-flex justify-content-center heading-bold font-39" style={{color: PRIMARY}}>
                                <div className="text-left" style={{minWidth: "340px"}}>
                                    
                                    <Typing loop={true} speed={100}>
                                        <span>Strategy</span>
                                        <Typing.Backspace count={9} delay={300} speed={30} />
                                        <Typing.Speed ms={100} />
                                        <span>Design</span>
                                        <Typing.Backspace count={8} delay={300} speed={30} />
                                        <Typing.Speed ms={100} />
                                        <span>Content</span>
                                        <Typing.Backspace count={8} delay={300} speed={30} />
                                        <Typing.Speed ms={100} />
                                        <span>Technology</span>
                                        <Typing.Backspace count={13} delay={300} speed={30} />
                                        <Typing.Speed ms={100} />
                                    </Typing>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="py-3 py-lg-5 px-3 px-lg-5">
                            <div className="font-21 heading text-white">
                                Why choose Us?
                            </div>
                        </div>
                    </div>
                    <div className="mini-hero-container container-lg">
                        <div className="py-3 py-lg-5">
                            <div className="row no-gutters">
                                <div className="col-12 col-lg-6 p-3">

                                </div>
                                <div className="col-12 col-lg-6 p-3">
                                    <div data-aos="fade-left" className="heading font-32">
                                        Creative Services
                                    </div>
                                    <div data-aos="fade-left" data-aos-delay={400} className="heading font-18 text-muted py-3">
                                        Good design is good business. Out team of expert creative directors deliver high end designs which complement your brand, product and services.
                                    </div>
                                    <div data-aos="fade-left" data-aos-delay={800} className="text-muted font-weight-bold">
                                        <div className="grey-dash"></div> Corporate Design, Logo Design, Professional Motion Graphics, Product label Design
                                    </div>
                                    <div data-aos="fade-left" data-aos-delay={1200} className="py-3 py-lg-5">
                                        <div>
                                            Explore
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Transition height="100px" from="#000000" to="#ffffff" />
                    <div className="mini-hero-container container-lg text-black">
                        <div className="py-3 py-lg-5">
                            <div className="row no-gutters">
                                <div className="col-12 col-lg-6 p-3">
                                    <div data-aos="fade-right" className="heading font-32 text-black">
                                        Web Studio
                                    </div>
                                    <div data-aos="fade-right" data-aos-delay={400} className="heading font-18 text-muted py-3">
                                        The internet is a virtual world. We help business to design, develop and manage websites that stand out and communicate clearly in this virtual world.
                                    </div>
                                    <div data-aos="fade-right" data-aos-delay={800} className="text-muted font-weight-bold">
                                        <div className="grey-dash"></div> Corporate Design, Logo Design, Professional Motion Graphics, Product label Design
                                    </div>
                                    <div data-aos="fade-right" data-aos-delay={1200} className="py-3 py-lg-5">
                                        <div>
                                            Explore
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 p-3">

                                </div>
                            </div>
                        </div>
                    </div>
                    <Transition height="100px" from="#ffffff" to="#000000" />
                    <div className="mini-hero-container container-lg">
                        <div className="py-3 py-lg-5">
                            <div className="row no-gutters">
                                <div className="col-12 col-lg-6 p-3">

                                </div>
                                <div className="col-12 col-lg-6 p-3">
                                    <div data-aos="fade-left"className="heading font-32">
                                        Digita Advertising
                                    </div>
                                    <div data-aos="fade-left" data-aos-delay={400} className="heading font-18 text-muted py-3">
                                        We use a data driven transparent approach to achieve your online objectives. Our digital branding services have proven to increase traggic, conversions and revenue.
                                    </div>
                                    <div data-aos="fade-left" data-aos-delay={800} className="text-muted font-weight-bold">
                                        <div className="grey-dash"></div> Corporate Design, Logo Design, Professional Motion Graphics, Product label Design
                                    </div>
                                    <div data-aos="fade-left" data-aos-delay={1200} className="py-3 py-lg-5">
                                        <div>
                                            Explore
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Transition height="100px" from="#000000" to="#ffffff" />
                    <div className="mini-hero-container container-lg text-black">
                        <div className="py-3 py-lg-5">
                            <div className="row no-gutters">
                                <div className="col-12 col-lg-6 p-3">
                                    <div data-aos="fade-right" className="heading font-32  text-black">
                                        Product design
                                    </div>
                                    <div data-aos="fade-right" data-aos-delay={400} className="heading font-18 text-muted py-3">
                                        We work with startups and brands to create amazing MVPs, app prototypes and custom apps. Pair with our expert product designers for a user centric product.
                                    </div>
                                    <div data-aos="fade-right" data-aos-delay={800} className="text-muted font-weight-bold">
                                        <div className="grey-dash"></div> Corporate Design, Logo Design, Professional Motion Graphics, Product label Design
                                    </div>
                                    <div data-aos="fade-right" data-aos-delay={1200} className="py-3 py-lg-5">
                                        <div>
                                            Explore
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 p-3">

                                </div>
                            </div>
                        </div>
                    </div>
                    <Transition height="100px" from="#ffffff" to="#f3f5fa" />
                    <div className="mini-hero-container text-black">
                        <div className="py-3 py-lg-5 px-3 heading">
                            <div style={{maxWidth: "1000px"}}>
                                <div className="font-3 heading-bold">
                                    Inspiring the<br />
                                    <span style={{color: PRIMARY_DARK}}>remote working culture</span>
                                </div>
                                <div className="py-3 py-lg-5 font-2">
                                    Here at Cubefarms we are making work from home a reality. All you need is laptop, Wi-Fi and sheer dedication towards your job
                                </div>
                                <div className="font-weight-bold font-15">
                                    The future of work is here
                                </div>
                                <div className="">
                                    <div>
                                        Join us
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Transition height="100px" from="#f3f5fa" to="#f3f5fa" />
                    <div className="mini-hero-container text-black bg-white">
                        <div className="py-3 py-lg-5 px-3 heading text-center">
                            <div style={{maxWidth: "1000px"}}>
                                <div className="font-3 heading-bold">
                                    Our client stories
                                </div>
                                <div className="py-3 py-lg-5">
                                    <FaQuoteLeft size="76" color={PRIMARY_DARK} />
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