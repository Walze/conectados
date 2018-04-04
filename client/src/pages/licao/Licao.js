import React, { Component } from 'react'
import Cards from './Cards'

import * as popUp from '../../actions/popups.action'
import * as LicoesActions from '../../actions/licoes.action'
import PopUp from './PopUp'

import { Card } from '../../interfaces'
import { add as addCard } from '../../actions/cards.action'

class Licao extends Component {

  constructor(props) {
    super(props)
    this.state = {
      newCard: new Card(),
      editNome: false,
      edit: { titulo: '', desc: '' }
    }

    window.licao = this
  }

  handleChange(e, index = null) {
    let newCard = Object.assign({}, this.state.newCard)

    if (e.target.name !== 'images')
      newCard[e.target.name] = e.target.value
    else
      newCard[e.target.name][index] = e.target.value

    newCard.licao_id = this.props.licao.id
    newCard.pos = this.props.licao.cards.length + 1

    console.log(newCard, e.target.value)

    this.setState({ newCard })
  }

  createCard() {
    addCard(this.state.newCard)
  }

  edit(e) {
    //error
    const edit = this.state.edit
    edit[e.target.name] = e.target.value
    console.log(e.target.name, e.target.value)
    this.setState({ edit })
  }

  editNome(e, bool = null) {
    if (bool === null) bool = !this.state.editNome

    if (e.target.nodeName == 'INPUT' || e.target.nodeName == 'TEXTAREA') {
      bool = true
    }

    this.setState({
      editNome: bool,
      edit: {
        titulo: this.props.licao.titulo,
        desc: this.props.licao.desc
      }
    })

    if (this.state.editNome) {
      const licao = Object.assign({}, this.props.licao)
      licao.titulo = this.state.edit.titulo
      licao.desc = this.state.edit.desc

      console.log(licao)
      LicoesActions.updateTitulo(licao)
    }
  }

  deleteLicao() {
    LicoesActions.deleteLicao(this.props.licao.id)
    popUp.close(this.props.popUp.state.id)
  }

  render() {
    return (
      <div>
        <br />

        <div className='d-flex flex-wrap justify-content-center flex-column align-items-center' >

          <div
            className='d-flex flex-wrap justify-content-center flex-column align-items-center'
            style={{ width: '100%' }} onClick={e => this.editNome(e)}
          >
            <div style={{ width: '320px' }} className='mx-4 my-3 d-flex flex-wrap justify-content-center flex-column'>

              <small hidden={this.state.editNome}
                className='text-secondary text-center'>
                <i> Clique no nome para editar, depois clique fora do campo para salvar. </i>
              </small>

              <h1
                onClick={e => this.editNome(e, true)}
                hidden={this.state.editNome}
                className='display-4 text-center'
              >
                {this.props.licao.titulo}
              </h1>

              <div name='edit-fields'>
                <input
                  ref='nomeInput'
                  onChange={e => this.edit(e)}
                  nome='titulo'
                  hidden={!this.state.editNome}
                  className='form-control form-control-lg display-4 text-center'
                  value={this.state.edit.titulo}
                />

                <textarea
                  onChange={e => this.edit(e)}
                  nome='desc'
                  hidden={!this.state.editNome}
                  className='form-control display-4 text-center'
                  value={this.state.edit.desc}
                  rows='4'
                >
                </textarea>
              </div>



              <small hidden={this.state.editNome} className='text-secondary text-center'>
                <i> {this.props.licao.desc} </i>
              </small>

              <button hidden={this.state.editNome} className='btn btn-success btn-sm' onClick={() => popUp.open(this.refs.newCardPopup.state.id)}>
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

                      <div className="mb-1">
                        <input
                          type="file"
                          name='images'
                          value={this.state.newCard.images[0]}
                          onChange={e => this.handleChange(e, 0)}
                        />
                      </div>

                    </div>

                    <button
                      type='submit'
                      onClick={() => this.createCard()}
                      className='col-sm-12 btn btn-primary'
                    >
                      Adicionar
                  </button>

                    <button className='col-sm-12 btn btn-danger' onClick={() => this.criarBotao()}>Fechar</button>
                  </div>
                </div>

              </PopUp>
            </div>
          </div>

          <Cards cards={this.props.licao.cards} />
        </div>

        <div className='d-flex flex-wrap justify-content-center'>
          <div style={{ width: '320px' }} className='d-flex flex-wrap justify-content-center flex-column'>
            <button onClick={() => this.deleteLicao()} className='btn btn-danger'>Deletar</button>
          </div>
        </div>

        <br />
      </div>
    )
  }
}

export default Licao
