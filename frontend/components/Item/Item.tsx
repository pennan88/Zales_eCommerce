import Breakline from "../breakline/Breakline";
import style from "./Item.module.scss";

interface iProps {
  children: any;
  variant?: string;
  onClick?: () => void;
}

const Item: React.FC<iProps> = ({ children, variant, onClick }) => {
  return (
    <>
      <div onClick={onClick} className={`${style[`${variant}`]} ${style.item}`}>
        {children}
      </div>
      <Breakline />
    </>
  );
};

export default Item;
