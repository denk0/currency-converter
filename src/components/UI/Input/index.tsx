import { Label, StyledInput, Wrapper } from "./styled";
import { forwardRef, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  ref: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ name, label, ...otherProps }, ref) => {
    return (
      <Wrapper>
        {label && <Label>{label}</Label>}
        <StyledInput {...otherProps} ref={ref} name={name} />
      </Wrapper>
    );
  },
);

export default Input;
