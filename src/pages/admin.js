import Head from "next/head";
import Layout, { homeTitle, homeDesc } from "../components/layout";
import styles from "../pageStyles/Admin.module.css";
import { useState } from "react";

const admin = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        const sendForm = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: "userName", password: "password" }),
        };
        fetch("/api/admin", sendForm).then((res) => {
            if (res.status) {
                return <Home />;
            }
        });
    }

    return (
        <Layout>
            <Head>
                <title>{homeTitle}</title>
                <meta name="description" content={homeDesc} />
            </Head>
            <div className="page">
                <h3 className={styles.title}>Login Page</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 mx-auto">
                            <form
                                className={styles.loginForm}
                                // action="/api/admin"
                                // method="POST"
                                onSubmit={handleSubmit}
                            >
                                <input
                                    className="my-3"
                                    name="username"
                                    type="text"
                                    placeholder="username"
                                    onChange={(e) =>
                                        setUserName(e.target.value)
                                    }
                                />
                                <input
                                    className="my-3"
                                    name="password"
                                    type="password"
                                    placeholder="password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                                <button
                                    type="submit"
                                    className="btn btn-success"
                                >
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default admin;
