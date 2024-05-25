import React from 'react'

const Students = (props) => {
  return (
    <div>
        <p>name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>section: {props.section}</p>
        <p>Student: {props.student ? "Yes" : "No"}</p>

    </div>
  )
}

export default Students