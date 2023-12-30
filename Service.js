
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer  from '../components/Footer';
function Service(){
    return(
        <>
            <Navbar />
            <Hero 
                cName="heroMid"
                heroImg="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
                title="Service"
               
                url="/service"
                
            />
             <Footer/>
        </>
    )
}
export default Service;