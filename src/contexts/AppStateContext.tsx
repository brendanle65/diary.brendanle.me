// import libraries
import { createContext, useState, Dispatch, SetStateAction, ReactNode, useEffect } from "react";

// import other
import { Category } from "@constants/categories";
import variables from "@styles/exports.module.scss";

/** Defines the shape of the context's value. */
interface AppStateContextProps {
  isNotesOn: boolean;
  setIsNotesOn: Dispatch<SetStateAction<boolean>>;
  categoryFilter: Category;
  setCategoryFilter: Dispatch<SetStateAction<Category>>;
}

export const appStateContext = createContext<AppStateContextProps | null>(null);

interface AppStateProviderProps {
  children: ReactNode;
}

/**
 * Wraps the provided children in a context provider, sharing the current app state
 * (data to persist between pages) and a function to update it accessible to descendant components.
 *
 * @provider
 */
export function AppStateProvider({ children }: AppStateProviderProps) {
  const [isNotesOn, setIsNotesOn] = useState(false); // Whether or not author's notes are toggled
  const [categoryFilter, setCategoryFilter] = useState(null); // What category to filter posts by

  useEffect(() => {
    function handleResize() {
      const breakpoint = variables.laptop.split("px")[0];
      const isCollapsed = window.innerWidth < Number(breakpoint);
      setIsNotesOn(isCollapsed); // In the collapsed version, always display notes and disable them in the uncollapsed version by default
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <appStateContext.Provider
      value={{
        isNotesOn,
        setIsNotesOn,
        categoryFilter,
        setCategoryFilter,
      }}
    >
      {children}
    </appStateContext.Provider>
  );
}
