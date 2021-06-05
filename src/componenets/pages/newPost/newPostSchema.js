import * as Yup from "yup";

const newPostSchema = Yup.object().shape({
	title: Yup.string().required("Title is required"),
	body: Yup.string().required("Body is required"),
	imageUrl: Yup.string("Image URL must be a string")
});

export default newPostSchema;
