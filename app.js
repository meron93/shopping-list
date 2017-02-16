var state = {
  items: []
};

var id = 0

var addItem = function(state, item) {
  var newItem = { 
     name: item,
     checked: false,
     id: ++id
  }
  state.items.push(newItem);
};

var renderList = function(state, element) {
  var itemsHTML = state.items.map(function(item) {
    var html = '<li>'; 
        if (item.checked) {
          html += '<span class="shopping-item shopping-item__checked">';
        } else {
          html += '<span class="shopping-item">';
        }
        html += item.name + '</span>' + 
        '<div class="shopping-item-controls">' + 
          '<button class="shopping-item-toggle" data-id="' + item.id + '">' + 
            '<span class="button-label">check</span>' + 
          '</button>' +
          '<button class="shopping-item-delete" data-id="' + item.id + '">' + 
            '<span class="button-label">delete</span>' +
          '</button>' +
        '</div>' +
      '</li>'
      return html;
  });
  element.html(itemsHTML);
};

$("#js-shopping-list-form").submit(function(event) {
  event.preventDefault();
  addItem(state, $(".shopping-list-entry").val());
  $(".shopping-list-entry").val("");
  renderList(state, $(".shopping-list"));
});

$(document).on("click", ".shopping-item-toggle", function(event) {
  var selected = $(this).attr("data-id");
  for (var i = 0; i<state.items.length; i++) {
    if (state.items[i].id == selected) {
      state.items[i].checked = !state.items[i].checked;
    }
  }
  renderList(state, $(".shopping-list"));
});

$(document).on("click", ".shopping-item-delete", function(event) {
  var selected = $(this).attr("data-id");
  for (var i = 0; i<state.items.length; i++) {
    if (state.items[i].id == selected) {
      console.log(state.items);
      state.items.splice(i, 1);
      console.log(state.items);
    }
  }
  renderList(state, $(".shopping-list"));
});