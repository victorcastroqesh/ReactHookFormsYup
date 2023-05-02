import React from "react";

import { IProps } from "./Input.structure";
import { Controller } from "react-hook-form";

/**
 * @description - Input component.
 * @example - <Input name={name} control={control} label="label" placeholder="placeholder"/>
 * @param props error - error message of the input
 * @param props label - label of the input
 * @param props disabled - If true, the input is disabled.
 * @param props name - name that will be used to register the data of the input in the contorller
 * @param props control - it's a react-hook-form controller that will be used to register the data of the input
 * 
 */

export default function InputControler({
  label,
  disabled = false,
  error,
  control,
  name
}: IProps) {
  
  return (
    <div className="w-full">
      <div
      className={`w-full h-[40px] pr-2 border border-gray-3
      rounded-lg flex justify-between items-center relative
      focus-within:border-primary-half
      transition-all ${disabled ? "bg-gray-2" : "bg-gray-0"}`}
    >
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({
            field: { onChange, value }
          }) => (
          <input
            onChange={onChange}
            value={value}
            className="w-full h-full border-none 
            bg-transparent pl-4 peer rounded-lg text-gray-5 text-sm outline-none"
          />
        )}
      />
      <label className="absolute -top-[15px] left-2 transition-all bg-gray-0 text-primary-half font-bold px-2">
        {disabled ? "" : label}
        </label>
      </div>
      {error && <span className='text-red-500'>{error}</span>}
    </div>
    
  );
}
