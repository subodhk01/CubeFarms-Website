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
    .topsection {
        background-image: url('static/creative/back.png');
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
    }
`
const whyChooseUsData = [
    {
        image: "/static/creative/choose1.png",
        content: "We provide one-month free support and train you to tackle your new digital tool."
    },
    {
        image: "/static/creative/choose2.png",
        content: "We use open source scripts and libraries so that you can keep full ownership of the project."
    }
]
const ourProcessData = [
    {
        title: "Brief",
        icon: "process1",
        content: "We also provide `maintenance and security pack` at an affordable rate so that you have a fast optimised and secure website 24*7"
    },
    {
        title: "Research",
        icon: "process2",
        content: "We also provide `maintenance and security pack` at an affordable rate so that you have a fast optimised and secure website 24*7"
    },
    {
        title: "Sketch",
        icon: "process3",
        content: "We also provide `maintenance and security pack` at an affordable rate so that you have a fast optimised and secure website 24*7"
    },
    {
        title: "Concepts",
        icon: "process4",
        content: "We also provide `maintenance and security pack` at an affordable rate so that you have a fast optimised and secure website 24*7"
    },
    {
        title: "Present",
        icon: "process5",
        content: "We also provide `maintenance and security pack` at an affordable rate so that you have a fast optimised and secure website 24*7"
    },
    {
        title: "Revise",
        icon: "process6",
        content: "We also provide `maintenance and security pack` at an affordable rate so that you have a fast optimised and secure website 24*7"
    }
]

export default function Product(){
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
                                    <h1 className="font-39 text-white heading-thin">
                                        CREATIVE SERVICES
                                    </h1>
                                    <div className="font-13 mb-2" style={{color: PRIMARY}}>
                                        Good design is good business
                                    </div>
                                    <div className="font-11" style={{color: "rgba(245,245,245,0.83)", fontFamily: "madetommy-light"}}>
                                        We are passionate about effective design. Driven by our vision, we combine traditional graphics design principles with new technology to produce excellent design concepts that stand out
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-container bg-white">
                            <WhyChooseUs data={whyChooseUsData} heading="Why choose our services" />
                        </div>
                        <div className="hero-container">
                            <OurServices data={ourProcessData} heading="Our Process" line="/static/creative/line.png" />
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