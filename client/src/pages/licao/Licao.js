import React, { Component } from 'react'
import Cards from './Cards'

class Licao extends Component {
  constructor(props) {
    super(props);

    props.displayNav(true)


    this.state = {
      cards: [
        { titulo: 'Lição #23', sub_titulo: 'Subtítulo da lição', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, nihil.' },
        { titulo: 'Lição #24', sub_titulo: 'Subtítulo da lição', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, nihil.' },
        { titulo: 'Lição #25', sub_titulo: 'Subtítulo da lição', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, nihil.' },
        { titulo: 'Lição #26', sub_titulo: 'Subtítulo da lição', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, nihil.' },
      ],
      newLicao: {
        titulo: '',
        sub_titulo: '',
        desc: ''
      },
      criar: true
    }
  }

  handleChange(e) {
    let newLicao = this.state.newLicao
    newLicao[e.target.name] = e.target.value
    console.log()
    this.setState({ newLicao })
  }

  criarBotao() {
    this.setState({ criar: !this.state.criar })
  }

  render() {

    return (
      <div className='container d-flex align-items-center flex-column'>

        <button hidden={!this.state.criar} className='btn btn-success' onClick={() => this.criarBotao()}>Criar nova Lição</button>
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
                  type='text'
                  className='form-control mb-1'
                  name='titulo'
                  placeholder='Novo Título'
                  value={this.state.newLicao.titulo}
                  onChange={e => this.handleChange(e)}
                />

                <input
                  type='text'
                  className='form-control mb-3'
                  name='sub_titulo'
                  placeholder='Novo Subtítulo'
                  value={this.state.newLicao.sub_titulo}
                  onChange={e => this.handleChange(e)}
                />

                <textarea
                  type='text'
                  className='form-control mb-1'
                  name='desc'
                  placeholder='Descrição'
                  value={this.state.newLicao.desc}
                  onChange={e => this.handleChange(e)}
                ></textarea>

              </div>

              <button type='submit' onClick={() => this.create(this.state.newLicao)} className='btn btn-success'>Adicionar</button>
            </div>
          </div>
        </div>

        <Cards cards={this.state.cards} />

      </div>
    )
  }
}

export default Licao
