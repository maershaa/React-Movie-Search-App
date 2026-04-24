const throttle = (callback, delay = 200) => {
  let isThrottled = false;

  const wrapper = () => {
    if (isThrottled) return;

    callback();

    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
    }, delay);
  };

  return wrapper;
};

export { throttle };
