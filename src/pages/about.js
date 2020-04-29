import Layout, { aboutTitle, aboutDesc } from "../components/layout";
import Head from "next/head";

const about = () => {
    return (
        <Layout>
            <Head>
                <title>{aboutTitle}</title>
                <meta name="description" content={aboutDesc} />
            </Head>
            <div>
                <h1 className="container">about</h1>
            </div>
        </Layout>
    );
};

export default about;
