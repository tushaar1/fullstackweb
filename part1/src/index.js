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


