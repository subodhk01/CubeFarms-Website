import React from 'react'
import styled from 'styled-components'
import { PRIMARY, PRIMARY_DARK } from '../utils/Colors'

const data = [1,2,3,4]

const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    .h-100vh {
        height: 100vh;
    }
    .left-panel {
        position: sticky;
        top: 0;
        right: 0;
        color: black;
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    }
    .right-panel {
        color: white;
        background: linear-gradient(to bottom, ${PRIMARY}, ${PRIMARY_DARK});
    }
    @media(max-width: 576px){
        .h-100vh {
            height: auto;
        }
        .left-panel {
            flex: 0 0 100%;
            max-width: 100%;
        }
    }
    .tab {
        transition: 0.2s;
        border-radius: 13px;
    }
    .tab:hover {
        border-radius: 13px;
        background-color: ${PRIMARY};
        color: white;
        text-shadow: 0px 0px 10px rgba(0,0,0,0.8);
        opacity: 0.3;
        cursor: pointer;
    }
    .active-tag {
        border-radius: 13px;
        background-color: ${PRIMARY};
        color: white;
        font-weight: 800;
        font-size: 1.1rem;
        text-shadow: 0px 0px 10px rgba(0,0,0,0.8);
        opacity: 0.3;
    }
`

export default function StaticSidePanelSection() {
    return (
        <Container>
            <div className="row no-gutters justify-content-end position-relative">
                <div className="left-panel p-3 h-100vh">
                    <div className="heading text-center">
                        Our expertise
                    </div>
                    <div className="tabs py-5 my-2">
                        <div className="tab p-3 active-tag">
                            SEO
                        </div>
                        <div className="tab p-3 my-2">
                            Social Media Advertising
                        </div>
                        <div className="tab p-3 my-2">
                            Pay Per Click (PPC)
                        </div>
                        <div className="tab p-3 my-2">
                            Content Writing Services
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-8 right-panel p-3">
                    { data.map((item, index) => 
                        <div className="d-flex align-items-center h-100vh py-5">
                            <div className="px-3 px-md-5">
                                <div className="heading-bold">
                                    <span style={{color: "aqua"}}>01</span><br />Landing Pages
                                </div>
                                <div className="pt-3 pb-5">
                                    Single Page responsive websites designed with conversion goals in mind.
                                </div>
                                <div className="row gutters">
                                    <div className="col-6">
                                        <div className="py-4"><strong>Recommended Settings: </strong></div>
                                        <ul>
                                            <li>Single Page responsive design</li>
                                            <li>Multilingual Options</li>
                                            <li>Online form integration</li>
                                            <li>CMS enabled</li>
                                        </ul>
                                    </div>
                                    <div className="col-6">
                                        <div className="py-4"><strong>Good for: </strong></div>
                                        <ul>
                                            <li>Signup page for Consultation service</li>
                                            <li>Promotional Campaign for new product or service</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Container>
    )
}