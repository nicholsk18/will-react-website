import Nav from "../components/Nav";
import Head from "next/head";

export const homeTitle =
    "The official Website of Professional Golfer Will Cannon";
export const homeDesc = "";
export const tournamentsTitle = "Tournaments | Korn Ferry Tour - Will Cannon";
export const tournamentsDesc = "";
export const aboutTitle = "Learn more about professional golfer Will Cannon";
export const aboutDesc = "";
export const teamTitle = "Learn more about Will team | Will Cannon Golf";
export const teamDesc = "";
export const contactTitle = "Contact Will Cannon Today!";
export const contactDesc = "";

const Layout = (props) => {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <link
                    rel="stylesheet"
                    href="./styles/main.css"
                    type="text/css"
                />
                <link
                    rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                    rel="stylesheet"
                    integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
                    crossOrigin="anonymous"
                />
                {/* <!-- <link href="https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap" rel="stylesheet">   --> */}
                <link
                    href="https://fonts.googleapis.com/css?family=Courgette&display=swap"
                    rel="stylesheet"
                />

                {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=UA-154033556-2"
                ></script>
                {/* <script>
                    window.dataLayer = window.dataLayer || []; function gtag()
                    {window.dataLayer.push({ arguments })}
                    gtag('js', new Date()); gtag('config', 'UA-154033556-2');
                </script> */}
            </Head>
            <Nav />

            {/* body */}
            {props.children}

            {/* common footer stuff */}
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
                        Created by
                        <strong>
                            <a href="https://karsonnichols.com/">
                                Karson Nichols.
                            </a>
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
        </div>
    );
};

export default Layout;
