import React, { createContext, useEffect, useState } from "react";

//create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  //cart state
  const [cart, setCart] = useState([]);
  //Item amount state
  const [itemAmount, setItemAmount] = useState(0);

  //update Item amount
  useEffect(() => {
    const amount = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.amount;
    }, 0);
    setItemAmount(amount);
  }, [cart]);

  //total price state
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);

    setTotal(total);
  });

  //add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    //check if the item is already in the cart?
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      // If the item is already in the cart, update its amount
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      // If the item is not in the cart, add it to the cart
      setCart([...cart, newItem]);
    }
  };

  //remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  //clear cart
  const clearCart = () => {
    setCart([]);
  };

  // increase amount
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newCart = cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      );
      setCart(newCart);
    }
  };

  //decrease amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      if (cartItem.amount === 1) {
        // If the amount is 1, remove the item from the cart
        removeFromCart(id);
      } else {
        // Otherwise, decrease the amount by 1
        const newCart = cart.map((item) =>
          item.id === id ? { ...item, amount: item.amount - 1 } : item
        );
        setCart(newCart);
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
