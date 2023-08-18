export enum Languages {
    es = 'es',
    en = 'en',
}

type LanguageKeys = keyof typeof Languages;

export interface LanguageObject {
    lang_key: LanguageKeys,
    lang_description: string
}