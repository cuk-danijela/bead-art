import './Footer.css'
import { AiOutlineToTop } from "react-icons/ai";
import { useEffect } from 'react';


function Copyright() {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="copyright_section">
            <div className="container">
                <p className="copyright_text">© 2023 BEAD ART SHOP</p>
            </div>
            <button onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }}
                className="backToTop"
            ><AiOutlineToTop /></button>
        </div>
    )
}

export default Copyright;