import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products : [
            {
                "_id": 1,
                "title": "Nike Shoes 01",
                "src": "https://pixabay.com/fr/photos/le-jogging-cours-sport-2343558/",
                "description": "UI/UX designing html css",
                "content": "welcome",
                "price": 23,
                "color": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": 2,
                "title": "Nike Shoes 02",
                "src": "https://pixabay.com/fr/photos/les-chaussures-jambes-auto-434918/",
                "description": "UI/UX designing html css",
                "content": "welcome",
                "price": 3,
                "color": ["red", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": 3,
                "title": "Nike Shoes 03",
                "src": "https://pixabay.com/fr/photos/les-chaussures-baskets-converse-1433925/",
                "description": "UI/UX designing html css",
                "content": "welcome",
                "price": 16,
                "color": ["lightblue", "white", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": 4,
                "title": "Nike Shoes 04",
                "src": "https://pixabay.com/fr/photos/les-chaussures-chaussure-584850/",
                "description": "UI/UX designing html css",
                "content": "welcome",
                "price": 23,
                "color": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": 5,
                "title": "Nike Shoes 05",
                "src": "https://pixabay.com/fr/photos/mode-bottes-les-chaussures-5515135/",
                "description": "UI/UX designing html css",
                "content": "welcome",
                "price": 18,
                "color": ["red", "black", "crimson", "teal"],
                "count": 1
            }
        ]
    }
  render() {
      const {products} = this.state;
    return (
      <DataContext.Provider value={{products}}>
          {this.props.children}
      </DataContext.Provider>
    )
  }
}

