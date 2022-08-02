const debounce = (func, timeout = 1000) =>  {
    let timer;
    return (txt,page,type) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(txt,page,type);
      }, timeout);
    };
  }

  export default debounce ;