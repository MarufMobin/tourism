import React from 'react';
import './Map.css';

const Map = () => {
    return (
        <div>
            <div className="cust-map">
                <div className="mapouter"><div className="gmap_canvas"><iframe width={1080} height={504} id="gmap_canvas" src="https://maps.google.com/maps?q=bangladesh%20kalsi&t=k&z=15&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} /><a href="https://fmovies-online.net" /><br /><style dangerouslySetInnerHTML={{ __html: ".mapouter{position:relative;text-align:right;height:504px;width:1080px;}" }} /><a href="https://www.embedgooglemap.net">google embed map</a><style dangerouslySetInnerHTML={{ __html: ".gmap_canvas {overflow:hidden;background:none!important;height:504px;width:1080px;}" }} /></div></div>
            </div>
        </div>
    );
};

export default Map;