import * as icon from '@/lib/icon';

const socials = [
  {linkTo: 'X', address: '#', 'icon': icon.X},
  {linkTo: 'Facebook', address: '#', 'icon': icon.Facebook},
  {linkTo: 'Instagram', address: '#', 'icon': icon.Instagram},
  {linkTo: 'Tiktok', address: '#', 'icon': icon.Tiktok},
];

const contacts = [
  {linkTo: 'Whatsapp', contact: [
    '+62 xxxxxxxx',
    '+62 xxxxxxxx'
  ], 'icon': icon.Whatsapp},
  {linkTo: 'Email', contact: [
    'srifoton.unsri@gmail.com'
  ], 'icon': icon.Email}
];

const routes = [
  {linkTo: 'Home', address: '/'},
  {linkTo: 'Competition', address: '/competition'},
  {linkTo: 'Workshop', address: '/workshop'},
  {linkTo: 'Talkshow', address: '/talkshow'}
]

export {socials, contacts, routes};