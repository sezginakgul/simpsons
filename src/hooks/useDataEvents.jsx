const useDataEvents = () => {
  const handleUpData = (arg, state, setState) => {
    if (state.indexOf(arg)) {
      let data = state.filter((s) => s !== arg);
      data.splice(state.indexOf(arg) - 1, 0, arg);

      setState(data);
      localStorage.setItem("Simpsons", JSON.stringify(data));
    }
  };

  const handleDownData = (arg, state, setState) => {
    let data = state.filter((s) => s !== arg);

    if (state.length - 1 > state.indexOf(arg)) {
      data.splice(state.indexOf(arg) + 1, 0, arg);

      setState(data);
      localStorage.setItem("Simpsons", JSON.stringify(data));
    }
  };

  const handleDeleteData = (arg, state, setState) => {
    let data = state.filter((s) => s !== arg);
    setState(data);
    localStorage.setItem("Simpsons", JSON.stringify(data));
  };
  return { handleUpData, handleDownData, handleDeleteData };
};

export default useDataEvents;
