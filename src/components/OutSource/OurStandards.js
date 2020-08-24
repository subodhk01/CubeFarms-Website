import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    
`

export default function(props) {
    return (
        <div className="px-3 px-md-5">
            <Container>
                <h2 className="heading mb-5">
                    {props.heading}
                </h2>
                <div>
                    <div className="row no-gutters">
                        {props.data.map((item,index) => 
                            <div key={index} className="col-md-4 p-2 p-md-3">
                                { index < 3 ?
                                    <div data-aos="fade-up" data-aos-delay={0} className="custom-block1">
                                        <div className="text-center py-4">
                                            <div>
                                                <img src={item.image} />
                                            </div>
                                            <div className="font-11">
                                                {item.content}
                                            </div>
                                        </div>
                                    </div> 
                                    :
                                    <div data-aos="fade-up" data-aos-delay={300} className="custom-block1">
                                        <div className="text-center py-4">
                                            <div>
                                                <img src={item.image} />
                                            </div>
                                            <div className="font-11">
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