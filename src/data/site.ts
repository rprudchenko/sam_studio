export const bookingUrl = 'https://t.me/sam_studio_booking';

export const studio = {
  name: 'SAM Студия',
  type: 'Парикмахерская',
  tagline: 'Стрижки, укладки и уход за волосами',
  phone: '+7 916 482-17-35',
  phoneHref: 'tel:+79164821735',
  address: 'Москва, ул. Мясницкая, 24, стр. 2',
  hours: 'Ежедневно 10:00-21:00',
};

export const navItems = [
  { label: 'О студии', href: '#about' },
  { label: 'Услуги', href: '#services' },
  { label: 'Прайс', href: '#prices' },
  { label: 'Специалисты', href: '#team' },
  { label: 'Контакты', href: '#contacts' },
];

export const studioPhotos = [
  {
    src: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=85',
    alt: 'Светлый зал парикмахерской с рабочими местами',
  },
  {
    src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85',
    alt: 'Мастер делает укладку клиентке',
  },
];

export const services = [
  {
    icon: 'scissors',
    title: 'Мужские стрижки',
    text: 'Модельные стрижки, фейд, классические варианты',
  },
  {
    icon: 'sparkles',
    title: 'Женские стрижки',
    text: 'Стрижки любой сложности и длины',
  },
  {
    icon: 'baby',
    title: 'Детские стрижки',
    text: 'Комфортная атмосфера для юных клиентов',
  },
  {
    icon: 'wind',
    title: 'Оформление бороды',
    text: 'Моделирование и уход за бородой',
  },
  {
    icon: 'sparkles',
    title: 'Укладка волос',
    text: 'Профессиональные укладки для любого случая',
  },
  {
    icon: 'sparkles',
    title: 'Биозавивка волос',
    text: 'Долговременная укладка с натуральными составами',
  },
  {
    icon: 'scissors',
    title: 'Окантовка и узоры',
    text: 'Точные линии и креативные рисунки машинкой',
  },
];

export const priceSections = [
  {
    title: 'Стрижки',
    items: [
      { label: 'Мужская модельная', price: '1100₽' },
      { label: 'Мужская "фейд"', price: '1200-1300₽' },
      { label: 'Удлиненная ножницами', price: '1400-2000₽' },
      { label: 'Одна насадка', price: '500₽' },
      { label: 'Детская', price: '1100-1200₽' },
      { label: 'Узор машинкой', price: '100-200₽' },
      { label: 'Окантовка', price: '500₽' },
      { label: 'Оформление бороды', price: '800-900₽' },
      { label: 'Женская короткая', price: '2000₽' },
      { label: 'Женская средняя длина, до плеч', price: '2800₽' },
      { label: 'Женская длинные волосы', price: '3000₽' },
      { label: 'Подравнивание волос', price: '2000-2500₽' },
      { label: 'Челка', price: '500-700₽' },
    ],
  },
  {
    title: 'Биозавивка волос',
    items: [
      { label: 'Короткие волосы', price: '3200₽' },
      { label: 'Средние волосы, до плеч', price: '4200₽' },
      { label: 'Длинные волосы', price: '5200₽' },
    ],
  },
  {
    title: 'Укладка волос',
    items: [
      { label: 'Короткие волосы', price: '2000₽' },
      { label: 'Средние волосы, до плеч', price: '2500₽' },
      { label: 'Длинные волосы', price: '3000-4000₽' },
    ],
  },
];

export const specialists = [
  {
    name: 'Александр Петров',
    role: 'Мужские стрижки',
    description:
      'Специализируется на классических и современных мужских стрижках, работает с техникой фейд более 8 лет',
    photo:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=85',
  },
  {
    name: 'Мария Соколова',
    role: 'Женские стрижки',
    description:
      'Мастер сложных женских стрижек и каскадов, эксперт по работе с различными типами волос',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=85',
  },
  {
    name: 'Дмитрий Волков',
    role: 'Борода и фейд',
    description:
      'Профессионал в моделировании бороды и создании четких линий, владеет всеми видами окантовки',
    photo:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=85',
  },
  {
    name: 'Анна Белова',
    role: 'Окрашивание и укладки',
    description:
      'Колорист и стилист, создает индивидуальные образы и профессиональные укладки для любых мероприятий',
    photo:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=85',
  },
];
