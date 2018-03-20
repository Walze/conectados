import React, { Component } from 'react'
// import PopUp from './PopUp'
// import * as actions from '../../actions/popup.action'


class Cards extends Component {

  render() {

    return (
      <div>
        <div className='cards d-flex flex-wrap'>
          {this.props.cards.map(card =>
            <div className="card m-4" style={{ width: '320px' }}>
              <div className="card-body">

                <h5 className="card-title">{card.titulo}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{card.sub_titulo}</h6>
                <p className="card-text">{card.desc}</p>

                <button className='btn btn-primary mr-2'>Editar</button>
                <button className='btn btn-danger'>Deletar</button>

              </div>
            </div>
          )}
        </div>

        {/* <PopUp /> */}
      </div>
    )
  }
}

export default Cards
