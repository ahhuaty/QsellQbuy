const https = require("https");
const apiHost = "https://api.qsellqbuy.com";
const loginResponse = {
	"response": "ok",
	"message": {
		"name": "Sionggo Japit",
		"address": "Jurong West Street 73",
		"token": "raw0r9e7ayifuhari",
	}
}

const logoutResponse = {
	"response": "ok",
	"message": "You have been logged out successfully",
}
export const api = {
	login(func, err) {
		if (loginResponse.response === "ok") {
			func(loginResponse.message);
		} else {
			err(loginResponse.message);
		}
	},
	logout(func, err) {
		if (logoutResponse.response === "ok") {
			func(logoutResponse.message);
		} else {
			err(logoutResponse.message);
		}
	}
}