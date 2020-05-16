import Head from "next/head";
import { useState } from "react";
import { contactTitle, contactDesc } from "../components/PageTitles";
import Layout from "../components/layout";
import FormAccepted from "../components/FormAccepted";
import Button from "../components/Button";

const contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [messageSent, setMessageSent] = useState({
        state: false,
        message: "",
    });
    const [buttonState, setButtonState] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        setButtonState(true);

        const form = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, subject, message }),
        };
        fetch("/api/admin/contact", form).then((res) => {
            // check status code
            if (res.status === 400) {
                // need to set focus on wrong field
                return setButtonState(false);
            } else if (res.status === 404) {
                return setMessageSent({
                    state: false,
                    message:
                        "Server fault <br /> Refresh the page and try again!",
                });
            }
            return setMessageSent({
                state: true,
                message: "Thank you!",
            });
        });
    }

    return (
        <Layout>
            <Head>
                <title>{contactTitle}</title>
                <meta name="description" content={contactDesc} />
            </Head>
            <div className="page section-color">
                <div className="container pb-5">
                    <div className="text-center py-4">
                        <h1>Contact Will</h1>
                        <p>
                            Reach out to will wbout his future plans, or if you
                            interested in sponsoring!
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            {messageSent.state ? (
                                <FormAccepted text={messageSent.message} />
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <input
                                            type="name"
                                            name="name"
                                            className="form-control"
                                            id="name"
                                            placeholder="Name"
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="name@example.com"
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="subject"
                                            name="subject"
                                            className="form-control"
                                            id="subject"
                                            placeholder="Subject"
                                            onChange={(e) =>
                                                setSubject(e.target.value)
                                            }
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            className="form-control"
                                            name="message"
                                            id="message"
                                            rows="5"
                                            onChange={(e) =>
                                                setMessage(e.target.value)
                                            }
                                            placeholder="Leave a message here..."
                                        ></textarea>
                                    </div>
                                    <div className="text-center">
                                        <Button state={buttonState} />
                                    </div>
                                </form>
                            )}
                        </div>
                        <div className="sm-hidden col-md-0 col-md-6">
                            <div className="contact-img">img goes here</div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default contact;
