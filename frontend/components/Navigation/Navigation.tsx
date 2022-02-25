import Cart from "@components/Cart/Cart";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.svg";
import Category from "../Category/Category";
import style from "./Navigation.module.scss";
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
            <Cart />
            <Link passHref href={"/news"}>
              <Category>News</Category>
            </Link>
            <Link passHref href={"/clothes"}>
              <Category>Clothes</Category>
            </Link>
            <Link passHref href={"/shoes"}>
              <Category>Shoes</Category>
            </Link>
            <Link passHref href={"/bags"}>
              <Category>Bags</Category>
            </Link>
            <Link passHref href={"/accessories"}>
              <Category>Accessories</Category>
            </Link>
            <Link passHref href={"/giftcard"}>
              <Category>Giftcards</Category>
            </Link>
            <Link passHref href={"/sale"}>
              <Category variant={"red"}>Sale</Category>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
