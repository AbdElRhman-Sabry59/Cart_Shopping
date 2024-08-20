let ul_items = document.querySelectorAll("ul.coputer-hardware li");
let content_box = document.querySelector(".content-box");
let btn_total = document.querySelector(".total-price");
let totalPrice = 0;

ul_items.forEach((item) => {
  item.addEventListener("click", () => {
    totalPrice += parseInt(item.getAttribute("data-price"));
    content_box.innerHTML += " | " + item.textContent;
    btn_total.style.display = "block";
    btn_total.innerHTML = ` Total Price => ${totalPrice} EGP`;
  });
});
