import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import React, { useState } from "react";
import { actionType } from "./reducer";
import { useStateValue } from "./StateProvider";
// import { Items } from "./Data";
import { useEffect } from "react";
let cartData = [];
import { db } from '../api/firebase.config';
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  setDoc
} from "firebase/firestore";
function ItemCard({  ratings,descripcion,precio,imagen,id }) {
  const [currentValue, setCurrentValue] = useState(Math.floor(ratings));
  const [isFavourite, setFavourite] = useState(false);
  const [{}, dispatch] = useStateValue();
  const [isCart, setCart] = useState(null);
  const [items, setitems] = useState([]);

  // useEffect(() => {
  //   if (isCart) {
  //     cartData.push(isCart);
  //     dispatch({
  //       type: actionType.SET_CART,
  //       cart: cartData,
  //     });
  //   }
  // }, [isCart]);

  const handleClick = (value) => {
    setCurrentValue(value);
  };
  // const Vertodos = async () => {
  //   // const data = await Mostrartodos();
  //   // setitems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   db.collection("productos").onSnapshot((querySnap) => {
  //     const docs = [];
  //     querySnap.docs.map((doc) => {
  //       docs.push({ ...doc.data(),id:doc.id });
  //     });
     
  //     setitems(docs);
  //   });
  // };
    return(  <div className="itemCard" key={id}>
          <div
            className={`isFavourite ${isFavourite ? "active" : ""}`}
            onClick={() => setFavourite(!isFavourite)}
          >
            <Favorite />
          </div>
    
          <div className="imgBox">
            <img src={imagen} alt="" className="itemImg" />
          </div>
    
          <div className="itemContent">
            <h3 className="itemName">{descripcion}</h3>
            <div className="bottom">
              <div className="ratings">
                {Array.apply(null, { length: 5 }).map((e, i) => (
                  <i
                    key={i}
                    className={`rating ${currentValue > i ? "orange" : "gray"}`}
                    onClick={() => handleClick(i + 1)}
                  >
                    <StarRounded />
                  </i>
                ))}
                <h3 className="price">
                  <span>$ </span>
                  {precio}
                </h3>
              </div>
              <i
                className="addToCart"
                onClick={() => {
                  setCart(item.find((n) => n.id === id));
                }}
              >
                <AddRounded />
              </i>
            </div>
          </div>
        </div>)
   
  
}

export default ItemCard;
