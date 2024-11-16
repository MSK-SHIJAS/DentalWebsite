import React from "react";
import { Navbar, Nav, Button, Container, Col, Card, Row } from "react-bootstrap";
import { FaTooth, FaRegSmile, FaTeeth, FaMedal, FaUserMd, FaStethoscope, FaUserInjured, FaStar } from "react-icons/fa";
import '../src/App.css';

const NavigationBar = () => {
  return (
    <>
      <div>
        <Navbar bg="light" expand="lg" className="px-3">
          <Container>
            <Navbar.Brand href="#" className="fw-bold" style={{ fontSize: "24px" }}>
              <img src='image.png' style={{width:"150px"}} alt="Logo"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="ms-auto d-flex align-items-center">
                <Nav.Link href="#" className="text-orange mx-2">
                  Home
                </Nav.Link>
                <span className="mx-2 text-muted">•</span>
                <Nav.Link href="#" className="text-dark mx-2">
                  About Us
                </Nav.Link>
                <span className="mx-2 text-muted">•</span>
                <Nav.Link href="#" className="text-dark mx-2">
                  Services
                </Nav.Link>
                <span className="mx-2 text-muted">•</span>
                <Nav.Link href="#" className="text-dark mx-2">
                  Gallery
                </Nav.Link>
                <span className="mx-2 text-muted">•</span>
                <Nav.Link href="#" className="text-dark mx-2">
                  Promotions
                </Nav.Link>
                <span className="mx-2 text-muted">•</span>
                <Nav.Link href="#" className="text-dark mx-2">
                  Blog
                </Nav.Link>
                <span className="mx-2 text-muted">•</span>
                <Nav.Link href="#" className="text-dark mx-2">
                  Contact Us
                </Nav.Link>
                <Button className="ms-3 text-white" style={{backgroundColor:"#fd7e14"}}>
                  Appointment
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container>
          <Row>
            <div style={{ position: "relative", width: "100%", height: "100vh" }}>
              <img
                src="lady.png"
                alt="Background"
                className="img-fluid position-absolute"
                style={{
                  zIndex: -1,
                  width: "250%", 
                  height: "110%", 
                }}
              />
            </div>

            <Col md={6} style={{ position: "absolute" }}>
              <h2 className="fw-bold" style={{ fontSize: "50px" }}>Have a shining <br />smile with our </h2>
              <h2 className="fw-bold" style={{ fontSize: "50px", color: "#fd7e14" }}>modern methods!</h2>
              <div style={{ position: "relative", marginTop: "50px" }}>
                <div
                  style={{
                    position: "absolute",
                    top: "-5px",
                    left: "0",
                    width: "200px",
                    height: "30px",
                    backgroundColor: "green",
                    borderRadius: "25px",
                    zIndex: 1,
                  }}
                ></div>

          
                <Card className="mt-4 shadow-sm p-3" style={{ width: "200px", position: "relative", zIndex: 2 }}>
                  <Row className="align-items-center">
                 
                    <Col xs={3}>
                      <img
                        src="googlr.png"
                        alt="Small Card"
                        className="img-fluid rounded"
                      />
                    </Col>

                   
                    <Col xs={9} className="p-1">
                      <h6>Google Rating</h6>
                      <h6 className="text-warning">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                      </h6>
                      <span style={{ color: "#6c757d", fontSize: "14px" }}>See all reviews</span>
                    </Col>
                  </Row>
                </Card>
              </div>
            </Col>

            
            <Col md={6} style={{ position: "absolute" }}>
              <Card
                className="p-2 text-center mt-5"
                style={{
                  width: "246px",
                  height: "214px",
                  marginLeft: "900px",
                  backgroundColor: "#15151500",
                  position: "absolute",
                  border: "2px solid white",
                  color: "#fd7e14", 
                }}
              >
                <h4 style={{ color: "#fd7e14" }}>15+ Expert Doctors</h4>
                <div className="d-flex justify-content-center my-3">
                  <img
                    src="1.jpeg"
                    width="57px"
                    alt="Doctor 1"
                    className="img-fluid rounded-circle mx-2"
                  />
                  <img
                    src="2.jpeg"
                    width="57px"
                    alt="Doctor 2"
                    className="img-fluid rounded-circle mx-2"
                  />
                  <img
                    src="3.jpeg"
                    width="57px"
                    alt="Doctor 3"
                    className="img-fluid rounded-circle mx-2"
                  />
                </div>
                <p className="text-muted" style={{ color: "#fd7e14" }}>
                  We take meticulous care of your dental needs to ensure a healthy, lasting smile.
                </p>
              </Card>
            </Col>
          </Row>

          <div className="overlay-container">
  <div className="overlay-content">
    
    <div
      style={{
        flex: 1,
        padding: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderLeft: "none",
      }}
    >
      
      <FaTooth style={{ fontSize: "50px", color: "orange" }} />
      <div style={{ textAlign: "right" }}>
        <h5 style={{ fontWeight: "bold" }}>20+ Yrs</h5>
        <p style={{ fontSize: "14px", color: "#d3d3d3" }}>Dental Care</p>
      </div>
    </div>
    
    <div
      style={{
        flex: 1,
        padding: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderLeft: "1px solid orange",
      }}
    >
      
      <FaMedal style={{ fontSize: "50px", color: "orange" }} />

      <div style={{ textAlign: "right" }}>
        <h5 style={{ fontWeight: "bold" }}>2200+</h5>
        <p style={{ fontSize: "14px", color: "#d3d3d3" }}>Google Reviews</p>
      </div>
    </div>

    <div
      style={{
        flex: 1,
        padding: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderLeft: "1px solid orange",
      }}
    >
    
      <FaUserInjured style={{ fontSize: "50px", color: "orange" }} />
      
   
      <div style={{ textAlign: "right" }}>
        <h5 style={{ fontWeight: "bold" }}>50K+</h5>
        <p style={{ fontSize: "14px", color: "#d3d3d3" }}>Happy Patients</p>
      </div>
    </div>

    <div
      style={{
        flex: 1,
        padding: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderLeft: "1px solid orange",
      }}
    >
    
      <FaUserMd style={{ fontSize: "50px", color: "orange" }} />
      
     
      <div style={{ textAlign: "right" }}>
        <h5 style={{ fontWeight: "bold" }}>15+</h5>
        <p style={{ fontSize: "14px", color: "#d3d3d3" }}>Dentists</p>
      </div>
    </div>
  </div>
</div>

         
          <div className="" style={{ backgroundColor: "black",width: "101%" ,padding:"110px",marginTop:"50px",zIndex:0}}>
          
          </div>
        </Container>
      </div>
      <div className="smile-transformation-section" style={{ padding: "40px", textAlign: "center" }}>
      <h2 style={{ fontSize: "30px", fontWeight: "bold" }}>
        Transform your smile with veneers, whitening, and implants.
      </h2>
      <p style={{ fontSize: "14px", color: "#d3d3d3", marginBottom: "40px" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry...
      </p>

    
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "20px", marginBottom: "40px" }}>
    
        <div
          className="card"
          style={{
            backgroundColor: "#f7a61b", 
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FaTooth style={{ fontSize: "40px", marginBottom: "10px" }} />
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>Orthodontics</p>
        </div>
       
        <div
          className="card"
          style={{
            backgroundColor: "#f7a61b", 
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FaTooth style={{ fontSize: "40px", marginBottom: "10px" }} />
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>General
          Dentistry</p>
        </div>
   
        <div
          className="card"
          style={{
            backgroundColor: "#f7a61b",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FaRegSmile style={{ fontSize: "40px", marginBottom: "10px" }} />
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>Cosmetic
          Dentistry</p>
        </div>
      
        <div
          className="card"
          style={{
            backgroundColor: "#f7a61b", 
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FaTeeth style={{ fontSize: "40px", marginBottom: "10px" }} />
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>Teeth
Whitening
</p>
        </div>
      
        <div
          className="card"
          style={{
            backgroundColor: "#f7a61b",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FaTooth style={{ fontSize: "40px", marginBottom: "10px" }} />
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>Gum
Treatment
</p>
        </div>
      
        <div
          className="card"
          style={{
            backgroundColor: "#f7a61b", 
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FaTooth style={{ fontSize: "40px", marginBottom: "10px" }} />
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>Root Canal
Treatment
</p>
        </div>
       
        <div
          className="card"
          style={{
            backgroundColor: "#f7a61b", 
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FaMedal style={{ fontSize: "40px", marginBottom: "10px" }} />
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>Crowns and
Bridges
</p>
        </div>
       
        <div
          className="card"
          style={{
            backgroundColor: "#f7a61b", 
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FaUserMd style={{ fontSize: "40px", marginBottom: "10px" }} />
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>Jaw Joint
          Disorder</p>
        </div>
      
        <div
          className="card"
          style={{
            backgroundColor: "#f7a61b",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FaStethoscope style={{ fontSize: "40px", marginBottom: "10px" }} />
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>Children's
          Dentistry</p>
        </div>
      </div>
    </div>

    
      <div
  style={{
    backgroundColor: "black",
    width: "101%",
    padding: "200px",
    marginTop: "50px",
    zIndex: 0,
    color: "white",
    textAlign: "center",
  }}
>
  <h1>Meet Our Team</h1>
  <p style={{ color: "lightgray", maxWidth: "700px", margin: "0 auto" }}>
    Lorem Ipsum available, but the majority have suffered alteration in some
    form, by injected humour,{" "}
    <span style={{ color: "white" }}>
      or randomised words which don't look even
    </span>
  </p>
  </div>
 
 
  <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "-50px",
  }}
>
  
  <div
    style={{
      textAlign: "center",
      width: "250px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <img
      src="5.jpeg"
      alt="Dr. John Doe"
      style={{
        width: "250px",
        height: "250px",
        objectFit: "cover",
        marginBottom: "10px",
      }}
    />
    <h3 style={{ marginBottom: "5px" }}>Dr. Anna</h3>
    <p style={{ color: "gray" }}>Cardiologist</p>
  </div>


  <div
    style={{
      textAlign: "center",
      width: "250px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <img
   src="6.jpeg"
      alt="Dr. Sarah Lee"
      style={{
        width: "250px",
        height: "250px",
        objectFit: "cover",
        marginBottom: "10px",
      }}
    />
    <h3 style={{ marginBottom: "5px" }}>Dr. Khaled Abul</h3>
    <p style={{ color: "gray" }}>Dermatologist</p>
  </div>

  
  <div
    style={{
      textAlign: "center",
      width: "250px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <img
      src="7.jpeg"
      alt="Dr. Michael Smith"
      style={{
        width: "250px",
        height: "250px",
        objectFit: "cover",
        marginBottom: "10px",
      }}
    />
    <h3 style={{ marginBottom: "5px" }}>Dr. Marwan Serhal</h3>
    <p style={{ color: "gray" }}>Pediatrician</p>
  </div>


  <div
    style={{
      textAlign: "center",
      width: "250px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <img
      src="8.jpeg"
      alt="Dr. Emily Davis"
      style={{
        width: "250px",
        height: "250px",
        objectFit: "cover",
        marginBottom: "10px",

      }}
    />
    <h3 style={{ marginBottom: "5px" }}>Dr. Chinchu Mathew</h3>
    <p style={{ color: "gray" }}>Neurologist</p>
  </div>
  
</div>
<Button className="mx-auto text-white" style={{backgroundColor:"#fd7e14",
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  }}>
                  VIEW ALL TEAM
                </Button>
                <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "20px",
  }}
>
  
  <div
    style={{
      width: "350px",
      backgroundColor: "white",
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "20px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      height: "550px", 
    }}
  >
   
    <img
      src="9.jpeg"
      alt="Service 1"
      style={{
        width: "100%",
        borderRadius: "10px",
        marginBottom: "15px",
      }}
    />

    
    <h3 style={{ fontWeight: "bold", marginBottom: "10px" }}>
      Monthly Dental Offer
    </h3>

 
    <h2 style={{ color: "#fd7e14", fontWeight: "bold", marginBottom: "15px" }}>
      599 AED
    </h2>

   
    <hr style={{ border: "1px solid #ddd", margin: "15px 0" }} />


    <div style={{ marginBottom: "20px", color: "#999" }}>
      <p style={{ fontSize: "14px", margin: "0" }}>Cleaning Polishing</p>
      <hr style={{ border: "1px solid #ddd", margin: "10px 0" }} />
      <p style={{ fontSize: "14px", margin: "0" }}>Teeth Whitening</p>
      <hr style={{ border: "1px solid #ddd", margin: "10px 0" }} />
      <p style={{ fontSize: "14px", margin: "0" }}>Consultation</p>
    </div>


    <button
      style={{
        backgroundColor: "black",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        fontSize: "16px",
        cursor: "pointer",
        width: "100%",
      }}
    >
      MAKE AN APPOINTMENT
    </button>
  </div>

  <div
    style={{
      width: "350px",
      backgroundColor: "white",
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "20px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      height: "550px", 
    }}
  >
    <img
    src="10.jpeg"
      alt="Service 2"
      style={{
        width: "100%",
        borderRadius: "10px",
        marginBottom: "15px",
      }}
    />
    <h3 style={{ fontWeight: "bold", marginBottom: "10px" }}>
      Flash Whitening Offer
    </h3>
    <h2 style={{ color: "#fd7e14", fontWeight: "bold", marginBottom: "15px" }}>
      799 AED
    </h2>
    <hr style={{ border: "1px solid #ddd", margin: "15px 0" }} />
    <div style={{ marginBottom: "20px", color: "#999" }}>
      <p style={{ fontSize: "14px", margin: "0" }}>Flash Whitening</p>
      <hr style={{ border: "1px solid #ddd", margin: "10px 0" }} />
      <p style={{ fontSize: "14px", margin: "0" }}>Consultation</p>
      <hr style={{ border: "1px solid #ddd", margin: "10px 0" }} />
      <p style={{ fontSize: "14px", margin: "0" }}>Cleaning</p>
    </div>
    <button
      style={{
        backgroundColor: "black",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        fontSize: "16px",
        cursor: "pointer",
        width: "100%",
      }}
    >
      MAKE AN APPOINTMENT
    </button>
  </div>


  <div
    style={{
      width: "350px",
      backgroundColor: "white",
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "20px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      height: "550px", 
    }}
  >
    <img
       src="11.jpeg"
      alt="Service 3"
      style={{
        width: "100%",
        borderRadius: "10px",
        marginBottom: "15px",
      }}
    />
    <h3 style={{ fontWeight: "bold", marginBottom: "10px" }}>
      Comprehensive Consultation
    </h3>
    <h2 style={{ color: "#fd7e14", fontWeight: "bold", marginBottom: "15px" }}>
      999 AED
    </h2>
    <hr style={{ border: "1px solid #ddd", margin: "15px 0" }} />
    <div style={{ marginBottom: "20px", color: "#999" }}>
      <p style={{ fontSize: "14px", margin: "0" }}>Whitening</p>
      <hr style={{ border: "1px solid #ddd", margin: "10px 0" }} />
      <p style={{ fontSize: "14px", margin: "0" }}>Polishing</p>
      <hr style={{ border: "1px solid #ddd", margin: "10px 0" }} />
      <p style={{ fontSize: "14px", margin: "0" }}>Examination</p>
    </div>
    <button
      style={{
        backgroundColor: "black",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        fontSize: "16px",
        cursor: "pointer",
        width: "100%",
      }}
    >
      MAKE AN APPOINTMENT
    </button>
  </div>
</div>
<div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        fontSize: '16px',
        color: '#333',
        padding: '20px',
        flexWrap: 'wrap',
      }}
    >

      <span style={{ fontWeight: 'bold' }}>Cosmetic Dentistry</span>
      <FaStar style={{ color: '#fd7e14' }} />

  
      <span style={{ fontWeight: 'bold' }}>Teeth Whitening</span>
      <FaStar style={{ color: '#fd7e14' }} />

     
      <span style={{ fontWeight: 'bold' }}>Cleaning Polishing</span>
      <FaStar style={{ color: '#fd7e14' }} />

     
      <span style={{ fontWeight: 'bold' }}>Comprehensive Consultation</span>
      <FaStar style={{ color: '#fd7e14' }} />
    </div>

    <div
  style={{
    backgroundColor: '#fd7e14',
    padding: '50px',
    position: 'relative',
    color: 'white',
  }}
>

  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '40px',
    }}
  >
    
    <div
      style={{
        position: 'relative',
        width: '50%',
        height: 'auto',
      }}
    >
    
      <img
        src="26.jpeg"
        alt="Background"
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '10px',
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: '-50px',
          right: '-250px',
          backgroundColor: 'white',
          color: 'black',
          padding: '20px',
          borderRadius: '10px',
          width: '280px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        }}
      >
        <p style={{ fontSize: '16px', marginBottom: '10px' }}>
          We value your feedback and are committed to providing exceptional service to all our clients. If you have any concerns or questions, please reach out to us!
        </p>
        <hr />
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
         
          <img
            src="27.png"
            alt="Profile"
            style={{
              borderRadius: '50%',
              width: '50px',
              height: '50px',
            }}
          />
          
          <div>
            <h4 style={{ marginBottom: '5px' }}>John Doe</h4>
            <p style={{ fontSize: '14px', color: 'gray' }}>USA</p>
          </div>
        </div>
      </div>
    </div>


    <div
  style={{
    backgroundColor: 'white',
    color: 'black',
    padding: '20px',
    position:'absolute',
    borderRadius: '10px',
    marginLeft:"1000px",
    bottom:"265px",
    width: '280px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  }}
>
  <p style={{ fontSize: '16px', marginBottom: '10px' }}>
    We are committed to providing exceptional service. If you have any questions, please don't hesitate to contact us!
  </p>
  <hr />
  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
  <img
            src="28.png"
            alt="Profile"
            style={{
              borderRadius: '50%',
              width: '50px',
              height: '50px',
            }}
          />
    <div>
      <h4 style={{ marginBottom: '5px' }}>Jane Smith</h4>
      <p style={{ fontSize: '14px', color: 'gray' }}>Canada</p>
    </div>
  </div>
</div>




    <div style={{ width: '50%', textAlign: 'center' }}>
      <h3 style={{ fontWeight: 'bold' }}>500+ Happy clients said to us they are satisfied</h3>
    </div>
  </div>


  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
      marginTop: '250px', 
    }}
  >

    <div
      style={{
        width: '16px',
        height: '16px',
        backgroundColor: 'white',
        borderRadius: '50%',
      }}
    ></div>

    <div
      style={{
        width: '16px',
        height: '16px',
        backgroundColor: '#ddd',
        borderRadius: '50%',
      }}
    ></div>

    <div
      style={{
        width: '16px',
        height: '16px',
        backgroundColor: '#ddd',
        borderRadius: '50%',
      }}
    ></div>


    <div
      style={{
        width: '16px',
        height: '16px',
        backgroundColor: '#ddd',
        borderRadius: '50%',
      }}
    ></div>
  </div>
</div>
<div
  style={{
    padding: '50px',
    textAlign: 'center',
    backgroundColor: '#f8f9fa', 
  }}
>
<div
  style={{
    padding: '50px',
    textAlign: 'center',
    backgroundColor: '#f8f9fa', 
  }}
>
 
  <h2 style={{ fontWeight: 'bold', marginBottom: '20px' }}>Our Insurance Partners</h2>


  <p style={{ color: '#6c757d', marginBottom: '30px' }}>
    Conveniently pay for your dental treatments with your insurance. We accept major insurance providers.
  </p>

\
  <div
    style={{
      display: 'flex',
      marginBottom: '30px',
      marginLeft:"350px"
    }}
  >
    <div>
      <img
        src="12.jpeg"
        alt="Insurance 1"
        style={{ width: '100px', height: 'auto', marginBottom: '10px' }}
      />
    </div>
    <div>
      <img
        src="13.jpeg"
        alt="Insurance 2"
        style={{ width: '100px', height: 'auto', marginBottom: '10px' }}
      />
    </div>
    <div>
      <img
        src="14.jpeg"
        alt="Insurance 3"
        style={{ width: '100px', height: 'auto', marginBottom: '10px' }}
      />
    </div>
    <div>
      <img
        src="15.jpeg"
        alt="Insurance 4"
        style={{ width: '100px', height: 'auto', marginBottom: '10px' }}
      />
    </div>
    <div>
      <img
        src="16.jpeg"
        alt="Insurance 5"
        style={{ width: '100px', height: 'auto', marginBottom: '10px' }}
      />
    </div>
    <div>
      <img
        src="17.jpeg"
        alt="Insurance 6"
        style={{ width: '100px', height: 'auto', marginBottom: '10px' }}
      />
    </div>
  </div>

  
  <div
    style={{
      display: 'flex',
       marginTop: '-50px',
      marginLeft:"550px" 
    }}
  >
    <div style={{ gridColumn: '2 / span 1' }}>
      <img
        src="18.jpeg"
        alt="Insurance 7"
        style={{ width: '100px', height: 'auto', marginBottom: '10px' }}
      />
    </div>
    <div style={{ gridColumn: '3 / span 1' }}>
      <img
        src="19.jpeg"
        alt="Insurance 8"
        style={{ width: '100px', height: 'auto', marginBottom: '10px' }}
      />
    </div>
    <div style={{ gridColumn: '4 / span 2' }}>
      <img
        src="20.jpeg"
        alt="Insurance 9"
        style={{ width: '100px', height: 'auto', marginBottom: '10px' }}
      />
    </div>
  </div>
</div>
</div>
<div style={{ padding: '50px', backgroundColor: '#f8f9fa' }}>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
    <h2 style={{ fontWeight: 'bold' }}>See Our Latest Blogs!</h2>
    <button
      style={{
        backgroundColor: 'orange',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        borderRadius: '5px',
      }}
    >
      View All
    </button>
  </div>


  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px' }}>
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <img src="21.jpeg" alt="Blog 1" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
      <h4 style={{ fontWeight: 'bold', marginTop: '15px' }}>Blog Title 1</h4>
      <p style={{ color: '#6c757d', marginBottom: '15px' }}>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even</p>
      <a href="#" style={{ fontWeight: 'bold', textDecoration: 'underline', color: '#007bff' }}>
        READ More
      </a>
    </div>

    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <img src="22.jpeg" alt="Blog 2" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
      <h4 style={{ fontWeight: 'bold', marginTop: '15px' }}>Blog Title 2</h4>
      <p style={{ color: '#6c757d', marginBottom: '15px' }}>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even</p>
      <a href="#" style={{ fontWeight: 'bold', textDecoration: 'underline', color: '#007bff' }}>
        READ More
      </a>
    </div>


    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <img src="23.jpeg" alt="Blog 3" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
      <h4 style={{ fontWeight: 'bold', marginTop: '15px' }}>Blog Title 3</h4>
      <p style={{ color: '#6c757d', marginBottom: '15px' }}>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even</p>
      <a href="#" style={{ fontWeight: 'bold', textDecoration: 'underline', color: '#007bff' }}>
        READ More
      </a>
    </div>

    
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <img src="24.jpeg" alt="Blog 4" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
      <h4 style={{ fontWeight: 'bold', marginTop: '15px' }}>Blog Title 4</h4>
      <p style={{ color: '#6c757d', marginBottom: '15px' }}>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even</p>
      <a href="#" style={{ fontWeight: 'bold', textDecoration: 'underline', color: '#007bff' }}>
        READ More
      </a>
    </div>
  </div>
</div>

<div style={{ padding: '50px', backgroundColor: '#f8f9fa' }}>

  <h2 style={{ fontWeight: 'bold', marginBottom: '30px' }}>FAQS</h2>


  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(1, 1fr)', 
      gap: '20px',
    }}
  >

    <div
      style={{
        backgroundColor: '#FFFAF5',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <h4 style={{ fontWeight: 'bold' }}>How often should I visit the dentist?</h4>
        <p style={{ color: '#6c757d' }}>
        We recommend visiting the dentist at least twice a year for routine check-ups and cleanings. However, your specific needs may require more frequent visits.        </p>
      </div>
      <div
        style={{
          backgroundColor: 'orange', 
          borderRadius: '95%',
      
        }}
      >
        <span
          style={{
            fontSize: '30px',
            color: 'white', 
          }}
        >
          &#8722;
        </span>
      </div>
    </div>

    
    <div
      style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <h4 style={{ fontWeight: 'bold' }}>
        What can I expect during my first visit?</h4>
      </div>
      <div
        style={{
          backgroundColor: 'black', 
          borderRadius: '95%',
        }}
      >
        <span
          style={{
            fontSize: '30px',
            color: 'white', 
          }}
        >
          &#43;
        </span>
      </div>
    </div>

 
    <div
      style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <h4 style={{ fontWeight: 'bold' }}>How can I prepare for my dental appointment?</h4>
      </div>
      <div
        style={{
          backgroundColor: 'black', 
          borderRadius: '95%',
        }}
      >
        <span
          style={{
            fontSize: '30px',
            color: 'white', 
          }}
        >
          &#43;
        </span>
      </div>
    </div>

    <div
      style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <h4 style={{ fontWeight: 'bold' }}>What should I do in case of a dental emergency?</h4>
  
      </div>
      <div
        style={{
          backgroundColor: 'black', 
          borderRadius: '95%',
        }}
      >
        <span
          style={{
            fontSize: '30px',
            color: 'white', 
          }}
        >
          &#43;
        </span>
      </div>
    </div>
  </div>
</div>

<div style={{ 
  display: 'flex', 
  backgroundColor: '#F58220', 
  borderRadius: '8px', 
  padding: '50px', 
  marginTop:"150px",
  alignItems: 'center', 
  justifyContent: 'space-between' 
}}>

  <div style={{ maxWidth: '50%' }}>
    <h2 style={{ color: 'white', fontWeight: 'bold' }}>
      Book an Appointment With Your Doctor NOW!
    </h2>
    <p style={{ color: 'white', marginBottom: '20px' }}>
      Conveniently pay for your dental treatments with your insurance. We accept major insurance providers.
    </p>
    <button 
      style={{
        backgroundColor: 'black', 
        color: 'white', 
        padding: '15px 30px', 
        fontSize: '16px', 
        border: 'none', 
        borderRadius: '5px', 
        cursor: 'pointer'
      }}
    >
      Book Now
    </button>
  </div>

</div>
<div style={{ maxWidth: '50%' }}>
    <img 
      src="25.PNG" 
      alt="Doctor Appointment" 
      style={{ width: '40%', height: 'auto', borderRadius: '8px',marginLeft:"1000px",marginTop:"-480px"}} 
    />
  </div>


  <div style={{ backgroundColor: 'black', padding: '50px ',justifyContent:"center" }}>
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
    
  
    <div style={{ color: 'white' }}>
      <img 
        src="image.png" 
        alt="Brand" 
        style={{ width: '50%', height: 'auto', marginBottom: '20px' }}
      />
      <h3 style={{ fontWeight: 'bold' }}>Get in Touch</h3>
      <p>Contact Number: +1 234 567 890</p>
      <p>Email: contact@smileessentials.com</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <a href="#" style={{ color: 'white' }}>
          <i className="fab fa-facebook-f" style={{ fontSize: '20px' }}></i>
        </a>
        <a href="#" style={{ color: 'white' }}>
          <i className="fab fa-instagram" style={{ fontSize: '20px' }}></i>
        </a>
        <a href="#" style={{ color: 'white' }}>
          <i className="fab fa-whatsapp" style={{ fontSize: '20px' }}></i>
        </a>
        <a href="#" style={{ color: 'white' }}>
          <i className="fab fa-twitter" style={{ fontSize: '20px' }}></i>
        </a>
      </div>
    </div>
    

    <div style={{ color: 'white' }}>
      <h3 style={{ fontWeight: 'bold' }}>Our Address</h3>
      <p>Room No: 314 Al Attar Shopping Mall
Next to Karama Center,Al karama,
P.O.Box: 125706, Dubai, UAE</p>
      <img 
        src="google.PNG" 
        alt="Google Map" 
        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
      />
    </div>
    

    <div style={{ color: 'white' }}>
      <h3 style={{ fontWeight: 'bold' }}>Quick Links</h3>
      <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
        <li><a href="#" style={{ color: 'white' }}>Home</a></li>
        <li><a href="#" style={{ color: 'white' }}>About Us</a></li>
        <li><a href="#" style={{ color: 'white' }}>Services</a></li>
        <li><a href="#" style={{ color: 'white' }}>Gallery</a></li>
        <li><a href="#" style={{ color: 'white' }}>Blogs</a></li>
        <li><a href="#" style={{ color: 'white' }}>Contact Us</a></li>
      </ul>
    </div>
    
    <div style={{ color: 'white' }}>
      <h3 style={{ fontWeight: 'bold' }}>Quick Links</h3>
      <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
        <li>Children's Dentistry</li>
        <li>General Dentistry</li>
        <li>Open all 7 days</li>
       <li> 9:00 AM to 9:00 PM</li>
      </ul>
    </div>

  </div>

  <div style={{ borderTop: '2px solid green', margin: '20px 0' }}></div>
  <p style={{ textAlign: 'center', color: 'green' }}>
    &copy; All Rights Reserved by Smile Essentials - Powered by Hoztox Technologies
  </p>
</div>
    </>
  );
};

export default NavigationBar;
