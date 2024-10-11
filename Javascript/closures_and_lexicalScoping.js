// CLOSURES and LEXICAL SCOPING

// function outer() {
//     let a = 10;
//     console.log("Outer", a);

//     function inner() {
//         let b = 20;
//         console.log("Inner",a);
//     }

//     inner()
// }

// outer();


///////////////////////////////////////////////////////////////////////////////////////// 



// function outerFunc() {
//     let username = "Hammad Ur Rehman";
//     function innerFunc() {
//         console.log(username);
//     }
//     return innerFunc;
// }

// const func = outerFunc();

// func()









// function playerFactory(name) {
//     function getName() {
//         return name;
//     }

//     return { getName }

// }


// const hammad = playerFactory("Hammad");
// console.log(hammad.getName());







///////////////////////////////////////////////////////////////////////////////////////// 



// SOME USECASES ////
// -1 // 

// function createCart() {
//     let items = [];

//     return {
//         addItem(item) {
//             items.push(item);
//             console.log(`${item} added to cart`);
//         },
//         getItems() {
//             return items;
//         },
//         getTotalItems() {
//             return items.length
//         }
//     }
// }

// const cart = createCart();
// cart.addItem('Apple');
// cart.addItem('Orange');
// console.log(cart.getItems());
// console.log(cart.getTotalItems());









function likeButton() {
    let count = 0;

    return function() {
        count++
        console.log(`You liked this ${count} times`);
    }
}

const like = likeButton();
document.getElementById('likeBtn').addEventListener('click', like)