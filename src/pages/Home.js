import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  function navigateHandler() {
    // This function is used to programmatically navigate to the products page
    // using the useNavigation hook.
    navigate("/products");
  }

  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/products">the list of products</Link>.
      </p>
      <button onClick={navigateHandler}>To Products</button>
    </>
  );
}

export default HomePage;
