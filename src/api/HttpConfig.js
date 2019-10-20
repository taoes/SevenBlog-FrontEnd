// const BASE_URL = "http://localhost:8080";
const BASE_URL = "https://api.zhoutao123.com";
//
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
        repos: BASE_URL + "/github/repos"
    }
};

export default config;
