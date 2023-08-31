interface AdminNavigationLink {
  to: string;
  text: string;
}

export const adminNavigationLinks: AdminNavigationLink[] = [
  { text: 'Articles', to: '' },
  { text: 'Codes', to: '/codes' },
  { text: 'Create Article', to: '/create' },
  { text: 'Parse Articles', to: '/parse' },
];
