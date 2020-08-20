import React from 'react'
import styled from 'styled-components'

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
                            <div key={index} className="col-md-4 p-2 p-md-3">
                                <div className="custom-block1">
                                    <div className="text-center py-4">
                                        <div>
                                            <img src={image} />
                                        </div>
                                        <div className="font-11">
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