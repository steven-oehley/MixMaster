import { Form, redirect, useNavigation } from "react-router-dom";
import axios from "axios";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  const response = axios.post(
    "https://www.course-api.com/cocktails-newsletter",
    data
  );
  console.log(response);
  return redirect("/");
};

const NewsLetter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div>
      <h4 className="text-center text-primary text-3xl">Join Our Newsletter</h4>
      <Form
        className="flex justify-center items-center flex-col ring-2 ring-secondary rounded-xl mt-4 px-4 py-8 w-1/2 mx-auto"
        method="POST"
      >
        <div className="flex gap-2 items-center">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name..."
            className="bg-secondary text-base placeholder:text-base-300 rounded-xl p-2"
            defaultValue="test"
          />
        </div>
        <div className="flex gap-2 items-center">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter your lastName..."
            className="bg-secondary text-base placeholder:text-base-300 rounded-xl p-2"
            defaultValue="testorrrr"
          />
        </div>
        <div className="flex gap-2 items-center mt-4">
          <label htmlFor="name">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email..."
            className="bg-secondary text-base placeholder:text-base-300 rounded-xl p-2"
            defaultValue="test@test.com"
          />
        </div>
        <button className="btn btn-success mt-8">
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </Form>
    </div>
  );
};
export default NewsLetter;
