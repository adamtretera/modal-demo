import type { FC } from "react";

export interface IIconProps {
  icon: FC<{ className?: string }>;
}
export const Icon = ({ icon: Icon }: IIconProps) => {
  return <span className={"IconBox"}>{<Icon className={"Icon"} />}</span>;
};
