import React, { useState } from 'react'
import './SHome.css'
import toast, { Toaster } from 'react-hot-toast'

function SHome() {

    const [ save , setSave ] = useState( false )

    const saveJob = () => {

        if ( save ) {
            
            setSave( false )
            toast.error('Job removed from saved collections', { style: { fontSize: '14px' } })
        
        }
        else {
    
            setSave( true )
            toast.success('Job saved', { style: { fontSize: '14px' } })
        
        }

    }

    return (

        <div id='home-root'>

            <section id='searching-area'>

                <div>

                    <input type="text" id='input-search' placeholder='Find your job' />
                    <i class='bx bx-search search-icon'></i>

                </div>

            </section>
            <section id='main-contents' >

                <section id="category">

                    <div id='catgory-listing'>

                        <section>

                            <div>

                                <i class='bx bx-shopping-bag'></i>
                                <p>Sales</p>

                            </div>
                            <div>

                                <i class='bx bx-package'></i>
                                <p>Supply Chain</p>

                            </div>
                            <div>

                                <i class='bx bx-home-alt'></i>
                                <p>Remote</p>

                            </div>
                            <div>

                                <i class='bx bx-buildings'></i>
                                <p>MNC</p>

                            </div>
                            <div>

                                <i class='bx bx-line-chart' ></i>
                                <p>Marketing</p>

                            </div>
                            <div>

                                <i class='bx bx-group'></i>
                                <p>HR</p>

                            </div>
                            <div>

                                <i class='bx bx-rocket'></i>
                                <p>Startup</p>

                            </div>
                            <div>

                                <i class='bx bx-cog'></i>
                                <p>Engineering</p>

                            </div>
                            <div>

                                <i class='bx bx-package'></i>
                                <p>Other</p>

                            </div>

                        </section>

                    </div>

                </section>
                <section id='jobs'>

                    <div id="job-listing">

                        <div className="job-objects">

                            <section>

                                <div id='job-company-detail'>

                                    <p id='job-title'>Python software developer</p>
                                    <p id='company-name'>Teamless Digital</p>

                                </div>
                                <div id="other-details">

                                    <div id="experience">

                                        <i className='bx bx-briefcase-alt grey'></i>
                                        <p className='grey'>6-11 Yrs</p>

                                    </div>
                                    <p className="grey">|</p>
                                    <div id="salary">

                                        <i className='bx bx-rupee grey' ></i>
                                        <p className='grey'>Not desclosed</p>

                                    </div>
                                    <p className="grey">|</p>
                                    <div id="location">

                                        <i className='bx bx-map grey'></i>
                                        <p className='grey'>Banglore</p>

                                    </div>

                                </div>
                                <div id="job-skills">

                                    <p className='grey'>Python</p>
                                    <i className='bx bx-wifi-0 grey'></i>
                                    <p className='grey'>Automation</p>
                                    <i className='bx bx-wifi-0 grey'></i>
                                    <p className='grey'>Development</p>
                                    <i className='bx bx-wifi-0 grey'></i>
                                    <p className='grey'>Data Strucure</p>

                                </div>
                                <div id="date-save">

                                    <p className='grey'>6 days ago</p>
                                    <div onClick={ saveJob }>

                                        { save ? <i className='bx bxs-bookmark grey' ></i> : 
                                            <i className='bx bx-bookmark grey'></i>}
                                        <p className='grey'>{save ? 'Saved' : 'Save'}</p>

                                    </div>

                                </div>

                            </section>

                        </div>

                        

                    </div>

                </section>

            </section>

            <Toaster />

        </div>

    )

}

export default SHome