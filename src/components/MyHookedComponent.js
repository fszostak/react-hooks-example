import React, { useContext } from "react";

import { LangContext } from '../lang/LangContext';

import { 
  useDocumentTitle,
  useFormInput,
  useWindowWidth
} from './hooks'


export default function MyHookedComponent(props) {

  const t = useContext(LangContext);

  const name = useFormInput('Fabio');
  const surname = useFormInput('Szostak');
  const width = useWindowWidth();
  
  useDocumentTitle(name.value + ' ' + surname.value);

  return (
    <div>
      <section>
        <label>{ t.Name || "Name" }</label>
        <input {...name} />
      </section>
      <section>
        <label>{ t.Surname || "Surname" }</label>
        <input {...surname} />
      </section>
      <section>
        <label>Width=</label>
        {width}
      </section>
    </div>
  );
}