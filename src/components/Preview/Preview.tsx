import { CanvasPixels } from "../../types";
import CanvasStyled from "../Canvas/CanvasStyled";
import Pixel from "../Pixel/Pixel";

interface PreviewProps {
  pixels: CanvasPixels;
}

const Preview = ({ pixels }: PreviewProps): React.ReactElement => {
  return (
    <CanvasStyled>
      <tbody>
        {pixels.map((pixelsRow, rowNumber) => (
          <tr key={`row-${rowNumber}`}>
            {pixelsRow.map((pixel, columnNumber) => (
              <Pixel pixelInfo={pixel} key={`column-${columnNumber}`} mini />
            ))}
          </tr>
        ))}
      </tbody>
    </CanvasStyled>
  );
};

export default Preview;
