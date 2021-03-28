import React from 'react';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">                   
                        <li><a href="contactus.html">Contact</a></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
		              121, Near Clock Tower<br />
		              Amalapuram, EastGodavari District,<br />
		              Amalapuram<br />		             
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:durgrao@gmil.com">
                         durgarao@sundayoffice.in</a>
                    </address>
                </div>                
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2021 Sunday Office PVT Ltd.</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;