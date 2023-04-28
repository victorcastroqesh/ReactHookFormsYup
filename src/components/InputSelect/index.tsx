import React from "react";
import { IProps } from "./InputSelect.structure";

/**
 * @description - Selection component that will open a list of options. Has the option to be disabled.
 * @example - <InputSelect
      options={[
        "001 Option 1 ",
        "003 Option 1 ",
        "004 Option 1 ",
        ]}
        value={option}
        setValue={setOption}
      />
 * @param props label- Property for label. Is optional.
 * @param props value - value of the input
 * @param props setValue - Function that set the value
 * @param props options - Property that brings the options
 * @param props disabled - If true, the input is disabled.
 */

export default function InputSelect({
  options,
  label,
  setValue,
  disabled = false,
  error,
}: IProps) {
  const [showOptions, setShowOptions] = React.useState(
    false as boolean
  );
  const [selected, setSelected] = React.useState("" as string);
  const optionsRef = React.useRef<HTMLDivElement>(null);

  const renderOptions = React.useMemo(() => {
    return options.map((option) => {
      return (
        <div
          className=" px-4 py-2 tracking-wider font-normal leading-5 gap-x-6 text-sm border-b-gray-3 text-gray-5 flex"
          key={option}
          onClick={() => {
            setValue(option);
            setSelected(option);
            setShowOptions(false)
          }}
        >
          <div
            onClick={() => {
              setShowOptions(false)
              setSelected(option)
            }}
          >*</div>
          {option}
        </div>
      );
    });
  }, [selected]);

  return (
    <div className="relative z-10 w-full h-fit">
      <div
        onClick={() => setShowOptions((prevState) => !prevState)}
        ref={optionsRef}
        className={`w-full h-[40px] pr-3 border border-gray-3 pl-4 text-gray-5
        rounded-lg flex justify-between items-center relative
        ${ disabled ? "bg-gray-2" : "bg-gray-0"}
        ${showOptions && "border-primary-half transition-all"}`}
      >
        {selected !== "" ? (
          selected
        ) : (
          <span className="text-gray-3 text-sm">Selecione uma opção</span>
        )}

        <>*</>
        <label className="absolute -top-[15px] left-2 transition-all bg-gray-0 text-primary-half font-bold px-2">
          {disabled ? "" : label}
        </label>
      </div>
      <div
        className={`absolute max-h-32 w-full bg-white rounded-md shadow-lg${
          !showOptions && "hiden transition duration-300 opacity-0 transform scale-95"
        }`}
      >
        {showOptions && renderOptions}
      </div>
      {error && <span className='text-red-500'>{error}</span>}
    </div>
    
  );
}