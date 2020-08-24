import React from 'react'
import styled from 'styled-components'
// import { PRIMARY_DARK } from '../../utils/Colors'


const image = '/static/standard.png'

const data = [
    "design Excellence",
    "Build-in SEO.",
    "100% responsive",
    "Cross-browser compatibility",
    "CMS enabled",
    "1-month support after delivery"
]

const Container = styled.div`
    .heading {
        color: black;
    }
    .item {
        border-radius: 10px;
        background: white;
        box-shadow: 0px 0px 30px 6px #ecf0f7;
    }
    .title {
        font-size: 1.3rem;
        font-weight: 300;
        color: rgba(0,0,0,0.8);
    }
    .content {
        font-size: 0.8rem;
        color: rgba(0,0,0,0.35);
    }
    .read-more {
        color: rgba(0,0,0,0.8);
        font-weight: 300;
        position: absolute;
        right: 0;
        bottom: 0;
    }
`

export default function() {
    return (
        <div className="container">
            <Container>
                <h2 className="heading mb-5">
                    Looking for <br />something else?
                </h2>
                <div>
                    <div className="row no-gutters">
                        <div className="col-12 col-md-6 p-2 p-md-3">
                            <div data-aos="fade-up" className="item p-4 p-md-5">
                                <div className="position-relative">
                                    <div className="pb-4">
                                        <h3 className="title">
                                            Inovative Consulting
                                        </h3>
                                        <p className="content">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nostrum culpa! Voluptas distinctio autem officia minima ut similique ad adipisci, dicta nihil quam suscipit, quis repudiandae nemo placeat fugiat?
                                        </p>
                                    </div>
                                    <div className="read-more">
                                        Read More
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 p-2 p-md-3">
                            <div data-aos="fade-up" className="item p-4 p-md-5">
                                <div className="position-relative">
                                    <div className="pb-4">
                                        <h3 className="title">
                                            Inovative Consulting
                                        </h3>
                                        <p className="content">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nostrum culpa! Voluptas distinctio autem officia minima ut similique ad adipisci, dicta nihil quam suscipit, quis repudiandae nemo placeat fugiat?
                                        </p>
                                    </div>
                                    <div className="read-more">
                                        Read More
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}