function Header() {
    return (
       <>
            <div className="navbar-area">
                <div className="main-responsive-nav">
                    <div className="container">
                        <div className="main-responsive-menu">
                            <div className="logo">
                                <a href="index.html">
                                    <img src="assets/images/black-logo.webp" className="black-logo" alt="image" />
                                        <img src="assets/images/white-logo.webp" className="white-logo" alt="image" />
                                        </a>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-navbar">
                        <div className="container-fluid">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <a className="navbar-brand" href="index.html">
                                    <img src="assets/images/black-logo.webp" className="black-logo" alt="image"/>
                                        <img src="assets/images/white-logo.webp" classNameName="white-logo" alt="image"/>
                                        </a>
                                        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                            <ul className="navbar-nav ms-auto">
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link active">
                                                        Index
                                                        <i className="bx bx-down-arrow-alt"></i>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="/services" className="nav-link">
                                                    Services
                                                        <i className="bx bx-down-arrow-alt"></i>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li className="nav-item">
                                                            <a href="/service-details" className="nav-link">Services Details</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="/about" className="nav-link">
                                                        About us
                                                        <i className="bx bx-down-arrow-alt"></i>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="/blog" className="nav-link">
                                                        Blog
                                                        <i className="bx bx-down-arrow-alt"></i>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="/contact" className="nav-link">Contact Us</a>
                                                </li>
                                            </ul>
                                            <div className="others-options d-flex align-items-center">
                                                <div className="option-item">
                                                    <button className="searchbtn" type="button">
                                                        <i className="bx bx-search"></i>
                                                    </button>
                                                </div>
                                                <div className="option-item">
                                                    <a href="contact.html" className="default-btn">Get A Quote</a>
                                                </div>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                        </div>
                        <div className="others-option-for-responsive">
                            <div className="container">
                                <div className="dot-menu">
                                    <div className="inner">
                                        <div className="circle circle-one"></div>
                                        <div className="circle circle-two"></div>
                                        <div className="circle circle-three"></div>
                                    </div>
                                </div>
                                <div className="container">
                                    <div className="option-inner">
                                        <div className="others-options d-flex align-items-center">
                                            <div className="option-item">
                                                <button className="searchbtn" type="button">
                                                    <i className="bx bx-search"></i>
                                                </button>
                                            </div>
                                            <div className="option-item">
                                                <a href="contact.html" className="default-btn">Get A Quote</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="search-area">
                        <div className="container">
                            <button type="button" className="close-searchbox">
                                <i className="bx bx-x"></i>
                            </button>
                            <form action="#" className="search-form">
                                <div className="form-group">
                                    <input type="search" placeholder="Search Here" />
                                </div>
                            </form>
                        </div>
                    </div>
                </>
                )
}


                export default Header;