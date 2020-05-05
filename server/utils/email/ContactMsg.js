module.exports = function ContactMsg(name, email, subject, message) {
    this.from = email;
    this.to = process.env.USER_EMAIL_TEST;
    this.subject = subject;
    this.html = `<h1>This email was from ${name}</h1>
                <small>email: ${email}</small>
                <br />
                <p>${message}</p>
                `;
};
