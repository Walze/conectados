import React, { Component } from 'react'
import Licoes from './Licoes'
import { add } from '../../actions/licoes.action.js'
import { Licao } from '../../interfaces'

class LicoesPage extends Component {
  constructor(props) {
    super(props);

    props.displayNav(true)


    this.state = {
      newLicao: new Licao(),
      criar: true
    }
  }

  handleChange(e) {
    let newLicao = this.state.newLicao
    newLicao[e.target.name] = e.target.value
    this.setState({ newLicao })
  }

  criarBotao() {
    this.setState({ criar: !this.state.criar })
  }

  create() { add(this.state.newLicao) }

  render() {

    return (
      <div className='container d-flex align-items-center flex-column'>

        <button hidden={!this.state.criar} className='btn btn-success btn-sm' onClick={() => this.criarBotao()}>Criar nova Lição</button>
        <div hidden={this.state.criar} className='col-sm-12'>
          <div className='d-flex justify-content-center'>
            <div className='card card-body m-4 col-md-6 col-sm-12'>
              <h5 className='mb-0 text-center'>
                <b>
                  Criar nova Lição
                </b>
              </h5>
              <small className='text-center form-text text-muted mb-3 mt-1'>Tenha certeza de que ela já não existe.</small>
              <div className='form-group'>

                <input
                  type='number'
                  className='form-control mb-3'
                  name='categoria_id'
                  placeholder='Categoria'
                  value={this.state.newLicao.categoria_id}
                  onChange={e => this.handleChange(e)}
                />

                <input
                  type='text'
                  className='form-control mb-1'
                  name='titulo'
                  placeholder='Novo Título'
                  value={this.state.newLicao.titulo}
                  onChange={e => this.handleChange(e)}
                />

                <textarea
                  type='text'
                  className='form-control mb-1'
                  name='desc'
                  placeholder='Descrição'
                  value={this.state.newLicao.desc}
                  onChange={e => this.handleChange(e)}
                >
                </textarea>

              </div>

              <button
                onClick={() => this.create()}
                className='btn btn-primary mb-2'
              >
                Adicionar
              </button>

              <button
                className='btn btn-danger'
                onClick={() => this.criarBotao()}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>

        <Licoes />

      </div>
    )
  }
}

export default LicoesPage
