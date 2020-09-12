import React from 'react'
import styled from 'styled-components'
import Header from '../../components/Header/Header'
import WhyChooseUs from '../../components/OutSource/WhyChooseUs'
import OurStandards from '../../components/OutSource/OurStandards'
import OurServices from '../../components/OutSource/OurProcess'
import StaticSidePanelSection from '../../components/StaticSidePanelSection'
import LookingForSomethingElse from '../../components/OutSource/LookingForSomethingElse'

import AOS from 'aos';
import { AnimatedBg, Transition } from 'scroll-background';
import Layout from '../../components/UI/Layout'
import { PRIMARY } from '../../utils/Colors'

const Container = styled.div`
    .heading {
        font-size: 2.6rem;
    }
`
const whyChooseUsData = [
    {
        image: "/static/web/choose1.png",
        content: "We provide one-month free support and train you to tackle your new digital tool."
    },
    {
        image: "/static/web/choose2.png",
        content: "We use open source scripts and libraries so that you can keep full ownership of the project."
    },
    {
        image: "/static/web/choose3.png",
        content: "Our development team uses the best technologies to create high-performance, cost-efficient, flexible web experience."
    },
    {
        image: "/static/web/choose4.png",
        content: "We also provide `maintenance and security pack` at an affordable rate so that you have a fast optimised and secure website 24*7"
    },
]
const ourStandardsData = [
    {
        image: "/static/web/standard1.png",
        content: "Design Excellence",
    },
    {
        image: "/static/web/standard2.png",
        content: "Build-in SEO.",
    },
    {
        image: "/static/web/standard3.png",
        content: "100% responsive",
    },
    {
        image: "/static/web/standard4.png",
        content: "Cross-browser compatibility",
    },
    {
        image: "/static/web/standard5.png",
        content: "CMS enabled",
    },
    {
        image: "/static/web/standard6.png",
        content: "1-month support after delivery"
    },
]
const ourProcessData = [
    {
        title: "UX",
        icon: "/static/web/process1.png",
        content: "We also provide `maintenance and security pack` at an affordable rate so that you have a fast optimised and secure website 24*7"
    },
    {
        title: "WIREFRAMING",
        icon: "/static/web/process1.png",
        content: "We also provide `maintenance and security pack` at an affordable rate so that you have a fast optimised and secure website 24*7"
    },
    {
        title: "DESIGNING",
        icon: "/static/web/process1.png",
        content: "We also provide `maintenance and security pack` at an affordable rate so that you have a fast optimised and secure website 24*7"
    },
    {
        title: "DEVELOPING",
        icon: "/static/web/process1.png",
        content: "We also provide `maintenance and security pack` at an affordable rate so that you have a fast optimised and secure website 24*7"
    },
    {
        title: "TESTING",
        icon: "/static/web/process1.png",
        content: "We also provide `maintenance and security pack` at an affordable rate so that you have a fast optimised and secure website 24*7"
    },
    {
        title: "HOSTING",
        icon: "/static/web/process1.png",
        content: "We also provide `maintenance and security pack` at an affordable rate so that you have a fast optimised and secure website 24*7"
    },
    {
        title: "LAUNCH",
        icon: "/static/web/process1.png",
        content: "We also provide `maintenance and security pack` at an affordable rate so that you have a fast optimised and secure website 24*7"
    },
    {
        title: "MAINTENANCE",
        icon: "/static/web/process1.png",
        content: "We also provide `maintenance and security pack` at an affordable rate so that you have a fast optimised and secure website 24*7"
    },
]

export default function Web(){
    React.useEffect(() => {
        if(window){
            AOS.init({
                duration: 1400,
            })
        }
    } ,[])
    return (
        <Layout header={{white: true,full: true}}>
            <Container>
                <div className="background-fade">
                    <AnimatedBg>
                        <div className="hero-container">
                            <div className="container">
                                <div className="p-3" style={{maxWidth: "600px"}}>
                                    <h1 className="font-39 text-white heading-thin">
                                        WEB STUDIO
                                    </h1>
                                    <div className="font-13 mb-2" style={{color: PRIMARY}}>
                                        Websites promote you 24/7. No employee will do that.
                                    </div>
                                    <div className="font-11" style={{color: "rgba(245,245,245,0.83)", fontFamily: "madetommy-light"}}>
                                        We design and develop bespoke web experience with a belief that every website deserves to have its own voice. We built each website from scratch combining function, content structure, and beauty in a single package. Our beautiful, made from scratch website will be 100% unique to your brand. 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-container bg-white">
                            <WhyChooseUs data={whyChooseUsData} heading="Why choose our services" />
                        </div>
                        <div className="hero-container">
                            <OurStandards data={ourStandardsData} heading="Our Standards" />
                        </div>
                        <div className="hero-container">
                            <OurServices data={ourProcessData} heading="Our Process" line={"/static/web/line.png"} />
                        </div>
                        <div className="hero-container bg-white py-0">
                            <StaticSidePanelSection />
                        </div>
                        <Transition height="100px" from="#000000" to="#ffffff" />
                        <div className="min-hero-container py-10">
                            <LookingForSomethingElse />
                        </div>
                    </AnimatedBg>
                </div>
            </Container>
        </Layout>
    )
}