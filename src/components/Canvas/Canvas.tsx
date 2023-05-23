import { CanvasPixels } from "../../types";
import Pixel from "../Pixel/Pixel";
import CanvasStyled from "./CanvasStyled";

interface CanvasProps {
  pixels: CanvasPixels;
}

const Canvas = ({ pixels }: CanvasProps): React.ReactElement => {
  return (
    <CanvasStyled>
      <tbody>
        {pixels.map((pixelsRow, rowNumber) => (
          <tr key={`row-${rowNumber}`}>
            {pixelsRow.map((pixel, columnNumber) => (
              <Pixel pixelInfo={pixel} key={`column-${columnNumber}`} />
            ))}
          </tr>
        ))}
      </tbody>
    </CanvasStyled>
  );
};

export default Canvas;
