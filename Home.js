
import Navbar from "../components/Navbar";
import './Cardstyle.css';
import Hero from '../components/Hero';
import Footer  from '../components/Footer';
function Home(){
    return(
        // we can take div tag also instrad of empty fragmented tag
        
        <>
            <Navbar />
            
            <Hero 
                cName="hero"
                heroImg="https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                title="WELCOME TO TOUR & TRAVEL MANAGEMENT"
                text="Please select your favourite Destination in AP  "
                url="/form"
                buttonName="MyTrip"
                btnClass="show"
            />
            <div className="popular">
                <h1>MANY POEOPLE'S RECENT TRIPS</h1>
                <div className="tripcard">
                <div className="tripdata">
                    <h2>VISAKHAPATNAM</h2><br/>
                    <p><b>Visakhapatnam Tourism: </b>
                    Visakhapatnam, also commonly known as Vizag, is one of the oldest port cities in the country. Situated in the heart of Andhra Pradesh, Vizag was announced as the state capital of Andhra Pradesh on January 31, 2023. The city is known for its picturesque beaches and serene landscape, as well as a rich cultural past. The port of Visakhapatnam is renowned for being home to the oldest shipyard in all of India. 

Located a short distance away from Visakhapatnam is Araku Valley, one of the prime attractions of Vizag. Situated at a lofty 910 metres above sea level, Araku Valley is a hill station replete with gushing waterfalls, crystal clear streams, lush green gardens and some challenging trekking trails.
Vizag is dotted with many beaches along its coastline, with the most famous one being the Yarada Beach. One of the most stunning places to see in all of Visakhapatnam ,Yarada beach is surrounded by majestic hills on three sides, and by the Bay of Bengal on the other side.</p>
                <div className="ima">
                    <img alt="img" src="https://www.holidify.com/images/bgImages/VISAKHAPATNAM.jpg" />
                    
                    
                
                </div>
                
            </div><br/>
            
                <div className="tripdata">
                    <h2>TIRUPATHI</h2><br/>
                    <p><b>Tirupathi Tourism: </b>
                    Situated in the Chittoor district of Andhra Pradesh, Tirupati is known for Lord Venkateshwara Temple, one of the most visited pilgrimage centers in the world. It is also one of the world's richest temples known by different names - Tirumala Temple, Tirupati Temple, and Tirupati Balaji Temple. Tirumala is one of the seven hills in Tirupati, where the main temple is located. The temple is believed to be where Lord Venkateshwara took the form of an idol and is home to the deity Govinda. Tirupati is one of India's oldest cities and is mentioned in many ancient Vedas and Puranas.

Tirupati is the main town, while Tirumala Hills is where Tirupati Balaji Temple is situated. Also called Sri Venkateshvara Swami Vaari Temple, it is dedicated to Lord Venkateswara, believed to be a form of Lord Vishnu, who appeared on earth to save mankind from kali yuga. The famous Tirupati Laddoo, given as a prasad at the temple, has the Geographical indication tag and etc</p>
                <div className="ima">
                <img alt="img" src="https://www.holidify.com/images/bgImages/TIRUPATI.jpg" />
                </div>
                
            </div><br/><br/>
            
                <div className="tripdata">
                    <h2>VIJAYAWADA</h2><br/>
                    <p><b>Kanaka Durga Temple: </b>
                    Nestled on the banks of River Krishna in the state of Andhra Pradesh, Vijayawada is the second-largest populated city in the state. Known as the ‘commercial, political and media capital of Andhra Pradesh’, the city is one of the most rapidly growing urban cities in India. Covered by hills and canals, Vijayawada is also home to numerous caves and rock-cut temples carved out of these caves.

Vijayawada is an amalgamation of the old world and the new; the air echoes with the clanking of temple bells mixed with the cacophony of traffic, the ancient monuments stand in perfect harmony with the modern architecture of the metro city. Among the most popular places to visit in Vijayawada are Bhavani Island, Victoria Museum, Hazratbal Mosque, Rajiv Gandhi Park, and Kolleru Lake etc., in addition to the host of temples and several caves. Other than this, the city is mostly a base to explore the nearby attractions like the Undavalli Caves, Kondapalli Fort, and Mangalagiri Hill etc.
                    </p>
                    
                <div className="ima">
                
                    <img alt="img" src="https://www.holidify.com/images/compressed/835.jpg?v=1.1" />
                    
                    </div>
                </div>
            </div><br/><br/>
                
            
            </div>
            <Footer/>
        </>
    )
}
export default Home;