import Link from "next/link";
const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container text-center">
                    <div className="py-1">
                        <a
                            href="https://twitter.com/willcvnnon"
                            className="pr-4"
                        >
                            <i className="fa fa-twitter fa-2x"></i>
                        </a>
                        <a href="https://www.instagram.com/willcvnnon/">
                            <i className="fa fa-instagram fa-2x"></i>
                        </a>
                    </div>
                    <p className="author">
                        Created by{" "}
                        <strong>
                            <Link href="https://karsonnichols.com/">
                                Karson Nichols
                            </Link>
                            {". "}
                        </strong>
                        All rights reserved.
                    </p>
                </div>
            </footer>
            <script src="./js/index.js"></script>
            <script
                src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
                integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
                crossOrigin="anonymous"
            ></script>
            <script
                src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
                integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
                crossOrigin="anonymous"
            ></script>
            <script
                src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
                integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
                crossOrigin="anonymous"
            ></script>
        </>
    );
};

export default Footer;
