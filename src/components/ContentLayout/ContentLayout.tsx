import React from "react";

type Props = {
  children: React.ReactNode;
};

export const ContentLayout: React.FC<Props> = ({ children }) => {
  return <div className="p-8">{children}</div>;
};
