import React from "react";
import { BsArrowRight } from "react-icons/bs";

export const FeaturedCategories = () => {
  return (
    <section className="my-16">
      <h2 className="text-[36px] text-center mb-10 font-bold mx-4">Featured Categories</h2>
      <div className="flex flex-col items-center gap-10 md:flex-row md:w-[92%] lg:w-[96%] xl:w-[92%] md:mx-auto md:justify-between md:flex-wrap md:gap-2">
        <article className="w-[92%] tablet:w-[88%] md:mx-0 md:w-[100%] mx-auto cursor-pointer basis-[45%]">
          <div className="w-[100%]  relative category-img-container h-[350px] tablet:h-[400px]">
            <img
              className="w-[100%] h-[100%] object-cover"
              src="https://images.pexels.com/photos/2227832/pexels-photo-2227832.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <div className="product-img-overlay hidden absolute top-0 left-0 z-50 bg-[#0000005d] w-[100%] h-[100%]"></div>
            <button className="absolute left-[25%] top-[40%] bg-primaryColor text-white hidden cursor-pointer rounded-sm h-[44px] w-[50%] gap-3 justify-center z-[100]  items-center category-shop-link">
              <span> Shop Now</span>
              <BsArrowRight />
            </button>
          </div>
          <h2 className="text-[24px] mt-3 font-bold"> First order deal</h2>
        </article>
        <article className="w-[92%] md:mx-0 md:w-[100%] tablet:w-[88%] mx-auto cursor-pointer basis-[45%]">
          <div className="w-[100%]  relative category-img-container h-[350px] tablet:h-[400px]">
            <img
              className="w-[100%] h-[100%] object-cover"
              src="https://images.pexels.com/photos/2227832/pexels-photo-2227832.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <div className="product-img-overlay hidden absolute top-0 left-0 z-50 bg-[#0000005d] w-[100%] h-[100%]"></div>
            <button className="absolute left-[25%] top-[40%] bg-primaryColor text-white hidden cursor-pointer rounded-sm h-[44px] w-[50%] gap-3 justify-center z-[100]  items-center category-shop-link">
              <span> Shop Now</span>
              <BsArrowRight />
            </button>
          </div>
          <h2 className="text-[24px] mt-3 font-bold">Living room</h2>
        </article>
        <article className="w-[92%] md:mx-0 md:w-[100%] tablet:w-[88%] mx-auto cursor-pointer basis-[45%]">
          <div className="w-[100%]  relative category-img-container h-[350px] tablet:h-[400px]">
            <img
              className="w-[100%] h-[100%] object-cover"
              src="https://images.pexels.com/photos/2227832/pexels-photo-2227832.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <div className="product-img-overlay hidden absolute top-0 left-0 z-50 bg-[#0000005d] w-[100%] h-[100%]"></div>
            <button className="absolute left-[25%] top-[40%] bg-primaryColor text-white hidden cursor-pointer rounded-sm h-[44px] w-[50%] gap-3 justify-center z-[100]  items-center category-shop-link">
              <span> Shop Now</span>
              <BsArrowRight />
            </button>
          </div>
          <h2 className="text-[24px] mt-3 font-bold">Bedroom</h2>
        </article>
        <article className="w-[92%] md:mx-0 md:w-[100%]  tablet:w-[88%] mx-auto cursor-pointer basis-[45%]">
          <div className="w-[100%]  relative category-img-container h-[350px] tablet:h-[400px]">
            <img
              className="w-[100%] h-[100%] object-cover"
              src="https://images.pexels.com/photos/2227832/pexels-photo-2227832.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <div className="product-img-overlay hidden absolute top-0 left-0 z-50 bg-[#0000005d] w-[100%] h-[100%]"></div>
            <button className="absolute left-[25%] top-[40%] bg-primaryColor text-white hidden cursor-pointer rounded-sm h-[44px] w-[50%] gap-3 justify-center z-[100]  items-center category-shop-link">
              <span> Shop Now</span>
              <BsArrowRight />
            </button>
          </div>
          <h2 className="text-[24px] mt-3 font-bold"> Kids</h2>
        </article>
      </div>
      <div className="flex flex-col w-[100%] mt-10 gap-10">
        <article className="bg-[#e5e5e5] text-secondaryColor  h-[150px] flex justify-center items-center px-[4%]">
          <h1 className="font-bold text-[24px] tablet:w-[55%] md:w-[55%] lg:w-[40%] text-center">
            GET UP TO <span className="text-primaryColor mr-[5px]">95% OFF</span>ON FIRST ORDER DEAL AND FREE SHIPPING{" "}
          </h1>
        </article>
        <article className="bg-[#e5e5e5] text-secondaryColor  h-[150px] flex justify-center items-center px-[4%]">
          <h1 className="font-bold text-[24px] tablet:w-[55%] md:w-[55%] lg:w-[40%] text-center">
            GET UP TO <span className="text-primaryColor mr-[5px]">60% OFF</span>ON KIDS CATEGORIES{" "}
          </h1>
        </article>
        <article className="bg-[#e5e5e5] text-secondaryColor  h-[150px] flex justify-center items-center px-[4%]">
          <h1 className="font-bold tablet:w-[55%] md:w-[55%] text-[24px] lg:w-[40%] text-center">
            GET UP TO <span className="text-primaryColor mr-[5px]">60% OFF</span>ON SETS CATEGORIES{" "}
          </h1>
        </article>
      </div>
    </section>
  );
};
