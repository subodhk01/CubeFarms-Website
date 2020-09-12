import React from 'react'
import styled from 'styled-components'
import Tilt from 'react-tilt'
import { PRIMARY } from '../../utils/Colors'

const Container = styled.div`
    .custom-block1:hover {
        background: ${PRIMARY};
    }
`

export default function(props) {
    return (
        <div className="px-3 px-md-1 container-lg">
            <Container>
                <h2 className="heading mb-5">
                    {props.heading}
                </h2>
                <div className="container">
                    <div className="row no-gutters">
                        {props.data.map((item,index) => 
                            <div key={index} className="col-md-4 p-2 p-md-4">
                                { index < 3 ?
                                    <div data-aos="fade-up" data-aos-delay={0}>
                                        <Tilt className="Tilt custom-block1 py-3" options={{ max : 25 }}>
                                            <div className="text-center py-4">
                                                <div className="mb-4">
                                                    <img src={item.image} />
                                                </div>
                                                <div className="font-11">
                                                    {item.content}
                                                </div>
                                            </div>
                                        </Tilt>
                                    </div> 
                                    :
                                    <div data-aos="fade-up" data-aos-delay={300}>
                                        <Tilt className="Tilt custom-block1 py-3" options={{ max : 25 }}>
                                            <div className="text-center py-4">
                                                <div className="mb-4">
                                                    <img src={item.image} />
                                                </div>
                                                <div className="font-11">
                                                    {item.content}
                                                </div>
                                            </div>
                                        </Tilt>
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