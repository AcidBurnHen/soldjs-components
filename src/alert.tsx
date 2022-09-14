import { splitProps, createSignal } from "solid-js";
import { Show } from "solid-js/web";

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

  /** Custom alert class, if not set, defaults to alert */
  const alertClass = props.elClass === undefined ? "alert" : props.elClass

  return (
    <Show when={alert().when}>
      <div class={alertClass}>
        <p class={`${alertClass}_msg`}>{props.msg}</p>
        <p class={`${alertClass}_x`} onClick={closeModal}>X</p>
      </div>
    </Show>
  );
}
