import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import Carousel from './Carousel';

// JSON
import { data } from '../data';

export default function HomeScreen() {

    return (
    <>
    
    <div className="row justify-content-center title-sale mt-4 mb-4">
        <div className="col-md-4 mt-4"><b></b></div>
        <div className="col-md-4">
            <h1 className="text-secondary text-center">S A L E</h1>
        </div>
        <div className="col-md-4 mt-4"><b></b></div>
        
    </div>
    <div className="cont ml-auto d-flex justify-content-center">
        {
            data.map(dress => (
                
                    <div className="box" key={dress.id}>
                        <div className="imgBx">
                            <img src={dress.imagen_1} />
                        </div>
                        <div className="content">
                            <div>
                                <Link to={/product/ + dress.id}><h2 className="text-center">{dress.name}</h2></Link>
                                <p className="text-center text-lowercase">{dress.Description}</p>
                            </div>
                        </div>
                    </div>
                
            ))
        }
     </div>  
    </>
    )
}
