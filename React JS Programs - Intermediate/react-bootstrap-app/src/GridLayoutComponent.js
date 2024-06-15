function GridLayoutComponent() {

const styleProps = {"border":"1px red solid"}

    return(
        <div className="container">
            <div className="row">
                
                <div className="col" style={styleProps}>
                    12 columns
                </div>

            </div>

            <div className="row">
                
                <div className="col" style={styleProps}>
                    6 columns
                </div>

                <div className="col" style={styleProps}>
                    6 columns
                </div>

            </div>

            <div className="row">
                <div className="col" style={styleProps}>
                    4 columns
                </div>
                <div className="col" style={styleProps}>
                    4 columns
                </div>
                <div className="col" style={styleProps}>
                    4 columns
                </div>
            </div>


            <div className="row">
                <div className="col" style={styleProps}>
                    2 columns
                </div>
                <div className="col" style={styleProps}>
                    2 columns
                </div>
                <div className="col" style={styleProps}>
                    2 columns
                </div>

                <div className="col" style={styleProps}>
                    2 columns
                </div>
                <div className="col" style={styleProps}>
                    2 columns
                </div>
                <div className="col" style={styleProps}>
                    2 columns
                </div>

            </div>

            <div className="row">

                <div className="col-5" style={styleProps}>
                    5 columns
                </div>
                <div className="col-7" style={styleProps}>
                    7 columns
                </div>

            </div>

            <div className="row">

                <div className="col-6" style={styleProps}>
                    6 columns
                </div>
                <div className="col-4" style={styleProps}>
                    4 columns
                </div>

            </div>



        </div>
    )
}

export default GridLayoutComponent;