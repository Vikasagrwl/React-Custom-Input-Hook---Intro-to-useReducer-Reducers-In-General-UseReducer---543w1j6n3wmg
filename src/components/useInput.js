import { useState } from "react";

//complete the input hook
const useInput = (initialValue) => {
    const[state, setState] = useState(initialValue);

    const onInputChange = (e) =>{
        setState(e.target.value);
    }
    const bind = {
        value:state,
        onChange: onInputChange,
    };
    return bind;
};

export default useInput;
