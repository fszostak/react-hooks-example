import React, { useContext } from "react";

import { LangContext } from './LangContext';

import { 
  useDocumentTitle,
  useFormInput,
  useWindowWidth
} from './hooks'


export default function MyHookedComponent(props) {

  const name = useFormInput('Fabio');
  const surname = useFormInput('Szostak');
  const width = useWindowWidth();

  const context = useContext(LangContext);

  useDocumentTitle(name.value + ' ' + surname.value);

  return (
    <div>
      <h1>Lang from Context: {context.lang}</h1>
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