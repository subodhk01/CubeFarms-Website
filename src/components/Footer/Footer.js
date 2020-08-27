import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaDribbble, FaTwitter } from 'react-icons/fa'

const Container = styled.div`
    background-color: black;
    font-family: "helvetica-regular";
    color: white;
    position: relative;

    .col-md-auto{
        flex: auto;
    }
    .heading-bold {
        font-size: 1rem;
        color: white;
    }
    a {
        color: rgba(255,255,255,0.7);
        transition: 0.3s;
    }
    a:hover {
        color: white;
        text-decoration: none;
    }
    .social-container {
        right: 0;
        top: 50px;
    }
    .social-item {
        padding: 5px;
    }
`

const footerData = [
    {
        title: "Company",
        content:[
            {
                label: "About",
                link: "/about"
            },
            {
                label: "Team",
                link: "/team"
            },
        ]
    },
    {
        title: "Services",
        content:[
            {
                label: "Graphic Design",
                link: "/design"
            },
            {
                label: "We Studio",
                link: "/web"
            },
            {
                label: "Online Advertising",
                link: "/advertising"
            },
        ]
    },
    {
        title: "Outsource",
        link: "/outsource",
        content:[]
    },
    {
        title: "Carrier",
        link: "/carrier",
        content:[]
    },
    {
        title: "Blog",
        link: "/blog",
        content:[]
    },
]

export default function Footer(){
    return(
        <Container>
            <div className="row no-gutters py-5">
                <div className="col-12 col-md-4">
                    <div className="text-center heading-bold">
                        Got a new idea? Let's talk
                    </div>
                </div>
                { footerData.map((item, index) =>
                    <div className={`${item.link ? "col-4" : "col-6"} col-md-auto p-5 p-md-0`}>
                        <div>
                            { item.link ?
                                <Link to={item.link}>
                                    <h5 className="heading-bold">{item.title}</h5>
                                </Link>
                                :
                                <h5 className="heading-bold">{item.title}</h5>
                            }
                            <p className="pt-2">
                                { item.content.map((subitem, index) => 
                                    <Link to={subitem.link}>
                                        <div>{subitem.label}</div>
                                    </Link>
                                )}
                            </p>
                        </div>
                    </div>
                )}
            </div>
            <div className="row no-gutters pb-5 py-md-5 px-2 px-md-5">
                <div className="col-12 col-md-6 p-4 text-center text-md-left">
                    All Rights Reserved
                </div>
                <div className="col-12 col-md-6 p-4 text-center text-md-right">
                    2020-travostel hospitality private limited<br />
                    <span className="heading-bold">Proudly Made in India</span>
                </div>
            </div>
            <div className="social-container position-absolute p-2">
                <div className="d-flex flex-column">
                    <a className="social-item">
                        <FaFacebookF size="19" />
                    </a>
                    <a className="social-item">
                        <FaLinkedinIn size="19" />
                    </a>
                    <a className="social-item">
                        <FaInstagram size="19"/>
                    </a>
                    <a className="social-item">
                        <FaDribbble size="19" />
                    </a>
                    <a className="social-item">
                        <FaTwitter size="19" />
                    </a>
                </div>
            </div>
        </Container>
    )
}