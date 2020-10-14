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
        transition: 0.4s;
    }
    input:checked ~ label {
        background-color: white;
        color: ${PRIMARY_DARK}
    }
    ${ props => props.light && `
        label {
            background-color: white;
            border: 1px solid rgba(0,0,0,0.07);
            border-radius: 10px;
        }
        label:hover {
            border: 1px solid #377eeb90;
        }
        input:checked ~ label {
            background-color: #377eeb40;
            border: 1px solid #377eeb90;
        }
    `}
`

export default function TagRadio(props){
    return (
        <Radio light={props.light}>
            <input id={props.id} name={props.name} checked={props.checked} onChange={(event) => event.target.value && props.handleChange(props.id)} type="radio" />
            <label htmlFor={props.id}>{props.label}</label>
        </Radio>
    )
}