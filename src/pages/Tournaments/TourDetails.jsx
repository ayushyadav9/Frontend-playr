import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Match from "../../components/Tournaments/Match";
import { tournaments } from "../../dummy/tournament";
const TourDetails = (props) => {
  const [details, setdetails] = useState(null);
  let { id } = useParams();
  useEffect(() => {
    let det = tournaments.filter((i) => {
      console.log(i.id === id);
      // eslint-disable-next-line eqeqeq
      return i.id == id;
    });
    setdetails(det[0]);
  }, [id]);

  return (
    <>
      {details && (
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-col">
            <div class="lg:w-4/6 mx-auto">
              <div class="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              class="object-cover object-center h-full w-full"
              src={details.banner}
            />
          </div>
              <div class="flex flex-col sm:flex-row mt-10">
                <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                    <img src = {details.logo} alt=""></img>
                  </div>
                  <div class="flex flex-col items-center text-center justify-center">
                    <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                      {details.name}
                    </h2>
                    <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                    <p class=" text-gray-600 ">
                      Registered By: <b>{details.registeredBy}</b>
                    </p>
                    <p class=" text-gray-600 ">
                      Venue: <b>{details.venue}</b>
                    </p>
                    <p class=" text-gray-600 ">
                      Level: <b>{details.level}</b>
                    </p>
                  </div>
                </div>
                <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p class="leading-relaxed text-lg mb-4">{details.desc}</p>
                  <span class="flex items-center m-10">

                <span class="text-gray-600 font-medium text-center m-auto">{details.start.split("/")[0]} {details.start.split("/")[1]}{" "} {details.start.split("/")[2]}{" "}
                 - {details.end.split("/")[0]} {details.end.split("/")[1]}{" "} {details.end.split("/")[2]}</span>
                 </span>
                  <Match match = {details.matches}/>
                  <button class="flex w-auto mx-10 my-5 text-white bg-indigo-500 inline-flex items-center border-0 px-4 py-1 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default TourDetails;
