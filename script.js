var count = 0;
var addBtn = document.getElementsByClassName("add-btn")[0];
var plusBtn = document.getElementsByClassName("adding-btn")[0];
var minusBtn = document.getElementsByClassName("remove-btn")[0];
var cart = document.getElementsByClassName("cart-img")[0];
function update() {
    cart.innerHTML = '<img src="./images/ca-img.png"> ' + count;
}

function addItem() {
    count++;
    update();
}

function addMore() {
    count++;
    update();
}

function removeItem() {
    if (count > 0) {
        count--;
        update();
    }
}
addBtn.onclick = addItem;
plusBtn.onclick = addMore;
minusBtn.onclick = removeItem;
