import React, { Component } from 'react'
import Cards from './Cards'

class Licao extends Component {

  constructor() {
    super()

    this.state = {
      currentCard: {},
      editNome: false
    }

    window.licao = this
  }

  editNome() {
    this.setState({ editNome: !this.state.editNome }, () => this.refs.nomeInput.focus())
  }

  render() {
    return (
      <div>
        <br />

        <div className='d-flex flex-wrap justify-content-center flex-column align-items-center'>
          <div style={{ width: '320px' }} className='mx-4 my-3 d-flex flex-wrap justify-content-center flex-column'>
            <h1
              // ref={ref => this.nomeH1 = ref}
              onClick={() => this.editNome()}
              hidden={this.state.editNome}
              className='display-4 text-center'>
              {this.props.licao.titulo}
            </h1>

            <input
              ref='nomeInput'
              onBlur={() => this.editNome()}
              hidden={!this.state.editNome}
              className='form-control form-control-lg display-4 text-center'
              value={this.props.licao.titulo}
            />

            <small hidden={this.state.editNome} className='text-secondary text-center'>
              <i> Clique no nome para editar, depois clique fora do campo para salvar. </i>
            </small>
          </div>

          <Cards cards={this.props.licao.cards} />

        </div>
        <div className='d-flex flex-wrap justify-content-center'>
          <div style={{ width: '320px' }} className='d-flex flex-wrap justify-content-center flex-column'>
            <button className='btn btn-danger'>Deletar</button>
          </div>
        </div>

        <br />
      </div>
    )
  }
}

export default Licao
