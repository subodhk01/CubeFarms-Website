import React from 'react'
import styled from 'styled-components'
import image from '../../assets/choose.png'

const data = [
    "We provide one-month free support and train you to tackle your new digital tool.",
    "We use open source scripts and libraries so that you can keep full ownership of the project.",
    "Our development team uses the best technologies to create high-performance, cost-efficient, flexible web experience.",
    "We also provide `maintenance and security pack` at an affordable rate so that you have a fast optimised and secure website 24*7"
]

const Container = styled.div`
    .choose-item {
        background: #191622;
        border-radius: 10px;
        font-family: "helvetica-regular";
        padding: 10px 20px;
    }
    .choose-item img {
        border-radius: 10px;
        max-height: 170px;
        max-width: 100%;
    }
`

export default function() {
    return (
        <div className="container">
            <Container>
                <h2 className="heading mb-5">
                    Why choose us?
                </h2>
                <div>
                    <div className="row no-gutters">
                        {data.map((item,index) => 
                            <div key={index} className="col-md-6 p-2">
                                <div className="choose-item">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-4">
                                            <img src={image} />
                                        </div>
                                        <div className="col-8">
                                            {item}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    )
}