import React from 'react'
import styled from 'styled-components'
import { PRIMARY } from '../../utils/Colors'

const logoWhite = '/static/logoWhite.png'
const logoBlack = '/static/logoBlack.png'

const Container = styled.div`
    div {
        z-index: 3;
    }
    img {
        max-height: 60px;
    }
    a {
        text-decoration: none;
        padding: 10px;
        color: ${props => props.white ? "white" : "grey"};
        transition: 0.2s;
    }
    a:hover {
        color: ${props => props.white ? "white" : "black"};
    }
    .active {
        font-weight: bold;
        color: ${PRIMARY}
    }
`

const HEADER_ITEMS = [
    {
        title: "Company",
        path: "/company"
    },
    {
        title: "Services",
        path: "/services"
    },
    {
        title: "Outsource",
        path: "/outsource"
    },
    {
        title: "Join Us",
        path: "/joinus"
    },
    {
        title: "Blog",
        path: "/blog"
    },
]

export default function Header(props){
    return (
        <Container white={props.white}>
            <div className={`d-flex align-items-center p-2 position-fixed ${props.full ? "container justify-content-between" : ""}`}>
                <div>
                    <img src={`${props.white ? logoWhite : logoBlack}`} alt="Cubefarms" />
                </div>
                <div className="d-flex align-items-center">
                    { HEADER_ITEMS.map((item, index) => 
                        <div key={index}>
                            <a 
                                href={item.path} 
                                className={`${ window.location.pathname == item.path ? "active" : "" }`}
                            >
                                {item.title}
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </Container>
    )
}
