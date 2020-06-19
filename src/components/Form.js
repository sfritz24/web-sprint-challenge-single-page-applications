import React from 'react';
import Pizza from './Pizza';
import {Route, Link} from 'react-router-dom';

export default function PizzaForm (props){
    const {
        values,
        onSubmit,
        onInputChange,
        onCheckboxChange,
        disabled,
        errors,
        pizzas,
      } = props

    return (
        <div>
        <form onSubmit={onSubmit}>
            <div>
                <h2>Create Your Pizza!!</h2>
                <button disabled={disabled}>Submit</button>
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                </div>
            </div>
            <div>
                <label>Name:&nbsp;
                    <input
                    value={values.name}
                    type='text'
                    name='name'
                    onChange={onInputChange}
                    />
                </label>
                <label>Size:&nbsp;
                    <select
                    name='size'
                    onChange={onInputChange}
                    value={values.size}
                    >
                        <option value=''>--Please Select a Size</option>
                        <option value='individual'>Individual</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                        <option value='family'>Family</option>
                    </select>
                </label>
                <div>
                    <h4>Toppings</h4>
                    <label>Cheese:&nbsp;
                        <input
                        name='cheese'
                        type='checkbox'
                        onChange={onCheckboxChange}
                        value={values.toppings.cheese}
                        checked={values.toppings.cheese}
                        />
                    </label>
                    <label>Pepperon:&nbsp;
                        <input
                        name='pepperoni'
                        type='checkbox'
                        onChange={onCheckboxChange}
                        value={values.toppings.pepperoni}
                        checked={values.toppings.pepperoni}
                        />
                    </label>
                    <label>Mushrooms:&nbsp;
                        <input
                        name='mushrooms'
                        type='checkbox'
                        onChange={onCheckboxChange}
                        value={values.toppings.mushrooms}
                        checked={values.toppings.mushrooms}
                        />
                    </label>
                    <label>Oinions:&nbsp;
                        <input
                        name='onions'
                        type='checkbox'
                        onChange={onCheckboxChange}
                        value={values.toppings.onions}
                        checked={values.toppings.onions}
                        />
                    </label>
                </div>
                <label>Special Instructions:&nbsp;
                    <input
                    name='instructions'
                    type='text'
                    onChange={onInputChange}
                    value={values.instructions}
                    />
                </label>
            </div>
        </form>
            {
            pizzas.map(pizza =>{
              return(
                <Pizza key={pizza.id} details={pizza}/>
              )
            })
          }
        </div>
    )
}