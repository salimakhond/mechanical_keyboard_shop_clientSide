// Products.tsx
import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../redux/features/product/productApi";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { TProduct } from "../types";
import ProgressBar from "../components/ui/ProgressBar";
import ErrorPage from "../components/ui/ErrorPage";
import SearchBar from "../components/ui/productPage/SearchBar";
import Sorting from "../components/ui/productPage/Sorting";
import ClearFilterButton from "../components/ui/productPage/ClearFilterButton";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import Rating from "react-rating";

const Products = () => {
  const navigate = useNavigate();

  const handleSeeDetails = (id: string) => {
    navigate(`/products/details/${id}`);
  };

  const { searchTerm, sort } = useAppSelector(
    (state: RootState) => state.filters
  );

  const {
    data: products,
    error,
    isLoading,
  } = useGetProductsQuery({
    searchTerm,
    sort,
  });

  if (isLoading) {
    return (
      <div className="h-full flex justify-center items-center">
        <ProgressBar />
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full flex justify-center items-center">
        <ErrorPage />
      </div>
    );
  }

  return (
    <>
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
          <SearchBar />
          <Sorting />
          <ClearFilterButton />
        </div>
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products?.data?.map((product: TProduct) => (
            <div key={product._id} className="border p-4">
              <img
                src={product?.image}
                alt={product?.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-4">{product?.name}</h3>
              <h3 className="text-lg mb-2">Brand : {product?.brand}</h3>
              <p className="text-lg mb-2">
                Available Quantity: {product?.quantity}
              </p>
              <p className="text-lg mb-2">Price: ${product?.price}</p>

              <div className="flex gap-1 items-center ">
                <p className="text-lg mb-2">Rating: </p>
                {/* @ts-expect-error: Type issue with Rating component */}
                <Rating
                  className="text-yellow-500"
                  initialRating={product?.rating}
                  emptySymbol={<IoMdStarOutline className="text-2xl" />}
                  fullSymbol={<IoMdStar className="text-2xl" />}
                  fractions={2}
                  readonly
                />
              </div>

              <button
                onClick={() => handleSeeDetails(product?._id)}
                className="btn btn-primary mt-4 mb-2"
              >
                See Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
