
import "./Header.css"


function HeaderNav(){

return(

      <div className="header_section">
            <div className="container">
               <div className="containt_main">
                  <div id="mySidenav" className="sidenav">
                     {/* <a href="javascript:void(0)" className="closebtn" onClick="closeNav()">&times;</a> */}
                     <a href="index.html">Home</a>
                     <a href="fashion.html">Fashion</a>
                     <a href="electronic.html">Electronic</a>
                     <a href="jewellery.html">Jewellery</a>
                  </div>
                  <span className="toggle_icon" 
                  >
                     <img alt="" src="images/toggle-icon.png"/>
                     </span>
                  <div className="dropdown">
                     <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Category 
                     </button>
                    
                  </div>
                  <div className="main">
                
                     <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search this blog"/>
                        <div className="input-group-append">
                           <button className="btn btn-secondary" type="button">
                           <i className="fa fa-search"></i>
                           </button>
                        </div>
                     </div>
                  </div>
                  <div className="header_box">
                     <div className="lang_box ">
                        <img src="images/flag-uk.png" alt="flag" className="mr-2 " title="United Kingdom"/> English <i className="fa fa-angle-down ml-2" aria-hidden="true"></i>
                       
                        <div className="dropdown-menu ">
                          
                           <img src="images/flag-france.png" className="mr-2" alt="flag"/>
                           French
                          
                        </div>
                     </div>
                     <div className="login_menu">
                        <ul>
                           <li>
                              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                              <span className="padding_10">Cart</span>
                           </li>
                           <li>
                              <i className="fa fa-user" aria-hidden="true"></i>
                              <span className="padding_10">Cart</span>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>




)


}

export default HeaderNav;