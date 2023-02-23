"use client";
import Image from "next/image";
import React from "react";
import Arrow from "@/components/Arrow";

function Page() {
  const data = [
    { name: "Name", value: "Alya Rusyda Maharistya" },
    { name: "Date of birth", value: "31 July 2006" },
    { name: "Handphone", value: "085727689878" },
    { name: "Hometown", value: "Surakarta, Central Java" },
  ];
  const data2 = [
    { name: "Age", value: "16" },
    { name: "Status", value: "Student" },
    { name: "School", value: "SMK Telkom Malang" },
  ];
  const skills = [
    {
      img: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
    },
    {
      img: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png",
    },
    {
      img: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png",
    },
    {
      img: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/php/php.png",
    },
    {
      img: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/java/java.png",
    },
    {
      img: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
    },
    {
      img: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png",
    },
    {
      img: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png",
    },
    {
      img: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png",
    },
    {
      img: "https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png",
    },
  ];
  return (
    <div className="h-about md:h-screen">
      <Image
        width={400}
        height={400}
        src="/images/about.png"
        alt=""
        className="z-[0] w-80 md:w-bg bg-cover md:block absolute bottom-0 right-12 md:right-24 hidden"
      />
      <div className="z-[999] text-sec md:min-h-screen flex py-10 md:flex-row flex-col items-start md:items-center mx-8 md:ml-56 mt-12 md:mt-0">
        <div className="flex-1 mr-about justify">
          <div className="md:text-left text-center">
            <h4 className="md:text-3xl text-md md:leading-normal leading-5 font-bold text-sec">
              Let's get to know more about me!
            </h4>
            <div class="col-lg-8 pt-4 pt-lg-0 content hidden md:block ">
              <div class="row flex">
                <div class="flex flex-col">
                  <ul className="text-sm md:text-lg">
                    {data?.map((isi) => (
                      <li className="flex mb-2">
                        <div className="mr-4">
                          <Arrow />{" "}
                        </div>
                        {isi.name} : {isi.value}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-1 ml-12">
                  <ul className="text-base md:text-lg">
                    {data2?.map((isi) => (
                      <li className="flex mb-2">
                        <div className="mr-4">
                          <Arrow />{" "}
                        </div>
                        {isi.name} : {isi.value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-8 w-80 pt-4 pt-lg-0 content block md:hidden">
              <div class="row">
                <div class="flex col-lg-6">
                  <ul className="text-base md:text-lg">
                    {data?.map((isi) => (
                      <li className="flex">
                        <div className="mr-4"></div>
                        {isi.name} : {isi.value}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-1 col-lg-6">
                  <ul className="text-base md:text-lg">
                    {data2?.map((isi) => (
                      <li className="flex">
                        <div className="mr-4"></div>
                        {isi.name} : {isi.value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <h4 className="md:text-2xl text-base md:leading-normal leading-5 font-bold text-sec mt-8">
              Have Tried
            </h4>
            <div className="items-center mx-auto">
              <ul className="md:space-x-0 gap-3 space-x-1 mt-2 md:mt-4 grid grid-cols-3 md:grid-cols-10 w-60 md:w-img mx-auto md:mx-0">
                {skills.map((skills) => (
                  <li>
                    <img
                      align="left"
                      alt="Javascript"
                      width="60px"
                      className="mb-4 md:mb-0"
                      src={skills.img}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
