import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import config from './config';
import Context from './views/hoc/Context';



ReactDOM.render(
    <Context.Provider
        value={{
            ...this.state,
            removeFromCart: this.removeFromCart,
            addToCart: this.addToCart,
            login: this.login,
            addProduct: this.addProduct,
            clearCart: this.clearCart,
            checkout: this.checkout
        }}>

        <App />

    </Context.Provider>

    , document.getElementById("root"));