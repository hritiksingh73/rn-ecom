
//LoginPage Validators

export const validateEmail = email => {
  var rejx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return rejx.test(email);
};

export const validatePassword = userPassword => {
  var rejx =
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
  return rejx.test(userPassword);
};


//RegisterPage Validators

export const emailValidator = registeremail => {
  var regx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regx.test(registeremail);
};
export const contactValidator = cellNumber => {
  var regx = /^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$/;
  return regx.test(cellNumber);
};
export const passwordValidator = password => {
  var regx =
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
  return regx.test(password);
};
