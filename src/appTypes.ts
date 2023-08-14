export type Memo = {
  id: number,
  title: string,
  content: string
}

export type Theme = 'light'| 'dark';

export type Lang = 'fr' | 'en';

export type Title = {
  fr: string,
  en: string
}

export type MemoTitle = {
  fr: string,
  en: string
}

export type MemoForm = {
  empty: {
    fr: string,
    en: string
  },
  delete: {
    fr: string,
    en: string
  },
  create: {
    fr: string,
    en: string
  },
  update: {
    fr: string,
    en: string
  },
  titlePlaceholder: {
    fr: string,
    en: string
  },
  contentPlaceholder: {
    fr: string,
    en: string
  }
}