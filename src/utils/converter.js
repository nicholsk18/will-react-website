const converter = ({ title, subTitle, events }) => {
    let arr = [];

    arr.push("<-- START TITLE -->");
    arr.push("\n");
    arr.push(title);
    arr.push("\n");
    arr.push("<-- END TITLE -->");
    arr.push("\n");

    arr.push("<-- START SUBTITLE -->");
    arr.push("\n");
    arr.push(subTitle);
    arr.push("\n");
    arr.push("<-- END SUBTITLE -->");
    arr.push("\n");

    if (events) {
        events.forEach((element) => {
            arr.push("<-- START SECTION -->");
            arr.push("\n");
            arr.push(element);
            arr.push("\n");
            arr.push("<-- END SECTION -->");
            arr.push("\n");
        });
    }
    return arr;
};

export default converter;
