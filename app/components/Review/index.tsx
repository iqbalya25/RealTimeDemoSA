import React from "react";

const Reviews = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">
          Customer Reviews
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          <div className="flex flex-col gap-3 rounded-lg border p-4 md:p-6">
            <div>
              <span className="block text-sm font-bold md:text-base">
                Asnawi Mangkualam
              </span>
              <span className="block text-sm text-gray-500">
                December 7 , 2022
              </span>
            </div>

            <div className="-ml-1 flex gap-0.5">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="text-gray-600">
              Good Installation & Good Service, Professional Work and Crew, I
              really recommend it to all my connection.
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-lg border p-4 md:p-6">
            <div>
              <span className="block text-sm font-bold md:text-base">
                Ade Putrans
              </span>
              <span className="block text-sm text-gray-500">
                April 28, 2024
              </span>
            </div>

            <div className="-ml-1 flex gap-0.5">
              {[...Array(2)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="text-gray-600">Skip, B aja</p>
          </div>

          {/* Review ke 3*/}

          <div className="flex flex-col gap-3 rounded-lg border p-4 md:p-6">
            <div>
              <span className="block text-sm font-bold md:text-base">
                Shinji Kagawa
              </span>
              <span className="block text-sm text-gray-500">
                March 11, 2023
              </span>
            </div>

            {/* stars - start */}
            <div className="-ml-1 flex gap-0.5">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            {/* stars - end */}

            <p className="text-gray-600">
              While the platform functionality is impressive, I have encountered
              some minor issues with the user interface. Navigating certain
              sections can be slightly cumbersome, and I believe there is room
              for improvement in terms of user experience design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
