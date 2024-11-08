import { Outlet, useNavigation } from "react-router-dom";
import Nav from "../components/Nav";
import Loader from "../components/Loader";

const HomeLayout = () => {
  const navigation = useNavigation();

  const isPageLoading = navigation.state === "loading";

  return (
    <div>
      <Nav />
      <section className="py-12 px-8 lg:px-4 max-w-7xl mx-auto">
        {isPageLoading ? <Loader /> : <Outlet />}
      </section>
    </div>
  );
};
export default HomeLayout;
