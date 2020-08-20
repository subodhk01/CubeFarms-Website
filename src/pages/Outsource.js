import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header/Header'
import WhyChooseUs from '../components/OutSource/WhyChooseUs'
import OurStandards from '../components/OutSource/OurStandards'
import OurServices from '../components/OutSource/OurProcess'
import LookingForSomethingElse from '../components/OutSource/LookingForSomethingElse'

const Container = styled.div`
    background: black;
    .hero-container {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }
    .heading {
        font-size: 2.3rem;
        color
    }
`

export default function Outsource(){
    return (
        <Container>
            <div className="container">
                <Header white full />
            </div>
            <div>
                <div className="hero-container">
                    <div className="container">
                        <div className="p-3" style={{maxWidth: "600px"}}>
                            <h1 className="font-39 text-white">
                                WEB STUDIO
                            </h1>
                            <div className="color-primary font-14">
                                Websites promote you 24/7. No employee will do that.
                            </div>
                            <div className="font-13" style={{color: "rgba(245,245,245,0.83)"}}>
                                We design and develop with a belief that every website deserves to 
                                have its own voice. We build each and every website from scratch 
                                combining function, content structure, and beauty in a single package.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-container">
                    <WhyChooseUs />
                </div>
                <div className="hero-container">
                    <OurStandards />
                </div>
                <div className="hero-container">
                    <OurServices />
                </div>
                <div className="hero-container" style={{background: "#fafeff"}}>
                    <LookingForSomethingElse />
                </div>
            </div>
        </Container>
    )
}