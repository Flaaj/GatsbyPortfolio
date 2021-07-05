// ** Burger menu

const navigationBurger = document.querySelector(".navigation_burger");
const navigationList = document.querySelector(".navigation_list");
const maxWidth460 = window.matchMedia("(max-width: 460px)");

document.body.addEventListener("touchstart", function () {});

maxWidth460.addListener(function () {
    navigationList.classList.remove("show-menu");
    navigationBurger.classList.remove("burger_crossed");
});

navigationBurger.addEventListener("click", function () {
    navigationList.classList.toggle("show-menu");
    navigationBurger.classList.toggle("burger_crossed");
});

document.addEventListener("click", function (mousePosition) {
    if (mousePosition.clientY > 260) {
        navigationList.classList.remove("show-menu");
        navigationBurger.classList.remove("burger_crossed");
    }
});

document.addEventListener("touchstart", function (touchPosition) {
    if (touchPosition.changedTouches[0].screenY > 430) {
        navigationList.classList.remove("show-menu");
        navigationBurger.classList.remove("burger_crossed");
    }
});

// ** Kalkulator

const formQuantity = document.getElementById("form__quantity");
const formOrders = document.getElementById("form__orders");
const formPackage = document.getElementById("form__package");
const formAccounting = document.getElementById("form__accounting");
const formTerminal = document.getElementById("form__terminal");

formQuantity.display = document.getElementById("display__quantity");
formOrders.display = document.getElementById("display__orders");
formPackage.display = document.getElementById("display__package");
formAccounting.display = document.getElementById("display__accounting");
formTerminal.display = document.getElementById("display__terminal");
const displayTotalPrice = document.getElementById("display__total");

const listOfPrices = {
    Product: 0.5,
    Order: 0.25,
    Basic: 0,
    Professional: 25,
    Premium: 50,
    Accounting: 30,
    Terminal: 10,
};

const totalPrices = {
    Product: 0,
    Order: 0,
    Package: 0,
    Accounting: 0,
    Terminal: 0,
};

const formSelect = document.getElementById("form__select");

const updateTotalPrice = () => {
    let sum = 0;
    for (let key in totalPrices) {
        sum += totalPrices[key];
    }
    displayTotalPrice.querySelector(".display__price").innerText = sum + "$";
};

const changeAmount = (e, element) => {
    if (e.key == "." || e.key == "e") e.preventDefault();

    const cost = listOfPrices[element.getAttribute("data")];
    const display = element.display;
    const info = display.querySelector(".display__info");
    const price = display.querySelector(".display__price");

    setTimeout(() => {
        element.display.style.display =
            element.value && element.value != 0 ? "flex" : "";
        if (element.value > 100000) element.value = 100000
        totalPrices[element.getAttribute("data")] = element.value * cost || 0;

        info.innerText = (element.value || 0) + " * " + cost + "$";
        price.innerText = totalPrices[element.getAttribute("data")] + "$";

        updateTotalPrice();
    });
};

const toggleFeature = (element) => {
    data = element.getAttribute("data");
    if (element.checked) {
        element.display.style.display = "flex";
        element.display.querySelector(".display__price").textContent =
            listOfPrices[data] + "$";
        totalPrices[data] = listOfPrices[data];
    } else {
        element.display.style.display = "";
        element.display.querySelector(".display__price").textContent = "0$";
        totalPrices[data] = 0;
    }
    updateTotalPrice();
};

formQuantity.addEventListener("keydown", function (e) {
    changeAmount(e, this);
});
formQuantity.addEventListener("change", function (e) {
    changeAmount(e, this);
});
formOrders.addEventListener("keydown", function (e) {
    changeAmount(e, this);
});
formOrders.addEventListener("change", function (e) {
    changeAmount(e, this);
});

formPackage.addEventListener("mousedown", function (e) {
    e.preventDefault();
    formSelect.style.display = formSelect.style.display == "" ? "flex" : "";
});

Array.from(formSelect.children).forEach((package) => {
    package.addEventListener("click", function () {
        formPackage.display.style.display = "flex";
        const data = this.getAttribute("data");
        const info = formPackage.display.querySelector(".display__info");
        const price = formPackage.display.querySelector(".display__price");
        formSelect.style.display = "";

        formPackage.value = data;
        info.textContent = data;
        price.textContent = listOfPrices[data] + "$";
        totalPrices["Package"] = listOfPrices[data];
        updateTotalPrice();
    });
});

formAccounting.addEventListener("change", function () {
    toggleFeature(this);
});

formTerminal.addEventListener("change", function () {
    toggleFeature(this);
});
