import Link from "next/link";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand">WC</a>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav ml-auto" id="nav">
                        <Link href="/tournaments">
                            <a className="nav-item nav-link">Tournaments</a>
                        </Link>
                        <Link href="/about">
                            <a className="nav-item nav-link">About</a>
                        </Link>
                        <Link href="/team">
                            <a className="nav-item nav-link">Team</a>
                        </Link>
                        <Link href="/contact">
                            <a className="nav-item nav-link">Contact</a>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
