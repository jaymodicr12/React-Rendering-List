
import React from 'react'
import List from './List.jsx'

export default function App() {

  const fruits = [
    {
      id: "1", name: "apple", calory: 28
    }, 
    {
      id: "2", name: "orange", calory: 52 
    }, 
    {
      id: "3", name: "banana", calory: 95
    }];

  const vegetables = [
    {
        id: "1", name: "carrot", calory: 41
    }, 
    {
        id: "2", name: "broccoli", calory: 55 
    }, 
    {
        id: "3", name: "spinach", calory: 23
    }
];
  
  const nuts = [
      {
          id: "1", name: "almond", calory: 576
      }, 
      {
          id: "2", name: "walnut", calory: 654 
      }, 
      {
          id: "3", name: "cashew", calory: 553
      }
  ];
  
  const grains = [
      {
          id: "1", name: "quinoa", calory: 120
      }, 
      {
          id: "2", name: "brown rice", calory: 111 
      }, 
      {
          id: "3", name: "oats", calory: 389
      }
  ];
  

  return(

    <div className="item-grid">

      {fruits.length > 0 && <List items={fruits} category="fruits"/>}

      {vegetables.length > 0 && <List items={vegetables} category="vegetables"/>}

      {nuts.length > 0 && <List items={nuts} category="nuts"/>}

      {grains.length > 0 && <List items={grains} category="grains"/>}

    </div>
         )
}
