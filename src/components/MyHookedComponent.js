import React from "react";

import { 
  useDocumentTitle,
  useFormInput,
  useWindowWidth
} from './hooks'


export default function MyHookedComponent(props) {

  const name = useFormInput('Fabio');
  const surname = useFormInput('Szostak');
  const width = useWindowWidth();

  useDocumentTitle(name.value + ' ' + surname.value);

  return (
    <div>
      <section>
        <label>Name</label>
        <input {...name} />
      </section>
      <section>
        <label>Surname</label>
        <input {...surname} />
      </section>
      <section>
        <label>Width=</label>
        {width}
      </section>
    </div>
  );
}