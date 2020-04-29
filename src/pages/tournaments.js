import Layout, {
    tournamentsDesc,
    tournamentsTitle,
} from "../components/layout";
import Head from "next/head";

const tournaments = () => {
    return (
        <Layout>
            <Head>
                <title>{tournamentsTitle}</title>
                <meta name="description" content={tournamentsDesc} />
            </Head>
            <div>
                <h1 className="container">Tournaments</h1>
            </div>
        </Layout>
    );
};

export default tournaments;
