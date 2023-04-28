export interface IProps {
  label?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  options: string[];
  disabled?: boolean;
  error?: string;
}
