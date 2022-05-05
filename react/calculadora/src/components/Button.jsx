import React from 'react'
import './Button.css'
// eslint-disable-next-line
export default props => {
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    return (
        <button
            onClick={e => props.click(props.label)}
            className={classes}>
            {props.label}
        </button>
    )
}


//other
/* <button className={`
    button
    ${props.operation ? 'operation' : ''}
    ${props.double ? 'double' : ''}
    ${props.triple ? 'triple' : ''}
    `}>
            {props.label}
        </button> */
