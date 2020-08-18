import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header/Header'

const Container = styled.div`
    background: black;
    .hero-container {
        min-height: 95vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export default function Outsource(){
    return (
        <Container>
            <div className="container">
                <Header white full />
            </div>
            <div style={{paddingTop: "80px"}}>
                <div className="hero-container">
                    <div>
                        <div>
                            WEB STUDIO
                        </div>
                        <div>
                            Websites promote you 24/7. No employee will do that.
                        </div>
                        <div>
                            We design and develop with a belief that every website deserves to 
                            have its own voice. We build each and every website from scratch 
                            combining function, content structure, and beauty in a single package.
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}