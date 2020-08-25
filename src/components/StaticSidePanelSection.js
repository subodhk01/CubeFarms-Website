import React from 'react'
import styled from 'styled-components'
import { AnimatedBg, Transition } from 'scroll-background';
import VisibSensor from 'react-visibility-sensor'
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
        text-shadow: 0px 0px 10px rgba(0,0,0,0.8);
    }
`

export default function StaticSidePanelSection() {
    const [ tab, setTab ] = React.useState({})
    const handlestep1 = (visibility) => {
        console.log("step1")
        if(visibility) setTab({step1: true})
        else setTab({...tab, step1: false})
    }
    const handlestep2 = (visibility) => {
        console.log("step2")
        if(visibility) setTab({step2: true})
        else setTab({...tab, step2: false})
    }
    const handlestep3 = (visibility) => {
        console.log("step3")
        if(visibility) setTab({step3: true})
        else setTab({...tab, step3: false})
    }
    const handlestep4 = (visibility) => {
        console.log("step4")
        if(visibility) setTab({step4: true})
        else setTab({...tab, step4: false})
    }
    return (
        <Container>
            <div className="row no-gutters justify-content-end">
                <div className="left-panel px-3 py-5 h-100vh">
                    <div className="heading text-center">
                        Our expertise
                    </div>
                    <div className="tabs py-5 my-2">
                        <div className={`tab p-3 my-2 ${tab.step1 ? "active-tag": ""}`}>
                            SEO
                        </div>
                        <div className={`tab p-3 my-2 ${tab.step2 ? "active-tag": ""}`}>
                            Social Media Advertising
                        </div>
                        <div className={`tab p-3 my-2 ${tab.step3 ? "active-tag": ""}`}>
                            Pay Per Click (PPC)
                        </div>
                        <div className={`tab p-3 my-2 ${tab.step4 ? "active-tag": ""}`}>
                            Content Writing Services
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-8 right-panel">
                    <AnimatedBg>
                            <div className="d-flex align-items-center h-100vh py-5">
                                <VisibSensor onChange={handlestep1} partialVisibility={true} minTopValue={180}>
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
                                </VisibSensor>
                            </div>
                        <Transition height="100px" from={PRIMARY} to={PRIMARY_DARK} position={0.5} />
                            <div className="d-flex align-items-center h-100vh py-5">
                                <VisibSensor onChange={handlestep2} partialVisibility={true} minTopValue={180}>
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
                                </VisibSensor>
                            </div>
                        <Transition height="100px" from={PRIMARY_DARK} to={PRIMARY} position={0.5} />
                            <div className="d-flex align-items-center h-100vh py-5">
                                <VisibSensor onChange={handlestep3} partialVisibility={true} minTopValue={180}>
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
                                </VisibSensor>
                            </div>
                        <Transition height="100px" from={PRIMARY} to={PRIMARY_DARK} position={0.5} />
                            <div className="d-flex align-items-center h-100vh py-5">
                                <VisibSensor onChange={handlestep4} partialVisibility={true} minTopValue={180}>
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
                                </VisibSensor>
                            </div>
                    </AnimatedBg>
                </div>
            </div>
        </Container>
    )
}