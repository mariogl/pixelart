import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CanvasPixels } from "../../types";

export interface PixelsState {
  pixels: CanvasPixels;
}

const initialPixelsState: PixelsState = {
  pixels: [],
};

const pixelsSlice = createSlice({
  name: "pixels",
  initialState: initialPixelsState,
  reducers: {
    loadPixels: (
      _currentPixels,
      action: PayloadAction<CanvasPixels>
    ): PixelsState => ({
      pixels: action.payload,
    }),
    togglePixel: (
      currentPixels,
      action: PayloadAction<number>
    ): PixelsState => ({
      pixels: currentPixels.pixels.map((pixelRow) =>
        pixelRow.map((pixel) => ({
          ...pixel,
          on: pixel.id === action.payload ? !pixel.on : pixel.on,
        }))
      ),
    }),
  },
});

export const {
  loadPixels: loadPixelsActionCreator,
  togglePixel: togglePixelActionCreator,
} = pixelsSlice.actions;
export const pixelsReducer = pixelsSlice.reducer;
