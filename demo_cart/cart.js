let goods = [
    {
        id: 1,
        name: 'Наименование 1',
        description: 'Описание 1',
        sizes: [],
        price: 10,
        available: true,
    },

    {
        id: 2,
        name: 'Наименование 2',
        description: 'Описание 2',
        sizes: [],
        price: 20,
        available: true,
    },

    {
        id: 3,
        name: 'Наименование 3',
        description: 'Описание 3',
        sizes: [],
        price: 30,
        available: true,
    },

    {
        id: 4,
        name: 'Наименование 4',
        description: 'Описание 4',
        sizes: [],
        price: 40,
        available: true,
    },

    {
        id: 5,
        name: 'Наименование 5',
        description: 'Описание 5',
        sizes: [],
        price: 50,
        available: true,
    },
];

let cart = [
    {
        good:  1,
        amount: 5,
    },
    {
        good:  2,
        amount: 4,
    },
    {
        good:  3,
        amount: 3,
    },
    {
        good:  4,
        amount: 2,
    },
    {
        good:  5,
        amount: 1,
    },
];


function checkDuplicates(goodId){

    for (let i = 0; i < cart.length; i++) {
        if (cart[i]['good'] === goodId) {
            return {good : goodId, position: i, exists: true}
        };
    };

    return false
};

function addToCart(good, amount, qnt=1) {

    checkItem = checkDuplicates(good)

    for (let i = 0; i < qnt; i++) {
        if (checkItem) {
            cart[checkItem.position].amount += amount;
        };
    };

    if (!checkItem.exists) {
        return 'Товара не существует!'
    };

    return cart
};

function removeCartItem(good, all=false) {

    if (all) {
        cart.splice(0, cart.length)
        return 'очищено'
    };

    checkItem = checkDuplicates(good)
    if (checkItem) {
        cart.splice(checkItem.position, 1)
    } else {
        return 'Товара не существует в корзине!'
    };

    return cart
};

function checkCartSum(arr, catalog) {
    totalAmount = 0
    totalSumm = 0
    arr.sort()
    catalog.sort()


    for (let i = 0; i < arr.length; i++) {

        totalAmount += arr[i].amount
        totalSumm += catalog[i].price
    };

    return {'totalAmount': totalAmount, 'totalSumm': totalSumm}

};

// Вывод значений

// console.log(addToCart(1, 1, 3))
// console.log(removeCartItem(3))
// console.log(removeCartItem(1, all))
// console.log(checkCartSum(cart, goods))
