import React from "react";
import Image from "next/image";

export const Porto = () => {
  const porto = [
    {
      nama: "Home Brochure AR",
      img: "/images/1.jpeg",
      software: "Blender + Unity 2018",
      link: "https://drive.google.com/file/d/1gTUFY83nZUpGa_o9qQ4S57B6Xw6KWaWt/view?usp=share_link"
    },
    {
      nama: "Wallpaper Design",
      img: "/images/2.jpeg",
      software: "Adobe Photoshop",
      link: "https://drive.google.com/file/d/1fQ1qyQF9R0_TsIY5xLt2_tNJjFJgjUh1/view?usp=share_link"
    },
    {
      nama: "School AR",
      img: "/images/3.jpeg",
      software: "Blender + Unity 2018",
      link: "https://drive.google.com/file/d/1mKVotK-0Cfs2yogN75y1_YMPVbYLQd-0/view?usp=share_link"
    },
    { nama: "Car Movement", img: "/images/4.jpeg", software: "Blender", link: "https://drive.google.com/file/d/1JEPHg-g_rDOmYo-5DPNkyxzkclBwBj7Y/view?usp=share_link" },
    {
      nama: "Art Exhibition Map",
      img: "/images/5.jpeg",
      software: "Adobe Illustrator",
      link: "https://drive.google.com/file/d/11sia8qOra3uodvxqe_Uu0nRuEGTuKo-3/view?usp=share_link"
    },
    {
      nama: "Pics Gallery",
      img: "/images/6.png",
      software: "React + Tailwind CSS",
      link: "https://github.com/AlyaRusyda/eunoia-gallery.git"
    },
    {
      nama: "E-Canteen Project",
      img: "/images/7.jpeg",
      software: "CodeIgniter",
      link: "https://github.com/AlyaRusyda/digiup-kantin.git"
    },
    { nama: "Hospital Server", img: "/images/8.jpeg", software: "CodeIgniter", link: "https://drive.google.com/file/d/19GgN857XGy1r0FTTBkSwtSffMKPRRKew/view?usp=share_link" },
    { nama: "Library Server", img: "/images/9.jpeg", software: "CodeIgniter", link: "https://github.com/AlyaRusyda/digiup-ekatalog.git" },
    {
      nama: "Logo Design",
      img: "/images/10.jpeg",
      software: "Adobe Illustrator",
      link: "https://drive.google.com/file/d/1f2t0HHC5rFfIjUAoKcbriJGKwCRMUviB/view?usp=share_link"
    },
  ];
  return (
    <div>
      <div className="text-center font-bold mt-24 mb-8 items-center">
        <h1 className="text-2xl text-sec">My Portfolio</h1>
      </div>
      <div className="text-primary md:mx-20 mb-12 md:mb-12">
        <ul className="grid grid-cols-2 md:grid-cols-4">
          {porto.map((porto) => (
            <li className="bg-sec overflow-hidden m-auto mb-4 w-44 md:w-80 hover:shadow-2xl text-left p-2">
              <a href={porto.link} target="_blank">
                <Image
                  width={400}
                  height={400}
                  src={porto.img}
                  alt=""
                  className="w-72 md:w-80 h-24 md:h-44 items-center object-contain rounded-md mb-2"
                />
                <p className="text-base">
                  <strong>{porto.nama}</strong>
                </p>
                <p className="text-sm mb-2">{porto.software}</p>
              </a>
            </li>
          ))}
        </ul>
        <div className="mx-auto ml-2 md:ml-1">
          <a href="https://github.com/AlyaRusyda/" target="_blank" className='bg-sec text-md m:text-lg px-3 py-2'>Other Portfolio</a>
        </div>
      </div>
    </div>
  );
};
