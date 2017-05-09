export default function menuItemInOrderView(thisMenuItem) {
  let $viewContent = $(`<div class="menu-item">
                          <h4 class="item-name">${thisMenuItem.item}</h4>
                          <p class="item-price">$${thisMenuItem.price}</p>
                        </div>`);
  return $viewContent;
}
