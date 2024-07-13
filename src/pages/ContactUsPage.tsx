const ContactUsPage = () => {
  return (
    <div className="w-full md:mt-12 md:mb-12 rounded-md ">
      <div className="md:flex items-start gap-8  ">
        <div className="md:w-1/2 w-full rounded-lg   p-4">
          <div className=" w-full ">
            <h2 className="text-4xl mb-1 font-bold w-10/12 ">Leave Us</h2>
            <div className="flex justify-start mb-5 mt-3">
              <div className="bg-blue-600 text-center h-1 w-11 rounded-lg "></div>
            </div>
            <h2 className=" md:tracking-widest mb-7  md:w-8/12 ">
              23 New Design Str, Lorem Upsum 10 Hudson Yards, USA
            </h2>
            <img
              src="https://external-preview.redd.it/p4gMd5ZiGrg19COB-vJSz_TruD20Lhu3mdy3-Zu__mw.jpg?auto=webp&s=90344483444b68adc09e3863ac11041b02b6a295"
              className="rounded-lg md:w-[700px] md:h-[540px]"
              alt=""
            />
          </div>
        </div>
        <div className="md:w-1/2  w-full rounded-lg   p-4">
          <div className=" w-full ">
            <h2 className="text-4xl mb-1 font-bold w-10/12 ">Leave Us</h2>
            <div className="flex justify-start mb-5 mt-3">
              <div className="bg-blue-600 text-center h-1 w-12 rounded-lg "></div>
            </div>
            <h2 className=" md:tracking-widest mb-7  md:w-8/12 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              maximus bibendum odio et tristique. Duis non nunc dictum, accumsan
              ipsum volutpat, cursus nisl. Sed leo augue, tristique in ante nec.
            </h2>
            <div className="mt-5">
              <h2>Name*</h2>
              <div className="flex  justify-center">
                <input
                  name="name"
                  className="w-full rounded-lg border border-slate-300 mt-2 p-2 "
                />
              </div>
            </div>
            <div className="mt-2">
              <h2>Email*</h2>
              <div className="flex  justify-center">
                <input
                  name="email"
                  type="email"
                  className="w-full rounded-lg border border-slate-300 mt-2 p-2 "
                />
              </div>
            </div>
            <div className="mt-2">
              <h2>Phone Number*</h2>
              <div className="flex  justify-center">
                <input
                  name="number"
                  className="w-full rounded-lg border border-slate-300 mt-2 p-2 "
                />
              </div>
            </div>
            <div className="mt-8">
              <textarea
                id="message"
                name="message"
                rows={4} // Adjust the number of rows as needed
                className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-lg"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button className="btn btn-primary text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 mt-6">
              Send{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
