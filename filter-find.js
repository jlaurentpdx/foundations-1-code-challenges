// Use the filter or find array methods to solve these problems

/* 
Input:
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    { 
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    { 
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]

Output: 
[
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]
*/

export function getAllDairy(arr) {
    let allDairy = new Array;

    allDairy = arr.filter(item => item.category === 'dairy');

    return allDairy;
}

/*
Output: 
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    }
]
*/

export function getAllFruitsThatCostMoreThanTwo(arr) {
    let fruitsOver2 = new Array;

    fruitsOver2 = arr.filter(item => item.category === 'fruit' && item.price > 2);
    
    return fruitsOver2;
}


/*
Output: 
    { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
*/

export function findTheCheese(arr) {
    let theCheese = arr.find(item => item.id === 'cheese');
    
    return theCheese;
}


/*
Output: 
['apple', 'banana']
*/

export function listNamesOfAllFruits(arr) {
    let fruitNames = new Array;

    arr.filter(item => { 
        if(item.category === 'fruit') fruitNames.push(item.id);
    });
    
    return fruitNames;
}