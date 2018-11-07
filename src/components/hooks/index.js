import { useState, useEffect } from "react";

//
function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  });
}


//
function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  function handleChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}


//
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  });
  return width;
}

//
export { 
  useDocumentTitle,
  useFormInput,
  useWindowWidth
}