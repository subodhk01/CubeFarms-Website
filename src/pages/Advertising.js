import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header/Header'
import WhyChooseUs from '../components/OutSource/WhyChooseUs'
import OurStandards from '../components/OutSource/OurStandards'
import OurServices from '../components/OutSource/OurProcess'
import LookingForSomethingElse from '../components/OutSource/LookingForSomethingElse'

import AOS from 'aos';
import { AnimatedBg, Transition } from 'scroll-background';

const Container = styled.div`
    .hero-container {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        padding: 40px 0px;
    }
    .heading {
        font-size: 2.6rem;
    }
`
const whyChooseUsData = [
    {
        image: "/static/choose.png",
        content: "We provide one-month free support and train you to tackle your new digital tool."
    },
    {
        image: "/static/choose.png",
        content: "We use open source scripts and libraries so that you can keep full ownership of the project."
    },
    {
        image: "/static/choose.png",
        content: "Our development team uses the best technologies to create high-performance, cost-efficient, flexible web experience."
    },
    {
        image: "/static/choose.png",
        content: "We also provide `maintenance and security pack` at an affordable rate so that you have a fast optimised and secure website 24*7"
    },
]
const ourStandardsData = [
    {
        image: "/static/standard.png",
        content: "Design Excellence",
    },
    {
        image: "/static/standard.png",
        content: "Build-in SEO.",
    },
    {
        image: "/static/standard.png",
        content: "100% responsive",
    },
    {
        image: "/static/standard.png",
        content: "Cross-browser compatibility",
    },
    {
        image: "/static/standard.png",
        content: "CMS enabled",
    },
    {
        image: "/static/standard.png",
        content: "1-month support after delivery"
    },
]
const ourProcessData = [
    {
        title: "UX",
        content: "We also provide `maintenance and security pack` at an affordable rate so that you have a fast optimised and secure website 24*7"
    },
    {
        title: "WIREFRAMING",
        content: "We also provide `maintenance and security pack` at an affordable rate so that you have a fast optimised and secure website 24*7"
    },
    {
        title: "DESIGNING",
        content: "We also provide `maintenance and security pack` at an affordable rate so that you have a fast optimised and secure website 24*7"
    },
    {
        title: "DEVELOPING",
        content: "We also provide `maintenance and security pack` at an affordable rate so that you have a fast optimised and secure website 24*7"
    },
    {
        title: "TESTING",
        content: "We also provide `maintenance and security pack` at an affordable rate so that you have a fast optimised and secure website 24*7"
    },
    {
        title: "HOSTING",
        content: "We also provide `maintenance and security pack` at an affordable rate so that you have a fast optimised and secure website 24*7"
    },
    {
        title: "LAUNCH",
        content: "We also provide `maintenance and security pack` at an affordable rate so that you have a fast optimised and secure website 24*7"
    },
    {
        title: "MAINTENANCE",
        content: "We also provide `maintenance and security pack` at an affordable rate so that you have a fast optimised and secure website 24*7"
    },
]

export default function Outsource(){
    React.useEffect(() => {
        if(window){
            AOS.init({
                duration: 1400,
            })
        }
    } ,[])
    return (
        <Container>
            <div className="bg-black">
                <div className="container">
                    <Header white full />
                </div>
            </div>
            <div>
                <AnimatedBg>
                    <div className="hero-container">
                        <div className="container">
                            <div className="p-3" style={{maxWidth: "600px"}}>
                                <h1 className="font-39 text-white">
                                    Data-Driven<br />
                                    Digital<br />
                                    Advertising Services
                                </h1>
                                <div className="font-13" style={{color: "rgba(245,245,245,0.83)", fontFamily: "madetommy-light"}}>
                                    We design and develop with a belief that every website deserves to 
                                    have its own voice. We build each and every website from scratch 
                                    combining function, content structure, and beauty in a single package.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-container">
                        <WhyChooseUs data={whyChooseUsData} heading="Why Choose Us?" />
                    </div>
                    {/* <div className="hero-container">
                        <OurStandards data={ourStandardsData} heading="Our Standards" />
                    </div> */}
                    <div className="hero-container">
                        <OurServices data={ourProcessData} heading="Our Process" />
                    </div>
                    <Transition height="100px" from="#000000" to="#ffffff" />
                    <div className="hero-container">
                        <LookingForSomethingElse />
                    </div>
                </AnimatedBg>
            </div>
        </Container>
    )
}