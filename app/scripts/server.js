export default function Server(store) {
  const url = "http://tiny-za-server.herokuapp.com/collections/nealonlinemenu"
  const menuUrl ="https://tiy-austin-front-end-engineering.github.io/restaurantApi/fancy.json"
  var settings = {contentType: 'application/json'}

  this.getMenu = function(store){
    console.log("query db")
    settings.type = 'GET';
    settings.url = menuUrl;
      $.ajax(settings).then(function(data,status,xhr) {
        console.log("data from server ",data)
        store.dispatch({type:"MENU_VIEW,menu:data"})
      })
  }

  this.sendOrder = function(state,action) {
    console.log(store.getState().order);
    $.ajax(settings){
      settings.url = url;
      settings.type = 'POST';
      settings.data:

    })




    })
  }

}
