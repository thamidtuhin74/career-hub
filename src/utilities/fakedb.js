// use local storage to manage cart data
// const addToDb = id => {
//     let shoppingCart = getShoppingCart();

    
//     // add quantity
//     const quantity = shoppingCart[id];
//     if (!quantity) {
//         shoppingCart[id] = 1;
//     }
//     // else {
//     //     const newQuantity = quantity + 1;
//     //     shoppingCart[id] = newQuantity;
//     // }
//     // localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
//     localStorage.setItem('applied-Job-Id', JSON.stringify(shoppingCart));
// }

const addToDb = id =>{

	let shoppingCart = {};

	//checking shopping-Cart
	const storeCart = localStorage.getItem('shopping-Cart');
	if(storeCart){
		shoppingCart = JSON.parse(storeCart);//make an object 
		// all strings converted to number
	}

//ADD quantity
	const quantity = shoppingCart[id];
	if(quantity){
		const newquantity = quantity + 1;
		shoppingCart[id] = newquantity;
	}
	else{
		shoppingCart[id] = 1;	
		
	}
localStorage.setItem('shopping-Cart',JSON.stringify(shoppingCart) );
}

const removeFromDb = id => {
    const shoppingCart = getShoppingCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}

const getShoppingCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart
}
