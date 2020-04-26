import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";

export default function Home({ allPostsData }) {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section>
                <p>
                    Hello, I’m <strong>Shu</strong>. I’m a software engineer and
                    a translator (English/Japanese). You can contact me on{" "}
                    <a href="https://twitter.com/chibicode">Twitter</a>.
                </p>
                <p>
                    (This is a sample website - you’ll be building a site like
                    this on{" "}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>
                    .)
                </p>
            </section>
            <section>
                <h2>Blog</h2>
            </section>
        </Layout>
    );
}
