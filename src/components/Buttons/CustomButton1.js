import React from 'react'
import styled from 'styled-components'
import { PRIMARY_DARK } from '../../utils/Colors'

const Container = styled.div`
    .btn {
        padding: 0.5rem 1.6rem;
        border-radius: 4px;
        color: ${props => props.white ? "white" : "black"};
    }
    .overlay {
        border-radius: 4px;
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: -1;
        transform: scaleX(0.06) scaleY(0.4);
        transform-origin: bottom right;
        transition: 0.4s;
        background: ${PRIMARY_DARK};
        height: 100%;
        width: 100%;
    }
    .text-content {
        z-index: 1;
    }
    .btn:hover {
        color: white;
    }
    .btn:hover .overlay {
        transform: scaleX(1) scaleY(1);
    }
`

export default function CustomButton1(props) {
    return (
        <Container white={props.white}>
            <div className="btn position-relative">
                <div className="overlay">

                </div>
                <div className="text-content">
                    {props.children}
                </div>
            </div>
        </Container>
    )
}