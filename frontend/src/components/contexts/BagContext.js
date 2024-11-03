import React,{createContext,useEffect,useState} from "react";

export const BagContext=createContext();
export const BagProvider=({children})=>{
  const [totalPrice,setTotalPrice]=useState(0);
    const[bag,setBag]=useState([]);
    const [items,setItems]=useState(0);
    const addToBag=(product)=>{
    setBag((prevBag)=>{
      const existingItem=prevBag.find(item=>item.product.id===product.id);
    if(existingItem){
      return  prevBag.map(item=>
        item.product.id===product.id 
        ?{...item,quantity:item.quantity+1}
        :item
      );
     
    }else{
       return [...prevBag,{product,quantity:1}];
    }
    });
     
    };
    const removeFromBag=(productId)=>{
      setBag((prevBag)=> prevBag.filter((item)=>item.product.id!==productId))
    };
   
  
    const  updateQuantity=(productId,newQuantity)=>{

      setBag((prevBag)=>
        prevBag.map((item)=>
          item.product.id==productId
      ? {...item,quantity:Math.max(newQuantity,1)}
      :item
      )
    );
    };
    useEffect(()=>{
   
     const sessionFlag=sessionStorage.getItem('sessionActive');
      if(!sessionFlag){
        localStorage.removeItem('bag');
        sessionStorage.setItem('sessionActive','true');
      }

      const savedBag=JSON.parse(localStorage.getItem('bag'));
      if(savedBag){
        setBag(savedBag);
      }

    },[]);
    useEffect(()=>{
      
      const totalP=bag.reduce((total,item)=>total+(item.quantity*item.product.price),0);
      setTotalPrice(totalP);
      const totalItems=bag.reduce((total,item)=>total+item.quantity,0);
 setItems(totalItems);
if (bag.length >0){
  localStorage.setItem('bag',JSON.stringify(bag));
}
    },[bag]);
   
    return (
        <BagContext.Provider value={{bag,setBag,addToBag,items,updateQuantity,removeFromBag,totalPrice}}>
          {children}
        </BagContext.Provider>
    )
}