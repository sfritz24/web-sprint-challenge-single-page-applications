import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Route, Link} from 'react-router-dom';
import PizzaForm from './components/Form';
import formSchema from './components/FormSchema';
import * as yup from "yup";
import { v4 as uuid } from 'uuid';
import Pizza from './components/Pizza';

const initialFormValues = {
  name: '',
  size: '',
  toppings: {
    cheese: true,
    pepperoni: false,
    mushrooms: false,
    onions: false,
  },
  instructions: '',
};

const initialFormErrors ={
  name: '',
  size: '',
};

const initialPizzas = [];

const initialDisabled = true;

const App = () => {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [pizza, setPizza] = useState(initialPizzas);
  const [disabled, setDisabled] = useState(initialDisabled);

  const postPizza = (pizza) =>{
    axios.post('https://reqres.in/', pizza)
    .then(response =>{
      setPizza([...pizza, response.data])
    })
    .catch(error =>{
      debugger
    })
    .finally(() =>{
      setFormValues(initialFormValues)
    })
  };

  const onInputChange = (event) =>{
    const {name, value} = event.target

    yup
      .reach(formSchema, name)
      .validate(value)
      .then(()=>{
        setFormErrors({
          ...formErrors,
          [name]: ''
        })
      })
      .catch(error =>{
        setFormErrors({
          ...formErrors,
          [name]: error.errors[0]
        })
      })

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onCheckboxChange = (event) =>{
    const {name, checked} = event.target

    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: checked
      }
    })
  }

  const onSubmit = (event) =>{
    event.preventDefault()

    const newPizza = {
      name: formValues.name,
      size: formValues.size,
      instructions: formValues.instructions,
      id: uuid(),
      toppings: Object.keys(formValues.toppings)
      .filter(toppingName => (formValues.toppings[toppingName] === true))
    }
  }

  useEffect(() =>{
    formSchema.isValid(formValues).then(valid =>{
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <div>
      <header>
        <h1>Lambda Eats</h1>
        <Link to={'/'}>Home</Link>
      </header>
      <div>
        <h2>Your Favorite Food, Delivered While You Code!!</h2>
        <Link to={'/Form/'}>
          <button>Pizza?</button>
        </Link>
        <Route path={'/Form/'}>
          <PizzaForm
          values={formValues}
          onInputChange={onInputChange}
          onCheckboxChange={onCheckboxChange}
          onSubmit={onSubmit}
          disabled={disabled}
          errors={formErrors}
          />
        </Route>
        <Route path={'/Pizza/'}>
          {
            pizza.map(pizza =>{
              return(
                <Pizza key={pizza.id} details={pizza}/>
              )
            })
          }
        </Route>
      </div>
    </div>
  );
};
export default App;
