import Nav from "../components/Nav";
import Head from "next/head";

const name = "Shu Uesugi";
export const siteTitle = "Next.js Sample Website";
export const aboutTitle = "about";

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title></title>
                <link
                    rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                    crossOrigin="anonymous"
                />
                <script
                    src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
                    integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
                    crossOrigin="anonymous"
                ></script>
            </Head>
            <Nav />
            {props.children}
        </div>
    );
};

export default Layout;
