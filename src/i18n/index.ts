import { createI18n } from 'vue-i18n';

import zh_cn from './locales/zh_cn';

import en_us from './locales/en_us';

const message = {
	zh: zh_cn,
	en: en_us,
};

const language = (navigator.language || 'zh').toLocaleLowerCase();

const i18n = createI18n({
	locale: localStorage.getItem('lang') || language.split('-')[0] || 'zh',
	fallbackLocale: 'zh',
	message,
});

export default i18n;
