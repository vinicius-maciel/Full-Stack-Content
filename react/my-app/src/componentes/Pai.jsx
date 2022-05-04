import React from 'react'
import { ChildrenWithProps } from '../utils/utils'




// eslint-disable-next-line
export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>

            {
                ChildrenWithProps(props)
            }


            {/* {props.children} */}
            {/* <Filho nome="Pedro" sobrenome={props.sobrenome} />
            <Filho {...props} />
            <Filho {...props} nome="Carla" /> */}
        </ul>
    </div>