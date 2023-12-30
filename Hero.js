import "./HeroStyles.css"
function Hero(props){
    return(
        <>
            <div  className={props.cName}>
               <img src={props.heroImg} alt="no display"/>
               <div className="hero-text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <a href={props.url} className={props.btnClass}>{props.buttonName}</a>
                </div>
            </div>
            
        </>
    )
}
export default Hero;