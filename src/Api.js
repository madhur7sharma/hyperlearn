import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from './Api.module.css';
import ReactCalendar from "./calendar";



function ProductData() {
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
                    <div className={classes.mainDiv} key={pos}>
                        <div className={classes.leftSubDiv}>
                            <div className={classes.imgDiv}>
                                <img className={classes.profileImage} src={item.avatar} alt="Profile Image" />
                            </div>
                            <br/>
                            <div>
                                <i class="fab fa-linkedin fa-lg"></i> &nbsp;&nbsp;&nbsp;
                                <i class="fab fa-twitter-square fa-lg"></i>&nbsp;&nbsp;&nbsp;
                                <i class="fab fa-github fa-lg"></i>
                            </div>
                            <br/>
                            <div className={classes.skillsDiv}>
                                <div>
                                    <h2>Core Skills</h2>
                                </div>
                                <div className={classes.skills}>
                                    <h3>{item.skills}</h3>
                                </div>
                            </div>
                            <br/>
                            <div className={classes.pastCompanies}>
                                <div>
                                    <h2>Past Companies</h2>
                                </div>
                                <div>
                                    <img className={classes.companyLogo} src={item.pastCompanies} alt="company Logo"/>
                                </div>
                            </div>
                        </div>
                        <div className={classes.detailDiv}>
                            <div className={classes.detailAdjust}>
                                <h2>{item.name}</h2>
                                <h4>{item.shortBio} @ HyperLearn</h4>
                                <div className={classes.ExpLang}>
                                    <div>
                                        <h5>Experience</h5>
                                        <p>{item.experience}</p>
                                    </div>&nbsp;&nbsp;&nbsp;
                                    <div>
                                        <h5>Languages</h5>
                                        <p>English</p>
                                    </div>
                                </div>
                                <div>
                                    <p style={{fontSize:"18px"}}>{item.description}</p>
                                </div>
                                <br/><br/><br/>
                                <div className={classes.slots}>
                                    <h4>What is Data Engineering</h4>
                                    <div className={classes.bookSlot}>
                                        <p>Learn Basics of data engineering, big data and hadoop</p>&nbsp;&nbsp;&nbsp;
                                        <button className={classes.bookButton}>BOOK</button>
                                    </div>
                                </div>
                                <br/>
                                <div className={classes.slots}>
                                    <h4>What is Data Engineering</h4>
                                    <div className={classes.bookSlot}>
                                        <p>Learn Basics of data engineering, big data and hadoop</p>&nbsp;&nbsp;&nbsp;
                                        <button className={classes.bookButton}>BOOK</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.bookingDiv}>
                            <h2>Book your Slot</h2>
                            <ReactCalendar/><br/>
                            <button className={classes.bookNowButton}>Request Demo</button>
                        </div>
                    </div>
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
                        <div className={classes.mainDiv} key={pos}>
                            <div className={classes.leftSubDiv}>
                                <div className={classes.imgDiv}>
                                    <img className={classes.profileImage} src={item.avatar} alt="Profile Image" />
                                </div>
                                <br/>
                                <div>
                                    <i class="fab fa-linkedin fa-lg"></i> &nbsp;&nbsp;&nbsp;
                                    <i class="fab fa-twitter-square fa-lg"></i>&nbsp;&nbsp;&nbsp;
                                    <i class="fab fa-github fa-lg"></i>
                                </div>
                                <br/>
                                <div className={classes.skillsDiv}>
                                    <div>
                                        <h2>Core Skills</h2>
                                    </div>
                                    <div className={classes.skills}>
                                        <h3>{item.skills}</h3>
                                    </div>
                                </div>
                                <br/>
                                <div className={classes.pastCompanies}>
                                    <div>
                                        <h2>Past Companies</h2>
                                    </div>
                                    <div>
                                        <img className={classes.companyLogo} src={item.pastCompanies} alt="company Logo"/>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.detailDiv}>
                                <div className={classes.detailAdjust}>
                                    <h2>{item.name}</h2>
                                    <h4>{item.shortBio} @ HyperLearn</h4>
                                    <div className={classes.ExpLang}>
                                        <div>
                                            <p>Experience</p>
                                            <p>{item.experience}</p>
                                        </div>&nbsp;&nbsp;&nbsp;
                                        <div>
                                            <p>Languages</p>
                                            <p>English</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p>{item.description}</p>
                                    </div>
                                    <br/><br/><br/>
                                    <div className={classes.slots}>
                                        <h4>What is Data Engineering</h4>
                                        <div className={classes.bookSlot}>
                                            <p>Learn Basics of data engineering, big data and hadoop</p>&nbsp;&nbsp;&nbsp;
                                            <button className={classes.bookButton}>BOOK</button>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className={classes.slots}>
                                        <h4>What is Data Engineering</h4>
                                        <div className={classes.bookSlot}>
                                            <p>Learn Basics of data engineering, big data and hadoop</p>&nbsp;&nbsp;&nbsp;
                                            <button className={classes.bookButton}>BOOK</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.bookingDiv}>
                                <h2>Book your Slot</h2>
                                <ReactCalendar/>
                            </div>
                        </div>
                    )
                }
            }
            
        })
        return(
            <div className={classes.displayDiv}>
                <input onInput={e => setInput(e.target.value)} className={classes.inp} autoFocus placeholder="Search by Instructor Name"/>
                {fun}
            </div>
        )   
    }
    return(
        <div className={classes.loadDiv}>
              <p id={classes.load}>Fetching Data please wait...</p>  
        </div>
    )

    
}


export default ProductData;


