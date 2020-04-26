import Layout, { aboutTitle } from "../components/layout";
import Head from "next/head";

const about = () => {
    return (
        <Layout>
            <Head>
                <title>{aboutTitle}</title>
            </Head>
            <div>
                <h1 className="container">about</h1>
            </div>
        </Layout>
    );
};

export default about;
