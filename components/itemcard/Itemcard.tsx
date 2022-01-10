import style from "./Itemcard.module.scss";
import Image from "next/image";

const Itemcard = () => {
  return (
    <div className={[style.Item, style.itemGrid].join(" ")}>
      <div>
        <Image src={"/"} layout="fill">
          {" "}
        </Image>
      </div>
    </div>
  );
};

export default Itemcard;
