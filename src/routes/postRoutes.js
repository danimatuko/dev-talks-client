var express = require("express");
var router = express.Router();
const { db } = require("../../db");

router.get("/", (req, res) => {
	db.query("SELECT * FROM posts", (err, result) => {
		if (err) {
			res.json(err);
		} else {
			res.json(result);
		}
	});
});

router.post("/", (req, res) => {
	const insertQuery = "INSERT INTO posts SET ?";
	db.query(insertQuery, req.body, (err, result) => {
		if (err) {
			res.json(err);
		} else {
			res.json({ msg: "post added successfully", post: req.body });
		}
	});
});

router.put("/:post_id", (req, res) => {
	const updateQuery = "UPDATE posts SET title = ?, body = ? WHERE post_id= ?";
	db.query(
		updateQuery,
		[req.body.title, req.body.body, req.params.id],
		(err, result) => {
			if (err) {
				res.json(err);
			} else {
				res.json({ msg: "post edited successfully", post: req.body });
			}
		}
	);
});

router.delete("/:id", (req, res) => {
	db.query(
		"DELETE FROM posts WHERE post_id = ?",
		req.params.id,
		(err, result) => {
			if (err) {
				res.json(err);
			} else {
				res.json({
					msg: "post deleted successfully"
				});
			}
		}
	);
});

module.exports = router;
