const debounce = (func, timeout = 1000) =>  {
    let timer;
    return (txt,type) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(txt,type);
      }, timeout);
    };
  }

  export default debounce ;