import React from 'react'
import ReactDOM from 'react-dom'
// eslint-disable-next-line

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'


ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva" >
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        </Pai>

    </div >
    , document.getElementById('root'))






// import Multi, { BoaNoite } from './componentes/Multiplos'

// ReactDom.render(
//     <div>
//         <Multi.BoaTarde nome="Ana" />
//         <Multi.BoaNoite nome="Bia" />
//     </div>
//     , document.getElementById('root'))

// import NomePersonalizado from './componentes/Primeiro'
// Quando criar um componente personalizado, utilizar letra maíscula no começo da palavra.
// ReactDom.render(<NomePersonalizado nome="Vinicius" idade={26}/>, document.getElementById('root'))
