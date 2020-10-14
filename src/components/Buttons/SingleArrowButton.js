import React from 'react'
import styled from 'styled-components'
import { BsArrowRightShort } from 'react-icons/bs'
import { MdSend } from 'react-icons/md'

const Container = styled.div`
    .text-content {
        position: relative;
        left: 15px;
        transition: 0.3s
    }
    .arrow {
        transform: scale(0);
        transition: 0.3s;
        overflow: hidden;
    }
    .btn:hover .arrow{
        transform: scale(1.2);
    }
    .btn:hover .text-content {
        left: 5px;
    }
`

export default function(props) {
    return (
        <Container>
            <button className="btn btn-round-blue" disabled={props.disabled}>
                <div className="d-flex align-items-center">
                    <div className="text-content">
                        {props.children}
                    </div>
                    <div className="arrow pl-2">
                        {props.send ?
                            <MdSend className="pl-1" color="white" size="21" />
                            :
                            <BsArrowRightShort color="white" size="24" />
                        }
                        
                    </div>
                </div>
            </button>
        </Container>
    )
}