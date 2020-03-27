import React from 'react';
import ReactDOM from 'react-dom';






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


const Course = (props) => {
    return (
        <div> 
            <h1>Welcome to {props.course}</h1>
        </div>
    )
}

const Content = (props) => {
    return (
        <div> 
            <p> 
                {props.part1}
                {props.exercises1}
                {props.part2}
                {props.exercises2}
                {props.part3}
                {props.exercises3}
            </p>
        </div>
    )
}
const Total = (props) => {
    return (
        <p>
            {props.total}
            {props.calc}
        </p>
    )
}


const App = () => {
    return (
        <p>
        <Course course="Half Stack application development"  />
        <Content part1="Fundamentals of React " exercises1= {10} />
        <Content part2="Using props to pass data " exercises2= {7}/>
        <Content part3="State of a compnent " exercises3= {14} />
        <Total total="total exercises " calc={10 + 7 + 14 } />
        </p>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));


//Objects

//mutltiple ways to define objects in js, common way is object literals 
//listing properties within braces  

const object1 = {
    name : 'Arto Hellas',
    age: 35,
    education: 'PhD'
}

// the values can be int, strings, arrays, objects 
// properties of an object are referred by using dot notation or brackets
console.log(object1.name)
const fieldName = 'age'
console.log(object1[fieldName])

// can also add properties using dot notation or brackets
object1.address = 'Helsinki'
object1['secret number'] = 12341
// ^^ if you are using one method stay cosistent

// Functions
// defining arrow function :

const sum = (p1, p2) => {
    console.log(p1)    
    console.log(p2)
    return p1 + p2
}

// this is like the def feature in python

const result = sum(1, 5)
console.log(result)

// no need for () if its a single parameter

const square = p => {
    console.log(p)
    return p * p
}

// then can be shortened
// const square = p => p * p
