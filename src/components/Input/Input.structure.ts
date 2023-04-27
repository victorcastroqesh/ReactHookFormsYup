import { UseFormRegisterReturn } from "react-hook-form";

export interface IProps {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  register?: UseFormRegisterReturn;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  error?: string;
}
