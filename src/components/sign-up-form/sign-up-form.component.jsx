import { useState } from "react";

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div>
      <h1>Sign up with email</h1>
      <form action="">
        <label htmlFor="display-name">Display Name</label>
        <input type="text" id="display-name" required onChange={handleChange} name="displayName" value={displayName} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" required onChange={handleChange} name="email" value={email} />

        <label htmlFor="">Password</label>
        <input type="password" id="password" required onChange={handleChange} name="password" value={password} />

        <label htmlFor="">Confirm Password</label>
        <input type="password" id="confirm-password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;