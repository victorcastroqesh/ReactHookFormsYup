import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.css';
import Form from './pages/Form';


const App = () => {
    return <>
    <Form />
    </>
};

ReactDOM.render(<App />, document.getElementById('root'));
