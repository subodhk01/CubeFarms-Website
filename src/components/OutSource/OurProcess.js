import React from 'react'
import styled from 'styled-components'
import VisibSensor from 'react-visibility-sensor'

const line = '/static/lineBlue.png'

const Container = styled.div`
    .service-block {
        height: 200px;
    }
    .content-container {
        position: relative;
        top: -60px;
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
    .content-title img {
        width: 47px;
        height: 47px;
        margin: 10px;
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
    @keyframes entry{
        0%{
            background: white;
        }
        100% {
            background: black;
        }
    }
    .middle-black-box {
        position: sticky;
        left: 50%;
        transform: translateX(-50%);
        top: calc(100vh - 200px);
        width: 300px;
        height: 200px;
        background: black;
        animation: entry 1s ease;
    }
`

export default function OurProcess(props) {
    return (
        <div className="container-lg">
            <Container>
                <h2 className="heading mb-5">
                    {props.heading}
                </h2>
                <div>
                    <div className="position-relative pt-5 pt-xl-0">
                        <div className="middle-image-box d-none d-xl-block">
                            <img src={props.line || line} />
                        </div>
                        <div className={`middle-black-box d-none d-xl-block`}>

                        </div>
                        <div className="content-container">
                            {props.data.map((item,index) => 
                                <div data-aos="fade-up" data-aos-delay={200} key={index} className="service-block p-2">
                                    <div className="">
                                        <div className={`content-box ${index%2 ? "ml-auto" : "mr-auto"}`}>
                                            <div className="content-title d-flex align-items-center">
                                                { item.icon && <img src={item.icon} alt={item.title} /> }  {item.title}
                                            </div>
                                            <div className="">
                                                {item.content}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div style={{height: "175px"}}>
                            
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}