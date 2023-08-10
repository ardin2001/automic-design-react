import { useEffect } from "react";
import useInput from "../../../hooks/useInput";

const Input = (props) => {
  const { type, placeholder, name, id, ErrorInputHandler } = props;
  const [value, setValue] = useInput("");
  useEffect(() => {
    if (type == "username") {
      if (value != "") {
        if (value.length < 8) {
          ErrorInputHandler("Username less than 8");
        } else {
          ErrorInputHandler("");
        }
      }
    }
  });
  return (
    <input
      type={type}
      className="text-sm border rounded w-full p-2 text-slate-700 placeholder:opacity-50"
      placeholder={placeholder}
      name={name}
      id={id}
      value={value}
      onChange={setValue}
    />
  );
};

export default Input;
