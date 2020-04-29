import Layout, { contactTitle, contactDesc } from "../components/layout";
import Head from "next/head";

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
