
const addToDb = id =>{

	let shoppingCart = {};

	//checking applied-job
	const storeCart = localStorage.getItem('applied-job');
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
localStorage.setItem('applied-job',JSON.stringify(shoppingCart) );
}

const removeFromDb = id => {
    const shoppingCart = getShoppingCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('applied-job', JSON.stringify(shoppingCart));
    }
}

const getShoppingCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('applied-job');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('applied-job');
}

export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart
}
