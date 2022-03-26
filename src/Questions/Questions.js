import React from 'react';
import "./Questions.css";

const Questions = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-5 card g-3 m-3'>
                    <h1 className='text-danger'>How to React Work?</h1>
                    <p>Many people think that React is a framework but React is a JavaScript-based UI development library. ReactJS is an open-source. React uses a declarative paradigm that makes it easier to reason about application. React uses Virtual DOM, for creating web applications faster. When an object's state changes, Virtual DOM updates only that object in the real DOM rather than all of them. React is easy to learn, as it mostly combines basic HTML and JavaScript concepts with some beneficial additions.</p>
                </div>
                <div className='col-lg-5 card g-3 m-3'>
                    <h1 className='text-danger'>props vs state</h1>
                    <h5>Props</h5> <p> (short for properties) are a Component's configuration. Props make components reusable by giving components the ability to receive data from their parent component. It's can be accessed by the child component. Props allows passing data from one component to other components. It is read-only components. </p>

                    <h5>State</h5> <p>is a data structure that starts with a default value when a Component mounts.
                        State is the local state of the component which cannot be accessed and modified outside of the component.It is changes can be asynchronous and be used for rendering dynamic changes with the component. State cannot be accessed by child components. </p>


                </div>
            </div>
        </div >
    );
};

export default Questions;