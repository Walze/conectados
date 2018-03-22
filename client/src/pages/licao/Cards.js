import React, { Component } from 'react'

class Cards extends Component {

  constructor() {
    super()

    return 1
  }


  render() {
    return (
      <div>
        <br />

        <div className='d-flex flex-wrap justify-content-around'>
          <div style={{ width: '320px' }} className='d-flex flex-wrap justify-content-center flex-column'>
            <h1 className='display-4 text-center'>{this.props.licao.titulo}</h1>
          </div>
          {Array.apply(null, Array(20)).map((el, i) =>
            <div
              key={i}
              className="card mb-3 mt-3 pointer list-group-item-action"
              style={{ width: '320px' }}
            >
              <div className="card-header text-center font-weight-bold">
                Card #{i + 1}
              </div>
              <div className="card-body">
                <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, iste.</p>
              </div>

            </div>
          )}
          <div style={{ width: '320px' }} className='d-flex flex-wrap justify-content-center flex-column'>
            <button className='btn btn-danger'>Deletar</button>
          </div>
        </div>
        <br />
      </div>
    )
  }
}

export default Cards
