import { UseFormRegisterReturn } from "react-hook-form";

export interface IProps {
  placeholder: string;
  label: string;
  disabled?: boolean;
  error?: string;
  control: any;
  name: string
}
