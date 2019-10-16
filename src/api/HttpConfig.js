// const BASE_URL = "https://www.fastmock.site/mock/a2b5464332729712f4f8667f05e309fc/blog";
const BASE_URL = "http://localhost:8080";
var config = {
    menu: {
        list: BASE_URL + "/menu"
    },
    blog: {
        list: BASE_URL + "/blog",
        detail: BASE_URL + "/blog/detail"
    }
};

export default config;