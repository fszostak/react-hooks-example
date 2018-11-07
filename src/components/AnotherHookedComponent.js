import React from "react";

import { 
  useFormInput
} from './hooks'


export default function AnotherHookedComponent(props) {

  const login = useFormInput('');
  const password = useFormInput('');

  return (
    <div>
      <section>
        <label>Login</label>
        <input {...login} />
      </section>
      <section>
        <label>Password</label>
        <input type="password" {...password} />
      </section>
    </div>
  );
}