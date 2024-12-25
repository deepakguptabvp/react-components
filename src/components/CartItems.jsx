import React, { useState } from "react";
import data from "../data.json";

const CartItems = () => {
  const [cartItems, setCartItems] = useState(data.cart.items);
  const [totalCartAmount, setTotalCartAmount] = useState(data.cart.items);
  //   console.log(cartItems);

  const totalAmount = () => {
    let sum = 0;
    for (let i = 0; i < cartItems.length; i++) {
      // console.log();
      let cartAmount =
        cartItems[i].productDetails.discountedPrice * cartItems[i].quantity;
      sum = sum + cartAmount;
      console.log(sum);
    }
    return sum;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: 10,
        padding: 5,
      }}
    >
      <p
        style={{
          width: 150,
          fontWeight: 500,
          alignSelf: "center",
          // textAlign: "center",
        }}
      >
        Total Cart Value = {totalAmount()}
      </p>
      {/* {console.log("cartItemscartItems", cartItems)} */}
      {cartItems?.map((item, index) => {
        return (
          <div
            style={{
              borderWidth: 1,
              borderStyle: "solid",
              padding: 10,
              margin: 10,
            }}
            key={index}
          >
            <p>Product Id: {item.productId}</p>
            <p>Product Name: {item?.productDetails?.name}</p>
            <img
              src={item.productDetails.image}
              alt=""
              width={110}
              height={150}
            />
            <p>Product Price: {item?.productDetails?.price}</p>
            <p>Discounted Price: {item?.productDetails?.discountedPrice}</p>
            <div>
              <p>Quantity: {item?.quantity}</p>

              <button
                style={{ margin: 10, padding: 10, width: 40, borderRadius: 12 }}
                onClick={() => {
                  let newCartItems = [];
                  for (let i = 0; i < cartItems.length; i++) {
                    if (cartItems[i].productId === item.productId) {
                      newCartItems[i] = {
                        ...cartItems[i],
                        quantity: item.quantity + 1,
                      };
                    } else {
                      newCartItems[i] = cartItems[i];
                    }
                  }
                  console.log(newCartItems);
                  setCartItems(newCartItems);
                }}
              >
                <b>+</b>
              </button>

              <button
                style={{ margin: 10, padding: 10, width: 40, borderRadius: 12 }}
                // disabled={item.quantity <= 0}
                onClick={() => {
                  let newItems = [];
                  //   console.log(cartItems, "hhhh");
                  if (item.quantity >= 1) {
                    if (item.quantity === 1) {
                      for (let i = 0; i < cartItems.length; i++) {
                        console.log(item.productId, "iiii");
                        if (cartItems[i].productId === item.productId) {
                          console.log("Item Deleted", cartItems[i]);
                        } else {
                          newItems.push(cartItems[i]);
                        }
                      }
                      console.log(newItems);
                      setCartItems(newItems);
                    } else {
                      for (let i = 0; i < cartItems.length; i++) {
                        if (cartItems[i].productId === item.productId) {
                          newItems[i] = {
                            ...item,
                            quantity: item.quantity - 1,
                          };
                        } else {
                          newItems[i] = cartItems[i];
                        }
                      }
                      console.log(newItems);
                      setCartItems(newItems);
                    }
                  }
                }}
              >
                <b>-</b>
              </button>

              <button
                style={{ margin: 10 }}
                onClick={() => {
                  let newCartItems = [];
                  for (let i = 0; i < cartItems.length; i++) {
                    if (cartItems[i].productId === item.productId) {
                      console.log(
                        "Product Id: " + cartItems[i].productId + "is deleted"
                      );
                    } else {
                      newCartItems.push(cartItems[i]);
                    }
                  }
                  console.log(newCartItems);
                  setCartItems(newCartItems);
                }}
              >
                Delete
              </button>

              <p>
                Total Product Amount ={" "}
                {item?.productDetails?.discountedPrice * item.quantity}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
