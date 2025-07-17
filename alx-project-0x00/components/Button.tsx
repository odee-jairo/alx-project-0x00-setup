import { ButtonProps } from "../interfaces";

const Button: React.FC<ButtonProps> = ({ title, style }) => {
    return (
      <button className={`border px-3 py-1 mt-3  bg-blue-500 text-white ${style}`}>{title}</button>
    )
  }

export default Button
