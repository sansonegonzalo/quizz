import React, { Component } from 'react';
import Trivia from '../Trivia/Trivia'

class Trivias extends Component {
    state = {
        pasarSig: false,
        indexPregunta: 0,
        resCorrecta: ''
    }

    saludo = (string) => {
        return console.log(string)
    }


    dibujarTrivia = (trivia) => {
        console.log(trivia)

        return (
            < Trivia
                pregunta={trivia.pregunta}
                resCorrecta={trivia.respuestaCorrecta}
                respuestas={trivia.respuestas}
                id={trivia.id}
                render={() => (this.saludo('hola desde actualizar'))}
            />)

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.pregunta !== this.props.pregunta) {

        }
    }


    // handleClick = (item, resCorrecta, e) => {
    //     e.preventDefault()
    //     console.log('me ejecute')
    //     this.setState({
    //         pasarSig: true,
    //         indexPreguntas: this.state.indexPreguntas - 1
    //     }, () => {
    //         if (item === resCorrecta) {
    //             console.log('ganaste')
    //         } else {
    //             console.log('perdiste')
    //         }
    //         console.log(this.state.pasarSig)
    //         console.log(this.state.indexPreguntas)
    //     })
    // }

    render() {
        console.log(this.props.preguntas.length - 1)
        const index = this.state.indexPregunta
        console.log(index)

        return (
            this.dibujarTrivia(this.props.preguntas[index])
        )

    }

}
//antes de renderizar el sig.. pasar this.state.pasarSig : FALSE
// this.props.preguntas.map( pregunta => ...)
// timeout, dps de 10" pase a la proxima respuesta
// puntaje 
//         !this.state.pasarSig ?


// <div>
//     <h1>{this.props.preguntas[0].pregunta}</h1>
//     <ul>
//         {this.props.preguntas[0].respuestas.map((item, index) => {
//             return (
//                 <li key={index + item} onClick={(e) => this.handleClick(item, this.props.preguntas[0].respuestaCorrecta, e)}>
//                     {item}
//                 </li>)
//         })}
//     </ul>
// </div>
// <div>Cargando pregunta..</div>

export default Trivias