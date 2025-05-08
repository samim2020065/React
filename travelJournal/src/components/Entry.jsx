export default function Entry(props){
    
    return(
        <div className="journal-entry">
            <div className="main-image-container">
                <img className='main-image' src={props.img.src} alt ={props.img.alt}/>
            </div>
            
            <div className="location-container"> 
                
                <img className='location-image'src='../src/assets/map_icon.png' alt='map icon'/>
                
                
                <span>{props.country}</span>
                <a href={props.googleMapsLink}>View on Google Maps</a>
                
                <h2>{props.title}</h2>
                <p className="date">{props.dates}</p>
                <p className="location-description">{props.text}</p>
                </div>
        </div>
    )
}