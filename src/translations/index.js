import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { TRANSLATIONS_OR_IN } from './odia/translations';
import { TRANSLATIONS_EN } from './en/translations';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: TRANSLATIONS_EN
            },
            or_IN: {
                translation: TRANSLATIONS_OR_IN
            }
        }
    });

i18n.changeLanguage('en');
