import * as DialogPrimitive from "@radix-ui/react-dialog";

import { Button } from "../../Button";

import type { IButtonGroupItem } from "../../Button";

interface IModalFooter {
  description: string;
  buttons?: IButtonGroupItem[];
}

export function ModalFooter({ description, buttons }: IModalFooter) {
  return (
    <footer className={"ModalFooter"}>
      {description ? (
        <DialogPrimitive.Description>{description}</DialogPrimitive.Description>
      ) : null}
      {buttons ? <Button.Group buttons={buttons} /> : null}
    </footer>
  );
}
