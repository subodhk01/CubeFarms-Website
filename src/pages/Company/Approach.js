import React from 'react'
import Layout from '../../components/UI/Layout'
import styled from 'styled-components'
import { PRIMARY_DARK, PRIMARY } from '../../utils/Colors'

const Container = styled.div`
    .blue-back {
        background: ${PRIMARY_DARK};
        height: 50px;
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.5rem;
        font-family: "madetommy-bold";
    }
`

export default function Approach() {
    return (
        <Layout header={{full: true}} footer={{black: true}}>
            <Container>
                <div className="hero-container" style={{background: "#f3f5fa"}}>
                    <div className="container">
                        <div className="p-3" style={{maxWidth: "600px"}}>
                            <h1 className="font-42" style={{fontFamily: "madetommy-bold", color: PRIMARY_DARK}}>
                                APPROACH
                            </h1>
                            <div className="font-13" style={{color: "rgba(0,0,0,0.83)", fontFamily: "madetommy-light"}}>
                                Why Goals Who What How
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-lg hero-container text-black">
                    <div className="w-100">
                        <div className="heading p-2 p-md-5 font-24 pb-4">
                            <div className="mb-2" style={{width: "120px", height: "8px", background: PRIMARY}}>

                            </div>
                            Our Process and journey with you
                        </div>
                        <div className="row no-gutters">
                            <div className="col-12 col-lg-6 p-3">

                            </div>
                            <div className="col-12 col-lg-6 p-3 px-lg-0">
                                <div className="heading text-black">
                                    <div className="d-flex align-items-center">
                                        <div className="pr-3">
                                            <div className="blue-back">
                                                1
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="font-2" style={{color: PRIMARY_DARK}}>
                                                Start with WHY
                                            </div>
                                            <div>
                                                Why is the project happening
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="heading font-14 text-muted py-3">
                                    Every business centric problem start with a WHY. Complex projects will have a lots of WHYs, capture all of them.
                                </div>
                            </div>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-12 col-lg-6 p-3 px-lg-0">
                                <div className="heading text-black">
                                    <div className="d-flex align-items-center">
                                        <div className="pr-3">
                                            <div className="blue-back">
                                                2
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="font-2" style={{color: PRIMARY_DARK}}>
                                                Start with WHY
                                            </div>
                                            <div>
                                                Why is the project happening
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="heading font-14 text-muted py-3">
                                    Every business centric problem start with a WHY. Complex projects will have a lots of WHYs, capture all of them.
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 p-3">

                            </div>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-12 col-lg-6 p-3">

                            </div>
                            <div className="col-12 col-lg-6 p-3 px-lg-0">
                                <div className="heading text-black">
                                    <div className="d-flex align-items-center">
                                        <div className="pr-3">
                                            <div className="blue-back">
                                                3
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="font-2" style={{color: PRIMARY_DARK}}>
                                                Start with WHY
                                            </div>
                                            <div>
                                                Why is the project happening
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="heading font-14 text-muted py-3">
                                    Every business centric problem start with a WHY. Complex projects will have a lots of WHYs, capture all of them.
                                </div>
                            </div>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-12 col-lg-6 p-3 px-lg-0">
                                <div className="heading text-black">
                                    <div className="d-flex align-items-center">
                                        <div className="pr-3">
                                            <div className="blue-back">
                                                4
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="font-2" style={{color: PRIMARY_DARK}}>
                                                Start with WHY
                                            </div>
                                            <div>
                                                Why is the project happening
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="heading font-14 text-muted py-3">
                                    Every business centric problem start with a WHY. Complex projects will have a lots of WHYs, capture all of them.
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 p-3">

                            </div>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-12 col-lg-6 p-3">

                            </div>
                            <div className="col-12 col-lg-6 p-3 px-lg-0">
                                <div className="heading text-black">
                                    <div className="d-flex align-items-center">
                                        <div className="pr-3">
                                            <div className="blue-back">
                                                5
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="font-2" style={{color: PRIMARY_DARK}}>
                                                Start with WHY
                                            </div>
                                            <div>
                                                Why is the project happening
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="heading font-14 text-muted py-3">
                                    Every business centric problem start with a WHY. Complex projects will have a lots of WHYs, capture all of them.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}