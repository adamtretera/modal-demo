import React, { ReactNode } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import type { DialogProps } from "@radix-ui/react-dialog";

import { ModalHeader } from "./ModalHeader";
import { ModalFooter } from "./ModalFooter";

interface IModal extends DialogProps {
  children: ReactNode;
  dialogTrigger: ReactNode;
}

export const Modal = ({ children, dialogTrigger, ...props }: IModal) => {
  return (
    <DialogPrimitive.Root {...props}>
      <DialogPrimitive.Trigger asChild>{dialogTrigger}</DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="DialogOverlay" />
        <DialogPrimitive.Content className="DialogContent">
          {children}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

Modal.Close = DialogPrimitive.Close;
Modal.Title = DialogPrimitive.DialogTitle;
Modal.Description = DialogPrimitive.Description;
Modal.Header = ModalHeader;
Modal.Footer = ModalFooter;
