import { Form, useNavigation } from "react-router-dom";

const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.status === "submitting";
  return (
    <div>
      <Form className="flex justify-center my-12 gap-8">
        <input
          type="search"
          name="search"
          defaultValue={searchTerm}
          placeholder="Search Cocktails"
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <button className="btn btn-outline btn-accent" disabled={isSubmitting}>
          {isSubmitting ? "Searching...." : "Search"}
        </button>
      </Form>
    </div>
  );
};
export default SearchForm;
