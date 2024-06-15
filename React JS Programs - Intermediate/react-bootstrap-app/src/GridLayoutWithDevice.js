function GridLayoutWithDevice() {

    const styleProps = {"border":"1px red solid"}
    
        return(
            <div className="container">

                <div className="row">
                    <div className="col-md-3 col-lg-4">
                        <div>First</div>
                    </div>
                    <div className="col-md-3 col-lg-4">
                        <div>Second</div> 
                    </div>
                    <div className="col-md-3 col-lg-4">
                    <div>Third</div> 
                    </div>
                    <div className="col-md-3 col-lg-4">
                        <div>Fourth</div>
                    </div>
                    <div className="col-md-3 col-lg-4">
                        <div>Fifth</div> 
                    </div>
                    <div className="col-md-3 col-lg-4">
                    <div>Sixth</div> 
                    </div>
                </div>
    
            </div>
        )
    }
    
    export default GridLayoutWithDevice;