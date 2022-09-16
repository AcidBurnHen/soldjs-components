import { splitProps, createSignal } from "solid-js";
import { Show } from "solid-js/web";

import styles from "./alert.module.css";

interface AlertProps {
  when: boolean;
  type: "success" | "error";
  msg: string;
  elClass?: string;
  changeStyle?: boolean;
}

export function Alert(props: AlertProps) {
  /**
   * Alert modal component for error/success messages.
   *
   * @param when - Signal/state that decides when the modal is visible
   * @param type  - Decide what type of Alert msg you want to display
   * @param msg - The message content inside of the alert
   * @param elClass -  Add custom class name to the container of the alert and prefix for children classes, overrides most styles.
   * @param changeStyle - Default false, if set to true, overrides all styles
   *
   * @returns The alert component
   *
   * @beta
   */

  /** Splitting props because destructuring loses reactivity*/
  const [show] = splitProps(props, ["when"]);

  /** Signal to keep track of modal state */
  const [alert, setAlert] = createSignal(show);

  /** Button click to hide the modal */
  const closeModal = () => {
    setAlert({ when: false });
  };

  let alertClass: string;

  const createClass = (slug?: string) => {
    /**
     * Function to check which alert class to display
     * This function will be useful for other parts of the library so it will be removed from this file
     * after further testing, and improved for better flexibility.
     *
     * @param slug - Optional paramter to add elements and modifiers to the block class
     *
     * @returns A class string
     */
    if (props.elClass === undefined) {
      alertClass = slug === undefined ? styles.alert : styles[`alert_${slug}`];
    } else {
      alertClass = slug === undefined ? props.elClass : `${props.elClass}_${slug}`;
    }

    return alertClass;
  };

  let positionClass = styles.position;
  /** Overrides all styles if set to true */
  if (props.changeStyle === true) {
    alertClass = props.elClass === undefined ? "" : props.elClass;
    positionClass = "";
  }

  return (
    <Show when={alert().when}>
      <div class={`${positionClass} ${createClass()}`}>
        <p class={createClass("msg")}>{props.msg}</p>
        <p class={createClass("x")} onClick={closeModal}>
          X
        </p>
      </div>
    </Show>
  );
}
