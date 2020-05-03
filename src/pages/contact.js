import Head from "next/head";
import { contactTitle, contactDesc } from "../components/PageTitles";
import Layout from "../components/layout";

const contact = () => {
    return (
        <Layout>
            <Head>
                <title>{contactTitle}</title>
                <meta name="description" content={contactDesc} />
            </Head>
            <div>
                <h1 className="container">contact</h1>
            </div>
        </Layout>
    );
};

export default contact;
