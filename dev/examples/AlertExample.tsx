import {Alert} from "../../src/alert"
import {createSignal} from "solid-js";

function AlertExample() {
    const [state, setState] = createSignal(false);

    const openAlert = () => {
        setState(true)
    }
    return (
        <div>
            <div onClick={openAlert}>Open alert</div>
            <Alert when={state()} type="success" msg="test me out"  />
        </div>
    )
}

export default AlertExample