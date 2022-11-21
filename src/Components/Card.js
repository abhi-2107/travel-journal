import locat from "../location.png"

export default function Card(props) {
    return (
        <div className="card-container">
           <img src={props.imageUrl} alt="random item" /> 
           <div className="card-content">
            <div className="location">
                <img src={locat} alt="location"/>
                <span>{props.location}</span>     <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
                <h1>{props.title}</h1>
                <p><strong>{props.startDate} - {props.endDate}</strong></p>
                <p className="content">{props.description}</p>
            </div>
           </div>
        </div>
    )
} 

// title: "Mount Fuji",
// location: "Japan",
// googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
// startDate: "12 Jan, 2021",
// endDate: "24 Jan, 2021",
// description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
// imageUrl: "https://source.unsplash.com/WLxQvbMyfas"