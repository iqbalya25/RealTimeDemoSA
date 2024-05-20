import React from "react";
import {
  Drawer,
  DrawerProps,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
} from "@chakra-ui/react";
import Link from "next/link";

type CustomDrawerProps = DrawerProps & {
  style?: React.CSSProperties;
};

const CustomDrawer: React.FC<CustomDrawerProps> = ({
  style,
  children,
  ...rest
}) => {
  return (
    <Drawer {...rest}>
      <DrawerOverlay>
        <DrawerContent className="md:!hidden" style={style}>
          <DrawerCloseButton />
          {children}
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default CustomDrawer;
