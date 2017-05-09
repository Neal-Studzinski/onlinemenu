import { createStore } from 'redux';
import Server from './server.js';
import loadingMenuView from './loading-menu-view.js'
import menuView from './menu-view.js';
import sendingOrderView from './sending-order-view.js';
import orderConfirmationView from './order-confirmation-view.js';


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

    switch(action.type) {

        case 'LOAD_MENU':
            Server.loadMenu(store);
            return currentState;

        case 'VIEW_MENU':           // Sets new state displaying the menu items
            var newState = {
                menuItems: action.menuItems,
                view: menuView
            };
            newState = Object.assign({}, currentState, newState);
            return newState;

        case 'ADD_ITEM':
            console.log('ACTION: ADD_ITEM');
            let updatedOrder = currentState.order;
            updatedOrder.push(action.menuItem);

            let updatedOrderTotal = 0;
            updatedOrder.forEach( (menuItem, i, array) => {
                updatedOrderTotal += menuItem.price;    // Keeps running tab on total
            });

            let taxAmount = updatedOrderTotal * 0.08;
            updatedOrderTotal += taxAmount;             // Keeps running tab on tax

            var newState = {
                order: updatedOrder,
                orderTax: taxAmount,
                orderTotal: updatedOrderTotal
            };
            console.log(newState);
            return Object.assign({}, currentState, newState);

        case 'PLACE_ORDER':     // send the order with ajax
            console.log('PLACING ORDER');
            var newState = {
                view: sendingOrderView
            };                          // switch to sending order view for loading effect
            Server.sendOrder(store);
            return Object.assign({}, currentState, newState);

        case 'CONFIRM_ORDER':       // set view to confirmation screen
            var newState = {
                view: orderConfirmationView
            };
            return Object.assign({}, currentState, newState);

        default:
            return currentState;
    }
  };

const store = createStore(reducer);

const render =  function () {
    let state = store.getState();
    $appContainer.html(state.view(store));
  };

  //The store will now run our 'render' function after every event is dispatched.
  store.subscribe(render);
  store.dispatch({ type: 'LOAD_MENU' });
}
