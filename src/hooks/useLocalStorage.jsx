import { useCallback } from "react";

function useLocalStorage() {
  const setStorage = useCallback((key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  }, []);
  function getStorage(key) {
    const storedData = localStorage.getItem(key);
    return JSON.parse(storedData);
  }

  return { setStorage, getStorage };
}

export default useLocalStorage;
