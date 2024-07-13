import Rating from "react-rating";
import { TProduct } from "../../../../types";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";

type TFeaturedCardProps = {
  products: TProduct[];
  handleSeeMore: () => void;
  handleSeeDetails: (id: string) => void;
};

const FeaturedProductCard = ({
  products,
  handleSeeMore,
  handleSeeDetails,
}: TFeaturedCardProps) => {
  return (
    <>
      <div className="mt-28 mb-16">
        <h2 className="text-2xl font-bold flex justify-center">
          Our Featured Products
        </h2>
        <div className="flex justify-center mb-8 mt-3">
          <div className="bg-blue-600 text-center h-1 w-20 rounded-lg "></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products?.slice(0, 6).map((product: TProduct) => (
            <div key={product._id} className="border p-4 rounded-lg">
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
        <div className="text-center">
          <button onClick={handleSeeMore} className="btn btn-neutral mt-12">
            Explore More
          </button>
        </div>
      </div>
    </>
  );
};

export default FeaturedProductCard;
