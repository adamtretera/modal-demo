import * as DialogPrimitive from "@radix-ui/react-dialog";

import { Icon } from "../../Icon";

import { FC } from "react";

interface IModalHeader {
  title: string;
  icon: FC<{ className?: string }>;
}

export function ModalHeader({ title, icon }: IModalHeader) {
  return (
    <header>
      <DialogPrimitive.DialogTitle>{title}</DialogPrimitive.DialogTitle>
      <Icon icon={icon} />
    </header>
  );
}
