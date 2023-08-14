import React from "react";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Topheader = () => {
    return (
        <>
            <div className="top-header">
                <div className="top-header-content">
                    <div className="top-image">
                        <img src="https://crocoblock.com/wp-content/uploads/2022/04/lock.png" alt="" className="top-img" />
                    </div>
                    <div className="content-box">
                        <p className="title">Unlock 12 Dynamic Templates</p>
                        <p className="subtitle">with All-inclusive Subscription</p>
                    </div>
                    <div className="cs-upgrade-banner-btns">
                        <button className="cs-btn get-link">Get from $199</button>
                        <button className="cs-btn upgrade">Upgrade current plan</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topheader