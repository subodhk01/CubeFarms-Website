import React from 'react'
import styled from 'styled-components'

const image = '/static/choose.png'

const data = [
    {
        title: "UX",
        content: "We also provide `maintenance and security pack` at an affordable rate so that you have a fast optimised and secure website 24*7"
    },
    {
        title: "WIREFRAMING",
        content: "We also provide `maintenance and security pack` at an affordable rate so that you have a fast optimised and secure website 24*7"
    },
    {
        title: "DESIGNING",
        content: "We also provide `maintenance and security pack` at an affordable rate so that you have a fast optimised and secure website 24*7"
    },
    {
        title: "DEVELOPING",
        content: "We also provide `maintenance and security pack` at an affordable rate so that you have a fast optimised and secure website 24*7"
    },
    {
        title: "TESTING",
        content: "We also provide `maintenance and security pack` at an affordable rate so that you have a fast optimised and secure website 24*7"
    },
    {
        title: "HOSTING",
        content: "We also provide `maintenance and security pack` at an affordable rate so that you have a fast optimised and secure website 24*7"
    },
    {
        title: "LAUNCH",
        content: "We also provide `maintenance and security pack` at an affordable rate so that you have a fast optimised and secure website 24*7"
    },
    {
        title: "MAINTENANCE",
        content: "We also provide `maintenance and security pack` at an affordable rate so that you have a fast optimised and secure website 24*7"
    },
]

const line = '/static/lineBlue.png'

const Container = styled.div`
    .service-block {
        height: 200px;
    }
    .content-box {
        max-width: 430px;
        font-family: "helvetica-regular";
    }
    .content-title {
        font-weight: 800;
        font-size: 2rem;
        margin-bottom: 14px;
    }
    .middle-image-box {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        text-align: center;
    }
    .middle-image-box img {
        max-width: 500px;
    }
    .middle-black-box {
        position: sticky;
        left: 0;
        right: 0;
        bottom: 0;
        width: 500px;
        height: 400px;
        background: white;
    }
`

export default function OurProcess() {
    return (
        <div className="container-lg">
            <Container>
                <h2 className="heading mb-5">
                    Our Process
                </h2>
                <div>
                    <div className="position-relative">
                        <div className="middle-image-box d-none d-xl-block">
                            <img src={line} />
                        </div>
                        {/* <div className="middle-black-box">

                        </div> */}
                        <div style={{paddingTop: "120px"}}>
                            {data.map((item,index) => 
                                <div key={index} className="service-block p-2">
                                    <div className="">
                                        <div className={`content-box ${index%2 ? "ml-auto" : "mr-auto"}`}>
                                            <div className="content-title">
                                                {item.title}
                                            </div>
                                            <div className="">
                                                {item.content}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}