
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer  from '../components/Footer';

function Contact(){
    return(
        <>
        <Navbar />
            <Hero 
                cName="heroMid"
                heroImg="https://plus.unsplash.com/premium_photo-1661963869605-4b5f4c8e55f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
                title="Contact Us"
               
                url="/contact"
                
            />
            <div className="center1">
            <center>
                <h1 className="head">FILL THIS FORM</h1><br/>
                <form className="form1">
                <br/><label>Your Name:</label>
                    <input type="text" name="uname" placeholder="enter your email" /><br/> <br/>
                    <label>rating:</label>
                    <input  type="text" name="email" style={{'width':'70%'}} placeholder="enter your email" /><br/><br/>
                    <label>remarks</label>
                    <input type="text" name="password" placeholder="enter your password" /><br/><br/>
                    <button className="but" type="submit" onClick={alert("Thanks for your review")}>Submit</button> 
                </form>
            </center>
        </div>
             <Footer/>
        </>
    )
}
export default Contact;