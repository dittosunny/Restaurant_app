import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import RestaurantCard from '../RestaurantCard'
import { base_url } from '../Base_url'



function Allrestaurants() {
  //create a state holding all restaurant array
  const [allitems,setAllitems] = useState([])
  //code for api calls
  const fetchData = async()=>{
    const cacheKey = 'restaurants:list'
    const cached = localStorage.getItem(cacheKey)
    if (cached) {
      try {
        setAllitems(JSON.parse(cached))
      } catch {}
    }

    try {
      const response = await fetch(`${base_url}/restaurants`)
      if (!response.ok) {
        throw new Error(`Failed to fetch restaurants: ${response.status}`)
      }
      const data = await response.json()
      setAllitems(data)
      localStorage.setItem(cacheKey, JSON.stringify(data))
    } catch (err) {
      // keep showing cached data on failure
    }
  }
  

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <Row>
      {
        allitems.map(item=>(
          <Col key={item.id} sm={12} md={6} lg={4} xl={3}>
            {/* {destructuring} */}
            <RestaurantCard restaurants={item}/>                  
          </Col>
        ))
      }
    </Row>
  )
}

export default Allrestaurants