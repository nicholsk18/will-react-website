const PageData = require("./data.model");

const getData = async (req, res) => {
    try {
        const pageData = await PageData.find({ pageName: req.body.pageName });
        res.send(pageData);
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
};

const createData = async (req, res) => {
    const pageData = new PageData({
        pageName: req.body.name,
        pageContent: req.body.page,
    });

    // pageData.items = { items: req.body.page };

    try {
        await pageData.save();
        res.status(201).send(pageData);
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
};

const updateData = async (req, res) => {};

const getStats = async (req, res) => {};
const updateStats = async (req, res) => {};

module.exports = {
    getData,
    createData,
    updateData,
    getStats,
    updateStats,
};
