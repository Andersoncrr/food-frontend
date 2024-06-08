import { Button } from "antd";
import React, { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
  onChange: (toggle: boolean) => void;
  value?: boolean;
};

export const ToggleButton = ({ children, onChange, value }: Props) => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (onChange) {
      onChange(toggle);
    }
  }, [toggle]);
  useEffect(() => {
    if (value) {
      setToggle(value);
    }
  }, [value]);

  return (
    <Button
      onClick={() => setToggle(!toggle)}
      type={toggle ? "primary" : "default"}
      shape="circle"
      size="large"
    >
      {children}
    </Button>
  );
};
