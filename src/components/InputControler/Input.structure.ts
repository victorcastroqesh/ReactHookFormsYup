import { Control, FieldPath, FieldValues } from "react-hook-form";

export interface IProps<T extends FieldValues> {
  placeholder: string;
  label: string;
  disabled?: boolean;
  error?: string;
  control: Control<T>;
  name: FieldPath<T>
}
