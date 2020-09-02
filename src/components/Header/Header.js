import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { PRIMARY, PRIMARY_DARK } from '../../utils/Colors'
import { FaChevronDown } from 'react-icons/fa'
import { RiMenu3Line } from 'react-icons/ri'
import { MdClose } from 'react-icons/md'
import { Collapse } from 'react-bootstrap'
import SingleArrowButton from '../Buttons/SingleArrowButton'

const logoWhite = '/static/logoWhite.png'
const logoBlack = '/static/logoBlack.png'
const HEADER_ITEMS = [
    {
        title: "Company",
        dropdown: true,
        items: [
            {
                title: "About",
                content: "Lorem ipsum lorem ipsum lorem ipsum really lorem ipsum"
            },
            {
                title: "Approach",
                content: "Lorem ipsum lorem ipsum lorem ipsum really lorem ipsum"
            },
            {
                title: "Outsource",
                content: "Lorem ipsum lorem ipsum lorem ipsum really lorem ipsum"
            }
        ]
    },
    {
        title: "Services",
        dropdown: true,
        items: [
            {
                title: "Web",
                content: "Lorem ipsum lorem ipsum lorem ipsum really lorem ipsum"
            },
            {
                title: "Creative",
                content: "Lorem ipsum lorem ipsum lorem ipsum really lorem ipsum"
            },
            {
                title: "Marketing",
                content: "Lorem ipsum lorem ipsum lorem ipsum really lorem ipsum"
            },
            {
                title: "Product",
                content: "Lorem ipsum lorem ipsum lorem ipsum really lorem ipsum"
            }
        ]
    },
    {
        title: "Join Us",
        path: "/joinus"
    },
    {
        title: "Blog",
        path: "/blog"
    },
    {
        title: "Contact",
        path: "/contact"
    },
    {
        title: "Price Estimate",
        button: true
    }
]

const Container = styled.div`
    ${props => props.white ?
        `
            background: black;
        `
        :
        `
            background: transparent;
        `
    }
    position: fixed;
    z-index: 3;
    width: 100%;
    font-size: 0.9rem;
    font-family: helvetica-regular;
    img {
        max-height: 70px;
    }
    .menu-item {
        cursor: pointer;
        text-decoration: none;
        padding: 34px 20px;
        color: ${props => props.white ? "white" : "grey"};
        transition: 0.2s;
    }
    .menu-item-underline {
        position: absolute;
        bottom: 24px;
        left: 20px;
        height: 3px;
        width: 0px;
        background: ${PRIMARY};
        transition: 0.2s;
    }
    .menu-item:hover {
        color: ${props => props.white ? "white" : "black"};
    }
    .menu-item:hover > .menu-item-underline {
        width: 36px;
    }
    .active {
        font-weight: bold;
        color: ${PRIMARY}
    }
    .full {
        width: 90vw;
        margin: 0px auto;
        justify-content: space-between;
    }
    .heading-bold {
        color: black;
    }
    .content {
        color: rgba(0,0,0,0.8);
    }
    .dropdown-container {
        opacity: 0;
        z-index: -1;
        position: absolute;
        top: -160px;
        transition: 0.3s;
    }
    .dropdown {
        background: white;
        box-shadow: 0px 0px 20px 1px rgba(0,0,0,0.2);
        border-radius: 6px;
        overflow: hidden;
    }
    .dropdown-item {
        padding: 30px 20px;
        width: 220px;
        white-space: normal;
        transition: 0.2s;
    }
    .dropdown-item-mobile {
        padding: 10px 35px;
    }
    .menu-item:hover + .dropdown-container {
        opacity: 1;
        top: 100px;
    }
    .dropdown-item:hover {
        background: ${PRIMARY};
    }
    .dropdown-item:hover .heading-bold {
        color: white;
    }
    .dropdown-item:hover .content {
        color: white;
    }
    .dropdown-container:hover {
        opacity: 1;
        top: 100px;
    }
    svg {
        transition: 0.5s;
    }
    .menu-item:hover > svg {
        transform: rotate(180deg);
    }
    .mobile-nav-container {
        position: fixed;
        background: black;
        left: 0;
        height: 100vh;
        width: 100vw;
        padding: 0px 50px;
        transition: 0.4s;
    }
    .show-nav {
        top: 0vh;
    }
    .hide-nav {
        top -100vh;
    }
    .turned {
        transform: rotate(180deg);
    }
`

export default function Header(props){
    const [ mobileNav, setMobileNav ] = React.useState(true)
    const [ mobileDropdown, setMobileDropdown ] = React.useState("")
    const handleDropdown = (item) => {
        if(mobileDropdown == item.title){
            setMobileDropdown("")
        }else {
            setMobileDropdown(item.title)
        }
    }
    return (
        <Container white={props.white}>
            <div className={`d-flex align-items-center ${props.full ? "full" : "container justify-content-between"}`}>
                <div>
                    <img src={`${props.white ? logoWhite : logoBlack}`} alt="Cubefarms" />
                </div>
                <div className="d-block d-lg-none">
                    <div className="p-3 cursor-pointer" onClick={() => setMobileNav(true)}>
                        <RiMenu3Line size="26" color="white" />
                    </div>
                    <div className={`mobile-nav-container font-12 ${mobileNav ? "show-nav" : "hide-nav"}`}>
                        <div className="mobile-nav">
                            <div className="mobile-nav-close text-right p-4 cursor-pointer" onClick={() => setMobileNav(false)}>
                                <MdClose size="30" color="white" />
                            </div>
                            { HEADER_ITEMS.map((item, index1) => 
                                <>
                                    {item.path && 
                                        <div key={index1} className="py-2">
                                            <Link to={item.path}>
                                                <div className={`position-relative ${ window.location.pathname == item.path ? "active" : "" }`}>
                                                    {item.title}
                                                    <div className="menu-item-underline"></div>
                                                </div>
                                            </Link>
                                        </div>
                                    }
                                    {item.dropdown && 
                                        <div className="position-relative">
                                            <div className="py-2 text-white cursor-pointer" onClick={() => handleDropdown(item)}>
                                                {item.title}&nbsp;&nbsp;<FaChevronDown color={PRIMARY} size="16" className={`dropdown-icon ${mobileDropdown == item.title ? "" : "turned"}`} />
                                            </div>
                                            <Collapse in={mobileDropdown == item.title}>
                                                <div>
                                                    {item.items && item.items.map((child, index2) => 
                                                        <Link to="/">
                                                            <div key={index2} className="dropdown-item-mobile">
                                                                <div className="heading-bold font-12 text-white">{child.title}</div>
                                                            </div>
                                                        </Link>
                                                    )}
                                                </div>
                                            </Collapse>
                                        </div>
                                    }
                                    {item.button &&
                                        <div className="text-center py-4">
                                            <SingleArrowButton>
                                                {item.title}
                                            </SingleArrowButton>
                                        </div>
                                    }
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="d-none d-lg-flex align-items-center">
                    { HEADER_ITEMS.map((item, index1) => 
                        <>
                            {item.path && 
                                <div key={index1}>
                                    <a 
                                        href={item.path} 
                                        className={`menu-item position-relative ${ window.location.pathname == item.path ? "active" : "" }`}
                                    >
                                        {item.title}
                                        <div className="menu-item-underline"></div>
                                    </a>
                                </div>
                            }
                            {item.dropdown && 
                                <div className="position-relative">
                                    <div className="menu-item">
                                        {item.title}&nbsp;&nbsp;<FaChevronDown color={PRIMARY} size="16" className="dropdown-icon" />
                                    </div>
                                    <div className="dropdown-container" style={{width: 220*item.items.length, left: -110*item.items.length + 55}}>
                                        <div className="dropdown d-flex align-items-center justify-content-center">
                                            {item.items && item.items.map((child, index2) => 
                                                <Link to="/">
                                                    <a key={index2} className="dropdown-item">
                                                        <div className="heading-bold font-12">{child.title}</div>
                                                        <div className="content font-08">{child.content}</div>
                                                    </a>
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            }
                            {item.button &&
                                <div>
                                    <div className="btn btn-arrow ml-3">
                                        <SingleArrowButton>
                                            {item.title}
                                        </SingleArrowButton>
                                    </div>
                                </div>
                            }
                        </>
                    )}
                    <div>

                    </div>
                </div>
            </div>
        </Container>
    )
}
