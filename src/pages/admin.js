import Head from "next/head";
import { useState } from "react";
// import { login } from "next-authentication";
import Layout from "../components/layout";
import { adminTitle } from "../components/PageTitles";
import styles from "../pageStyles/Admin.module.css";

const admin = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        const sendForm = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        };
        await fetch("/api/admin/login", sendForm).then((res) => {
            if (res.ok) {
                console.log(res.json());
                // const { token } = res.json();
                console.log(token);
                const loginOption = {
                    token,
                    cookieOptions: {
                        maxAge: 30 * 24 * 60 * 60,
                        path: "/admin/panal",
                    },
                    callback: () => Router.push("/admin/panal"),
                };
                // login(loginOption);
            } else {
                console.log("Login failed");
            }
        });
    }

    return (
        <Layout>
            <Head>
                <title>{adminTitle}</title>
            </Head>
            <div className="page">
                <h3 className={styles.title}>Login Page</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 mx-auto">
                            <form
                                className={styles.loginForm}
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
