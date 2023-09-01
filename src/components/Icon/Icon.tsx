import { default as sprite } from "../../assets/icons/sprite.svg";
import './Icon.scss';

type IconProps = {
  id: string;
  class?: string;
  width?: number;
  height?: number;
  callback?: Function;
};

const Icon = (props: IconProps) => {
  return (
    <svg
      onClick={(e) => {
        if (props.callback) {
          props.callback(e);
        }
      }}
      style={{ width: props.width, height: props.height }}
      className={`icon ${props.class ? props.class : ""}`}
    >
      <use href={`${sprite}#${props.id}`} />
    </svg>
  );
};

export default Icon;
