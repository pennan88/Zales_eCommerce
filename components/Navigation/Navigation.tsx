import style from "./Navigation.module.scss";
import Item from "../Item/Item";
import logo from "../../public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
const Navigation = () => {
  return (
    <div className={style.sideWrapper}>
      <div className={style.sideContainer}>
        <div className={style.brandContainer}>
          <Link href={"/"}>
            <Image src={logo} />
          </Link>
        </div>

        <div className={style.itemContainer}>
          <div className={style.itemList}>
            <Link href={"/news/News"}>
              <Item>News</Item>
            </Link>
            <Link href={"/clothes/Clothes"}>
              <Item>Clothes</Item>
            </Link>
            <Link href={"/shoes/Shoes"}>
              <Item>Shoes</Item>
            </Link>
            <Link href={"/bags/Bags"}>
              <Item>Bags</Item>
            </Link>
            <Link href={"/accessories/Accessories"}>
              <Item>Accessories</Item>
            </Link>
            <Link href={"/giftcard/Giftcard"}>
              <Item>Giftcards</Item>
            </Link>
            <Link href={"/sale/Sale"}>
              <Item variant={"red"}>Sale</Item>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
