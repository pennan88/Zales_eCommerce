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
            <Link href={"/news"}>
              <Item>News</Item>
            </Link>
            <Link href={"/clothes"}>
              <Item>Clothes</Item>
            </Link>
            <Link href={"/shoes"}>
              <Item>Shoes</Item>
            </Link>
            <Link href={"/bags"}>
              <Item>Bags</Item>
            </Link>
            <Link href={"/accessories"}>
              <Item>Accessories</Item>
            </Link>
            <Link href={"/giftcard"}>
              <Item>Giftcards</Item>
            </Link>
            <Link href={"/sale"}>
              <Item variant={"red"}>Sale</Item>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
