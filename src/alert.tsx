import { createEffect, createSignal } from "solid-js";
import { Show } from "solid-js/web";

interface AlertProps {
  when: boolean;
  type: "success" | "error";
  msg: string;
  class?: string;
  changeStyle?: boolean;
}

export function Alert(props: AlertProps) {
  /**
   * Alert modal for error/success messages.
   *
   * @param when - Signal/state that decides when the modal is visible
   * @param type  - Decide what type of Alert msg you want to display
   * @param msg - The message content inside of the alert
   * @param class - Optional setting to add class to the container of the alert, useful for adjusting the position of the alert
   * @param changeStyle - Default false, if set to true, overrides all styles
   *
   * @returns The alert component
   *
   * @beta
   */

  /**
   * Signal to control when button is closed
   */
  const [show, setShow] = createSignal(props.when);


  /** 
   * Keeps track of change in props.when from user, this is a current workaround because passing props.when to createSignal 
   * makes closing the modal from inside of the component not work.
   */

  createEffect(() => {
   
    console.log("props", props.when, "ran", show())
 
  });

  /**
   * Button click to hide the modal
   */
  const closeModal = () => {
      setShow(false);
      console.log("ran", show())
  };

  return (
    <Show when={show()}>
      <div>
        <p>{props.msg}</p>
        <p onClick={closeModal}>X</p>
      </div>
    </Show>
  );
}
