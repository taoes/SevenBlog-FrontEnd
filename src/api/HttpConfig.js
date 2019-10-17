// const BASE_URL = "https://www.fastmock.site/mock/a2b5464332729712f4f8667f05e309fc/blog";
const BASE_URL = "https://api.zhoutao123.com";

const GITHUB_BASE_URL = "https://api.github.com/users/zhou-seven";


var config = {
    menu: {
        list: BASE_URL + "/menu"
    },
    blog: {
        list: BASE_URL + "/blog",
        detail: BASE_URL + "/blog/detail"
    },
    github: {
        repos: GITHUB_BASE_URL + "/repos"
    }
};

export default config;