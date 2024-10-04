// import libraries
import { ComponentType, MouseEventHandler, useContext } from "react";
import clsx from "clsx";

// import other
import { cursorStateContext, CursorState } from "@contexts/CursorContext";

// import styles
import styles from "./withHover.module.scss";

/**
 * Wraps JSX elements so that when they are hovered over,
 * the cursor state changes.
 *
 * @HOC
 */
export function withHover<T>(Component: any): ComponentType<any> {
  const WrappedComponent: ComponentType<T> = (props: T) => {
    const {
      className,
      onMouseEnter,
      onMouseLeave,
      cursorState = CursorState.HOVER, // The cursor state to apply when the component is hovered over.
      cursorExtras, // Extra properties to set when the component is hovered over.
      ...rest
    } = props as any;
    const { setCursorState, setCursorExtras } = useContext(cursorStateContext)!;

    const handleMouseEnter: MouseEventHandler<HTMLElement> = (e) => {
      setCursorState(cursorState);
      setCursorExtras(cursorExtras);
      if (onMouseEnter) {
        onMouseEnter(e);
      }
    };

    const handleMouseLeave: MouseEventHandler<HTMLElement> = (e) => {
      setCursorState(CursorState.IDLE);
      setCursorExtras({});
      if (onMouseLeave) {
        onMouseLeave(e);
      }
    };

    return (
      <Component
        {...(rest as T)}
        className={clsx(className, styles.wrapped)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    );
  };

  // Set the displayName for better debugging and React DevTools visibility
  const componentName = Component.displayName || Component.name || "Component";
  WrappedComponent.displayName = `withHover(${componentName})`;

  return WrappedComponent;
}
