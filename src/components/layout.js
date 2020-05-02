import Nav from "../components/Nav";
import Footer from "../components/Footer";
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

            {/* NavBar */}
            <Nav />

            {/* body */}
            {props.children}

            <Footer />
        </div>
    );
};

export default Layout;
