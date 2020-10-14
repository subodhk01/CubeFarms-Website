import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaDribbble, FaTwitter } from 'react-icons/fa'
import SingleArrowButton from "../Buttons/SingleArrowButton";
const logoBlack = '/static/logoBlack.png'

const Container = styled.div`
    background-color: ${props => props.black ? "black" : "white"};
    font-family: "helvetica-regular";
    color: ${props => props.black ? "white" : "black"};
    position: relative;

    img {
        max-height: 70px;
    }
    .col-md-auto{
        flex: auto;
    }
    .heading-bold {
        color: ${props => props.black ? "white" : "black"};
    }
    a {
        font-family: "madetommy-light";
        color: ${props => props.black ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.7)"};
        transition: 0.3s;
    }
    a:hover {
        color: ${props => props.black ? "white" : "black"};
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
                label: "About Us",
                link: "/about"
            },
            {
                label: "Approach",
                link: "/approach"
            },
            {
                label: "Outsource",
                link: "/outsource"
            },
        ]
    },
    {
        title: "Services",
        content:[
            {
                label: "Product Design",
                link: "/product"
            },
            {
                label: "Web Studio",
                link: "/web"
            },
            {
                label: "Creative Studio",
                link: "/design"
            },
            {
                label: "Digital Advertising",
                link: "/advertising"
            },
        ]
    },
    {
        title: "Join Us",
        link: "/joinus",
        content:[]
    },
    {
        title: "Blog",
        link: "/blog",
        content:[]
    },
    {
        title: "Contact",
        link: "/contact",
        content:[]
    },
]

export default function Footer(props){
    return(
        <Container black={props.black}>
            <div className="row no-gutters py-5 container-lg mx-auto">
                <div className="col-12 col-md-4">
                    <div className="heading font-15">
                        <div>
                            <img src={logoBlack} alt="Cubefarms" /><br />
                        </div>
                        <div>
                            Got a new idea? Let's talk
                        </div>
                        <div className="py-3">
                            <SingleArrowButton>
                                Let's Talk
                            </SingleArrowButton>
                        </div>
                    </div>
                </div>
                { footerData.map((item, index) =>
                    <div key={index} className={`${item.link ? "col-4" : "col-6"} col-md-auto p-2 p-md-0`}>
                        <div>
                            { item.link ?
                                <a href={item.link} className="text-center text-md-left">
                                    <h4 className="heading-regular">{item.title}</h4>
                                </a>
                                :
                                <h4 className="heading-regular">{item.title}</h4>
                            }
                            <div className="pt-2">
                                { item.content && item.content.map((subitem, index) => 
                                    <a href={subitem.link} key={index}>
                                        <div className="py-2 heading">
                                            {subitem.label}
                                        </div>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="row no-gutters pb-5 py-md-5 px-2 px-md-5 align-items-end">
                <div className="col-12 col-md-6 p-4 text-center text-md-left">
                    All Rights Reserved All Wrong Reserved
                </div>
                <div className="col-12 col-md-6 p-4 text-center text-md-right">
                    <div className="social-container p-2">
                        <div className="d-flex justify-content-end">
                            <a href="" className="social-item">
                                <FaFacebookF size="19" />
                            </a>
                            <a href="" className="social-item">
                                <FaLinkedinIn size="19" />
                            </a>
                            <a href="" className="social-item">
                                <FaInstagram size="19"/>
                            </a>
                            <a href="" className="social-item">
                                <FaDribbble size="19" />
                            </a>
                            <a href="" className="social-item">
                                <FaTwitter size="19" />
                            </a>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-end py-2">
                        <div className="px-2">
                            <img src="static/flag.png" style={{maxHeight: "30px"}} />
                        </div>
                        <div>
                            <span className="heading-bold">Proudly Made in India</span>
                        </div>
                    </div>
                    <div className="mt-4 mt-md-0">
                        2020-travostel hospitality private limited
                    </div>
                </div>
            </div>
        </Container>
    )
}