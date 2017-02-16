var state = {
  items: []
};

var addItem = function(state, item) {
  state.items.push(item);
};

var subtractItem = function(state, item) {

};

var renderList = function(state, element) {
  var itemsHTML = state.items.map(function(item) {
    return '<li>' + 
        '<span class="shopping-item">' + item + '</span>' + 
        '<div class="shopping-item-controls">' + 
          '<button class="shopping-item-toggle">' + 
            '<span class="button-label">check</span>' + 
          '</button>' +
          '<button class="shopping-item-delete">' + 
            '<span class="button-label">delete</span>' +
          '</button>' +
        '</div>' +
      '</li>'
  });
  element.append(itemsHTML);
};

$("#js-shopping-list-form").submit(function(event) {
  console.log("fds");
  event.preventDefault();
  console.log("fds");
  addItem(state, $(".shopping-list-entry").val());
  renderList(state, $(".shopping-list"));
});