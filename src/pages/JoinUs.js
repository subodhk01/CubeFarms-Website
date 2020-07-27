import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import JoinUsForm from '../components/JoinUsForm'

import { PRIMARY, PRIMARY_DARK } from '../utils/Colors'
import background from '../assets/cubeBackground.png'

const Container = styled.div`
    height: 100%;
    .hero {
        height: 100%;
        background: url(${background});
        background-repeat: no-repeat;
        background-size: cover;
    }
    .subheading {
        font-size: 2.3rem;
    }
    .heading {
        font-size: 2.6rem;
    }
    .subheading, .heading {
        text-shadow: 0px 0px 5px silver;
        font-weight: bold;
    }
    .subheadingWhite {
        color: white;
        font-size: 1.8rem;
        text-shadow: 0px 0px 5px rgba(0,0,0,0.4);
        font-weight: bold;
    }
    .form {
        background: linear-gradient(to bottom,${PRIMARY}, ${PRIMARY_DARK})
    }
`

export default function JoinUs(){
    return (
        <Container>
            <Header />
            <div className="row no-gutters h-100">
                <div className="col-12 col-md-6 hero p-2 p-md-5 d-flex flex-column align-items-center justify-content-center">
                    <div className="subheading">Work someplace Awesome</div>
                    <div className="heading">Work at Cubefarms</div>
                </div>
                <div className="col-12 col-md-6 form p-2 p-md-5 d-flex flex-column align-items-center justify-content-center">
                    <div className="subheadingWhite">
                        Let's get to know you!
                    </div>
                    <JoinUsForm />
                </div>
            </div>
        </Container>
    )
}