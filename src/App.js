import React from "react";
import "./styles.css";
import { useState } from "react";

/* Objeto persona */

const people = {
  name: "Rodo",
  salary: 3000,
  period: "15 days"
};

/* (IF) is declared different in React, the */
/* variable is declared without an equal */
/* symbol. The value of the variable changes */
/* according to the met condition. */

let apto;

if (people.salary >= 3000) {
  apto = "Apto";
} else {
  apto = "No Apto";
}

/* The HTML is inserted using a function, */
/* (export default) can be placed before the */
/* function´s name or at the end of the  */
/* document + the name of the function */

function App() {
  return (
    <div>
      <h1>Calc de</h1>
      <ul>
        <li>{people.name}</li>
        <li>{people.salary}</li>
        <li>{people.period}</li>
        <li>{apto}</li>
      </ul>
      <ShoppingList />
      <TestButton />
      <br></br>
      <br></br>
      <MyButtonCounter />
    </div>
  );
}

/* Array of products to use on examples */

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 }
];

/* Usage of the map() function to transform *
/* an array into a series of <li> items */

function ShoppingList() {
  const listItems = products.map(
    (product) => (
      <li
        key={product.id}
        /* product is declared before the arrow */
        /* and used to identify every of the products */
        style={{
          /* conditional style (like if)(boolean) */
          color: product.isFruit ? "magenta" : "darkgreen"
        }}
      >
        {product.title}
      </li>
    ) /* {product.title} displays the titles  */
    /* from the products list, using "product" */
    /* from the function created */
  );
  return <ul>{listItems}</ul>;
}

/* onClick event */
/* create the function for the whole button and */
/* it´s actions. */
/* The next function is for the alert */
/* Returns the second function */
function TestButton() {
  function pressButton() {
    alert("Button working");
  }
  return <button onClick={pressButton}>Test Button</button>;
}

function MyButtonCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={increment}>Increase Count (Count:{count})</button>
      <button onClick={decrement}>Decrease Count (Count:{count})</button>
    </div>
  );
}

export default App;
