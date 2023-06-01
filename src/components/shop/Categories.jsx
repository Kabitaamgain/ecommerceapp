import React from "react";
import * as Icons from "../../assets/icons";
import * as Images from "../../assets/images";
import { ToppicksCard } from "../shared/ToppicksCard";

const ToppickArray = [
  {
    imgSrc: Images.Image4,
    imgAlt: "image4",
    title: "Trenton modular sofa_3",
    price: "Rs. 25,000.00"
  },
  {
    imgSrc: Images.Image5,
    imgAlt: "image5",
    title: "Granite dining table with dining chair",
    price: "Rs. 25,000.00"
  },
  {
    imgSrc: Images.Image7,
    imgAlt: "image6",
    title: "Outdoor bar table and stool",
    price: "Rs. 25,000.00"
  },
  {
    imgSrc: Images.Image6,
    imgAlt: "image7",
    title: "Plain console with teak mirror",
    price: "Rs. 25,000.00"
  },
  {
    imgSrc: Images.Image13,
    imgAlt: "image4",
    title: "Grain coffee table",
    price: "Rs. 15,000.00"
  },
  {
    imgSrc: Images.Image14,
    imgAlt: "image5",
    title: "Kent coffee table",
    price: "Rs. 225,000.00"
  },
  {
    imgSrc: Images.Image15,
    imgAlt: "image6",
    title: "Round coffee table_color 2",
    price: "Rs. 251,000.00"
  },
  {
    imgSrc: Images.Image16,
    imgAlt: "image7",
    title: "Reclaimed teak coffee table",
    price: "Rs. 25,200.00"
  },
  {
    imgSrc: Images.Image17,
    imgAlt: "image4",
    title: "Reclaimed teak Sideboard",
    price: "Rs. 258,200.00"
  },
  {
    imgSrc: Images.Image18,
    imgAlt: "image5",
    title: "SJP_0825 ",
    price: "Rs. 20,000.00"
  },
  {
    imgSrc: Images.Image19,
    imgAlt: "image6",
    title: "Bella chair and table",
    price: "Rs. 200,000.00"
  },
  {
    imgSrc: Images.Image20,
    imgAlt: "image7",
    title: "Plain console with teak mirror",
    price: "Rs. 100,000.00"
  },
  {
    imgSrc: Images.Image2,
    imgAlt: "image4",
    title: "Granite square side table",
    price: "Rs. 258,800.00"
  },
  {
    imgSrc: Images.Image8,
    imgAlt: "image5",
    title: "Asgaard sofa",
    price: "Rs. 250,000.00"
  },
  {
    imgSrc: Images.Image21,
    imgAlt: "image6",
    title: "Maya sofa three seater",
    price: "Rs. 115,000.00"
  },
  {
    imgSrc: Images.Image22,
    imgAlt: "image7",
    title: "Outdoor sofa set",
    price: "Rs. 244,000.00"
  },

];

export const Categories = () => {
  return (
    <div>
      <div className="bg-secondary container py-10 flex justify-between">
        <div className="flex gap-4 border-r-2 border-light">
          <Icons.FilterIcon className="my-1.5" />
          <p className="text-xl">Filter</p>
          <Icons.Vector1Icon className="my-1.5 mx-1.5" />
          <Icons.Vector2Icon className="my-1.5 mx-1.5 mr-8" />
        </div>
        <div>
          <p className="text-base">Showing 1–16 of 32 results</p>
        </div>
        <div className="flex gap-5">
          <div className="flex gap-3">
            <p className="text-xl">Show</p>
            <button className="bg-white text-xl text-light mb-2 px-3 py-1.5">16</button>
          </div>

          <div className="flex gap-3">
            <p className="text-xl">Short by</p>
            <button className="bg-white text-xl text-light mb-2 px-4 py-1.5">Default</button>
          </div>
        </div>

      </div>
      <div>

        <div className="grid grid-cols-4 gap-7 container">
          {ToppickArray.map((Toppick, index) => {
            const { imgSrc, imgAlt, title, price } = Toppick;
            return (
              <ToppicksCard key={index} imgSrc={imgSrc} imgAlt={imgAlt} title={title} price={price} />
            )
          })}
        </div>

      </div>

    </div>
  )

}