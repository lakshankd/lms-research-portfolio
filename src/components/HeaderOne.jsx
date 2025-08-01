"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import $ from "jquery";
import { usePathname, useRouter } from "next/navigation";

const HeaderOne = () => {
  let pathname = usePathname();
  const [scroll, setScroll] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("select2").then(() => {
        const selectElement = $(".js-example-basic-single");
        if (selectElement.length > 0) {
          selectElement.select2(); // Initialize Select2
        }
      });
    }

    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
    if (!isMenuActive) {
      document.body.classList.add("scroll-hide-sm");
    } else {
      document.body.classList.remove("scroll-hide-sm");
    }
  };

  const closeMenu = () => {
    setIsMenuActive(false);
    document.body.classList.remove("scroll-hide-sm");
  };

  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmenuClick = (index) => {
    if (windowWidth < 992) {
      setActiveSubmenu((prevIndex) => (prevIndex === index ? null : index));
    }
  };

  const menuItems = [
    { href: "/", label: "Home" },
    {
      label: "Research Scope",
      links: [
        {
          href: "/project-scope/#literature-survey",
          label: "Literature Survey",
        },
        { href: "/project-scope/#research-gap", label: "Research Gap" },
        {
          href: "/project-scope/#research-problem",
          label: "Research Problem",
        },
        {
          href: "/project-scope/#research-objectives",
          label: "Research Objectives",
        },
        { href: "/project-scope/#methodology", label: "Methodology" },
        { href: "/project-scope/#technologies", label: "Technologies" },
      ],
    },
    { href: "/milestones", label: "Milestones" },
    {
      label: "Downloads",
      links: [
        {
          href: "/downloads/#documents",
          label: "Documents",
        },
        { href: "/downloads/#presentations", label: "Presentations" },
      ],
    },
    { href: "/about-us", label: "About Us" },
    { href: "/contact-us", label: "Contact Us" },

    // {
    //   label: "Home",
    //   links: [
    //     { href: "/", label: "Home LMS" },
    //     { href: "/index-2", label: "Home Online Course" },
    //     { href: "/index-3", label: "Home University" },
    //     { href: "/index-4", label: "Home Tutor" },
    //   ],
    // },
    // {
    //   label: "Courses",
    //   links: [
    //     { href: "/course", label: "Course Grid View" },
    //     { href: "/course-list-view", label: "Course List View" },
    //     { href: "/course-details", label: "Course Details" },
    //     { href: "/lesson-details", label: "Lesson Details" },
    //   ],
    // },
    // {
    //   label: "Pages",
    //   links: [
    //     { href: "/about", label: "About" },
    //     { href: "/about-two", label: "About Two" },
    //     { href: "/about-three", label: "About Three" },
    //     { href: "/about-four", label: "About Four" },
    //     { href: "/product", label: "Product" },
    //     { href: "/product-details", label: "Product Details" },
    //     { href: "/cart", label: "Cart" },
    //     { href: "/checkout", label: "Checkout" },
    //     { href: "/pricing-plan", label: "Pricing Plan" },
    //     { href: "/instructor", label: "Instructor" },
    //     { href: "/instructor-two", label: "Instructor Two" },
    //     { href: "/instructor-details", label: "Instructor Details" },
    //     { href: "/tutor", label: "Premium Tutors" },
    //     { href: "/tutor-details", label: "Premium Tutors Details" },
    //     { href: "/faq", label: "FAQ" },
    //     { href: "/tuition-jobs", label: "Tuition Jobs" },
    //     { href: "/events", label: "Events" },
    //     { href: "/event-details", label: "Event Details" },
    //     { href: "/apply-admission", label: "Apply Admission" },
    //     { href: "/gallery", label: "Gallery" },
    //     { href: "/privacy-policy", label: "Privacy Policy" },
    //     { href: "/favorite-course", label: "Favorite Course" },
    //     { href: "/find-tutors", label: "Find Best Tutors" },
    //     { href: "/book-online-class", label: "Book Online Class" },
    //   ],
    // },

    // {
    //   label: "Blog",
    //   links: [
    //     { href: "/blog", label: "Blog Grid" },
    //     { href: "/blog-list", label: "Blog List" },
    //     { href: "/blog-classic", label: "Blog Classic" },
    //     { href: "/blog-details", label: "Blog Details" },
    //   ],
    // },
    // { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <div className={`side-overlay ${isMenuActive ? "show" : ""}`}></div>
      <header className={`header ${scroll ? "fixed-header" : ""}`}>
        <div className="container container--xl">
          <nav className="header-inner flex-between gap-8">
            <div className="header-content-wrapper flex-align flex-grow-1">
              {/* Logo Start */}
              <div className="logo">
                <Link href="/" className="link">
                  <img
                    src="assets/images/logo/logo-new.png"
                    alt="Logo"
                    style={{ height: "54px" }}
                  />
                </Link>
              </div>
              {/* Logo End  */}
              {/* Select Start */}
              {/* <div className="d-sm-block d-none">
                <div className="header-select border border-neutral-30 bg-main-25 rounded-pill position-relative">
                  <span className="select-icon position-absolute top-50 translate-middle-y inset-inline-start-0 z-1 ms-lg-4 ms-12 text-xl pointer-event-none d-flex">
                    <i className="ph-bold ph-squares-four" />
                  </span>
                  <select
                    className="js-example-basic-single border-0"
                    name="state"
                    defaultValue="categories"
                  >
                    <option value={"Categories"}>Categories</option>
                    <option value={"Design"}>Design</option>
                    <option value={"Development"}>Development</option>
                    <option value={"Architecture"}>Architecture</option>
                    <option value={"Life Style"}>Life Style</option>
                    <option value={"Data Science"}>Data Science</option>
                    <option value={"Marketing"}>Marketing</option>
                    <option value={"Music"}>Music</option>
                    <option value={"Typography"}>Typography</option>
                    <option value={"Finance"}>Finance</option>
                    <option value={"Motivation"}>Motivation</option>
                  </select>
                </div>
              </div> */}
              {/* Select End */}
              {/* Menu Start  */}
              {/* Menu End  */}
            </div>
            {/* Header Right start */}
            <div className="header-right flex-align">
              <div className="header-menu d-lg-block d-none">
                <ul className="nav-menu flex-align">
                  {menuItems.map((item, index) =>
                    item.links ? (
                      <li
                        key={`menu-item-${index}`}
                        className="nav-menu__item has-submenu"
                      >
                        <Link href="" className="nav-menu__link">
                          {item.label}
                        </Link>
                        <ul className={`nav-submenu scroll-sm`}>
                          {item.links.map((link, linkIndex) => (
                            <li
                              key={`submenu-item-${linkIndex}`}
                              className={`nav-submenu__item ${
                                pathname == link.href && "activePage"
                              }`}
                            >
                              <Link
                                href={link.href}
                                className="nav-submenu__link hover-bg-neutral-30"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ) : (
                      <li
                        key={`menu-contact-${index}`}
                        className={`nav-menu__item ${
                          pathname == item.href && "activePage"
                        }`}
                      >
                        <Link href={item.href} className="nav-menu__link">
                          {item.label}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <button
                type="button"
                className="toggle-mobileMenu d-lg-none text-neutral-200 flex-center"
                onClick={toggleMenu}
              >
                <i className="ph ph-list" />
              </button>
            </div>
            {/* Header Right End  */}
          </nav>
        </div>
      </header>

      <div
        className={`mobile-menu scroll-sm d-lg-none d-block ${
          isMenuActive ? "active" : ""
        }`}
      >
        <button type="button" className="close-button" onClick={closeMenu}>
          <i className="ph ph-x" />{" "}
        </button>
        <div className="mobile-menu__inner">
          <Link href="/" className="mobile-menu__logo">
            <img
              src="assets/images/logo/logo-new.png"
              alt="Logo"
              style={{ height: "54px" }}
            />
          </Link>
          <div className="mobile-menu__menu">
            <ul className="nav-menu flex-align nav-menu--mobile">
              {menuItems.map((item, index) =>
                item.links ? (
                  <li
                    key={`menu-item-${index}`}
                    className={`nav-menu__item has-submenu ${
                      activeSubmenu === index ? "activePage" : ""
                    }`}
                    onClick={() => handleSubmenuClick(index)}
                  >
                    <Link href="" className="nav-menu__link">
                      {item.label}
                    </Link>
                    <ul className={`nav-submenu scroll-sm`}>
                      {item.links.map((link, linkIndex) => (
                        <li key={linkIndex} className="nav-submenu__item">
                          <Link
                            href={link.href}
                            className="nav-submenu__link hover-bg-neutral-30"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li
                    className={`nav-menu__item ${
                      pathname == item.href && "activePage"
                    }`}
                    key={index}
                  >
                    <Link href={item.href} className="nav-menu__link">
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
            {/* <div className="d-sm-none d-block mt-24">
              <div className="header-select border border-neutral-30 bg-main-25 rounded-pill position-relative">
                <span className="select-icon position-absolute top-50 translate-middle-y inset-inline-start-0 z-1 ms-lg-4 ms-12 text-xl pointer-event-none d-flex">
                  <i className="ph-bold ph-squares-four" />
                </span>
                <select
                  className="js-example-basic-single border-0"
                  name="state"
                >
                  <option value={"Categories"}>Categories</option>
                  <option value={"Design"}>Design</option>
                  <option value={"Development"}>Development</option>
                  <option value={"Architecture"}>Architecture</option>
                  <option value={"Life Style"}>Life Style</option>
                  <option value={"Data Science"}>Data Science</option>
                  <option value={"Marketing"}>Marketing</option>
                  <option value={"Music"}>Music</option>
                  <option value={"Typography"}>Typography</option>
                  <option value={"Finance"}>Finance</option>
                  <option value={"Motivation"}>Motivation</option>
                </select>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderOne;
