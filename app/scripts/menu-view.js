import menuItemView from './menu-item-view.js';
import menuItemInOrderView from './menu-item-in-order-view.js';

export default function menuView(store) {
    let $viewContent = $(`<section class="page-wrapper">
                            <header class="menu-header"><h1>Cafe le Blanc</h1></header>
                        </section>`);

    let $menuSection = $(`<section class="menu">
                            <h2>Menu</h2>
                            <div class="menu-wrapper">
                            </div>
                        </section>`);
    let $menuWrapper = $menuSection.find('.menu-wrapper');
    let $orderMod = $(`<aside class="your-order">
                            <h3>Your Order</h3>
                        </aside>`);

    let menu = store.getState().menuItems;

    // assemble menu items
    let $menuContent = $('<div class="menu-content">');
    $menuWrapper.append($menuContent);

    for (let category in menu) {  // Supposed to capitalize the food-category, but it's not working in css
        $menuContent.append(`<h3 class="food-category">${category}</h3>`);
        menu[category].forEach( (menuItem, i, array) => {
            $menuContent.append( menuItemView(store, menuItem));
        });
    }

    let state = store.getState();
    let order = store.getState().order;

    order.forEach( (menuItem, i, array) => {
        $orderMod.append(menuItemInOrderView(menuItem)); // Updates the order mod to display menu item selected
        });

        $orderMod.append(` <div class="order-cost">
                                <p>Tax (8%): $${state.orderTax}</p>
                                <p>Total: $${state.orderTotal}</p>
                            </div>`);

    let $btnPlaceOrder = $('<button class="btn btn-place-order" type="button" name="button">Place Order</button>');
    $orderMod.append($btnPlaceOrder);

    if(order.length <= 0) {     // Keeps the order button disabled until an item is selected
        $btnPlaceOrder.prop('disabled', true);
    } else {
        $btnPlaceOrder.prop('disabled', false);
    }

    $menuWrapper.append($orderMod);  // Updates the order mod on the right
    $viewContent.append($menuSection); // updates the menu display

    $btnPlaceOrder.on('click', () => {
        store.dispatch({ type: 'PLACE_ORDER' });
    });

  return $viewContent;
}
