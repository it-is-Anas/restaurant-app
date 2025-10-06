import UserHeader from "@/components/app-header/user-header";
import ProductCart from "@/components/product-card/product-card";
import { btnsClass, productBoxClass } from "@/styles/tailwind-classes";

export default function Home(){
    return (
    <>
        <UserHeader />
        <div className="flex justify-between items-center">
            <h1 className="font-[600] text-[1.6em] text-[var(--dark-pink)] px-[5px]">Carts :</h1>
            <div className="h-[100%] flex justify-center items-center ">
                <button className={btnsClass[1]} >Clear</button>
                <button className={btnsClass[0]} >Order</button>
            </div>
        </div>
        <div className={productBoxClass}>
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
        </div>
    </>
    );
}