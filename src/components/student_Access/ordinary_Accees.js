import React, {useState} from 'react';
import { Card, CardBody, Row, Col, Navbar } from 'reactstrap';
import img4 from './img4.jpg';
import img1 from './images/img1.jpg';
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
                <a href="/homepage" className="link font-medium" style={{cursor : 'pointer'}}>
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
                 <h5><strong>ORDINARY</strong></h5>
                 <h5><strong> LEVEL </strong></h5>
                 <h5><strong>CHANNELS</strong></h5>
                    </div>
                   </div>
                    </Col>
                    <Col lg="4">
                    <p className='des'> Also known as the lower Secondary,
                    There are four O levels or Ordinary levels, Senior 1 through 4. 
                    At the end of Senior 4 each student takes an exam that is called the 
                    Uganda Certificate of Education (UCE) and consists of eight required subjects. 
                    The best possible score would be 8, 
                    whereas the worst possible score would be 72. 
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
                                        Senior One
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
                                        Senior Two
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
                                        Senior Three
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
                                        Senior Four
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
    