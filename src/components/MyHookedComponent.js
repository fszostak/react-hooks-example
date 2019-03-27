import React, { useContext } from "react";

import { LangContext } from '../lang/LangContext';

import { 
  useDocumentTitle,
  useFormInput,
  useWindowWidth
} from './hooks'


export default function MyHookedComponent(props) {

  const lang = useContext(LangContext);

  const name = useFormInput('Fabio');
  const surname = useFormInput('Szostak');
  const width = useWindowWidth();
  
  useDocumentTitle(name.value + ' ' + surname.value);

  return (
    <div>
      <section>
        <label>{ lang.t("Name") }</label>
        <input {...name} />
      </section>
      <section>
        <label>{ lang.t("Surname") }</label>
        <input {...surname} />
      </section>
      <section>
        <label>{ lang.t("Width") }=</label>
        {width}
      </section>
    </div>
  );
}