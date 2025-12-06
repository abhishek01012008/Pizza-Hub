var count = 0;
var cart = document.getElementsByClassName("cart-img")[0];
var menuGrid = document.getElementsByClassName("menu-grid")[0]; 
function update() {
    cart.innerHTML = '<img src="./images/ca-img.png"> ' + count;
}
menuGrid.onclick = function(event) {
    var target = event.target;
    if (target.classList.contains("add-btn") || target.classList.contains("adding-btn")) {
        count++;
        update();
    } else if (target.classList.contains("remove-btn")) {
        if (count > 0) {
            count--;
            update();
        }
    }
};
