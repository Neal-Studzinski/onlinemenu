const url = "http://tiny-za-server.herokuapp.com/collections/nealonlinemenu";
const menuUrl ="https://tiy-austin-front-end-engineering.github.io/restaurantApi/fancy.json";

    const Server = {
        loadMenu: (store) => {
            $.getJSON(menuUrl).then( (data) => {
                // setTimeout to preview loading animation from loading-menu-view
                setTimeout(() => {
                    console.log('menu loaded: ', data);
                    store.dispatch({ type: "VIEW_MENU", menuItems: data });
                }, 1000); // = 1 second
            });
        },

        sendOrder: (store) => {
            console.log(store.getState().order);
            $.ajax({
                url: url,
                type: 'POST',
                dataType: 'JSON',
                data: {
                    order: store.getState().order
                }
            }).then(function (data, status, xhr) {
                console.log('CONFIRM ORDER',arguments);
                store.dispatch({ type: 'CONFIRM_ORDER' });
            });
        }
}

export default Server;
