"use client";
import React from "react";

function Page() {
  const kontak = [
    {
      sosmed: "IG",
      value: "@alyarusyda__",
      link: "https://instagram.com/alyarusyda__",
      img: "/images/instagram.png",
    },
    {
      sosmed: "Email",
      value: "alyarusydam@gmail.com",
      link: "mailto:alyarusydam@gmail.com",
      img: "/images/gmail.png",
    },
    {
      sosmed: "LinkedIn",
      value: "Alya Rusyda Maharistya",
      link: "https://www.linkedin.com/in/alya-rusyda-maharistya-07699124a/",
      img: "/images/linkedin.png",
    },
    {
      sosmed: "Github",
      value: "@AlyaRusyda",
      link: "https://github.com/AlyaRusyda",
      img: "https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png",
    },
  ];
  return (
    <div className="md:h-contact">
      <div className="text-center font-bold mt-24 items-center">
        <h1 className="text-2xl md:text-3xl text-sec">Get in Touch</h1>
        <div className="mx-1 md:mx-24">
          <ul className="overflow-hidden w-72 md:w-auto mb-20 md:mb-16 mx-12 my-12 md:my-12 md:mx-20 text-center grid grid-cols-1 md:grid-cols-4">
            {kontak.map((isi) => (
              <li className="bg-sec md:w-60 md:h-60 w-48 h-48 mb-4 md:mb-0 mx-auto hover:shadow-2xl justify-center flex flex-col">
                <a href={isi.link} target="_blank">
                  <img
                    className="mx-auto my-2"
                    alt=""
                    width="40px"
                    src={isi.img}
                  />
                  <p className="text-primary text-lg md:text-xl">
                    {isi.sosmed}
                  </p>
                  <p className="text-primary text-sm md:text-md font-normal">
                    {isi.value}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Page;
