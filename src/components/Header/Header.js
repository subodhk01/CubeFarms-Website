import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { PRIMARY, PRIMARY_DARK } from '../../utils/Colors'
import { FaChevronDown } from 'react-icons/fa'

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
        max-height: 60px;
    }
    .menu-item {
        cursor: pointer;
        text-decoration: none;
        padding: 40px 20px;
        color: ${props => props.white ? "white" : "grey"};
        transition: 0.2s;
    }
    .menu-item:hover {
        color: ${props => props.white ? "white" : "black"};
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
        top: 100px;
        transition: 0.3s;
    }
    .dropdown {
        background: white;
        border-radius: 6px;
        overflow: hidden;
    }
    .dropdown-item {
        padding: 30px 20px;
        width: 220px;
        white-space: normal;
        transition: 0.4s;
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
    .menu-item:hover + .dropdown-container {
        opacity: 1;
    }
    .dropdown-container:hover {
        opacity: 1;
    }
    svg {
        transition: 0.5s;
    }
    .menu-item:hover  > svg {
        transform: rotate(180deg);
    }
`

export default function Header(props){
    return (
        <Container white={props.white}>
            <div className={`d-flex align-items-center ${props.full ? "full" : "container justify-content-between"}`}>
                <div>
                    <img src={`${props.white ? logoWhite : logoBlack}`} alt="Cubefarms" />
                </div>
                <div className="d-flex align-items-center">
                    { HEADER_ITEMS.map((item, index1) => 
                        <>
                            {item.path && 
                                <div key={index1}>
                                    <a 
                                        href={item.path} 
                                        className={`menu-item ${ window.location.pathname == item.path ? "active" : "" }`}
                                    >
                                        {item.title}
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
                                    <div className="btn btn-arrow">
                                        {item.title}
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
