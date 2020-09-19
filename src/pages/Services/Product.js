import React from 'react'
import styled from 'styled-components'
import Header from '../../components/Header/Header'
import WhyChooseUs from '../../components/OutSource/WhyChooseUs'
import OurStandards from '../../components/OutSource/OurStandards'
import OurServices from '../../components/OutSource/OurProcess'
import StaticSidePanelSection from '../../components/StaticSidePanelSection'
import LookingForSomethingElse from '../../components/OutSource/LookingForSomethingElse'

import AOS from 'aos';
import { AnimatedBg, Transition } from 'scroll-background';
import Layout from '../../components/UI/Layout'
import { PRIMARY } from '../../utils/Colors'

const Container = styled.div`
    .heading {
        font-size: 2.6rem;
    }
`
const whyChooseUsData = [
    {
        image: "/static/product/choose1.png",
        content: <><strong>User-centric approach:</strong> We focus on the needs and expectations of end-users while working on product development. Considering user feedback and timely testing of the product during the development phase ensures the product that users want</>
    },
    {
        image: "/static/product/choose2.png",
        content: <><strong>Agile development:</strong> We focus on the needs and expectations of end-users while working on product development. Considering user feedback and timely testing of the product during the development phase ensures the product that users want</>
    },
    {
        image: "/static/product/choose3.png",
        content: <><strong>Independent dedicated teams:</strong> We focus on the needs and expectations of end-users while working on product development. Considering user feedback and timely testing of the product during the development phase ensures the product that users want</>
    },
    {
        image: "/static/product/choose4.png",
        content: <><strong>Cost-saving:</strong> We focus on the needs and expectations of end-users while working on product development. Considering user feedback and timely testing of the product during the development phase ensures the product that users want</>
    }
]
const ourProcessData = [
    {
        title: "Give us a brief of your idea",
        icon: "/static/product/process1.png",
        content: "First we need to understand your vision , business and market need. So that we can proceed in a constructive way"
    },
    {
        title: "Discovery and planning",
        icon: "/static/product/process1.png",
        content: "Now we identify the product need and do the market research. Now we structure the product with this market research and user requirements"
    },
    {
        title: "Product design (UI+UX)",
        icon: "/static/product/process1.png",
        content: "Once the conceptual work is done .We start to work on the UI/UX and wireframing of the product. We illiterate the design and interface of final product"
    },
    {
        title: "Product development phase",
        icon: "/static/product/process1.png",
        content: "Having the concept and frontend design in place, we can move on the backend development of the product"
    },
    {
        title: "User feedback/testing and market validation",
        icon: "/static/product/process1.png",
        content: "Last step is the ultimate testing of the product by its audience. We’ll set up proper data analysis to track the user reactions and  market validation of the product to update  it to its best version"
    }
]

export default function Product(){
    React.useEffect(() => {
        if(window){
            AOS.init({
                duration: 1400,
            })
        }
    } ,[])
    return (
        <Layout header={{white: true,full: true}} footer={{black: true}}>
            <Container>
                <div className="background-fade">
                    <AnimatedBg>
                        <Transition height="0px" from="#000000" to="#000000" />
                        <div className="hero-container">
                            <div className="container">
                                <div className="p-3" style={{maxWidth: "600px"}}>
                                    <h1 className="font-39 text-white heading-thin">
                                        PRODUCT DESIGN
                                    </h1>
                                    <div className="font-13 mb-2" style={{color: PRIMARY}}>
                                        We build digital products from scratch
                                    </div>
                                    <div className="font-11" style={{color: "rgba(245,245,245,0.83)", fontFamily: "madetommy-light"}}>
                                        We take your ideas and create user-centric digital products with high-end frontend/backend integration and bespoke user experience
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-container bg-white">
                            <WhyChooseUs data={whyChooseUsData} heading="Why choose our services" />
                        </div>
                        <div className="hero-container">
                            <OurServices data={ourProcessData} heading="Our Process" line="/static/product/line.png" />
                        </div>
                        {/* <div className="hero-container bg-white py-0">
                            <StaticSidePanelSection />
                        </div> */}
                        <div className="min-hero-container py-10 bg-white">
                            <LookingForSomethingElse />
                        </div>
                    </AnimatedBg>
                </div>
            </Container>
        </Layout>
    )
}