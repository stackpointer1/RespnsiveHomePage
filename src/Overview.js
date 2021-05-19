import React,{useState} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import{Card,CardGroup,Container,Row,Carousel,Button,Col} from 'react-bootstrap'



import "./Overview.css"
import "./Product.css"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

function Overview() {
  const SliderData = [
    {
      image:
        'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        
    },
    {
      image:
        'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80'
    },
    {
      image:
        'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
    },
    {
      image:
        'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80'
    },
    {
      image:
        'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
    }
  ];
  
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData<= 0) {
    return null;
  }



    return (
        <div classNmae="overview">
        <div className="img-container">
          <img  className="overview-img"src="responsive.png" alt=""/>
          </div>
          <h4>Event</h4>
          <div className="card-item">
          <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
    </section>
          </div>
        
       <CardGroup>
          <Card style={{borderLeft: 'none',borderTop: 'none',borderBottom: 'none'}}>
                    <Card.Img  style={{ position:'absolute',padding: '5px',width: '250px', height: '200px',right:'600px',bottom:'40px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfgPgeFwvMkxB4q0tUeHCcyftjcq3c0fp9Sw&usqp=CAU" alt="" />
                    <Card.Body >
                        <Card.Title style={{ position:'absolute',padding:'5px',width:'250px',height:'200px',right:'600px',bottom:'250%'}} >Partners</Card.Title>
                        <Card style={{ borderLeft: 'none',borderTop: 'none',borderBottom: 'none',position:'absolute',padding:'5px',width:'250px',height:'100px',right:'350px',bottom:'350%'}}>
                         <ul>
                                     <li><a href="#top">Learning</a></li>
                                    <li><a href="#top">Technical</a></li>
                                    <li><a href="#top">Sales Resource</a></li>
                                    <li><a href="#top">Samsung</a></li>
                                    <li><a href="#top">BYZU</a></li>
                                    
                                    <br/>
                                    <br/>
                                    <Card.Link href="#">Next</Card.Link>
                                    <Card.Link href="#">More info</Card.Link>
                                    </ul>

                                    <br/>
                                    <br/>
                                    <br/>
                    </Card>
                    </Card.Body>
                    </Card>
                    </CardGroup>
                    <CardGroup  style={{position:'absolute',padding: '5px',width: '250px', height: '200px',right:'30px',bottom:'-80px' }} >
                   <Card style={{borderLeft: 'none',borderTop: 'none', right:'30px'}}>
                    <Card.Img  style={{ position:'absolute',padding: '5px',width: '250px', height: '200px',right:'30px',bottom:'65px' }} src= "https://image.shutterstock.com/image-photo/product-light-bulb-word-cloud-260nw-1664441488.jpg" alt="Your image here" />
                    <Card.Body style={{textColor:'blue'}}>
                      
                        <Card.Title style={{ position:'absolute',padding:'5px',width:'250px',height:'200px',right:'30px',bottom:'100px'}} >Our Product</Card.Title>
                        <Card style={{ borderLeft: 'none',borderTop: 'none',borderBottom: 'none' }}>
                      
                       
                      
                                     </Card>
                                    </Card.Body>
                                    <br/>
                                    <br/>
                                    <button style={{width:'40px'} }><i class="fas fa-chevron-left"></i></button>
                                    <br/>
                                    <button style={{width:'40px' }}><i class="fas fa-chevron-right"></i></button>
                                   
                            
                                   <p>Closing time: 9:00pm</p>
                                  
                                  
                                  
                                    </Card>
                                 
                                   
                                    </CardGroup>
                    <Container>
                        <CardGroup >
                              <Card style={{border: 'none' ,paddingtop:'10px', paddingleft:'5px',paddingRight:'10px', top:'10px',right:'50px',width:'210px',height:'160px'}}>
                                              <Card.Body>
                                                  <Card.Title>Speeches</Card.Title>
                                                  <Card.Text style={{border: 'none' ,paddingtop:'10px', paddingleft:'5px',paddingRight:'10px', top:'10px',right:'50px',width:'260px',height:'260px'}} >
                                                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                                  </Card.Text>
                                                  <Card.Link href="#">Next</Card.Link>
                                                  <Card.Link href="#">More info</Card.Link>
                                              </Card.Body>
                                          </Card>
                                          <Card style={{borderLeft: 'none',borderTop: 'none',borderBottom: 'none'}} >
                                              <Card.Body >
                                                  <Card.Title style={{position:'absolute',padding:'5px',width:'200px',height:'200px',left:'-160px'}}>Careers</Card.Title>
                                                <ul style={{position:'absolute',padding:'5px',width:'200px',height:'200px',left:'-160px', top:'60px'}}>
                                                <Carousel>
                                                <Carousel.Item >
                                                  <img
                                                    className="d-block w-100"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXHnF8eJUAHZg5Zji-yLUVVubTiyPOVJKu0Q&usqp=CAU"
                                                    alt="First slide"
                                                  />
                                                  <Carousel.Caption style={{ position:'absolute',padding: '5px',width: '250px', height: '200px',left:'-20px',top:'100px' ,color:'black',backgroundcolor:'yellow' }}>
                                                    <h5>First slide label</h5>
                                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                                  </Carousel.Caption>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                  <img
                                                    className="d-block w-100"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrVuC1aGDEOoOkt5qvQctamfFdhR72gT-Z0g&usqp=CAU"
                                                    alt="Second slide"
                                                  />

                                <Carousel.Caption style={{ position:'absolute',padding: '5px',width: '250px', height: '200px',left:'-20px',top:'100px' ,color:'black' }}>
                                  <h5><bold>product roles</bold></h5>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                              </Carousel.Item>
                              <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw6OxDmhDW4n90SiEg1ikFhHEkyTOMU7GX5Q&usqp=CAU"
                                  alt="Third slide"
                                />

                                <Carousel.Caption style={{ position:'absolute',padding: '5px',width: '250px', height: '200px',left:'-20px',top:'100px' ,color:'black' }}>
                                  <h5>more career options</h5>
                                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                              

                              </Carousel.Item>
                            
            
                            </Carousel>
                            <Card.Link href="#">More info</Card.Link>
                            </ul>
                           </Card.Body>
                        </Card>
                        </CardGroup>
              </Container>
              <CardGroup style={{position:'relative',borderBottom:'none',top:'260px',bottom:'100px'}}>
              <Card>
              <Card.Body style={{borderLeft: 'none',borderTop: 'none',borderBottom:'none',top:'160px' }} >
              <>
                <Button variant="primary" size="lg" active>
                Press Release
                </Button>{' '}
                <Button variant="secondary" size="lg" active>
                  Media Coverage
                </Button>
              </>
              <Card.Text style={{color:'blue'}}>
              ult enium ad minim veniam,quils nostrud exeercit,sed do eiusmod tempo,incident ut labore elit
            </Card.Text>
              21 feb 2050
              <Card.Text style={{color:'blue'}}>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer t
             </Card.Text>
              13  jan 2029
              <Card.Text style={{color:'blue'}}>
              stay safe as you know we  are going through second phase of pandemic elit
              </Card.Text>
              15june 2021
              <br/>
              <br/>
              
              <Card.Link href="#">Next</Card.Link>
              <Card.Link href="#">More info</Card.Link>
            
              </Card.Body>
              
              </Card>

              </CardGroup>
              <div style={{backgroundColor:'lightgray',marginTop:'5vh', width:'100%'}}>
              <Container fluid  style={{ borderLeft: 'none',borderTop: 'none',borderBottom: 'none', borderRight:'none',backgroundColor:'lightgray',top:'245px' }}>
                <Row>
                  <CardGroup>
                    <Card style={{ borderLeft: 'none',borderTop: 'none',borderBottom: 'none', borderRight:'none',backgroundColor:'lightgray',top:'245px',width:'1000px' }}>
                    <Card.Body  >
                        <Card.Title>About</Card.Title>
                        <Card.Text> 
                            Vision & Mission <br/>
                            Thought Leadership<br/>
                            Partners <br/>
                            Events <br/>
                            Press Room <br/>
                            Careers <br/>
                            Awards Recognition 
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ borderLeft: 'none',borderTop: 'none',borderBottom: 'none', borderRight:'none',backgroundColor:'lightgray',top:'245px'}}>
                    <Card.Body  >
                        <Card.Title>Training</Card.Title>
                        <Card.Text> 
                              Talent Management <br/>
                              Training & Development <br/>
                              Coaching<br/>
                              Saleforce Enablement<br/>
                              SPS overview<br/>
                              Readlines <br/>
                              Development <br/>
                              Sustainment<br/>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                 
                    <Card style={{ borderLeft: 'none',borderTop: 'none',borderBottom: 'none', borderRight:'none',backgroundColor:'lightgray',top:'245px'}}>
                    <Card.Body  >
                        <Card.Title>Resource</Card.Title>
                        <Card.Text> 
                             E-store <br/>
                            Nano Sales Books <br/>
                              Tools<br/>
                              Boook<br/>
                              SPS overview<br/>
                              Readlines <br/>
                              Development <br/>
                              Sustainment<br/>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ borderLeft: 'none',borderTop: 'none',borderBottom: 'none', borderRight:'none',backgroundColor:'lightgray',top:'245px'}}>
                    <Card.Body  >
                        <Card.Title>Global Reach</Card.Title>
                        <Card.Text> 
                           North America <br/>
                           South America <br/>
                           Europe,Middle-East<br/>
                           Africa HeadQuarter <br/>
                           Asia Pacific <br/>
                         
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ borderLeft: 'none',borderTop: 'none',borderBottom: 'none', borderRight:'none',backgroundColor:'lightgray',top:'245px'}}>
                    <Card.Body style={{width:'100%'}} >
                        <Card.Title>Global Reach</Card.Title>
                        <Card.Text> 
                       <a href="https://www.facebook.com/"><button ><i class="fab fa-facebook-square fa-lg"> facebook</i></button></a><br/>
                        <a href="https://twitter.com/LOGIN"><button><i class="fab fa-twitter fa-lg"></i>Twitter</button></a><br/>
                        <a href="https://in.linkedin.com/"><button><i class="fab fa-linkedin-in fa-lg"></i>Linkedin</button></a><br/>
                        <button><i class="fab fa-blogger-b fa-lg"></i>blog</button><br/>
                        <button><i class="fas fa-envelope fa-lg"></i>E-mail</button><br/>
                        </Card.Text>
                        </Card.Body>
                    </Card>
         
                </CardGroup>
                </Row>
                <Row style={ { position:'absolute',bottom:'-1140px' ,backgroundColor:'darkGray' ,width:'100%'}}>
                
                <Col>Terms of use</Col>
                <Col>Privacy policy</Col>
                <Col>Legal Notice</Col>
                <Col>Sitemap</Col>
            </Row>

              </Container>
              </div>
            


         
      
         

        
   
         </div>
     
              
 
          


         
        
    )
}

export default Overview;
