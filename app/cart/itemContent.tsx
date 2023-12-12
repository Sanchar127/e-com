"use client";
import { CartProductType } from "../product/[productid]/ProductDetails";
import Link from "next/link";
import { truncateText } from "@/utils/truncateText";
import Button from "../components/Button";
import Image from "next/image";
import SetQuantity from "../components/products/SetQuantity";
import { useCart } from "@/hooks/useCart";

interface ItemContentProps {
  item: CartProductType;
}

const ItemContent: React.FC<ItemContentProps> = ({ item }) => {
  const {
    handleRemoveProductFromCart,
    handleCartQtyIncrease,
    handleCartQtyDecrease,
  } = useCart();

  return (
    <div className="grid grid-cols-5 text-xs md:text-sm gap-4 border-[1.5px] border-slate-200 py-4 items-center">
      <div className="col-span-2 justify-self-start flex gap-2 md:gap-2">
        <Link href={`/product/${item.id}`}>
          <div className="relative w-[70px]">
            <Image
              src={item.selectedImg.image}
              alt={item.name}
              width={70}
              height={70}
              className="object-contain"
            />
          </div>
        </Link>
        <div className="flex flex-col justify-between">
          <Link href={`/product/${item.id}`}>{truncateText(item.name)}</Link>
          <div>{item.selectedImg.color}</div>
          <div className="w-[70px]"></div>
          <button
            className="text-slate-500 underline"
            onClick={() => handleRemoveProductFromCart(item)}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="justify-self-end">{item.price}</div>
      <div className="justify-self-end">
        <SetQuantity
          cartCounter={true}
          cartProduct={item}
          handleQtyIncrease={() => {
            handleCartQtyIncrease(item);
          }}
          handleQtyDecrease={() => {
            handleCartQtyDecrease(item);
          }}
        />
      </div>
      <div className="justify-self-end">{item.price * item.quantity}</div>
    </div>
  );
};

export default ItemContent;
