function conditioner(ref, obj, fn = null) {
  if (obj)
    for (let prop in obj)
      ref[prop] = obj[prop]
  else fn()
}

export class Licao {
  constructor(obj) {
    conditioner(this, obj, () => {
      this.titulo = ''
      this.desc = ''
      this.categoria_id = 0
      this.cards = []
    })
  }
}

export class Card {
  constructor(obj) {
    conditioner(this, obj, () => {
      this.text = ''
      this.images = ['']
      this.pos = 0
      this.licao_id = 0
    })
  }
}