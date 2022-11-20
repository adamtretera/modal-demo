import type { ButtonHTMLAttributes } from "react";

import { ButtonGroup } from "./ButtonGroup";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ ...props }: IButton) {
  return <button {...props} />;
}

Button.Group = ButtonGroup;
