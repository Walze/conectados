import React, { Component } from 'react'
import Cards from './Cards'

import * as popUp from '../../actions/popups.action'
import PopUp from './PopUp'

import { Card } from '../../interfaces'


class Licao extends Component {

  constructor() {
    super()

    this.state = {
      currentCard: {},
      newCard: new Card(),
      editNome: false
    }

    window.licao = this
  }

  editNome() {
    this.setState({ editNome: !this.state.editNome }, () => this.refs.nomeInput.focus())
  }

  handleChange(e) {
    let newCard = this.state.newCard
    newCard[e.target.name] = e.target.value
    this.setState({ newCard })
  }

  render() {
    return (
      <div>
        <br />

        <div className='d-flex flex-wrap justify-content-center flex-column align-items-center'>
          <div style={{ width: '320px' }} className='mx-4 my-3 d-flex flex-wrap justify-content-center flex-column'>

            <h1
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

            <button className='btn btn-success btn-sm' onClick={() => popUp.open(this.refs.newCardPopup.state.id)}>
              Criar Card
            </button>

            <PopUp ref='newCardPopup'>

              <div className='d-flex justify-content-center'>
                <div className='m-4 col-sm-12'>
                  <h5 className='mb-0 text-center'>
                    <b>
                      Criar novo card
                </b>
                  </h5>
                  <small className='text-center form-text text-muted mb-3 mt-1'></small>
                  <div className='form-group'>

                    <input
                      type='text'
                      className='form-control mb-3'
                      name='text'
                      placeholder='Texto'
                      value={this.state.newCard.text}
                      onChange={e => this.handleChange(e)}
                    />

                    <div class="custom-file mb-1">
                      <input type="file" class="custom-file-input"
                        value={this.state.newCard.images[0]}
                        onChange={e => this.handleChange(e)}
                      />
                      <label class="custom-file-label">Choose file</label>
                    </div>

                  </div>

                  <button
                    type='submit'
                    onClick={() => this.create(this.state.newLicao)}
                    className='col-sm-12 btn btn-primary'
                  >
                    Adicionar
                  </button>

                  <button className='col-sm-12 btn btn-danger' onClick={() => this.criarBotao()}>Fechar</button>
                </div>
              </div>

            </PopUp>
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
