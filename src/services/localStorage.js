export const save = (key, value) => {
  try {
    const reformedState = JSON.stringify(value);
    localStorage.setItem(key, reformedState);
  } catch (error) {
    console.log("Set state error: ", error.message);
  }
};

export const load = (key) => {
  try {
    const reformedState = localStorage.getItem(key);
    return reformedState === null ? undefined : JSON.parse(reformedState);
  } catch (error) {
    console.log("Get state error: ", error.message);
  }
};
