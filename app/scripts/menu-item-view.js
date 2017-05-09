export default function menuItemView(store, thisMenuItem) {
    let $viewContent = $(`<div class="menu-item">
                            <h4 class="item-name">${thisMenuItem.item}</h4>
                            <p class="item-price">$${thisMenuItem.price}</p>
                            <p class="item-description">${thisMenuItem.description}</p>
                            <button class="btn btn-add-to-order" type="button" name="button">Add to order</button>
                        </div>`);

  $viewContent.find('.btn-add-to-order').on('click', () => {
    store.dispatch({ type: 'ADD_ITEM', menuItem: thisMenuItem });
  } );

  return $viewContent;
}
