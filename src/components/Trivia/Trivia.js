import React, { Component } from 'react'

class Trivia extends Component {

    handleClick = (item, resCorrecta, e) => {
        if (item === resCorrecta) {
            console.log('ganaste')
            this.props.render()
        } else {
            console.log('perdiste')
            this.props.render()
        }
    }


    render() {
        const { pregunta, respuestas, resCorrecta } = this.props

        return (
            <div>
                <h1>{pregunta}</h1>
                <ul>
                    {respuestas.map(res => {

                        return (
                            <li key={res} onClick={(e) => this.handleClick(res, resCorrecta, e)}>
                                {res}
                            </li>)
                    })
                    }
                </ul>
            </div>
        )
    }
}

export default Trivia