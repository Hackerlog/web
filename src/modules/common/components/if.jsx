const If = ({ condition, then, else: renamedElse = null }) => {
  if (condition) {
    return then;
  } else if (renamedElse) {
    return renamedElse;
  }
  return null;
};

export default If;
