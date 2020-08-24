import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    @media(max-width: 576px){
        font-size: 0.81rem;
    }
`

export default function WhyChooseUs(props) {
    return (
        <div className="px-3 px-md-5">
            <Container>
                <h2 className="heading mb-5">
                    {props.heading}
                </h2>
                <div>
                    <div className="row no-gutters">
                        {props.data.map((item,index) => 
                            <div key={index} className="col-md-6 p-3">
                                { index < 2 ?
                                    <div data-aos="fade-up" className="custom-block1">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-4">
                                                <img src={item.image} />
                                            </div>
                                            <div className="col-8">
                                                {item.content}
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div data-aos="fade-up" data-aos-delay="400" className="custom-block1">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-4">
                                                <img src={item.image} />
                                            </div>
                                            <div className="col-8">
                                                {item.content}
                                            </div>
                                        </div>
                                    </div>
                                } 
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    )
}