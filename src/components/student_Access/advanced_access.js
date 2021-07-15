import React, {useState} from 'react';
import { Card, CardBody, Row, Col, Navbar } from 'reactstrap';
import img4 from './img4.jpg';
import img1 from './secondar.jpg';
import './upperbar.css'
import Footer from '../footer';



function studentdash () {

    
return(
    
       <div>
        <div className='upperbar'>
            
            <a href="/app-form/Form" className="link font-medium" style={{cursor : 'pointer'}}>
                Assignment </a>  
                <a href="/app-form/Form" className="link font-medium" style={{cursor : 'pointer'}}>
                Lessons </a>  
                <a href="/app-form/Form" className="link font-medium" style={{cursor : 'pointer'}}>
                Exams </a>  
                <a href="/app-form/Form" className="link font-medium" style={{cursor : 'pointer'}}>
                My Grade </a> 
                <a href="/teacher_Access/teacher_dash" className="link font-medium" style={{cursor : 'pointer'}}>
                Upload Work </a> 
                <a href="/app-form/login" className="link font-medium" style={{cursor : 'pointer'}}>
                Logout </a> 
            </div>
        <div>
            <img src={img1} alt="" className='image4' />
            </div>
      <div>
                <Row className='Row-one'>
                    <Col lg="4">
                   <div className='col-one'>
                    <div className='rectangle'>
                    </div>
                    <div className='head1'>
                 <h5><strong>ADVANCED</strong></h5>
                 <h5><strong> LEVEL </strong></h5>
                 <h5><strong>CHANNELS</strong></h5>
                    </div>
                   </div>
                    </Col>
                    <Col lg="6">
                    <p className='des'> The A Level (Advanced Level) is a subject-based qualification conferred as part
                     of the General Certificate of Education, as well as a school leaving qualification offered by 
                    the educational body in Uganda(UNEB) to students completing secondary or pre-university education
                    Obtaining an A Level, or equivalent qualifications, is generally required for university entrance, 
                    with universities granting offers based on grades achieved.
                    </p>
                    </Col>
                    
                </Row>
                
            </div>
            
            <Row className="first-row">
                <Col lg="3">

                    <Card>

                        <CardBody>
                            <div className="blog-image">
                                <img src={img4} alt="img" className="img-fluid" />
                            </div>
                        
                            
                            <div className="d-flex">
                                <div className="read">
                                <a href="/app-form/Form" className="link font-medium" style={{cursor : 'pointer'}}>
                                        Senior Five
                                 </a> 
                           </div>
                      </div>      
                        </CardBody>
                    </Card>
                
                </Col>

                <Col lg="3">

                    <Card  >
                        <CardBody>
                            <div className="blog-image">
                                <img src={img4} alt="img" className="img-fluid" />
                            </div>
                                                   
                            <div className="d-flex">
                                <div className="read">
                                 <a href="/app-form/Form" className="link font-medium" style={{cursor : 'pointer'}}>
                                        Senior Six
                      </a> 
                                </div>
                                
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3">
                    <Card>
                        <CardBody>
                            <div className="blog-image">
                                <img src={img4} alt="img" className="img-fluid" />
                            </div>
                        
                            <div className="d-flex">
                                <div className="read">
                                <a href="/app-form/Form" className="link font-medium" style={{cursor : 'pointer'}}>
                                        Experiments
                                 </a> 
                                </div>
                                
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3">
                    <Card >
                        <CardBody>
                            <div className="blog-image">
                                <img src={img4} alt="img" className="img-fluid" />
                            </div>
            
                           
                            <div className="d-flex">
                                <div className="read">
                                <a href="/app-form/Form" className="link font-medium" style={{cursor : 'pointer'}}>
                                        Mocks
                                 </a> 
                                </div>
                                
                                   </div>
                        </CardBody>
                    </Card>
                </Col>
                
            </Row>

            
    
    
            <Footer/>
    
            </div>
         
            
        );
    
        
    }

    
    export default studentdash;
    