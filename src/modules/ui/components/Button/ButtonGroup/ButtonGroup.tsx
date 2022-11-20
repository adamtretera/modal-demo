import type { FC, MouseEvent } from "react";

import { Button } from "../Button";

import { Icon } from "../../Icon";

export interface IButtonGroupItem {
  title: string;
  icon?: FC<{ className?: string }>;
}

interface IButtonGroup {
  buttons: IButtonGroupItem[];
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export function ButtonGroup({ buttons, onClick }: IButtonGroup) {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(event);
  };

  return (
    <>
      {buttons.map((buttonItem) => (
        <Button
          key={crypto.randomUUID()}
          name={buttonItem.title}
          onClick={handleClick}
        >
          {buttonItem.title}
          {buttonItem.icon ? <Icon icon={buttonItem.icon} /> : null}
        </Button>
      ))}
    </>
  );
}
