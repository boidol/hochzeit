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
          text: 'RSVP',
          href: getPermalink('/#' + toHtmlId('Rückmeldung')),
        },
        {
          text: 'Unterkunft vor Ort',
          href: getPermalink('/#' + toHtmlId('Unterkunft vor Ort')),
        },
        {
          text: 'Anreise',
          href: getPermalink('/#' + toHtmlId('Anreise')),
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
  footNote: `<a href="/codenames">🥚</a>&nbsp;2024 Kirstin & Jonathan&nbsp;|&nbsp;<a class="underline" href="mailto:info@kirstin-und-jonathan.de">Kontakt</a>`,
};
