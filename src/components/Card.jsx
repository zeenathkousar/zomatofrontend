import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart,useCart } from './ContextReducer';

const Card = (props) => {
    let dispatch=useDispatchCart();
    let data=useCart()
    const priceRef=useRef()
    let options=props.options;
    console.log(props.foodItem.name)
    
    // The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.
    // const object1 = {
    //     a: 'somestring',
    //     b: 42,
    //     c: false,
    //   };
      
    //   console.log(Object.keys(options || {}));  
      // Expected output: Array ["a", "b", "c"]
     let priceOptions= Object.keys(options || {});

     const [qty,setQty]=useState(1);
     const [size,setSize]=useState("");
     let finalPrice=qty* parseInt(options[size])


     const handleAddToCart=async()=>{
        let food=[]
        for(const item of data){
            if(item.id === props.foodItem._id){
                food=item;
                break;
            }
        }
        console.log(`food is ${food}`)
        if(food != []){
            if(food.size === size) {
                await dispatch({type:"UPDATE", id: props.foodItem._id,price:finalPrice, qty:qty})
                return
            }
            
            else if(food.size!== size){
                await dispatch({type:"ADD", id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
                console.log("Size different so simply ADD one more to the list")
                return
            }
            return
        }
        await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size});
        await  console.log(data)
        await console.log('handleaddtocart working')
     }
    // console.log(priceOptions)
    // priceOptions.map((Data)=>{
    //     return {Data}
    // })
    
    // console.log(options)

    useEffect(()=>{
        setSize(priceRef.current.value)
    },[])

    return (
        <div>
            <div className="card mt-3 p-1" style={{ "width": "19rem", "maxHeight": '400px' }}>
                <img src={props.foodItem.img} className="card-img-top " alt="cardimg" style={{"height" : "12rem" , "padding":'1rem', objectFit:"fill"}} />
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    <p className="card-text">This is some important text.</p>
                    <div className="container w-100">
                        <select name="" id="" className='d-inline m-2 h-100  bg-success rounded' onChange={(e)=> setQty(e.target.value)}>
                            {
                                Array.from(Array(6), (e, i) => {
                                    return (
                                        <option value={i + 1} key={i + 1}>{i + 1}</option>
                                    )
                                })
                            }
                        </select>
                        <select name="" id="" className='d-inline m-2 h-100  bg-success rounded' ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
                            { 
                            priceOptions.map((Data)=>
                                <option value={Data} key={Data}>{Data}</option> 
                             ) 
                            }
                             

                        </select>
                        <div className='d-inline h-100 fs-5'>
                            rs{finalPrice}/-
                        </div>
                        <hr>
                    </hr>
                    <button className={`btn btn-success  justify-center ms-2`} onClick={handleAddToCart}>Add to Cart</button>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card
