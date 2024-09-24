// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons-react';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: [
    {
      id: 'utility',
      title: 'Utility',
      type: 'collapse',
      icon: icons.IconWindmill,
      children: [
        {
          id: 'listrik',
          title: 'Listrik',
          type: 'item',
          url: '/utility/listrik',
          breadcrumbs: false
        },
        {
          id: 'water',
          title: 'Air',
          type: 'item',
          url: '/utility/air',
          breadcrumbs: false
        },
        {
          id: 'gastino',
          title: 'Gas',
          type: 'item',
          url: '/utility/gas',
          breadcrumbs: false
        },
      ]
    }
  ]
};

export default utilities;
