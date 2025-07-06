"use strict";
const totalPrice = ({ price, discount, isInstallment, months, }) => isInstallment ? (price / months) * (1 - discount / 100) : price / months;
const price1 = totalPrice({
    price: 100000,
    discount: 25,
    isInstallment: true,
    months: 12,
});
const price2 = totalPrice({
    price: 100000,
    discount: 25,
    isInstallment: false,
    months: 12,
});
console.log(price1, price2);
//# sourceMappingURL=app.js.map