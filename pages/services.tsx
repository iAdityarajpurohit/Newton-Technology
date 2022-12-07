import React from 'react'
import Navbar from "../pages/Navbar";
import { menuData } from './menuData';

// export const getStaticProps = async () => {
//     const res = await fetch("https://api.github.com/users");
//     // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await res.json();
//     console.log("datasi ",data);
    

//     return {
//         props: {
//             data,
//         },
//     };
// }

const services = () => {

    return (
        <>
            <Navbar />
            <div className='my-5'>
                <h1 className='text-center'>Our Services</h1>
            </div>
            <div className='container-fluid mb-5'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row gy-4'>
                            
                                { menuData.map((curElm,index) => {
                                    //   <Card/>
                                    return (
                                        <div className='col-md-3 col-10 mx-auto' key={index} >
                                            <div className="card"  />
                                            {curElm.imgsrc}
                                            {/* <img src={curElm.imgsrc} className="card-img-top" alt="..." /> */}
                                            <div className="card-body">
                                                <h5 className="card-title">{curElm.title}</h5>
                                                <p className="card-text">{curElm.description}</p>
                                                <a href="" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default services;