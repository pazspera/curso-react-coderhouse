import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartComponentContext = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [itemsInCart, setItemsInCart] = useState(0);
  const [totalInCart, setTotalInCart] = useState(0);
  
  // agregar un producto al carrito
  const addItemToCart = (item) => {
    // el item viene con el amount dentro que en ItemDetail se crea un nuevo objeto con la info de producto y amount

    // verificar si el item ya está en cart
    // si está, sumarle el amount al existente
    // si no está, agregar al cartList

    // no aceptar duplicados 
    if(!isInCart(item.id)) {
      console.log("el producto no está en el cart");
      // GUARDAR A cartList
      // PARA AGREGAR ITEM A CART
      // desestructurar el cartList existente y agregarle lo nuevo
      setCartList([...cartList, item]);
    } else {
      console.log("el producto ya está en el cart");
      // actualizar amount sumándole el amount que viene
      // encontrar en cartList el producto repetido
      // a ese producto, sumarle al amount que viene de ItemDetail
      const updatedCart = cartList.map((product)=> {
        return product.id === item.id 
          ? { ...product, amount: product.amount + item.amount}
          : product;
      })

      // actualizar cartList
      setCartList(updatedCart);
    }

  };

  // TEMP mostrar en consola CartList cuando cambie
  useEffect(() => {
    console.log("Cart actualizado", cartList);
    setItemsInCart(countItemsInCart(cartList));
    setTotalInCart(addTotalInCart(cartList))
    console.log("items in cart:", countItemsInCart(cartList));
    console.log("total in cart:", addTotalInCart(cartList));
  }, [cartList]);

  // borrar todos los productos del carrito
  const clearCart = () => {
    setCartList([]);
  };

  // borrar un producto del carrito
  const deleteItem = (id) => {
    // encontrar producto en cartList
    // borrar producto
    const cartWithoutDeletedProduct = cartList.filter((product) => product.id !== id);
    setCartList(cartWithoutDeletedProduct);
  };

  // busca si ya existe el producto en el cart
  const isInCart = (id) => {
    return cartList.some(product => product.id === id);
  }

  // itera cartList y suma los amounts de cada producto para mostrar el total en CartWidget
  const countItemsInCart = (cart) => {
    let totalItems = 0;
    cart.forEach(product => {
      totalItems += product.amount;
    });
    return totalItems;
  }

  const addTotalInCart = (cart) => {
    let total = 0;
    cart.forEach(product => {
      total += (product.amount * product.price);
    })
    return total;
  }

  const updateItemAmount = (id, newAmount) => {
    // impide que mande algo menos de 1
    if(newAmount < 1) return;

    setCartList((prevCart) => {
      prevCart.map((product) => {
        return product.id === id ? { ...product, amount: newAmount } : product;
      })
    })
  }

  return (
    <CartContext.Provider value={{ cartList, setCartList,  addItemToCart, clearCart, deleteItem, itemsInCart, setItemsInCart, totalInCart, updateItemAmount }}>
      {children}
    </CartContext.Provider>
  )
}

