import React from "react";

import { IProps } from "./Input.structure";

/**
 * @description - Input component.
 * @example - <Input register={register("value")}label="label" placeholder="placeholder"/>
 * @example - <Input 
            * value={value}
            * onChange={(event) => setValue(event.taget.value)}
            * label="label" 
            * placeholder="placeholder"/>
 * @param props value - value of the input
 * @param props onChange - onChange action
 * @param props label - label of the input
 * @param props placeholder - placeholder of the input
 * @param props register - register of the input
 * 
 */

export default function Input({
  register,
  label,
  disabled = false,
  value,
  ...inputProps
}: IProps) {
  
  return (
    <div
      className={`w-full h-[40px] pr-2 border border-gray-3
      rounded-lg flex justify-between items-center relative
      focus-within:border-primary-half
      transition-all ${disabled ? "bg-gray-2" : "bg-gray-0"}`}
    >
      <input
        {...(register ? { ...register} : {...inputProps})}
        className="w-full h-full border-none bg-transparent pl-4 peer rounded-lg text-gray-5 text-sm outline-none"
      />
      <label className="absolute -top-[15px] left-2 transition-all bg-gray-0 text-primary-half font-bold px-2">
        {disabled ? "" : label}
      </label>
    </div>
  );
}
