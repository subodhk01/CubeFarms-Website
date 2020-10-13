import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    .img-box img {
        max-width: 90%;
    }
    .item-shadow img {
        width: 70px;
    }
    @media(max-width: 576px){
        font-size: 0.81rem;
    }
`

export default function WhyChooseUs(props) {
    return (
        <div className="px-3 px-md-0 container-lg">
            <Container>
                <div>
                    <div className="row no-gutters align-items-center">
                        <div className="col-12 col-lg-6">
                            <div className="text-center img-box">
                                <img src="/static/whychooseus.png" alt="Why Choose Us" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <h2 className="heading-thin mb-5 px-1 px-md-3 text-black">
                                {props.heading}
                            </h2>
                            <div className="row no-gutters">
                                {props.data.map((item,index) => 
                                    <div key={index} className="col-md-12 p-3">
                                        <div data-aos="fade-up" className="item-shadow text-black p-3">
                                            <div className="d-flex align-items-center">
                                                <div className="p-2">
                                                    <img src={item.image} />
                                                </div>
                                                <div className="p-2">
                                                    {item.content}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}