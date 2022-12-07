import React from 'react'
import Navbar from './Navbar';
import Footer from './footer';
import Link from 'next/link';
const Home = () => {
    return (
        <>
            
            <Navbar />
            <section id='header' className='d-flex align-items-center'>
                <div className='container-fluid nav_bg' >
                    <div className='row home'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>

                                <div className='headtag col-md-6 pt-5 pt-lg-0 order-lg-1 d-flex justify-content-center flex-column'>
                                    <h1>Grow your business with <strong className='brand-name'> <br /> Newton Technical </strong></h1>
                                    <h2 className='my-3'>
                                        we are the team of talented developer making websites
                                    </h2>
                                    <div className='mt-3'>
                                        <Link href="/services" className='btn btn-outline-primary'>Get Started</Link>
                                    </div>
                                </div>

                                <div className='col-lg-6 order-1 order-lg-2 header-img object'>
                                    <img  src="" alt="" />

                                </div>

                             
                            </div>

                        </div>
                    </div>
                </div>

            </section>
          
          <Footer/>
        </>
    )
}
export default Home;