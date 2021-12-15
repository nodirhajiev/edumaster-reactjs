import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import store from "./store/store";

const reRenderDom = () =>{
    ReactDOM.render(
        <App store={store.getState()}/>,
        document.querySelector('#root')
    );
}

reRenderDom();

store.subscribe(reRenderDom);


