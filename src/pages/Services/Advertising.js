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

const Container = styled.div`
    .heading {
        font-size: 2.6rem;
    }
    .topsection {
        background-image: url('static/advertising/back.png');
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
    }
`
const whyChooseUsData = [
    {
        image: "/static/advertising/choose1.png",
        content: "We provide one-month free support and train you to tackle your new digital tool."
    },
    {
        image: "/static/advertising/choose1.png",
        content: "We use open source scripts and libraries so that you can keep full ownership of the project."
    },
    {
        image: "/static/advertising/choose1.png",
        content: "Our development team uses the best technologies to create high-performance, cost-efficient, flexible web experience."
    },
    {
        image: "/static/advertising/choose1.png",
        content: "*7"
    },
]
const ourProcessData = [
    {
        title: "Market research",
        icon: "/static/advertising/process1.png",
        content: "We take a comprehensive approach across your industry trends, competitors, and target audience. We conduct market research to understand your digital potential and make strategic decisions"
    },
    {
        title: "Collaborate",
        icon: "/static/advertising/process1.png",
        content: "You know your business the best and we are experts at our work. At this stage, we collaborate with you to discuss your objectives and set short term and long term goals"
    },
    {
        title: "Strategy",
        icon: "/static/advertising/process1.png",
        content: "With research, data and industry knowledge, we develop multi-channel marketing strategies with your goals and objectives in mind"
    },
    {
        title: "Execute",
        icon: "/static/advertising/process1.png",
        content: "From creating SEO friendly content to strategically curated campaigns, and everything in between. We execute our strategy to connect your brand with the targeted audience"
    },
    {
        title: "Optimize",
        icon: "/static/advertising/process1.png",
        content: "The digital world is constantly changing. That's why we take a smart approach to digital advertising. With which we adjust our strategy and implement new findings to improve your ROI"
    }
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
        <Layout header={{white: true,full: true}}>
            <Container>
                <div className="background-fade">
                    <AnimatedBg>
                        <div className="hero-container topsection">
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
                        <div className="hero-container bg-white">
                            <WhyChooseUs data={whyChooseUsData} heading="Why Choose Us?" />
                        </div>
                        <div className="hero-container">
                            <OurServices data={ourProcessData} heading="Our Process" line="/static/advertising/line.png" />
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