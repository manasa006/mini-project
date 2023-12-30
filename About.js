import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer  from '../components/Footer';

function About(){
    return(
        <>
            <Navbar />
            <Hero 
                cName="heroMid"
                heroImg="https://images.unsplash.com/photo-1554443887-5331afd5bfcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                title="ABOUT"
               
                url="/about"
                
            />
            <div className="popular">
                <h1>Popular places in AndhraPradesh</h1>
                <p>Blessed with two beautiful rivers, Krishna and Godavari, Andhra Pradesh has the Bay of Bengal to
                     its west, and it boasts of a coastline of 972km, the longest in the country. This state is widely 
                     advertised as the Kohinoor of India by the tourism department. The state is most visited for its world famous Tirupati temple. 
                     Srisailam Mallikarjuneswar temple is another 
                    famous Shiva shrine and is one of the 12 Jyotirlinga temples in India.</p>
                <p>In spite of the recent division of the state of Andhra Pradesh, which resulted in the formation Seemandhra which is what was left of Andhra Pradesh after
                     Telangana region was carved out, Seemandhra seems to have got the better share regarding tourism. Places like Belum caves, Nagarjuna Konda, Borra caves and Pulicat Lake have all come under Seemandhra. Apart from this,
                      it retains the better part of the culture and cuisine of Andhra Pradesh and has
                      an already established tourism development. The state is home to various centres that have quite a lot of Buddhist influence like Dhulikatta, Bavikonda, Thotlakonda, Amravati, Nagarjuna Konda, etc.</p>
                <h1>Our AIM</h1>
                <p>Our AIM is to touch the horizon where our capabilities may successfully meet with the requirements of our client,that too with ultimate transparency and cost-effictiveness</p>
            </div>
            <Footer />
        </>
    )
}
export default About;