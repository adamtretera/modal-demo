import * as DialogPrimitive from "@radix-ui/react-dialog";

import type { ReactNode } from "react";

import { Button, IButtonGroupItem } from "../../Button";

interface IModalHeader {
  title: string;
  icon: ReactNode;
  buttons?: IButtonGroupItem[];
}

export function ModalHeader({ title, icon, buttons }: IModalHeader) {
  return (
    <header className={"ModalHeader"}>
      <DialogPrimitive.DialogTitle>{title}</DialogPrimitive.DialogTitle>
      {icon}
      {buttons ? <Button.Group buttons={buttons} /> : null}
    </header>
  );
}
