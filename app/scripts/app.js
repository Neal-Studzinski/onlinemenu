import { createStore } from 'redux';
import Server from './server.js';
import loadingMenuView from './loading-menu-view.js'


export default function app() {

    const $appContainer = $('#app');
    const initialState = {
        menuItems: [],
        order: [],
        orderTax: 0,
        orderTotal: 0,
        view: loadingMenuView
    };

  const reducer = function (currentState, action) {
    if (currentState === undefined) {
      return initialState;
    }


    }
}
