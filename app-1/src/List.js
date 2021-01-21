import React, {useState, useEffect} from 'react'

const List = (props) => {
    return(
        <div>
            {props.list.map((item, index) => {
                return <h2 key={index}>{item}</h2>
            })}
        </div>
    )
}

export default List