import React from 'react';

export const LangContext = React.createContext();

export const loadTranslations = (lang) => {
  return require(`./translations-${lang}.json`);  
}

export const defaultLanguage = 'en';

export const languageList = [
  { 'name': 'EN', 'value': 'en'},
  { 'name': 'PT', 'value': 'pt'},
  { 'name': 'ES', 'value': 'es'},
];