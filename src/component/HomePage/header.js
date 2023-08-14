import React from "react";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Topheader from "./topheader";

const Header = () => {
    return (
        <>
        <Topheader />
            <div className="section1">
                <div className="custome-logo-div">
                    <img src="https://demo.crocoblock.com/rentgo-new/wp-content/uploads/2020/03/logo.svg" alt="logo" className="custome-logo"  />
                </div>
                <div className="custome col-md-12 col-lg-12 col-12">
                    <div className="custome-card">
                        <div className="custome-header">
                            <p className="custome-title"><b>Find & Book<br />a Great Deal Today</b></p>
                        </div>
                        <div className="custome-form">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Quick Search</label>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Location</label>
                                    <select className="form-control mt-1" name="location" aria-label="Location">
                                        <option value="">Location</option>
                                        <option value="20" data-label="Alabama" data-counter-prefix="" data-counter-suffix="">Alabama</option>
                                        <option value="21" data-label="Alaska" data-counter-prefix="" data-counter-suffix="">Alaska</option>
                                        <option value="22" data-label="Arizona" data-counter-prefix="" data-counter-suffix="">Arizona</option>
                                        <option value="23" data-label="Arkansas" data-counter-prefix="" data-counter-suffix="">Arkansas</option>
                                        <option value="24" data-label="California" data-counter-prefix="" data-counter-suffix="">California</option>
                                        <option value="25" data-label="Colorado" data-counter-prefix="" data-counter-suffix="">Colorado</option>
                                        <option value="26" data-label="Connecticut" data-counter-prefix="" data-counter-suffix="">Connecticut</option>
                                        <option value="27" data-label="Delaware" data-counter-prefix="" data-counter-suffix="">Delaware</option>
                                        <option value="28" data-label="Florida" data-counter-prefix="" data-counter-suffix="">Florida</option>
                                        <option value="29" data-label="Georgia" data-counter-prefix="" data-counter-suffix="">Georgia</option>
                                        <option value="30" data-label="Hawaii" data-counter-prefix="" data-counter-suffix="">Hawaii</option>
                                        <option value="31" data-label="Idaho" data-counter-prefix="" data-counter-suffix="">Idaho</option>
                                        <option value="32" data-label="Illinois" data-counter-prefix="" data-counter-suffix="">Illinois</option>
                                        <option value="33" data-label="Indiana" data-counter-prefix="" data-counter-suffix="">Indiana</option>
                                        <option value="34" data-label="Iowa" data-counter-prefix="" data-counter-suffix="">Iowa</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Vehicle Class</label>
                                    <select className="form-control mt-1" name="location" aria-label="Location">
                                        <option value="">Select class</option>
                                    </select>
                                </div>

                                <div className="row mt-3">
                                    <div className="form-group col-6">
                                        <label htmlFor="exampleInputPassword1">Pick-Up</label>
                                        <input type="date" className="form-control mt-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Select" />
                                    </div>
                                    <div className="form-group col-6">
                                        <label htmlFor="exampleInputPassword1">Return</label>
                                        <select className="form-control mt-1" name="location" aria-label="Location">
                                            <option value="">Select</option>
                                        </select>
                                    </div>
                                </div>
                                <button className="mt-3 search_btn">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;