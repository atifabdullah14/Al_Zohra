"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const HeaderOne = () => {
  let pathname = usePathname();
  let [search, setSearch] = useState(false);
  let [mobileMenu, setMobileMenu] = useState(false);
  const [scroll, setScroll] = useState(false);
  const handleSearch = () => {
    setSearch(!search);
  };
  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const mobileMenuListRef = useRef(null);

  useEffect(() => {
    const desktopMenu = document.querySelector(".navbar__menu");

    if (desktopMenu && mobileMenuListRef.current) {
      mobileMenuListRef.current.innerHTML = desktopMenu.innerHTML;

      const setupDropdownToggles = (container) => {
        const dropdownLabels = container.querySelectorAll(
          ".navbar__dropdown-label"
        );

        dropdownLabels.forEach((label) => {
          label.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();

            const subMenu = this.nextElementSibling;

            // ✅ Only close siblings within the same level (UL)
            const siblingLabels = Array.from(
              this.closest("ul")?.querySelectorAll(
                ":scope > li > .navbar__dropdown-label"
              ) || []
            );

            siblingLabels.forEach((sibling) => {
              const siblingSubMenu = sibling.nextElementSibling;

              if (
                sibling !== this &&
                siblingSubMenu &&
                siblingSubMenu.classList.contains("navbar__sub-menu")
              ) {
                siblingSubMenu.style.maxHeight = "0px";
                siblingSubMenu.classList.remove("show");
                sibling.classList.remove("navbar__item-active");
              }
            });

            // Toggle current submenu with smooth animation
            if (subMenu && subMenu.classList.contains("navbar__sub-menu")) {
              const isOpen = subMenu.classList.contains("show");

              if (isOpen) {
                subMenu.style.maxHeight = "0px";
                subMenu.classList.remove("show");
                this.classList.remove("navbar__item-active");
              } else {
                subMenu.classList.add("show");
                subMenu.style.maxHeight = subMenu.scrollHeight + "px";
                this.classList.add("navbar__item-active");
              }
            }
          });
        });
      };

      setupDropdownToggles(mobileMenuListRef.current);
    }
  }, []);

  return (
    <>
      <header
        className={`header header-secondary ${scroll && "sticky-header"}`}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='main-header__menu-box'>
                <nav className='navbar p-0'>
                  <div className='navbar-logo'>
                    <Link href='/'>
                      <img src='/assets/images/logo.png' alt='Image_inner' />
                    </Link>
                  </div>
                  <div className='navbar__menu-wrapper'>
                    <div className='navbar__menu d-none d-xl-block'>
                      <ul className='navbar__list'>
                        <li
                          className={`navbar__item navbar__item--has-children nav-fade ${
                            pathname === "/" ? "active" : ""
                          }`}
                        >
                          <Link
                            href='/'
                            aria-label=' menu'
                            className=''
                          >
                            Home
                          </Link>
                          {/* <ul className='navbar__sub-menu mega-menu'>
                            <li>
                              <div className='mega-content-wrapper'>
                                <img
                                  src='/assets/images/home-one.png'
                                  alt='Image_inner'
                                />
                                <div className='mega-content'>
                                  <Link href='/' className='btn--primary'>
                                    Demo
                                  </Link>
                                </div>
                              </div>
                              <Link href='/'>Home One</Link>
                            </li>
                            <li>
                              <div className='mega-content-wrapper'>
                                <img
                                  src='/assets/images/home-two.png'
                                  alt='Image_inner'
                                />
                                <div className='mega-content'>
                                  <Link
                                    href='/index-two'
                                    className='btn--secondary'
                                  >
                                    Demo
                                  </Link>
                                </div>
                              </div>
                              <Link href='/index-two'>Home Two</Link>
                            </li>
                            <li>
                              <div className='mega-content-wrapper'>
                                <img
                                  src='/assets/images/home-three.png'
                                  alt='Image_inner'
                                />
                                <div className='mega-content'>
                                  <Link
                                    href='/index-three'
                                    className='btn--primary'
                                  >
                                    Demo
                                  </Link>
                                </div>
                              </div>
                              <Link href='/index-three'>Home Three</Link>
                            </li>
                            <li>
                              <div className='mega-content-wrapper'>
                                <img
                                  src='/assets/images/home-four.png'
                                  alt='Image_inner'
                                />
                                <div className='mega-content'>
                                  <Link
                                    href='/index-four'
                                    className='btn--primary'
                                  >
                                    Demo
                                  </Link>
                                </div>
                                <span className='new'>New</span>
                              </div>
                              <Link href='/index-four'>Home Four</Link>
                            </li>
                            <li>
                              <div className='mega-content-wrapper'>
                                <img
                                  src='/assets/images/home-five.png'
                                  alt='Image_inner'
                                />
                                <div className='mega-content'>
                                  <Link
                                    href='/index-five'
                                    className='btn--primary'
                                  >
                                    Demo
                                  </Link>
                                </div>
                                <span className='new'>New</span>
                              </div>
                              <Link href='/index-five'>Home Five</Link>
                            </li>
                          </ul> */}
                        </li>
                         <li
                          className={`navbar__item navbar__item--has-children nav-fade ${
                            ["/our-causes", "/cause-details"].includes(pathname)
                              ? "active"
                              : ""
                          }`}
                        >
                          <Link
                            href='/about-us'
                            aria-label='dropdown menu'
                            className='navbar__dropdown-label dropdown-label-alter'
                          >
                             About Us
                          </Link>
                          <ul className='navbar__sub-menu'>
                            <li
                              className={
                                ["/annual-reports"].includes(pathname)
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link href='/our-story'>Our Story</Link>
                            </li>
                            
                            <li
                              className={
                                ["/media-and-news"].includes(pathname)
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link href='/media-and-news'>Mission & Vision</Link>
                            </li>
                            <li
                              className={
                                ["/events-workshops"].includes(pathname)
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link href='/our-team'>Leadership & Team</Link>
                            </li>
                            <li
                              className={
                                ["/blog"].includes(pathname)
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link href='/blog'>Legal & Certifications</Link>
                            </li>
                          </ul>
                        </li>
                      {/* <li
                          className={`navbar__item nav-fade ${
                            ["/about-us"].includes(pathname) ? "active" : ""
                          }`}
                        >
                          <Link href='/about-us'>About Us</Link>
                        </li> */}


                        <li
                          className={`navbar__item navbar__item--has-children nav-fade ${
                            ["/our-causes", "/cause-details"].includes(pathname)
                              ? "active"
                              : ""
                          }`}
                        >
                          <Link
                            href='#'
                            aria-label='dropdown menu'
                            className='navbar__dropdown-label dropdown-label-alter'
                          >
                            Resources
                          </Link>
                          <ul className='navbar__sub-menu'>
                            <li
                              className={
                                ["/annuel-reports"].includes(pathname)
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link href='/annual-reports'>Annual Reports</Link>
                            </li>
                            
                            <li
                              className={
                                ["/media-and-news"].includes(pathname)
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link href='/media-and-news'>Media & News</Link>
                            </li>
                            <li
                              className={
                                ["/events-workshops"].includes(pathname)
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link href='/events-workshops'>Events & Workshops</Link>
                            </li>
                            <li
                              className={
                                ["/blog"].includes(pathname)
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link href='/blog'>Blog</Link>
                            </li>
                          </ul>
                        </li>

                        
                                                <li
                          className={`navbar__item navbar__item--has-children nav-fade ${
                            ["/our-causes", "/cause-details"].includes(pathname)
                              ? "active"
                              : ""
                          }`}
                        >
                          <Link
                            href='#'
                            aria-label='dropdown menu'
                            className='navbar__dropdown-label dropdown-label-alter'
                          >
                            Get Involved
                          </Link>
                          <ul className='navbar__sub-menu'>
                            <li
                              className={
                                ["/our-causes"].includes(pathname)
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link href='/become-volunteer'>Become Volunteer</Link>
                            </li>
                            <li
                              className={
                                ["/cause-details"].includes(pathname)
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link href='/partner-with-us'>Partner with Us</Link>
                            </li>
                            
                          </ul>
                        </li>
                        <li
                          className={`navbar__item navbar__item--has-children nav-fade ${
                            [
                              "/faq",
                              "/donate-us",
                              "/become-volunteer",
                              "/events",
                              "/event-details",
                              "/shop",
                              "/product-details",
                              "/cart",
                              "/checkout",
                            ].includes(pathname)
                              ? "active"
                              : ""
                          }`}
                        >
                          <Link
                            href='#'
                            aria-label='dropdown menu'
                            className='navbar__dropdown-label dropdown-label-alter'
                          >
                            Programs
                          </Link>
                          <ul className='navbar__sub-menu'>
                            <li
                              className={
                                ["/vocational-training"].includes(pathname) ? "active" : ""
                              }
                            >
                              <Link href='/vocational-training'>Vocational Training</Link>
                            </li>
                            <li
                              className={
                                ["/welfare-assistance"].includes(pathname)
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link href='/welfare-assistance'>Welfare Assistance</Link>
                            </li>
                            <li
                              className={
                                ["/alzohra-secondary-school"].includes(pathname)
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link href='/alzohra-secondary-school'>
                                AlZOHRA SECONDARY SCHOOL (Regd)
                              </Link>
                            </li>
                            
                          </ul>
                        </li>
                        <li
                          className={`navbar__item navbar__item--has-children nav-fade ${
                            [
                              "/blog-list",
                              "/blog-grid",
                              "/blog-details",
                            ].includes(pathname)
                              ? "active"
                              : ""
                          } `}
                        >
                          <Link
                            href='/donate-us'
                            aria-label='dropdown menu'
                            className='navbar__dropdown-label dropdown-label-alter'
                          >
                            Donate
                          </Link>
                          <ul className='navbar__sub-menu'>
                            <li
                              className={
                                ["/blog-list"].includes(pathname)
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link href='/zakat-sadqah'>Zakat / Sadaqah</Link>
                            </li>
                            <li
                              className={
                                ["/blog-grid"].includes(pathname)
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link href='/one-time'>One-Time / Monthly Giving</Link>
                            </li>
                            <li
                              className={
                                ["/blog-details"].includes(pathname)
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link href='/sponsor-a-child'>Sponsor a Child / Project</Link>
                            </li>
                          </ul>
                        </li>
                        
                        <li
                          className={`navbar__item nav-fade ${
                            ["/contact-us"].includes(pathname) ? "active" : ""
                          } `}
                        >
                          <Link href='/contact-us'>Contact Us</Link>
                        </li>
                        
                      </ul>
                    </div>
                    <div className='contact-btn'>
                      <div className='contact-icon'>
                        <i className='icon-support' />
                      </div>
                      <div className='contact-content'>
                        <p>Call Us Now</p>
                        <a href='tel:01-793-7938'>(+92)-200-205478 </a>
                      </div>
                    </div>
                  </div>
                  <div className='navbar__options'>
                    <div className='navbar__mobile-options '>
                      <div className='search-box'>
                        <button
                          onClick={handleSearch}
                          className='open-search'
                          aria-label='search products'
                          title='open search box'
                        >
                          <i className='fa-solid fa-magnifying-glass' />
                        </button>
                      </div>
                      <Link
                        href='/donate-us'
                        className='btn--primary d-none d-md-flex'
                      >
                        Donate Now <i className='fa-solid fa-arrow-right' />
                      </Link>
                    </div>
                    <button
                      onClick={handleMobileMenu}
                      className='open-offcanvas-nav d-flex d-xl-none'
                      aria-label='toggle mobile menu'
                      title='open offcanvas menu'
                    >
                      <span className='icon-bar top-bar' />
                      <span className='icon-bar middle-bar' />
                      <span className='icon-bar bottom-bar' />
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            search ? "search-active search-popup" : "search-popup"
          }`}
        >
          <button
            onClick={handleSearch}
            className='close-search'
            aria-label='close search box'
            title='close search box'
          >
            <i className='fa-solid fa-xmark' />
          </button>
          <form action='#' method='post'>
            <div className='search-popup__group'>
              <input
                type='text'
                name='search-field'
                id='searchField'
                placeholder='Search....'
                required=''
              />
              <button
                type='submit'
                aria-label='search products'
                title='search products'
              >
                <i className='fa-solid fa-magnifying-glass' />
              </button>
            </div>
          </form>
        </div>
      </header>

      <div
        className={`mobile-menu mobile-menu--primary d-block d-xxl-none ${
          mobileMenu ? "show-menu" : ""
        }`}
      >
        <nav className='mobile-menu__wrapper'>
          <div className='mobile-menu__header nav-fade'>
            <div className='logo'>
              <Link href='/' aria-label='home page' title='logo'>
                <img src='assets/images/logo.png' alt='Image_inner' />
              </Link>
            </div>
            <button
              onClick={handleMobileMenu}
              aria-label='close mobile menu'
              className='close-mobile-menu'
            >
              <i className='fa-solid fa-xmark' />
            </button>
          </div>
          <div className='mobile-menu__list' ref={mobileMenuListRef}></div>

          <div className='mobile-menu__cta nav-fade d-block d-md-none'>
            <Link href='/donate-us' className='btn--primary '>
              Donate Now <i className='fa-solid fa-arrow-right' />
            </Link>
          </div>
          <div className='mobile-menu__social social nav-fade'>
            <Link
              href='https://www.facebook.com/'
              target='_blank'
              aria-label='share us on facebook'
              title='facebook'
            >
              <i className='fa-brands fa-facebook-f' />
            </Link>
            <Link
              href='https://vimeo.com/'
              target='_blank'
              aria-label='share us on vimeo'
              title='vimeo'
            >
              <i className='fa-brands fa-vimeo-v' />
            </Link>
            <Link
              href='https://x.com/'
              target='_blank'
              aria-label='share us on twitter'
              title='twitter'
            >
              <i className='fa-brands fa-twitter' />
            </Link>
            <Link
              href='https://www.linkedin.com/'
              target='_blank'
              aria-label='share us on linkedin'
              title='linkedin'
            >
              <i className='fa-brands fa-linkedin-in' />
            </Link>
          </div>
        </nav>
      </div>

      <div
        className={`mobile-menu__backdrop ${
          mobileMenu ? "mobile-menu__backdrop-active" : ""
        }`}
      ></div>
    </>
  );
};

export default HeaderOne;
