import React from "react";
import "./Tournament.css";
import { tournaments } from "../../dummy/tournament";
import { useNavigate } from "react-router-dom";

const Tournament = () => {
  const navigate = useNavigate()
  return (
    <>
      <section class="text-gray-600 body-font ">
        <div class="container px-5 py-24 mx-auto ">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Tournaments List
            </h1>
            {/* <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p> */}
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          <div class="flex flex-wrap -mx-4 -my-8">
            {tournaments.map((tour, i) => {
              return (
                <div class="py-8 px-2 lg:w-1/3 cursor-pointer ">
                  <div class=" py-8 px-4 h-full flex items-start flex rounded-lg bg-gray-100  flex-col">
                    <div class="w-auto flex-shrink-0 flex flex-col text-center leading-none">
                      <span class="font-medium text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                        {tour.start.split("/")[0]} {tour.start.split("/")[1]}{" "}
                        {tour.start.split("/")[2]}
                      </span>
                    </div>
                    <div class="flex-grow pl-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                        {tour.isGovernment ? "Government Hosted" : "Private"}
                      </h2>
                      <h1 class="title-font text-xl font-medium text-gray-900 mb-3">
                        {tour.name}
                      </h1>
                      <p class="leading-relaxed mb-5">{tour.desc}</p>

                      <span class="inline-flex items-center" >
                        <img
                          alt="blog"
                          src="https://dummyimage.com/103x103"
                          class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                        />
                        <span class="flex-grow flex flex-row pl-3">
                          <span class="title-font font-medium text-gray-900">
                            {tour.registeredBy}
                          </span>
                          <button onClick={()=>navigate(`${tour.id}`)} class="flex w-auto mx-10 text-white bg-indigo-500 inline-flex items-center border-0 px-2 py-1 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Apply
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              class="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                            >
                              <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                          </button>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Tournament;
