
const countryInfo=[
    "Australia",
"Brazil",
"Canada",
"China",
"France",
"Germany",
"Italy",
"Japan",
"Mexico",
"Netherlands",
"Poland",
"Singapore",
"Spain",
"Turkey",
"United Arab Emirates",
"United Kingdom",
"United States"
]

const collections=[
    {   
        title:"AbeBooks",
        des:"Books, art & collectibles"
    },
    {   
        title:"Amazon Web Services",
        des:"Scalable CloudComputing Services"
    },
    {   
        title:"AbeBooks",
        des:"Books, art & collectibles"
    },
    {   
        title:"AbeBooks",
        des:"Books, art & collectibles"
    },
    {   
        title:"AbeBooks",
        des:"Books, art & collectibles"
    },
    {   
        title:"AbeBooks",
        des:"Books, art & collectibles"
    },
    {   
        title:"AbeBooks",
        des:"Books, art & collectibles"
    },
    {   
        title:"AbeBooks",
        des:"Books, art & collectibles"
    }

]


const Footer=()=>{
    return (
        <div className='footer'>
            <div className="back-to-top-btn">Back to top</div>

            <div className="footer-content">
                <div>
                    <h4>Get to know Us</h4>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Press Releases</p>
                    <p>Amazon Science</p>

                </div>
                    
                <div>
                     <h4>Connect with Us</h4>
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>Instagram</p>
                </div>
                   
                <div>
                    <h4>Make money with Us</h4>
                    <p>Sell on Amazon</p>
                    <p>Sell under Amazon Accelerator</p>
                    <p>Protect and Build Your Brand</p>
                    <p>Amazon Global Selling</p>
                    <p>Become an Affiliate</p>
                    <p>Fulfilment by Amazon</p>
                    <p>Advertise Your Products</p>
                    <p>Amazon Pay on Merchants</p>
                </div>

                <div>
                    <h4>Let Us Help you</h4>
                    <p>COVID-19 and Amazon</p>
                    <p>Your Account</p>
                    <p>Returns Centre</p>
                    <p>100% Purchase Protection</p>
                    <p>Amazon App Download</p>
                    Help
                </div>

            </div>
            <hr/>
            <div className="available-info">
                <div className="amazon-icon"></div>
                <div class="footer-line">
                    <a href="/customer-preferences/edit?ie=UTF8&amp;preferencesReturnUrl=%2Fref%3Dnav_logo&amp;ref_=footer_lang" aria-label="Choose a language for shopping." class="icp-button" id="icp-touch-link-language">
                    <div class="globe-icon"></div>
                    <span class="lan-line">English</span>
                    <span class="arrow-icon-2"></span>
                    </a>


                </div>

            </div>

            <div className="country-info">
                {
                    countryInfo.map((item)=>{
                        return (
                            <div classname="each-country">{item}</div>
                        )
                    })
                }

            </div>
            
            <div className="collections">
                {
                    collections.map((item)=>{
                        return (
                            <div classname="each-collection">
                                <span className="title">{item.title}
                                </span> 
                                <p className="des">{item.des}</p>   
                            </div>
                        )
                    })
                }
            
            </div>

            <div className="copyright">
                <div className="copy-1">
                    <span>Conditions of Use & Sale</span>
                    <span>Privacy Notice</span>
                    <span>Interest-Based Ads</span>
                </div>
                <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>

            </div>
        </div>
    )
}

export default Footer;