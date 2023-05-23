import { useAppSelector } from "../../store";
import Canvas from "../Canvas/Canvas";
import Preview from "../Preview/Preview";

const App = (): JSX.Element => {
  const pixels = useAppSelector((state) => state.pixelsState.pixels);

  return (
    <>
      <Canvas pixels={pixels} />
      <Preview pixels={pixels} />
    </>
  );
};

export default App;
