import type { FC } from "react";
import Button from "./Button";

interface Props {
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

const DonateButton: FC<Props> = ({ size = "md", fullWidth = false }) => {
  return (
    <Button
      href="/get-involved#donate"
      variant="primary"
      size={size}
      fullWidth={fullWidth}
    >
      Donate Now
    </Button>
  );
};

export default DonateButton;
