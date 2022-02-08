import Breakline from "../breakline/Breakline";
import style from "./Category.module.scss";

interface iProps {
  children: any;
  variant?: string;
  onClick?: () => void;
}

const Category: React.FC<iProps> = ({ children, variant, onClick }) => {
  return (
    <>
      <div onClick={onClick} className={`${style[`${variant}`]} ${style.item}`}>
        {children}
      </div>
      <Breakline />
    </>
  );
};

export default Category;
