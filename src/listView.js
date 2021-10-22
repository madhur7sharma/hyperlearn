import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from './listView.module.css';



function ListView() {
    const url = 'https://6171c3fac20f3a001705fecd.mockapi.io/api/users'
    const [product , setProduct] = useState(null)
    
    useEffect(() => {
        axios.get(url)
            .then(response => {
                setProduct(response.data)
            })
    }, [url])
    const [input , setInput] = useState('')
    console.log(product)
    if(product){
        const fun = product.map((item , pos) => {
            if(input === '' || input === undefined || input === null)
            {
                return(
                    <>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.experience}</td>
                            <td>{item.shortBio}</td>
                        </tr>
                    </>
                )
            }
            else
            {
                let x = 0
                for(let i = 0; i < Math.min(input.length , item.name.length); i++)
                {
                    if(input[i].toUpperCase() === item.name[i].toUpperCase())
                    {
                        x = 1
                    }
                    else
                    {
                        x = 0
                        break;
                    }
                }
                console.log(x)
                if(x === 1)
                {
                    return(
                        <>
                            <tr key={pos}>
                                <td>{item.name}</td>
                                <td>{item.experience}</td>
                                <td>{item.shortBio}</td>
                            </tr>
                        </>
                    )
                }
            }
            
        })
        return(
            <div className={classes.displayDiv}>
                <input onInput={e => setInput(e.target.value)} className={classes.inp} autoFocus placeholder="Search by Instructor Name"/>
                <table>
                    <th>Name</th>
                    <th>Experience</th>
                    <th>Short Bio</th>
                    {fun}
                </table>
            </div>
        )   
    }
    return(
        <div className={classes.loadDiv}>
              <p id={classes.load}>Fetching Data please wait...</p>  
        </div>
    )

    
}


export default ListView;


