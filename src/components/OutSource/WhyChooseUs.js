import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    img {
        max-width: 100%;
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
                            <div className="text-center">
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
                                            <div className="row no-gutters align-items-center">
                                                <div className="col-4">
                                                    <img src={item.image} />
                                                </div>
                                                <div className="col-8">
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