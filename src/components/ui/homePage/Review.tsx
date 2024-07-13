import { useState } from "react";

const testimonials = [
  {
    image:
      "https://fotografias.antena3.com/clipping/cmsimages01/2024/03/20/193999DC-57F4-4EDD-9A26-D9656503B16A/jim-parsons-gala-2024-roundabout-theatre-company_103.jpg?crop=1693,1270,x275,y0&width=1200&height=900&optimize=low&format=webply",
    name: "Liam Taylor",
    profession: "Software Engineer",
    review:
      "Amazing keyboard repair! My mechanical switches feel brand new again.",
  },
  {
    image:
      "https://media.bizj.us/view/img/12445033/ashleyparsons*1500xx3648-3648-745-0.jpg",
    name: "Sophia Martinez",
    profession: "Graphic Designer",
    review: "Fast service! They replaced my keycaps and it looks fantastic.",
  },
  {
    image:
      "https://media.themoviedb.org/t/p/w500/kRFtw6MeT3AzOdE3TWpkxlQwMbb.jpg",
    name: "Oliver Lee",
    profession: "Content Creator",
    review:
      "Excellent customer service! My RGB keyboard shines like it just came out of the box.",
  },
  {
    image:
      "https://m.media-amazon.com/images/S/amzn-author-media-prod/8prj7ndd69i4sbktd6tkqmhakh.jpg",
    name: "Emma Wilson",
    profession: "Marketing Specialist",
    review:
      "Very professional repair. My keyboard is now quieter and smoother.",
  },
  {
    image:
      "https://media.istockphoto.com/id/1040964930/photo/opportunity-doesnt-hang-around-neither-should-you.jpg?s=612x612&w=0&k=20&c=7VX1J5vcwhVB55O7eNcb6J-Mp9O7Y7llMMiR9O8zIcU=",
    name: "Ava Thompson",
    profession: "Product Manager",
    review:
      "Great pricing for such quality service. My keyboard feels responsive and tactile!",
  },
  {
    image:
      "https://img.freepik.com/free-photo/close-up-isolated-portrait-young-dark-skinned-attractive-guy-with-afro-hairstyle-grey-t-shirt-brown-jacket-smiling-with-teeth-looking-camera-with-happy-peaceful-face-expression_176420-13082.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712707200&semt=ais",
    name: "Ethan Brown",
    profession: "Game Developer",
    review:
      "They did a fantastic job! My gaming keyboard is performing better than ever.",
  },
  {
    image:
      "https://media.istockphoto.com/id/1354898581/photo/shot-of-a-young-businessman-using-a-laptop-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=dDDNcvIoG-4VdO01ZlENqODBoNocT434vIFp0duuTZM=",
    name: "Mia Davis",
    profession: "IT Consultant",
    review:
      "Super friendly staff! They repaired my keyboard and gave great tips for maintenance.",
  },
  {
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "James Garcia",
    profession: "Data Analyst",
    review:
      "Highly skilled technicians! My keyboard was fixed in no time and works perfectly!",
  },
];

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 2 : prev - 2
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= testimonials.length - 2 ? 0 : prev + 2));
  };

  return (
    <div className="md:px-12 w-full p-4 mt-16 mb-16 rounded-md">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold flex justify-center">
          Our Customer Reviews
        </h2>
        <div className="flex justify-center mb-8 mt-3">
          <div className="bg-blue-600 text-center h-1 w-20 rounded-lg"></div>
        </div>
        <div className="relative mt-10">
          <div className="flex justify-center p-4 space-x-4">
            {testimonials
              .slice(
                currentIndex,
                currentIndex + (window.innerWidth >= 768 ? 2 : 1)
              )
              .map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-transparent border border-gray-300 shadow-lg rounded-lg p-6 flex flex-col items-center w-[500px]"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full object-cover mb-4"
                  />
                  <p className="text-lg font-semibold mb-1 text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-600 mb-2">{testimonial.profession}</p>
                  <p className="text-gray-600 text-center">
                    "{testimonial.review}"
                  </p>
                </div>
              ))}
          </div>

          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#2b3440] text-white rounded-full px-5 p-4"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#2b3440] text-white rounded-full px-5 p-4"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
