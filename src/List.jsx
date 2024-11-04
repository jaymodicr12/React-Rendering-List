
import PropTypes from 'prop-types'
import React from 'react'
import './list.css'

export default function List(props) {

  const category = props.category
  const items = props.items;

  // fruits.sort();
  items.sort((a, b) => (a.name.localeCompare(b.name)))
  // fruits.sort((a,b) => (b.name.localeCompare(a.name)))
  // fruits.sort((a,b) => (a.calory - b.calory))
  // fruits.sort((a,b) => (b.calory - a.calory))

  //low caloriesfruits
  // const lowcals = fruits.filter(fruit => fruit.calory < 80)

  //high calory fruit
  // const highcals = fruits.filter(fruit => fruit.calory > 80)

  const listItems = items.map(fruit => (<li key={fruit.id}> {fruit.name} &nbsp; {fruit.calory}</li>))

  return (
    
    <div className="item-box">
      <h3>{category}</h3>
      <ol>
        {listItems}
      </ol>
    </div>

  )
}

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({  id: PropTypes.number,
                                                                                     name: PropTypes.string,
                                                                                     calory: PropTypes.number})),
}

  List.defaultProps = {
    category : "Category",
    items : [],

  }