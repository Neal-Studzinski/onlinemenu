
  const url = "http://tiny-za-server.herokuapp.com/collections/nealonlinemenu"
  const menuUrl ="https://tiy-austin-front-end-engineering.github.io/restaurantApi/fancy.json"

  const Server = {

  loadMenu: (store) => {
    $.getJSON(menuUrl).then( (data) => {
      // setTimeout to preview loading animation
      setTimeout(() => {
        console.log('🥑 menu loaded: ', data, '\n---------- ');
        store.dispatch({ type: "VIEW_MENU", menuItems: data });
      }, 1000);
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
      console.log(arguments);
      store.dispatch({ type: 'CONFIRM_ORDER' });
    });
}
}



export default Server;
