import LandingPageHeader from "@/components/app-header/landing-page-header";
import Image from "next/image";

import BurgerImg from '@/public/foods/burger-image.png';

import { pageHeaderClass, productBoxClass } from "@/styles/tailwind-classes";
import ProductCart from "@/components/product-card/product-card";

export default function Home() {
  return (
  <>
    <LandingPageHeader />
    <div className={pageHeaderClass }>
      <div className="w-[100%] h-[100%] grid grid-cols-[50%_50%] ">
        <div className="flex justify-center items-start flex-col">
          <p className="font-[600] text-[2em] text-[var(--dark-blue)]">Delicous Food and Drinks</p>
          <p className="font-[600] text-[2em] text-[var(--dark-blue)]">Order now to deal ...</p>
          <p className="font-[400] text-[1.1em]">
            Delicous Food and Drinks Order now to deal here 
            Order now to deal here Order now to deal here
          </p>
          <button className="bg-[var(--dark-blue)] px-[10px] py-[5px] rounded-[5px] text-[var(--white)] cursor-pointer ml-[auto] font-[600]">Order now</button>
        </div>
        <div className="flex justify-center items-center">
          <Image src={BurgerImg} alt='burger image'  />
        </div>
      </div>
      <div className="w-[100%] h-[100%]">
        <div className="w-[80%] h-[10em] rounded-[10px] mx-[auto] bg-[var(--gray)] flex justify-around items-center">
          <div className="w-[10em] h-[5em] rounded-[10px] bg-[royalblue]"></div>
          <div className="w-[10em] h-[5em] rounded-[10px] bg-[royalblue]"></div>
          <div className="w-[10em] h-[5em] rounded-[10px] bg-[royalblue]"></div>
        </div>
        <h2 className="font-[500] text-[1.5em] p-[10px] font-[600] my-[10px]">Food offers :</h2>
        <div className={productBoxClass} >
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
        </div>
        <p className="bg-[var(--black)] font-[600] text-center text-[var(--white)]">All rights is reserved t</p>
      </div>
    </div>
  </>
  );
}
