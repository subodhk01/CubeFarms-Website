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
    }
    .form {
        background: linear-gradient(to bottom,${PRIMARY}, ${PRIMARY_DARK})
    }
    @media(min-width: 992px){
        .outerContainer {
            height: 100%;
        }
    }
`

export default function JoinUs(){
    return (
        <Container>
            <Header />
            <div className="row no-gutters outerContainer">
                <div className="col-12 col-lg-6 hero px-2 px-md-5 py-5">
                    <div className="py-5 h-100 d-flex flex-column align-items-center justify-content-center">
                        <div className="subheading">Work someplace Awesome</div>
                        <div className="heading">Work at Cubefarms</div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 form p-2 p-md-5 d-flex flex-column position-relative">
                    <div className="subheadingWhite w-100">
                        Let's get to know you!
                    </div>
                    <div className="w-100 joinusform h-100">
                        <JoinUsForm />
                    </div>
                </div>
            </div>
        </Container>
    )
}