import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../../../redux/features/product/productApi";
import FeaturedProductCard from "./card/FeaturedProductCard";
import ErrorPage from "../ErrorPage";
import ProgressBar from "../ProgressBar";

const Featured = () => {
  // get data which is fetched by RTK query
  const {
    data: products,
    isLoading,
    error,
  } = useGetProductsQuery({ undefined });

  const navigate = useNavigate();

  // explore more button functionality
  const handleSeeMore = () => {
    navigate("/products");
  };

  //view details  button functionality
  const handleSeeDetails = (id: string) => {
    navigate(`/products/details/${id}`);
  };

  // if data is loading showing progress
  if (isLoading) {
    return (
      <div>
        <ProgressBar></ProgressBar>
      </div>
    );
  }
  // if any error occur during fetching data showing error
  if (error) {
    return (
      <div className="w-1/2 mx-auto">
        <ErrorPage></ErrorPage>
      </div>
    );
  }
  return (
    <>
      <FeaturedProductCard
        products={products.data}
        handleSeeMore={handleSeeMore}
        handleSeeDetails={handleSeeDetails}
      ></FeaturedProductCard>
    </>
  );
};

export default Featured;
