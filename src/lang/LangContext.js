import React from 'react';

export const defaultLanguage = 'en';

export const languageList = [
  { 'name': 'EN', 'value': 'en'},
  { 'name': 'PT', 'value': 'pt'},
  { 'name': 'ES', 'value': 'es'},
];

export const LangContext = React.createContext();

export const loadTranslations = (lang) => {
  return { t: n => {
    const translations = require(`./translations-${lang}.json`);
    return translations[n] || n
  }}
}