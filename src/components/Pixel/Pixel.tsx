import { PixelInfo } from "../../types";
import PixelStyled from "./PixelStyled";

interface PixelProps {
  pixelInfo: PixelInfo;
  mini?: boolean;
}

const Pixel = ({ pixelInfo: { on }, mini }: PixelProps): React.ReactElement => {
  const togglePixel = () => {
    // Togglia el pixel sisplau
  };

  return (
    <PixelStyled
      className={`${on ? "on" : ""}${mini ? " mini" : ""}`}
      onClick={togglePixel}
    />
  );
};

export default Pixel;
