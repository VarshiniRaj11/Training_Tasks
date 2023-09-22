import React from "react";
import './Style.css';
import Header from "./Header";
import Footer from "./Footer";

function Body() {


    return (

        <>
            <div class="Body">
                <Header />
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>

                    <div class="carousel-inner">
                        <div class="carousel-item active ">
                            <img src="Slide 1.jpeg" class="d-block w-100" alt="Slide 1" />
                            <div class="carousel-caption caption-left">
                                <h1>Autism Spectrum <br></br>
                                    Disorder</h1>
                                <p>Detect Early. Manage Better.</p>
                                <a href="#Solutions" class="btn btn-light rounded-pill px-5 text-colour fw-bold">OUR SOLUTION</a>
                            </div>
                        </div>
                        <div class="carousel-item ">
                            <img src="Slide 2.jpeg" class="d-block w-100" alt="Slide 2" />
                            <div class="carousel-caption caption-left">
                                <h1>On Demand <br></br>
                                    Ecosystem
                                </h1>
                                <p>Doctor, Therapists & More.</p>
                                <a href="#Solutions" class="btn btn-light rounded-pill px-5 text-colour fw-bold">OUR SOLUTION</a>
                            </div>
                        </div>
                        <div class="carousel-item ">
                            <img src="Slide 3.jpeg" class="d-block w-100" alt="Slide 3" />
                            <div class="carousel-caption caption-left">
                                <h1>1 in 100 Indian <br></br>
                                    Children at ASD risk</h1>
                                <p>Together, Empowered, Engaged.</p>
                                <a href="#Solutions" class="btn btn-light rounded-pill px-5 text-colour fw-bold">OUR SOLUTION</a>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div class="container overlap-container ">

                    <div class="row align-items-center ">
                        <div class="col-md-6">

                            <h2 class="text-colour fw-bold" id="About">About</h2>
                            <br></br>
                            <img src="About Image.jpeg" class="img-fluid rounded" width={600} height={600} alt="Image"></img>
                        </div>
                        <div class="col-md-6" >
                            <p>Purple Butterfly is dedicated to meeting the need for early detection and intervention for children
                                at risk of ASD in India using cutting-edge technology. </p>
                            <p>
                                We are committed to creating an inclusive, reliable, sustainable, scalable digital ecosystem
                                empowering parents, doctors, special educators, speech therapists, merchants, and anyone with
                                service or business interest in the domain of ASD with a purpose to nurture and build a diverse but
                                equitable community</p>


                            <a href="/Learn-More" class="btn btn-secondary px-5 fw-bold rounded-pill" >Learn More </a>



                        </div>
                    </div>
                </div>

                <div class="container-1 ">
                    <div class="row align-items-center">
                        <div class="col-md-1"></div>
                        <div class="col-md-5 ">
                            <h2 class="text-colour fw-bold" id="Solutions">Solutions</h2>
                            <br></br>
                            <img src="Solutions Image.png" class="img-fluid" alt="Image" />

                        </div>
                        <div class="col-md-1"></div>
                        <div class="col-md-5">
                            <br></br>
                            <br></br>
                            <h4 class="text-colour fw-bold">Platform Benefits</h4>
                            <br></br>
                            <h5 class="text-colour fw-bold">Improve detection accuracy</h5>
                            <p>Ready to use Artificial Intelligence model for detection</p>
                            <br></br>
                            <h5 class="text-colour fw-bold">Accelerate diagnosis</h5>
                            <p>Fast track detection and diagnosis</p>
                            <br></br>
                            <h5 class="text-colour fw-bold">Consult with medical experts, therapists</h5>
                            <p>Flexible consultation for expert opinion and follow-up</p>
                            <br></br>
                            <h5 class="text-colour fw-bold">Increase the likelihood of early intervention</h5>
                            <p>Improve lives with proactive, and advanced treatment solutions</p>
                            <br></br>
                            <h5 class="text-colour fw-bold">Connect with the parental community</h5>
                            <p>Help and share thoughts with parents who are on similar journeys</p>
                        </div>
                    </div>
                </div>


                <br></br>


                <div id="carouselExampleControls" class="carousel slide container2" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <h3 class="text-colour fw-bold" id="Impact">Impact</h3>
                        <br></br>
                        <div class="carousel-item active">
                            <div class="row align-items-center">

                                <div class="col-md-5">
                                    <img class="img-fluid ImageRound" width={500} height={500} src="EarlyDetectionPic.jpeg" alt="First slide" />
                                </div>
                                <div class="col-md-7 ">
                                    <h5 class="text-colour fw-bold">Early Detection</h5><br></br>
                                    <p> It is proven that early detection and intervention between 18 to 48 months have the power to alter an "At-Risk" child's development path and improve outcomes for the future. </p>
                                </div>


                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row align-items-center">

                                <div class="col-md-5">
                                    <img class="img-fluid ImageRound" width={500} height={500} src="PsychiatristPic.jpeg" alt="Second slide" />
                                </div>
                                <div class="col-md-7">
                                    <h5 class="text-colour fw-bold">Psychiatrist-to-Child Ratio</h5><br></br>
                                    <p> With a Psychiatrist to Child ratio of 1:1,00,000, India is way behind in being abl provide appropriate intervention to "At-risk" children at the "right time" </p>
                                </div>


                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row align-items-center">

                                <div class="col-md-5">
                                    <img class="img-fluid ImageRound" width={500} height={500} src="SocialStigmaPic.jpeg" alt="Third slide" />
                                </div>
                                <div class="col-md-7">
                                    <h5 class="text-colour fw-bold">Social Stigma</h5><br></br>
                                    <p> Social stigma hinders the real understanding of autism, that it is not a disease but a variation in the developmental pattern. This has kept civil society and schools away from truly understanding that autism can be managed with a little bit of extra awareness, knowledge, training, and patience. </p>
                                </div>


                            </div>

                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

                <br></br>

                <div class="container row ">
                    <h4 class="text-colour mx-4 ">Co-Founders</h4>

                    <div class="col-md-4">

                        <button type="button" class="btn btn-white zoom" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                            <img src="DebangshuDasguptaPic.webp" width={400} height={400} />
                            <p class="fw-bold custom-bg text-white py-3">Debangshu Dasgupta</p>
                        </button>

                        <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header custom-bg">
                                        <h5 class="modal-title fw-bold text-white  py-3 " id="exampleModalLabel">Debangshu Dasgupta</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>


                                    <div class="modal-body row ">
                                        <div class="col-md-6">
                                            <img src="DebangshuDasguptaPic.webp" width={300} height={300} />
                                            <p class="fw-bold custom-bg text-white py-3 ">Co-Founder</p>

                                        </div>
                                        <div class="col-md-6">
                                            Debangshu brings over two decades of experience in designing and implementing strategic solutions for attracting and acquiring top talent, to solve talent gaps and provide strategies to enable a sustainable talent landscape. He has been successfully driving large and complex businesses in diverse geographies. Debangshu’s background spans across industries from BFSI, Technology, Telecom, Retail, Consulting and Infrastructure, having breadth of experience includes a combination of regional, country and international level roles. He has also been associated with multiple organizations like Global Alliance for Mass Entrepreneurs (GAME), LINK (erstwhile NUMA, the French accelerator), Revenue Collective (a global think tank headquartered in US) as Mentor in pro-bono capacity.
                                        </div>
                                    </div>
                                    <div class="modal-footer">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-4">

                        <button type="button" class="btn btn-white zoom" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                            <img src="VijayRamamoorthyPic.webp" width={400} height={400} />
                            <p class="fw-bold custom-bg text-white py-3">Vijay Ramamoorthy</p>
                        </button>

                        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header custom-bg">
                                        <h5 class="modal-title fw-bold  text-white  py-3 " id="exampleModalLabel">Vijay Ramamoorthy</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>


                                    <div class="modal-body row">
                                        <div class="col-md-6">
                                            <img src="VijayRamamoorthyPic.webp" width={300} height={300} />
                                            <p class="fw-bold custom-bg text-white py-3">Co-Founder</p>

                                        </div>
                                        <div class="col-md-6">
                                            Vijay has over two decades of experience in product development and architecting business critical technology solutions in the fields of Healthcare, Digital Transformation, Agri-Tech and Marketing Automation. He has led large transformation solutions for various Fortune 500 clients across Banking, Telecom, Airlines, Manufacturing, Healthcare & Insurance. As an entrepreneur having extensive experience in healthcare, Vijay and his team were successful in crafting an innovative solution comprising of proprietary products and services, that transformed Patient Engagement and Experience to a whole new plane. A passionate hydroponics farmer, Vijay provides pro bono consulting in the space of hydroponics, urban farming and sustainable farming methods.
                                        </div>
                                    </div>
                                    <div class="modal-footer">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">

                        <button type="button" class="btn btn-white zoom" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                            <img src="SubhrojyothiMukherjeePic.webp" width={400} height={400} />
                            <p class="fw-bold custom-bg text-white py-3">Subhrojyothi Mukherjee</p>
                        </button>

                        <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header custom-bg">
                                        <h5 class="modal-title fw-bold text-white  py-3 " id="exampleModalLabel">Subhrojyothi Mukherjee</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>


                                    <div class="modal-body row ">
                                        <div class="col-md-6">
                                            <img src="SubhrojyothiMukherjeePic.webp" width={300} height={300} />
                                            <p class="fw-bold custom-bg text-white py-3">Co-Founder</p>

                                        </div>
                                        <div class="col-md-6">
                                            Subhrojyoti is a seasoned business leader specializing in large business transformation, P&L management and growth acceleration. He has worked in diverse industries with organizations like TATA, Bharti Airtel, Vediocon group, Reliance group etc. Over the years Subhrojyoti has built an excellent credibility of near perfect diagnosis of business pain points and define, design and deliver sustainable solutions for the same. Subhrojyoti is an avid Rotarian and he has been spending considerable time working pro-bono on meaningful projects in the space of poverty alleviation and economic empowerment.
                                        </div>
                                    </div>
                                    <div class="modal-footer">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <form class="row">

                    <h2 class="text-colour fw-bold mx-5">Get In Touch</h2>
                    <div class="col-md-1"></div>
                    <div class="col-md-5">
                        <img class="img-fluid" src="GetInTouchPic.webp" width={600} height={400}></img>
                    </div>

                    <div class="col-md-5">
                        <label for="validation1" class="form-label"></label>
                        <input type="text" class="form-control round" id="validation1" placeholder="Enter your name" required />

                        <label for="validation2" class="form-label"></label>
                        <input type="email" class="form-control round" id="validation2" placeholder="Enter your Email" required/>

                        <label for="validation3" class="form-label"></label>
                        <input type="tel" class="form-control round" id="validation3" pattern="^\d{4}-\d{3}-\d{4}$" placeholder="Enter your phone number" required />

                        <label for="validation4" class="form-label"></label>
                        <textarea class="form-control round" id="validation4" placeholder="Enter a message" rows="3"></textarea>
                        <br/>
                        <button class="btn btn-secondary px-5 fw-bold rounded-pill" type="submit">Send a message</button>
                    </div>

                </form>

                <Footer />


            </div>






        </>


    );

}

export default Body;



