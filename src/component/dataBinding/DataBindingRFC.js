import React from 'react'
const name = "dataBindingFunction";
const hobbies = {
    watchTV: "Ali",
    code: "everything"
}
export default function DataBindingRFC() {
    return (
        <div>
            <ul> <h4>DataBindingRFC</h4>
                <li>{name}</li>
                <li>{hobbies.watchTV}</li>
                <li>{hobbies.code}</li>
            </ul>

        </div>
    )
}
