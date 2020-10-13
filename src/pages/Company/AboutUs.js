import React from 'react'
import Layout from '../../components/UI/Layout'
import styled from 'styled-components'
import OurStandards from '../../components/OutSource/OurStandards'
import { PRIMARY, PRIMARY_DARK } from '../../utils/Colors'
import AOS from 'aos'

const remoteWorkingData = [
    {
        image: "/static/web/standard1.png",
        content: "Boosts employees productivity",
    },
    {
        image: "/static/web/standard2.png",
        content: "Location Independent",
    },
    {
        image: "/static/web/standard3.png",
        content: "Improves Work/Life balance",
    },
    {
        image: "/static/web/standard4.png",
        content: "Foster better mental health",
    },
    {
        image: "/static/web/standard5.png",
        content: "Reduces pollution from commuters",
    },
]

const PRINCIPLES = [
    {
        image: "/static/about/guide1.png",
        title: "Self-disipline",
        content: "It's out magical power that makes us virtually unstoppable"
    },
    {
        image: "/static/about/guide2.png",
        title: "Trust and Transparency",
        content: "Transparent agreements. Regular reports"
    },
    {
        image: "/static/about/guide3.png",
        title: "Clients as partners",
        content: "No clients. Just co-workers with common goals"
    },
    {
        image: "/static/about/guide4.png",
        title: "Clear communication",
        content: "We communicate clearly. All hands on deck"
    }
]

const MODE = {
    AGENCY: "AGENCY",
    NORMAL: "NORMAL"
}

const TEAM = [
    {
        image: {
            [MODE.AGENCY]: "/static/team/agency1.png",
            [MODE.NORMAL]: "/static/team/normal1.png",
        },
        name: "Priyanshu Mahar",
        post: "Founder"
    },
    {
        image: {
            [MODE.AGENCY]: "/static/team/agency2.png",
            [MODE.NORMAL]: "/static/team/normal2.png",
        },
        name: "Devik Kamath",
        post: "Co-Founder"
    },
    {
        image: {
            [MODE.AGENCY]: "/static/team/agency3.png",
            [MODE.NORMAL]: "/static/team/normal3.png",
        },
        name: "Subodh Verma",
        post: "Co-Founder"
    },
    {
        image: {
            [MODE.AGENCY]: "/static/team/agency1.png",
            [MODE.NORMAL]: "/static/team/normal1.png",
        },
        name: "",
        post: ""
    },
    {
        image: {
            [MODE.AGENCY]: "/static/team/agency2.png",
            [MODE.NORMAL]: "/static/team/normal2.png",
        },
        name: "",
        post: ""
    },
    {
        image: {
            [MODE.AGENCY]: "/static/team/agency3.png",
            [MODE.NORMAL]: "/static/team/normal3.png",
        },
        name: "",
        post: ""
    },
]

const Container = styled.div`
    img {
        max-width: 100%;
    }
    .remote-working-image {
        max-width: 80%;
    }
    .journey-item {
        padding: 0.7rem 2rem;
        width: 130px;
        cursor: pointer;
    }
    .journey-line {
        padding: 2px;
        background: ${PRIMARY_DARK};
        transition: 0.5s;
        float: right;
    }
    .journey-info {
        transition: 0.5s;
        position: absolute;
        width: 100%;
    }
    .journey-info h1 {
        color: ${PRIMARY_DARK};
        padding: 20px 5px;
    }
    .journey-info > div {
        max-width: 450px;
        margin: 0px auto;
    }
    @media(max-width: 767px) {
        .journey-info {
            position: relative;
            opacity: 1 !important;
            visibility: visible !important;
            padding: 15px 10px !important;
        }
    }
    .gradient-1 {
        font-size: 72px;
        background: -webkit-linear-gradient(#eee, #333);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .gradient-2 {
        font-size: 72px;
        background: -webkit-linear-gradient(#eee, #333);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .gradient-3 {
        font-size: 72px;
        background: -webkit-linear-gradient(#eee, #333);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .mode-switch {
        border: 3px solid white;
        border-radius: 50px;
        width: 280px;
        margin-left: auto;
        background: black;
        z-index: 2;
    }
    .mode-switch > div {
        width: 50%;
        text-align: center;
        padding: 0.5rem 0.8rem;
        color: white;
        cursor: pointer;
        z-index: 2;
    }
    .active {
        background: white;
        color: black !important;
    }
    .active-left {
        border-top-left-radius: 50px;
        border-bottom-left-radius: 50px;
    }
    .active-right {
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
    }
    .switch-line {
        border-top: 3px solid white;
        position: absolute;
        width: 90%;
        margin: 0;
        bottom: 37px;
        z-index: 1;
    }
`


export default function AboutUs() {
    const [ journeyCount, setJourneyCount ] = React.useState(5)
    const [ team, setTeam ] = React.useState(MODE.NORMAL)
    React.useEffect(() => {
        if(window){
            AOS.init({
                duration: 1400,
            })
        }
    } ,[])
    return (
        <Layout header={{full: true}}>
            <Container>
                <div className="hero-container">
                    <div className="container">
                        <div className="p-3" style={{maxWidth: "600px"}}>
                            <h1 className="font-39 text-black" style={{fontFamily: "madetommy-light"}}>
                                Who are we?
                            </h1>
                            <div className="font-13" style={{color: "rgba(0,0,0,0.83)", fontFamily: "madetommy-light"}}>
                                We design and develop with a belief that every website deserves to 
                                have its own voice. We build each and every website from scratch 
                                combining function, content structure, and beauty in a single package.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-5 bg-black text-white font-23" style={{fontFamily: "madetommy-bold"}}>
                    <div className="container">
                        <h1 className="gradient-1">commit.</h1>
                        <h1 className="gradient-2">expore.</h1>
                        <h1 className="gradient-3">do great work.</h1>
                    </div>
                </div>
                <div className="mini-hero-container container-lg text-black">
                    <div className="py-3 py-lg-5">
                        <div className="row no-gutters">
                            <div className="col-12 col-lg-6 p-3 text-center">
                                <img className="remote-working-image" src="/static/about/studying-girl.png" />
                            </div>
                            <div className="col-12 col-lg-6 p-3 px-lg-0">
                                <div className="heading font-28 text-black">
                                    WE WORK REMOTELY
                                </div>
                                <div className="heading font-14 text-muted py-3">
                                    Here at cube farms, we believe that a fixed work location is irrelevant for 
                                    self-disciplined, collaborative and dedicated teammates. So we prefer to work 
                                    mobile as opposed to being stuck in an office, 100% of our workforce operated 
                                    from the comfort of their homes, co-working spaces, or anyplace with an internet 
                                    connection. This helps us keep costs down and stay fresh. It's the future
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-container bg-black flex-column">
                    <div className="container-lg">
                        <div className="heading p-2 p-md-5 font-24 pb-4 w-100 text-left">
                            <div className="mb-2" style={{width: "120px", height: "8px", background: PRIMARY}}>
                            </div>
                            Why remote working culture
                        </div>
                        <div>
                            <OurStandards data={remoteWorkingData} />
                        </div>
                    </div>
                </div>
                <div className="hero-container-mini bg-black text-white py-5 text-center border-top">
                    <div className="py-5">
                        <div className="py-3">
                            <h1>Our process and journey with you</h1>
                        </div>
                        <div className="d-none d-lg-inline-block py-3 mb-2">
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="p-3">Start with WHY</div>
                                <div className="journey-item" onMouseEnter={() => setJourneyCount(4)} onMouseLeave={() => setJourneyCount(5)}>Goals</div>
                                <div className="journey-item" onMouseEnter={() => setJourneyCount(3)} onMouseLeave={() => setJourneyCount(5)}>Who</div>
                                <div className="journey-item" onMouseEnter={() => setJourneyCount(2)} onMouseLeave={() => setJourneyCount(5)}>What</div>
                                <div className="journey-item" onMouseEnter={() => setJourneyCount(1)} onMouseLeave={() => setJourneyCount(5)}>How</div>
                            </div>
                            <div className="journey-line" style={{width: (journeyCount*130).toString() + "px"}}></div>
                        </div>
                        <div className="position-relative" style={{minHeight: "170px"}}>
                            <div className="journey-info" style={{visibility: journeyCount==5 ? "visible": "collapse", opacity: journeyCount==5 ? 1 : 0 }}>
                                <h1>Why is the project happening</h1>
                                <div className="py-2">
                                    Every business-centric problem starts with a WHY.
                                    Complex projects will have lots of WHYs.
                                    Capture all of them.
                                </div>
                            </div>
                            <div className="journey-info" style={{visibility: journeyCount==4 ? "visible": "collapse", opacity: journeyCount==4 ? 1 : 0 }}>
                                <h1>Get specific with some goals in mind</h1>
                                <div className="py-2">
                                    We turn each of your WHYs into specific, quantifiable business goals.
                                </div>
                            </div>
                            <div className="journey-info" style={{visibility: journeyCount==3 ? "visible": "collapse", opacity: journeyCount==3 ? 1 : 0 }}>
                                <h1 className="color-primary-dark">Who has an impact on those goals</h1>
                                <div className="py-2">
                                    Every business-centric problem starts with a WHY.<br/>
                                    Complex projects will have lots of WHYs.<br />
                                    Capture all of them.
                                </div>
                            </div>
                            <div className="journey-info" style={{visibility: journeyCount==2 ? "visible": "collapse", opacity: journeyCount==2 ? 1 : 0 }}>
                                <h1>What do you need</h1>
                                <div className="py-2">
                                    Every business-centric problem starts with a WHY.<br/>
                                    Complex projects will have lots of WHYs.<br />
                                    Capture all of them.
                                </div>
                            </div>
                            <div className="journey-info" style={{visibility: journeyCount==1 ? "visible": "collapse", opacity: journeyCount==1 ? 1 : 0 }}>
                                <h1>How would we do it</h1>
                                <div className="py-2">
                                    Every business-centric problem starts with a WHY.<br/>
                                    Complex projects will have lots of WHYs.<br />
                                    Capture all of them.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-lg hero-container-mini py-3 py-md-5 text-black">
                    <div className="w-100">
                        <div className="heading p-2 p-md-5 font-24 pb-4">
                            <div className="mb-2" style={{width: "120px", height: "8px", background: PRIMARY}}>

                            </div>
                            Our Guiding Principles
                        </div>
                        <div className="row no-gutters justify-content-center">
                            {PRINCIPLES.map((item,index) =>
                                <div className="col-md-6 p-3 p-md-4" key={index}>
                                    <div className="custom-block1 block-light px-4 py-4 d-flex align-items-center">
                                        <div className="p-2">
                                            <img src={item.image} />
                                        </div>
                                        <div className="p-2">
                                            <div>{item.title}</div>
                                            <div className="heading">
                                                {item.content}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="bg-black pb-4">
                    <div className="container-lg hero-container">
                        <div className="w-100">
                            <div className="heading p-2 p-md-5 font-24 pb-4">
                                <div className="mb-2" style={{width: "120px", height: "8px", background: PRIMARY}}>

                                </div>
                                Our Team
                            </div>
                            <div className="heading p-2 p-md-5 font-13">
                                We are excellent and so as are our client. We wouldn't have it any other way<br />
                                Meet the team
                            </div>
                            <div className="position-relative px-2 px-md-5 pb-3">
                                <div className="d-flex align-items-center justify-content-center mode-switch position-relative">
                                    <div className={`${team === MODE.NORMAL ? "active active-left" : ""}`} onClick={() => setTeam(MODE.NORMAL)}>NORMAL</div>
                                    <div className={`${team === MODE.AGENCY ? "active active-right" : ""}`} onClick={() => setTeam(MODE.AGENCY)}>AGENCY</div>
                                </div>
                                <hr className="switch-line" />
                            </div>
                            <div className="px-2 px-md-5">
                                <div className="row no-gutters justiy-content-center">
                                    {TEAM.map((member, index) =>
                                        <div className="col-12 col-md-6 col-lg-4 p-4">
                                            <div>
                                                <div>
                                                    <img src={member.image[team]} />
                                                </div>
                                                <div className="py-2">
                                                    <h5>{member.name}</h5>
                                                    <h6>{member.post}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}