const unique = (array) => {
  const result = array.reduce((acc, item) => {
    if (acc.find(({ id }) => item.id === id)) {
      return acc;
    }
    return [...acc, item];
  }, []);
  return result;
};

export default unique;
