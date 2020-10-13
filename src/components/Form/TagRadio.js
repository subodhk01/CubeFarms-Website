import React from 'react'
import styled from 'styled-components'
import { PRIMARY_DARK, PRIMARY } from '../../utils/Colors'

const Radio = styled.div`
    padding: 5px;
    input {
        display: none;
    }
    label {
        background-color: #377eeb40;
        padding: 0.4rem 1.2rem;
        border-radius: 50px;
        cursor: pointer;
        transition: 0.1s;
    }
    input:checked ~ label {
        background: white;
        color: ${PRIMARY_DARK}
    }
`

export default function TagRadio(props){
    return (
        <Radio>
            <input id={props.id} name={props.name} type="radio" />
            <label htmlFor={props.id}>{props.label}</label>
        </Radio>
    )
}