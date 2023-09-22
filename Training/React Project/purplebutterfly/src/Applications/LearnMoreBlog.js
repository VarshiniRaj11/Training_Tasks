import Header from "./Header";
import Footer from "./Footer";
import './Style.css';

function LearnMoreBlog() {
    return (
        <>
         <Header/>
            <div class="Blog">
                <img src="LearnMorePic.jpeg" class="d-block w-100" alt=""></img>
                <h2 class="text-center fw-bolder text-top text-colour">AUTISM SPECTRUM DISORDER, DETECT EARLY, MANAGE <br></br>BETTER.</h2>
                <br></br>
                <div class="row align-items-center">
                    <div class="col-md-1"></div>
                    <div class="col-md-5 ">
                        <img src="LearnMorePic1.jpeg" class="img-fluid ImageRound"  alt="" />
                    </div>
                    <div class="col-md-5">
                        <h3 class="text-colour fw-bold">What is Purple Butterfly?</h3>
                        <br></br>
                        <p> Purple Butterfly is dedicated to meeting the unmet need for early detection and on-demand early intervention for children at risk of ASD in India using cutting-edge technology.</p>

                        <p>We are committed to creating an inclusive, reliable, sustainable, scalable ecosystem digitally empowering parents, doctors, special educators, speech therapists, merchants, and anyone with service or business interest in the domain of ASD with a purpose to nurture and build a diverse but equitable community.</p>
                    </div>
                    <div class="col-md-1"></div>
                </div>
                <br></br>

                <div class="row align-items-center">
                    <div class="col-md-1"></div>

                    <div class="col-md-5">
                        <h3>Who We Are?</h3>
                        <br></br>
                        <p>We are passionate, self-driven Technology and Domain enthusiasts with a burning desire to improve the lives of the people we meet. A committed and experienced team of domain experts, cognitive architects, data scientists, designers, and developers, with a vision to transform the way “healthcare and wellbeing” services, products and solutions are delivered to those involved with autism spectrum disorders.</p>
                    </div>
                    <div class="col-md-5 ">
                        <img src="LearnMorePic2.jpeg" class="img-fluid ImageRound" alt="" />
                    </div>
                    <div class="col-md-1"></div>
                </div>

            </div>
            <br></br>
            <br></br>
            <Footer/>

            
        </>
    );
}

export default LearnMoreBlog;