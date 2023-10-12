import {Image} from '@shopify/hydrogen';
import React from 'react';
import Bike from '../../../public/bike.png';
import BgBike from '../../../public/bg_bike.png';
import Button from '../Button';

function HomeHeader() {
  return (
    <div className="relative flex lg:flex-row flex-col items-start justify-end lg:h-[500px] h-full mb-10">
      <div className="h-full w-full flex justify-center bg-[#F8F8F8]">
        <img src={Bike} alt="Electric bike" width={500} height={500} />
      </div>
      <div className="w-full h-full lg:bg-[url('/commuter_bike.jpg')] bg-[#0A3072] bg-center bg-cover">
        <div className="lg:backdrop-brightness-50 lg:bg-[#072762]/70 h-full w-full p-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h2 className="uppercase text-white max-w-xs font-light text-xl mt-5 lg:mt-0">
            Active <b className="font-extrabold">Mobility</b> For A{' '}
            <b className="font-extrabold">Healthier</b> you
          </h2>
          <div className="flex flex-col gap-4 text-white max-w-xs font-light mb-8">
            <p className="text-xs">
              We have plenty of models for you to test ride and purchase on
              site.
            </p>
            <p className="text-xs">Grab your dream bike and join the fun!</p>
            <p className="text-xs">
              "Test rides are available both in Elmonte showroom & Florida
              Showroom
            </p>
          </div>
          <Button>Book a test ride</Button>
        </div>
        <img
          src={BgBike}
          alt="Electric bike"
          width={500}
          height={500}
          className="block lg:hidden"
        />
      </div>
    </div>
  );
}

export default HomeHeader;
