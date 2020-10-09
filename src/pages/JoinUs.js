import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header/JoinUsHeader'
import JoinUsForm from '../components/JoinUsForm'
import StepScroll from '../components/StepScroll'

import { PRIMARY, PRIMARY_DARK } from '../utils/Colors'


const background = '/static/cubeBackground.png'

const Container = styled.div`
    height: 100%;
    .hero {
        height: 100%;
        //background: url(${background});
        background-repeat: no-repeat;
        background-size: cover;
    }
    .subheading {
        font-size: 1.3rem;
    }
    .heading {
        font-size: 1.6rem;
    }
    .subheading, .heading {
        font-weight: bold;
    }
    .subheadingWhite {
        color: white;
        font-size: 1.8rem;
    }
    .form {
        overflow: hidden;
        background: linear-gradient(to bottom,${PRIMARY_DARK}, ${PRIMARY_DARK})
    }
    @media(min-width: 992px){
        .outerContainer {      
            min-height: 100%;
        }
        .outerContainer > div {

        }
        .subheading {
            font-size: 2.3rem;
        }
        .heading {
            font-size: 2.6rem;
        }
    }
    .hero {
        min-height: 100%;
        height: auto;
    }
`

export default function JoinUs(){
    React.useEffect(() => {
        if(document){
            document.body.style.background = PRIMARY_DARK
        }
    } ,[])
    return (
        <Container>
            <div className="d-block d-lg-none">
                <Header full={false} transparent />
            </div>
            <div className="row no-gutters outerContainer">
                <div className="col-12 col-lg-6 d-none d-lg-block hero position-relative bg-white">
                    <Header full={false} transparent />
                    <div className="py-10 h-100 d-flex flex-column align-items-center justify-content-center">
                        <div className="subheading">Work someplace Awesome</div>
                        <div className="heading">Work at Cubefarms</div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 form px-3 px-md-5 py-10 py-md-3 d-flex flex-column position-relative">
                    <div className="subheadingWhite w-100 py-md-2">
                        Let's get to know you!
                    </div>
                    <div className="subheadingWhite w-100">
                        <StepScroll />
                    </div>
                    <div className="w-100 joinusform h-100">
                        <JoinUsForm />
                    </div>
                </div>
            </div>
        </Container>
    )
}