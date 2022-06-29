import $ from "jquery";

const items = [];

renderItems();

$("#item-inp").on("keypress", addItem);
$("#pick-one-btn").on("click", pickOne);

$(".close, .popup-overlay").on("click", function () {
  $(".popup-overlay, .popup-content").removeClass("active");
});

function renderItems() {
  if (items.length === 0) {
    $("#items").append(createDiv("No items added."));
    return;
  }

  $("#items").empty();
  items.forEach((item) => {
    $("#items").append(createDiv(item));
  });
}

function createDiv(text) {
  return `<div>${text}</div>`;
}

function addItem(evt) {
  if (evt.which === 13) {
    const input = getInputValue();

    input.forEach((value) => {
      items.push(value);
    });

    $("#item-inp").val("");

    renderItems();
  }
}

function getInputValue() {
  const value = $("#item-inp").val();
  return value.split(",");
}

function pickOne() {
  const random = items[getRandomInt()];
  $("#result").text(random);
  $(".popup-overlay, .popup-content").addClass("active");
}

function getRandomInt() {
  const max = Math.floor(items.length);
  return Math.floor(Math.random() * (max + 1));
}
