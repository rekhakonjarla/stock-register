function Location(){
    return(
        <div className="container" style= {{ backgroundColor:"lightcyan", marginTop:"2rem"}}>
            <h3 style={{textAlign:"left"}}>We Serve At</h3>
            <div className="row"  style={{marginTop:"2rem"}}>
                <div className="col-md-3">
                <i class="fa-solid fa-location-dot"></i>
                <h4>Kakinada</h4>
                </div>
                <div className="col-md-3">
                <i class="fa-solid fa-location-dot"></i>
                <h4>Rajahmundry</h4>
                </div>
                <div className="col-md-3">
                <i class="fa-solid fa-location-dot"></i>
                <h4>Vizag</h4>
                </div>
                <div className="col-md-3">
                <i class="fa-solid fa-location-dot"></i>
               <h4>Vijayawada</h4>
                </div>

            </div>
            <div className="row" style={{marginTop:"2rem"}}>
                <div className="col-md-4">
                <i class="fa-solid fa-location-dot"></i>
                <h4>Hyderbad</h4>
                </div>
                <div className="col-md-4">
                <i class="fa-solid fa-location-dot"></i>
                <h4>Peddapuram</h4>
                </div>
                <div className="col-md-4">
                <i class="fa-solid fa-location-dot"></i>
                <h4>Guntur</h4>
                </div>
               

            </div>
            <div className="row" style={{marginTop:"2rem"}}>
                <div className="col-md-6">
                    <i class="fa-solid fa-location-dot"></i>
                    <h4>Delhi</h4>
                </div>
               
                </div>
            </div>
           )
}
export default Location