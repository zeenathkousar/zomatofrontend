import React, { useState, useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'

export const Home = () => {

  const [foodCat, setfoodCat] = useState([]);
  const [foodItem, setfoodItem] = useState([]);
  const [search, setSearch] = useState('')

  const loadData = async () => {
    let response = await fetch('https://backendzomatowebsite.onrender.com/api/foodData', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    response = await response.json();
    console.log(response)
    //in response - we are sending 2 datas- global.fooditems, global.foodcategory (refer displaydata- res.send(global.fooditems,global.foodCategory))
    // console.log(response[0],response[1])
    setfoodItem(response[0]);
    setfoodCat(response[1]);
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: 'contain !important' }}>
          <div className="carousel-inner">
            <div className="carousel-caption d-none d-md-block" style={{ zIndex: "10" }}>
              <div className="d-flex justify-content-center">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                {/* <button className="btn btn-outline-success  text-white" type="submit">Search</button> */}
              </div>

            </div>

            <div className="carousel-item active">
              <img src="/img1.jpg" className="d-block w-100" alt="image1" style={{ filter: "brightness(40%)", height: "70vh" }} />

            </div>
            <div className="carousel-item">
              <img src="/img2.jpg" className="d-block w-100" alt="image2" style={{ filter: "brightness(40%)", height: "70vh" }} />
            </div>
            <div className="carousel-item">
              <img src="/img3.jpg" className="d-block w-100" alt="image3" style={{ filter: "brightness(40%)", height: "70vh" }} />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>
      <div className='container'>
        {
          foodCat != []
            ? foodCat.map((data) => {
              return (
                <div className='row mb-3'>
                  <div key={data._id} className='fs-3 m-3'>{data.CategoryName}</div>
                  <hr />
                  {foodItem != []
                    ?
                    foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                      .map(filterItems => {
                        return (
                          <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                            {/* <Card foodName={filterItems.name}
                              options={filterItems.options[0]}
                              imgSrc={filterItems.img}>
                            </Card> */}
                           <Card foodItem={filterItems}
                              options={filterItems.options[0]}
                              >
                            </Card>

                          </div>
                        )

                      }) : "No Such Data Found"
                  }

                </div>

              )

            })
            : <div>no data</div>
        }
      </div>
      <div>
        <Footer />
      </div>

    </div>
  )
}
