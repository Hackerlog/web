const If = ({ condition, then, else: rename = null }) => {
  if (condition) {
    return then;
  } else if (rename) {
    return rename;
  }
  return null;
};
export default If;
