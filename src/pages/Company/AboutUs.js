import React from 'react'
import Layout from '../../components/UI/Layout'
import styled from 'styled-components'
import { PRIMARY } from '../../utils/Colors'

const Container = styled.div`
    .inset-shadow {
        box-shadow: 0px 0px 30px 6px #ecf0f7 inset;
    }
`

export default function AboutUs() {
    return (
        <Layout header={{full: true}}>
            <Container>
                <div className="hero-container">
                    <div className="container">
                        <div className="p-3" style={{maxWidth: "600px"}}>
                            <h1 className="font-39 text-black" style={{fontFamily: "madetommy-light"}}>
                                Who are we?
                            </h1>
                            <div className="font-13" style={{color: "rgba(0,0,0,0.83)", fontFamily: "madetommy-light"}}>
                                We design and develop with a belief that every website deserves to 
                                have its own voice. We build each and every website from scratch 
                                combining function, content structure, and beauty in a single package.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-5 bg-black text-white text-center font-23" style={{fontFamily: "madetommy-bold"}}>
                    <div>
                        The extended team that is part of your team
                    </div>
                </div>
                <div className="mini-hero-container container-lg text-black">
                    <div className="py-3 py-lg-5">
                        <div className="row no-gutters">
                            <div className="col-12 col-lg-6 p-3">

                            </div>
                            <div className="col-12 col-lg-6 p-3 px-lg-0">
                                <div className="heading font-28 text-black">
                                    Who are we?
                                </div>
                                <div className="heading font-14 text-muted py-3">
                                    The internet is a virtual world. We help business to design, develop and manage websites that stand out and communicate clearly in this virtual world.
                                    We design and develop with a belief that every website deserves to 
                                    have its own voice. We build each and every website from scratch 
                                    combining function, content structure, and beauty in a single package.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inset-shadow">
                    <div className="container-lg hero-container text-black">
                        <div className="w-100">
                            <div className="heading text-center font-24 pb-4">
                                Why remote working culture
                            </div>
                            <div className="row no-gutters justify-content-center">
                                {[1,2,3,4,5].map((item,index) =>
                                    <div className="col-md-4 p-3" key={index}>
                                        <div className="item-shadow text-center px-3 py-4">
                                            <div>

                                            </div>
                                            <div>
                                                Boost Employees productivity
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-lg hero-container text-black">
                    <div className="w-100">
                        <div className="heading p-2 p-md-5 font-24 pb-4">
                            <div className="mb-2" style={{width: "120px", height: "8px", background: PRIMARY}}>

                            </div>
                            Our Guiding Principles
                        </div>
                        <div className="row no-gutters justify-content-center">
                            {[1,2,3,4].map((item,index) =>
                                <div className="col-md-6 p-3 p-md-5" key={index}>
                                    <div className="custom-block1 block-light px-4 py-5">
                                        <div>

                                        </div>
                                        <div>
                                            <div>Self-descipline</div>
                                            <div className="heading">
                                                Its our magical power that makes us virtually unstoppable
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="bg-black">
                    <div className="container-lg hero-container">
                        <div className="w-100">
                            <div className="heading p-2 p-md-5 font-24 pb-4">
                                <div className="mb-2" style={{width: "120px", height: "8px", background: PRIMARY}}>

                                </div>
                                Our Team
                            </div>
                            
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}