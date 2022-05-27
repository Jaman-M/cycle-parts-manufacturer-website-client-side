import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='text-center text-info'>Question and Answer</h2>
            <h4>Q-1:  How will you improve the performance of a React Application?</h4> 
            <p><strong>Ans:</strong>A React application may be made more efficient in a variety of ways. As an example, wherever possible, keep state of components local. Memorying React components to avoid unwanted re-renders is also a good strategy. In addition, dynamic imports in React allow for code-splitting. React's virtualization of windows or lists. In React, photos may be loaded in a 'lazy' manner. Making Use of Structural Consistency. As many chunk files as you'd want

            </p> <br />

            <h4>Q-2: What are the different ways to manage a state in a React application?</h4> 
            <p><strong>Ans:</strong> The four major forms of state you need to keep track of in your React projects are: Local state, Global state, Server state, and URL state. A component's local state refers to the data it keeps. Managing local state in React is often accomplished via the usage of the useState hook. Additionally, for both local and global states, useReducer is an option that may be implemented in any way. Under the hood, it is quite similar to useState, except that it takes a reducer instead of a starting state. You'd need local state for things like showing or hiding a modal component and keeping track of input data for forms that have been disabled. Data that is shared across different components is referred to as global state. When data has to be accessed and updated across many parts of our program, we need to use global state. Authenticated user state is a frequent example of a global state. In order to get or update data from an external server, you must handle a variety of states, including loading and error state.
            </p> <br />

            <h4>Q-3: How does prototypical inheritance work?</h4> 
            <p><strong>Ans:</strong> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.
            </p> <br />
            
            <h4>Q-4: Why you do not set the state directly in React?</h4> 
            <p><strong>Ans:</strong> Using setState allows you to move a state from one component to another without having to change the original. SetState is required for integrating an item into the current state (). Components that are stateful or stateless cannot be known by their parents and children, and they should not be concerned about whether or not they are defined as functions or classes. Any React component may have a state attached to it. A user action or a system event may cause the state of a component to change. If the component's state changes, React re-renders it. Before changing the state's value, it is important to create an initial state setup. To make changes to the object's current state, we use the setState() method. You may be sure that the component's current state has been maintained by requesting a re-render. If a synchronous call is performed to change an object's state, it may not be updated on the console at the right time.
            </p> <br />

            <h4>Q-5: What is a unit test? Why should write unit tests?</h4> 
            <p><strong>Ans:</strong>Unit Testing is a testing method that tests an individual unit of software in isolation. Unit testing for React Apps means testing an individual React Component. <br />
            Unit Testing is important for React Apps, as it helps in testing the individual functionality of React components. Moreover, any error in code can be identified at the beginning itself, saving time to rectify it at later stages.
            </p> <br />
           
        </div>
    );
};

export default Blogs;