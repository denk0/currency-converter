import { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  SelectContainer,
  SelectLabelButton,
} from "./styled";

interface Props {
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

const Select = ({ value, options, onChange }: Props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (newValue: string) => {
    onChange(newValue);
    handleClose();
  };

  return (
    <SelectContainer>
      <SelectLabelButton onClick={handleOpen}>{value}</SelectLabelButton>
      <Dropdown isVisible={open}>
        {options.map((option) => (
          <DropdownItem
            active={option === value}
            key={option}
            onClick={(event) => handleChange(option)}
          >
            {option}
          </DropdownItem>
        ))}
      </Dropdown>
    </SelectContainer>
  );
};

export default Select;
