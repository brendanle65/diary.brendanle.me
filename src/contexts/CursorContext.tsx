// import libraries
import { ReactNode, Dispatch, SetStateAction, createContext, useState } from "react";

/**
 * The current state of the browser's cursor.
 *
 * This refers to the state of an element that will act as
 * a supplement (not a replacement)
 * to the browser's default mouse.
 */
export enum CursorState {
  IDLE = "IDLE", // When the cursor is not hovering over anything special - the default state
  HOVER = "HOVER", // When the cursor is hovering over an interactable element
  SMILEY = "SMILEY", // When you want to turn the cursor into a smiley face
  POLAROID = "POLAROID", // When you want to turn the cursor in a a polaroid selfie
  IMAGE = "IMAGE", // When you want to turn the cursor into an image
}

/** Extra information needed for updating/styling cursor. */
export interface CursorExtras {
  image?: {
    src: string; // The source URL of the image.
    alt: string; // The textual description of the image.
  };
}

/** Defines the shape of the context's value. */
interface CursorStateContextProps {
  cursorState: CursorState; // The current state of the cursor.
  setCursorState: Dispatch<SetStateAction<CursorState>>; // Function to update the cursor state.
  cursorExtras: CursorExtras; // Additional properties for the cursor, such as an optional image.
  setCursorExtras: Dispatch<SetStateAction<CursorExtras>>; // Function to update the cursor's extra properties.
}

export const cursorStateContext = createContext<CursorStateContextProps | null>(null);

interface CursorStateProviderProps {
  children: ReactNode;
}

/**
 * Wraps the provided children in a context provider, supplying
 * the current cursor state and a function to update it accessible
 * to descendant components.
 *
 * @provider
 */
export function CursorStateProvider({ children }: CursorStateProviderProps) {
  const [cursorState, setCursorState] = useState<CursorState>(CursorState.IDLE);
  const [cursorExtras, setCursorExtras] = useState<CursorExtras>({});

  return (
    <cursorStateContext.Provider value={{ cursorState, setCursorState, cursorExtras, setCursorExtras }}>
      {children}
    </cursorStateContext.Provider>
  );
}
