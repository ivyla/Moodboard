import {slide as Menu} from "react-burger-menu"

const NavBar = () => {
    return (
        <nav className="w-screen bg-primary text-right px-5 py-5 h-4">
            <span style={{float: "left"}} className="text-xl">
                <a className="block" href="facebook.com">
                    {" "}
                    Moodboard
                </a>
            </span>
            {/* <Menu right pageWrapId={"page-wrap"}>
                <a id="home" className="menu-item" href="/">
                    Home
                </a>
                <a id="about" className="menu-item" href="/about">
                    About
                </a>
                <a id="contact" className="menu-item" href="/contact">
                    Contact
                </a>
            </Menu> */}

            {/* <button>
                {" "}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>{" "}
            </button> */}
        </nav>
    )
}

export default NavBar
