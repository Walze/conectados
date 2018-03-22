import React, { Component } from 'react'

class Cards extends Component {

  constructor() {
    super()

    return 1
  }


  render() {

    return (
      <div className='d-flex flex-wrap'>
        {Array.apply(null, Array(20)).map((el, i) =>
          <div
            key={i}
            className="card m-4 pointer list-group-item-action"
            style={{ width: '320px' }}
          >
            <div className="card-body">
              <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, iste.</p>
            </div>

          </div>
        )}
      </div>
    )
  }
}

export default Cards
