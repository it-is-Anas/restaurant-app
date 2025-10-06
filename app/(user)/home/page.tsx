import UserHeader from "@/components/app-header/user-header";
import ProductCart from "@/components/product-card/product-card";
import { productBoxClass } from "@/styles/tailwind-classes";

export default function Home(){
    return (
    <>
        <UserHeader />
        <h1 className="font-[600] text-[1.6em] text-[var(--dark-pink)] px-[5px]">Main Foods :</h1>
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