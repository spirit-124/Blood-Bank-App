export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!email || !password || !role) {
      return alert("Please Enter All Details");
    }
    console.log("Login =>", email, password, role);
  } catch (error) {
    console.log(error);
  }
};

export const handleRegister = (
  e,
  email,
  password,
  role,
  name,
  organizationName,
  hospitalName,
  website,
  address,
  phone
) => {
  e.preventDefault();
  try {
    console.log(
      "Register =>",
      email,
      password,
      role,
      name,
      organizationName,
      hospitalName,
      website,
      address,
      phone
    );
  } catch (error) {
    console.log(error);
  }
};
