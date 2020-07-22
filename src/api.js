const https = require("https");
const apiHost = "https://api.qsellqbuy.com";

export default const api = {
	login(func, err) {
		func(true);
	}
	logout(func, err) {
		func(true);
	}
}