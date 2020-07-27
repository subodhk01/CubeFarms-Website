import React from 'react'
import styled from 'styled-components'
import logoBlue from '../assets/logoBlack.png'
import { PRIMARY } from '../utils/Colors'

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
        color: grey;
        transition: 0.2s;
    }
    a:hover {
        color: black;
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

export default function Header(){
    return (
        <Container>
            <div className="d-flex align-items-center p-2 position-fixed">
                <div>
                    <img src={logoBlue} alt="Cubefarms" />
                </div>
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
        </Container>
    )
}
