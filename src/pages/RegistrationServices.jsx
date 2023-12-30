class RegistrationServices {
  collectData = async (name, email, password, mobile, is_verified, is_admin) => {
    let result = await fetch("http://127.0.0.1:7000/signup", {
      method: "post",
      body: JSON.stringify({ name, email, password, mobile, is_verified, is_admin }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    return result;

  };

  handleLogin = async (email, password) => {
    let result = await fetch("http://127.0.0.1:7000/login", {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    return result;

  };

  handleResetPassword = async (email, mobile, newPassword) => {
    let result = await fetch("http://127.0.0.1:7000/forgot/password", {
      method: "put",
      body: JSON.stringify({ email, mobile, newPassword }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    return result;
  };

}

export default new RegistrationServices();