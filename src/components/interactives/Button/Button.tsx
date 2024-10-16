// import other
import { withHover } from "../withHover/withHover";

/**
 * A button element wrapped with cursor hover effects.
 *
 * @component
 */
function _Button(props) {
  return <button {...props} />;
}

export const Button = withHover(_Button);
