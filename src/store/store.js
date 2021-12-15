import faker from 'faker'

const store = {
  _state: {
    productList: [],
    tableList: [
      {
        id: 1,
        name: 'Ази*******  *****лиев',
        bookName: 'Устоз ва шогирд',
        count: 1,
        price: 75000,
        day: '24 Май 2021',
        time: '12:29',
      },
      {
        id: 2,
        name: 'Кар******  *****илов',
        bookName: 'Молиявий бошкарув',
        count: 3,
        price: 150000,
        day: '24 Май 2021',
        time: '12:15',
      },
      {
        id: 3,
        name: 'Сай*******  *****лиев',
        bookName: 'Устоз ва шогирд',
        count: 4,
        price: 75000,
        day: '24 Май 2021',
        time: '12:05',
      },
      {
        id: 4,
        name: 'Сай*******  *****лиев',
        bookName: 'Устоз ва шогирд',
        count: 4,
        price: 75000,
        day: '24 Май 2021',
        time: '12:05',
      },
      {
        id: 5,
        name: 'Сай*******  *****лиев',
        bookName: 'Устоз ва шогирд',
        count: 4,
        price: 75000,
        day: '24 Май 2021',
        time: '12:05',
      },
      {
        id: 6,
        name: 'Сай*******  *****лиев',
        bookName: 'Устоз ва шогирд',
        count: 4,
        price: 75000,
        day: '24 Май 2021',
        time: '12:05',
      },
      {
        id: 7,
        name: 'Сай*******  *****лиев',
        bookName: 'Устоз ва шогирд',
        count: 4,
        price: 75000,
        day: '24 Май 2021',
        time: '12:05',
      },
      {
        id: 8,
        name: 'Сай*******  *****лиев',
        bookName: 'Устоз ва шогирд',
        count: 4,
        price: 75000,
        day: '24 Май 2021',
        time: '12:05',
      },
      {
        id: 9,
        name: 'Сай*******  *****лиев',
        bookName: 'Устоз ва шогирд',
        count: 4,
        price: 75000,
        day: '24 Май 2021',
        time: '12:05',
      },
    ],
    card: [],
  },

  getState() {
    return this._state
  },

  reRenderDom() {
    console.log('hello')
  },

  dispatch(action) {
    if (action.type === 'ADD_TO_CARD') {
      this._state.card.push(action.item)
    } else if (action.type === 'DELETE_TO_CARD') {
      this._state.card = this._state.card.filter(
        (item) => item.id !== action.id,
      )
      this.reRenderDom()
    }
  },

  subscribe(observer) {
    this.reRenderDom = observer
  },
}

const makeFakeProducts = () => {
  for (let i = 1; i <= 10; i++) {
    let item = {
      id: i,
      name: faker.name.firstName(),
      desc: faker.lorem.paragraph(),
      price: faker.commerce.price(),
      img: 'https://picsum.photos/200/300',
      card_img: 'https://picsum.photos/200/300',
    }
    let state = store.getState()
    state.productList.push(item)
  }
}
makeFakeProducts()

export default store
