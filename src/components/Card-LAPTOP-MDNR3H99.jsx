import React from 'react'

const Card = (props) => {
    
    let options=props.options;
    // The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.
    // const object1 = {
    //     a: 'somestring',
    //     b: 42,
    //     c: false,
    //   };
      
    //   console.log(Object.keys(object1));
      // Expected output: Array ["a", "b", "c"]
     priceOptions= Object.keys(options)
    console.log(priceOptions)
    
    // console.log(options)


    return (
        <div>
            <div className="card mt-3 p-1" style={{ "width": "19rem", "maxHeight": '360px' }}>
                <img src="/img1.jpg" className="card-img-top " alt="cardimg" style={{"height" : "12rem" , "padding":'1rem'}} />
                <div className="card-body">
                    <h5 className="card-title">{props.foodName}</h5>
                    <p className="card-text">This is some important text.</p>
                    <div className="container w-100">
                        <select name="" id="" className='d-inline m-2 h-100  bg-success rounded'>
                            {
                                Array.from(Array(6), (e, i) => {
                                    return (
                                        <option value={i + 1} key={i + 1}>{i + 1}</option>
                                    )
                                })
                            }
                        </select>
                        <select name="" id="" className='d-inline m-2 h-100  bg-success rounded'>
                            {priceOptions.map((Data)=>{
                                return 
                                <option key={i+1} value={i+1}>

                                </option>
                             }) 
                         } 
                        </select>
                        <div className='d-inline h-100 fs-5'>
                            Total Price
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card
