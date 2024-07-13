import { BsCashCoin } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlinePayment, MdOutlineSupportAgent } from "react-icons/md";

const ServiceAdvertisement = () => {
  return (
    <section className="mt-28 ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Why Shop With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <div className="mb-4 flex justify-center">
              <FaShippingFast className="text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
            <p className="text-gray-600">Orders over $500</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <div className="mb-4 flex justify-center">
              <BsCashCoin className="text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Big Cash Back</h3>
            <p className="text-gray-600">Over 40% Cash Back</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <div className="mb-4 flex justify-center">
              <MdOutlinePayment className="text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quick Payment</h3>
            <p className="text-gray-600">100% secure</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <div className="mb-4 flex justify-center">
              <MdOutlineSupportAgent className="text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Ready For You</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAdvertisement;
