import React from 'react'
import { useState, useEffect } from 'react'

function FrontEnd() {
  //use state to create a state and a method to update the state
    const [data, setData] = useState("")
  //utilize useEffect to wait until the componenent is rendered before running the code inside  
    useEffect(() => {
 //fetch from the correct url (I was missing the // from http://)
      fetch('http://localhost:3002/allrows')
      //.then the promise and return the response as a JSON object
      .then(response => response.json())
      //.then take the argument (data) and then change the state to data
      .then((data) => {
        setData(data);
      })
  },
  //the purpose of the is empty array is to prevent the promise from being repeated infinitely
  []);
//this useEffect is simply to console.log the state of the promise
  useEffect(() => {
    console.log(data);},[data])
 
  return (
    <div>
      {/* this div renders the data [{"id":1,"name":"marc","title":"software dev"}] */}
      {/* it renders the first element with the name key of the object */}
      {}
      <div>{data? data[0].name: <></>}</div>
      <div>{data[0].name}</div>
    </div>
  )
}

export default FrontEnd;
