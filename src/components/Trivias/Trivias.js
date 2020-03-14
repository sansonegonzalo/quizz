import React, { Component } from 'react';
import Trivia from '../Trivia/Trivia'

class Trivias extends Component {

    // indexPregunta, se utiliza p/iterar lista de preguntas q llega de props
    state = {
        pasarSig: false,
        indexPregunta: 0,
        resCorrecta: '',
        puntaje: 0
    }



    sigPregunta = () => {
        this.setState({
            indexPregunta: this.state.indexPregunta + 1,
            pasarSig: true
        })
    }


    dibujarTrivia = (trivia) => {
        //agarra la pregunta segun el index actual
        if (trivia) {
            return (
                < Trivia
                    pregunta={trivia.pregunta}
                    resCorrecta={trivia.respuestaCorrecta}
                    respuestas={trivia.respuestas}
                    id={trivia.id}
                    puntaje={this.state.puntaje}
                    //este render, es una funcion q se configura desde este componente
                    // pero se ejecuta en el componente hijo
                    render={() => (this.sigPregunta())}
                />)
        }

        return (<div>Fin del juego</div>)
    }

    componentDidUpdate(prevProps, prevState) {
        const index = this.state.indexPregunta

        if (prevState.indexPregunta !== index) {
            return this.dibujarTrivia(this.props.preguntas[index])
        }
    }

    render() {
        //queremos guardar en el estado (capaz) el largo de la lista de preguntas
        //el -1 es el item q sobra, xq si un array tiene 10 elementos
        // el length es igual a 10
        // pero el item 10 es igual a 9, por eso se resta uno
        console.log(this.props.preguntas.length - 1)
        const index = this.state.indexPregunta
        const pregunta = this.props.preguntas[index]
        console.log(index)
        console.log(this.state.puntaje)

        return (
            this.dibujarTrivia(pregunta)
        )

    }

}


export default Trivias
