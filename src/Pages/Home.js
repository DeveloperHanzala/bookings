import React, { useState } from 'react'
import './Style.css';
import icon1 from '../Images/image 1.png';
import icon2 from '../Images/36912166832 1.png';
import icon3 from '../Images/83455901449 (1) 1.png';
import cardimg from '../Images/homecard.png';
import cardimg1 from '../Images/homecard1.png';
import cardimg2 from '../Images/homecard2.png';
import iconcard from '../Images/Frame 20.png';
import iconcard1 from '../Images/Frame 26.png';
import iconcard2 from '../Images/Frame 27.png';
import quote from '../Images/format_quote.png';
import { IoStarSharp } from "react-icons/io5";
import why1 from '../Images/whychose1.png';
import why2 from '../Images/whychose2.png';
import why3 from '../Images/whychose3.png';
import why4 from '../Images/whychose4.png';
import why5 from '../Images/whychose5.png';
import why6 from '../Images/whychose6.png';
import { Link } from 'react-router-dom';

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
      { question: "Why should I use Homecert.ie?", answer: "Because it provides the best services for certifications." },
      { question: "Who needs a BER Cert?", answer: "Businesses and individuals looking for regulatory compliance." },
      { question: "How can we help?", answer: "We offer consultancy services tailored to your needs." },
      { question: "Paying for your BER Cert?", answer: "We provide multiple payment options to suit you." },
      { question: "Have more questions?", answer: "Contact us for further assistance." },
    ];
  
    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
      };
  
  return (
    <>
    {/* -----------header----------- */}
    <div className='container-fluid bg-color' >
        <div className='row homebg'>
            <div className='col-md-12 text-center text-md-start text-white'>
                <div className='row'>

                <div className='col-md-3'>
            
                </div>
                <div className='col-md-6 col-12 kmk'>
                <h1 className='font-libre'>Where Innovation Meets Energy Excellence</h1>
                <p className='font-libre1 '>Fast, Reliable & Hassle-Free
                Get the Best Quotes from local BER Assessors Today</p>
                <div className='px-4 text-center text-md-start'>
                <Link to={'/booking'}><button className='btn btn-warning homebutton'>Book an Energy Assessment</button></Link>
                </div>
               
                </div>
                </div>
            </div>
        </div>
    </div>
{/* -----------header----------- */}


{/* -----------secondsection----------- */}
    <div className='container nooverflowx pt-5 pb-5'>
        <div className='row ' >
            <div className='col-md-12 d-flex flex-column flex-md-row align-items-center justify-content-center'>
                   <img src={icon1} alt='' className='img-fluid mx-0 mx-md-2 width-icon' />
                    <h5 className='mx-0 mx-md-2' >Lowest Prices Guaranteed</h5>
                        <h3 className='d-md-block d-none'>|</h3>
                        <img src={icon2} alt='' className='img-fluid mx-0 mx-md-2 width-icon' />
                    <h5 className='mx-0 mx-md-2' >300+ BER Assessors Nationwide</h5>
                        <h3 className='d-md-block d-none'>|</h3>
                        <img src={icon3} alt='' className='img-fluid width-icon mx-0 mx-md-2' />
                        <h5 className='mx-0 mx-md-2' >Choose your Date & Time</h5>
            </div>
        </div>
    </div>
    {/* -----------secondsection----------- */}


  {/* -----------thirdsection----------- */}
    <div className='container px-4 text-center text-md-start nooverflowx px-md-0 pt-5 pb-5'>
        <h5 className='text-warning'>Expertise</h5>
        <h2 className='mb-5 text-color1'>Find a Local BER Assessor Today</h2>
        <div className='row'>
            <div className='col-md-4 mt-5 mt-md-0 p-4'>
         <div className="card " >
  <img src={why6} className="card-img-top" alt="..." />
  <div className="card-body text-center text-color1">
    <h5 className="card-title">1. Select your preferred Date & Time</h5>
  </div>
</div>

            </div>
            <div className='col-md-4 mt-5  mt-md-0 p-4 p-md-0'>
            <div className="card" >
  <img src={cardimg2} className="card-img-top" alt="..." />
  <div className="card-body text-center text-color2">
    <h5 className="card-title">2. Post your details online in <br/>1 minute</h5>
  </div>
</div>
            </div>
            <div className='col-md-4 mt-5 mt-md-0  p-4'>
            <div className="card" >
  <img src={cardimg1} className="card-img-top card-height" alt="..." />
  <div className="card-body text-center text-color1">
    <h5 className="card-title">3. Confirm your booking instantly online</h5>
  </div>
</div>
            </div>
        </div>
    </div>
  {/* -----------thirdsection----------- */}
   
   
    {/* -----------fourthsection----------- */}
    <div className='container-fluid text-color2 px-4 nooverflowx px-md-0  mt-5 mb-5'>
    <div className='container nooverflowx pt-5 pb-5'>
       <div className='text-center'>
        <h2 className='mb-5'>How BerCert Works</h2>
       </div>
        <div className='row'>
            <div className='col-md-4 mt-5 mt-md-0 '>
         <div className="card d-flex align-items-center bgcolor1" >
  <img src={iconcard} className="p-3" width={100} alt="..." />
  <div className="card-body text-center ">
    <h5 className="card-title">Post Your Job</h5>
    <p class="card-text text-light">Once you post your job online, we notify all the BER Assessors in your area.</p>
  </div>
</div>

            </div>
            <div className='col-md-4 mt-5  mt-md-0 '>
            <div className="card d-flex align-items-center bgcolor1" >
  <img src={iconcard1} className="p-3" width={100} alt="..." />
  <div className="card-body text-center ">
    <h5 className="card-title">Review Quotes</h5>
    <p class="card-text text-light">Review Submitted Quotes.</p>
  </div>
</div>
            </div>
            <div className='col-md-4 mt-5 mt-md-0 '>
            <div className="card d-flex align-items-center bgcolor1" >
  <img src={iconcard2} className="p-3" width={100} alt="..." />
  <div className="card-body text-center ">
    <h5 className="card-title">Accept Quote</h5>
    <p class="card-text text-light">Accept your preffered Quote, and pay the deposit fee</p>
  </div>
</div>
            </div>
        </div>
    </div>
    </div>
  {/* -----------fourthsection----------- */}

 {/* -----------fifthsection----------- */}
 <div className='container px-4 px-md-0 text-center text-md-start nooverflowx pt-5 pb-5'>
       
        <h2 className='mb-5 text-color1'>Why Choose Us?</h2>
        <div className='row'>
            <div className='col-md-4 mt-5 mt-md-0 '>
         <div className="card " >
  <img src={why1} className="card-img-top" alt="..." />
  <div className="card-body text-center text-color1">
    <h5 className="card-title">Lowest Prices</h5>
  </div>
</div>

            </div>
            <div className='col-md-4 mt-5  mt-md-0 '>
            <div className="card" >
  <img src={why2} className="card-img-top" alt="..." />
  <div className="card-body text-center ">
    <h5 className="card-title">Fast Turnaround</h5>
  </div>
</div>
            </div>
            <div className='col-md-4 mt-5 mt-md-0  '>
            <div className="card" >
  <img src={why3} className="card-img-top card-height" alt="..." />
  <div className="card-body text-center text-color1">
    <h5 className="card-title">SEAI Registered BER Assessors</h5>
  </div>
</div>

            </div>
        </div>
        <div className='text-center'>
           <Link to={'/booking'}> <button className='btn btn-warning fw-bold fs-5 mt-5'>Get BER Quotes Now</button></Link>
        </div>
    </div>
  {/* -----------fifthsection----------- */}
   


  {/* -----------sixthsection----------- */}
<div className='mb-5 px-4 px-md-0' >
<div className='container mt-5'>
     <div className='text-center'>
            <h5>Client Voices</h5>
            <h2>Success Stories & Testimonials</h2>
     </div>
</div>

   {/* Carousel wrapper */}
<div id="carouselMultiItemExample" data-mdb-carousel-init className="carousel slide carousel-dark text-center" data-mdb-ride="carousel">
  
 
  {/* Inner */}
  <div className="carousel-inner py-4">
    {/* Single item */}
    <div className="carousel-item  active">
      <div className="container">
        <div className="row">
          <div className="col-lg-4  ">
            <div className='text-start p-3 shad'>
            <img className=" mb-4" src={quote} alt="avatar" style={{width: 40}} />
            <p className='text-dark fw-bold'>BER Client</p>
            <p className="text-muted">
              <i className="fas fa-quote-left" />
              "Jason and the HomeCert.ie team made the BER assessment process effortless. 
              Quick turnaround, professional service, and sound advice throughout. 
              Couldn’t recommend them more."
            </p>
            
            <ul className="list-unstyled d-flex justify-content-start text-warning mb-0">
              <li><IoStarSharp /></li>
              <li><IoStarSharp /></li>
              <li><IoStarSharp /></li>
              <li><IoStarSharp /></li>
              <li><IoStarSharp /></li>
              
            </ul>
            <div className='d-flex align-items-center mt-3 '>
            <img className="rounded-circle shadow-1-strong" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar" style={{width: 50}} />
            <h5 className="mx-2 ">Martin Keane</h5>
            </div>
           
            
            </div>
           
            
          </div>
          <div className="col-lg-4  ">
            <div className='text-start p-3 shad'>
            <img className=" mb-4" src={quote} alt="avatar" style={{width: 40}} />
            <p className='text-dark fw-bold'>BER Client</p>
            <p className="text-muted">
              <i className="fas fa-quote-left" />
              "Didn’t know the first thing about BERs but the explained it clearly and sorted it fast. Super value and trustworthy."
            </p>
            
            <ul className="list-unstyled d-flex justify-content-start text-warning mb-0">
              <li><IoStarSharp /></li>
              <li><IoStarSharp /></li>
              <li><IoStarSharp /></li>
              <li><IoStarSharp /></li>
              <li><IoStarSharp /></li>
              
            </ul>
            <div className='d-flex align-items-center mt-3 '>
            <img className="rounded-circle shadow-1-strong" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar" style={{width: 50}} />
            <h5 className="mx-2 ">Ciarán Reilly</h5>
            </div>
           
            
            </div>
           
            
          </div>
          <div className="col-lg-4  ">
            <div className='text-start p-3 shad'>
            <img className=" mb-4" src={quote} alt="avatar" style={{width: 40}} />
            <p className='text-dark fw-bold'>Architect, Dublin 8</p>
            <p className="text-muted">
              <i className="fas fa-quote-left" />
              "Reliable, efficient, and always responsive — 
              exactly what we need when we're up against tight timelines for Part L compliance. 
              HomeCert.ie is now our go-to."
            </p>
            
            <ul className="list-unstyled d-flex justify-content-start text-warning mb-0">
              <li><IoStarSharp /></li>
              <li><IoStarSharp /></li>
              <li><IoStarSharp /></li>
              <li><IoStarSharp /></li>
              <li><IoStarSharp /></li>
              
            </ul>
            <div className='d-flex align-items-center mt-3 '>
            <img className="rounded-circle shadow-1-strong" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar" style={{width: 50}} />
            <h5 className="mx-2 ">Siobhán Ní Fhlannagáin</h5>
            </div>
           
            
            </div>
           
            
          </div>
        </div>
      </div>
    </div>
   
  </div>
  {/* Inner */}
{/* Controls */}
  <div className="d-flex justify-content-center mb-4">

  
<button className="carousel-control-prev mx-5 position-relative rounded-circle bg-primary" type="button" data-bs-target="#carouselMultiItemExample" data-bs-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
</button>


<button className="carousel-control-next position-relative rounded-circle bg-primary" type="button" data-bs-target="#carouselMultiItemExample" data-bs-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
</button>


  </div>
</div>
{/* Carousel wrapper */}
</div>

  {/* -----------sixthsection----------- */}


    {/* -----------seventhsection----------- */}
    <div className='text-color2 bgimg mt-5 mb-5'>
    <div className='container  pt-5 pb-5'>
       <div className='text-center pb-5'>
        <h2 className='pt-5 '>Are You a BER Assessor?</h2>
        <p className='text-light'>Register with Homecert.com and receive local job leads, straight to your phone.</p>
        <Link to="/assessor-registration#assessor" className="btn btn-warning fs-5 fw-bold mt-4 px-5">
  Join Now
</Link>
       </div>
        
    </div>
    </div>
  {/* -----------seventhsection----------- */}

{/* -----------eighthsection----------- */}
  <div className="faq-container  mb-5 mb-md-0 pb-md-4 pb-5">
      {/* Left Section */}
      <div className="faq-left text-center text-md-start">
        <h3>Frequently Asked Questions</h3>
        <p>
        Find answers to common questions about Building Energy Rating (BER) assessments, 
        SEAI compliance, home energy upgrades, and what to expect during your appointment.
        </p>
        <Link to={'/contact/#get-in-touch'}><button className="contact-button">Contact Us</button></Link>
      </div>

      {/* Right Section */}
      <div className="faq-right ">
        <h3>Frequent Asked Questions</h3>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className={`faq-question ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="faq-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            <div
              className={`faq-answer ${
                activeIndex === index ? "show" : "hide"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
{/* -----------eighthsection----------- */}







    </>
  )
}

export default Home
