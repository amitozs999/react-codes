import { useState } from "react";

function useLocalStorage(key, initialValue) {
  // key="select-value", iv="light"

  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const x = () => {
    const item = localStorage.getItem(key);

    if (item) {
      return JSON.parse(item); //if already in local return it
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue)); //if not in local, set it in local then return
      return initialValue;
    }
  };

  //only used 1st time
  const [storedValue, setStoredValue] = useState(x); //x will fetch if there val in LS or iv

  //after that use this to set values in local storage
  const setLocalStorageStateValue = (valueOrFn) => {
    let newValue;
    if (typeof valueOrFn === "function") {
      const fn = valueOrFn;
      newValue = fn(storedValue); //if passed function pass store val in func and calc newval
    } else {
      newValue = valueOrFn; //else have newval
    }

    window.localStorage.setItem(key, JSON.stringify(newValue));

    setStoredValue(newValue); //setval in usestate
  };

  //next time se setvalue of useLocalStorage  is used
  return [storedValue, setLocalStorageStateValue]; //  setStoredValue(e.target.value) call karenge s2nd time par se
}

export default useLocalStorage;

//1st time  use state ki value setItem
//2nd time uselocalstoresetvalue(newval)=>   from here it set that in usestate val

//in both cases also store in local storage
