import React from 'react'
import Image from 'next/image'

export const Hero = () => {
  return (
    <div className="h-homesm md:min-h-screen md:h-screen flex py-10 md:flex-row flex-col items-center">
        <div className="flex items-center justify-center my-12 md:my-0">
          <div
            alt=""
            className="h-full w-full object-cover ml-0 mx-auto md:ml-40 md:mr-20"
          >
            <Image
              width={400}
              height={400}
              src="/images/wehe.png"
              alt=""
              className="w-72 md:w-img object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="md:text-left text-center w-96 md:w-hero">
            <h1 className="md:text-xl text-lg md:leading-normal leading-10 text-sec font-bold">
              <span className="text-white md:text-2xl text-xl">
                Hello!
                <br />
              </span>
              <span className="font-normal mt-2">My Name is </span>Alya Rusyda
              Maharistya
            </h1>
            <h4 className="md:text-md text-s m md:leading-normal leading-5 text-sec mt-2 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h4>
            <a href='https://drive.google.com/uc?export=download&id=1KIxoFkT6OCVYXbrGweUy7jHx048nSZdY' target="_blank" className='bg-sec text-md m:text-lg px-3 py-2'>Download CV</a>
            <p className='text-sec text-xs mt-3'>Last modified : 28 September 2021</p>
          </div>
        </div>
    </div>
  )
}
