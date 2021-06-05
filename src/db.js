const mysql = require("mysql");

//MySQL details
var db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password",
	database: "mysqlBlog",
	multipleStatements: true
});

const connectToDb = () => {
	db.connect((err) => {
		if (!err) console.log("Connection Established Successfully");
		else
			console.log(
				"Connection Failed!" + JSON.stringify(err, undefined, 2)
			);
	});
};

module.exports = {db,connectToDb};
