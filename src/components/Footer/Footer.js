import './Footer.css'
import logo from '../../images/logo.jpg'
import Copyright from './Copyright'
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaEtsy } from "react-icons/fa";

export default function Footer() {

    return (

        <>
            <div className="footer_section layout_padding">
                <div className="container">
                    <div className="footer_logo"><a href="index.html">
                        <img src={logo} /></a></div>
                    <div className="footer_menu">
                        <ul>
                            <li><a href="#">Best Sellers</a></li>
                            <li><a href="#">Gift Ideas</a></li>
                            <li><a href="#">New Releases</a></li>
                            <li><a href="#">Today's Deals</a></li>
                            <li><a href="#">Customer Service</a></li>
                        </ul>
                    </div>
                    <div className="location_main">
                        <a href='https://www.facebook.com/BeadArt.TM?ref=ts&fref=ts' target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="top" title="Follow us on Facebook"><BsFacebook /></a> 
                        <a href='https://www.instagram.com/bead_art_shop' target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="top" title="Follow us on Instagram"><BsInstagram /></a>
                        <a href='https://www.etsy.com/shop/BeadArtHandmade' target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="top" title="Follow us on Etsy"><FaEtsy /></a>
                        </div>
                </div>
            </div>

            <Copyright />
        </>
    )
}