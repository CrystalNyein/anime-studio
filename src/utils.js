export const getInitials = (name) => {
  let nameArr = name.split(" ");

  if (nameArr.length > 1) {
    return nameArr[0][0] + nameArr[nameArr.length - 1][0];
  } else {
    return nameArr[0][0] + nameArr[0][1];
  }
};
