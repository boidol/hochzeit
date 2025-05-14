import { toHtmlId } from '~/utils/utils';
import { getPermalink } from '~/utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Navigation',
      links: [
        {
          text: 'Wann und Wo',
          href: getPermalink('/#' + toHtmlId('Wann und Wo')),
        },
        {
          text: 'Unterkunft vor Ort',
          href: getPermalink('/#' + toHtmlId('Unterkunft vor Ort')),
        },
        {
          text: 'Anreise',
          href: getPermalink('/#' + toHtmlId('Anreise & Parken')),
        } /*,
        {
          text: 'Über die Gegend',
          href: getPermalink('activities'),
          }, */,
        {
          text: 'Geschenke',
          href: getPermalink('/#' + toHtmlId('Geschenke')),
        },
        {
          text: 'Dresscode',
          href: getPermalink('/#' + toHtmlId('Dresscode')),
        },
        {
          text: 'Kontakt',
          href: getPermalink('/#' + toHtmlId('Kontaktadressen')),
        },
      ],
    },
  ],
  actions: [],
};

export const footerData = {
  footNote: `<a href="/codenames">🥚</a>&nbsp;2025 Kirstin & Jonathan&nbsp;|&nbsp;<a class="underline" href="mailto:info@kirstin-und-jonathan.de">Kontakt</a>`,
};
