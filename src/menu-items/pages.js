// assets
import {  IconCooker ,IconMicrowave ,IconPackages, IconNotes, IconFileSpreadsheet} from '@tabler/icons-react';

// constant
const icons = {
  IconCooker,
  IconMicrowave,
  IconPackages,
  IconNotes,
  IconFileSpreadsheet
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Pages',
  type: 'group',
  children: [
    {
      id: 'ck',
      title: 'CENTRAL KITCHEN',
      type: 'collapse',
      icon: icons.IconCooker,
      roles: ['all','wafer','biskuit'],
      children: [
        {
          id: 'wfrck',
          title: 'WAFER',
          type: 'collapse',
          icon: icons.IconCooker,
          roles: ['all','wafer'],
          children: [
            {
              id: 'cenkitl1',
              title: 'CK LINE 1',
              type: 'item',
              url: '/cenkit/central-kitchen1'
            },
            {
              id: 'cenkitl2',
              title: 'CK LINE 2',
              type: 'item',
              url: '/cenkit/central-kitchen2'
            }
          ]
        },
        {
          id: 'bscck',
          title: 'BISKUIT',
          type: 'collapse',
          icon: icons.IconCooker,
          roles: ['all','biskuit'],
          children: [
            {
              id: 'cenkitl5',
              title: 'CK LINE 5',
              type: 'item',
              url: '/cenkit/central-kitchen5bsc'
            }
          ]
        },
        
      ]
    },
    {
      id: 'oven',
      title: 'OVEN',
      type: 'collapse',
      icon: icons.IconMicrowave,
      roles: ['all','wafer'],
      children: [
        {
          id: 'typo',
          title: 'OVEN LINE 1',
          type: 'item',
          url: '/icons/tabler-icons',
          breadcrumbs: false
        },
        {
          id: 'color',
          title: 'OVEN LINE 1',
          type: 'item',
          url: '/utils/util-color',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'packing',
      title: 'PACKING',
      type: 'collapse',
      icon: icons.IconPackages,
      roles: ['all','wafer','biskuit'],
      children: [
        {
          id: 'wafer',
          title: 'WAFER',
          type: 'collapse',
          icon: icons.IconPackages,
          roles: ['all','wafer'],
          children: [
            {
              id: 'typo',
              title: 'PACKING LINE 1',
              type: 'item',
              url: '/utils/packing-line1',
              breadcrumbs: false
            },
            {
              id: 'color',
              title: 'PACKING LINE 2',
              type: 'item',
              url: '/utils/packing-line2',
              breadcrumbs: false
            },
            {
              id: 'tcw',
              title: 'PACKING LINE 7',
              type: 'item',
              url: '/utils/packing-line7',
              breadcrumbs: false
            },
          ]
        },
        {
          id: 'biskuit',
          title: 'BISKUIT',
          type: 'collapse',
          icon: icons.IconPackages,
          roles: ['all','biskuit'],
          children: [
            {
              id: 'typo',
              title: 'PACKING LINE 5',
              type: 'item',
              url: '/utils/packing-line5-bsc',
              breadcrumbs: false
            }
          ]
        }
      ]
    },
    {
      id: 'lhp',
      title: 'LHP',
      type: 'collapse',
      icon: icons.IconNotes,
      roles: ['all','wafer','biskuit'],
      children: [
        {
          id: 'wafer',
          title: 'WAFER',
          type: 'collapse',
          icon: icons.IconNotes,
          roles: ['all','wafer'],
          children: [
            {
              id: 'waferline1',
              title: 'Wafer LINE 1',
              type: 'item',
              url: '/utils/lhp-line1',
              breadcrumbs: false
            },
            {
              id: 'waferline2',
              title: 'Wafer LINE 2',
              type: 'item',
              url: '/utils/lhp-line2',
              breadcrumbs: false
            },
            {
              id: 'waferline7',
              title: 'Wafer LINE 7',
              type: 'item',
              url: '/utils/lhp-line7',
              breadcrumbs: false
            },
          ]
        },
        {
          id: 'biskuit',
          title: 'BISKUIT',
          type: 'collapse',
          icon: icons.IconNotes,
          roles: ['all','biskuit'],
          children: [
            {
              id: 'biskuitline5',
              title: 'Biskuit LINE 5',
              type: 'item',
              url: '/utils/lhp-line5',
              breadcrumbs: false
            }
          ]
        }
      ]
    },
    {
      id: 'pm',
      title: 'PM',
      type: 'collapse',
      icon: icons.IconFileSpreadsheet,
      roles: ['all','wafer','biskuit'],
      children: [
        {
          id: 'wafer',
          title: 'PM WAFER',
          type: 'item',
          icon: icons.IconFileSpreadsheet,
          url: '/utils/pm/wafer',
          roles: ['all','wafer'],
        },
        {
          id: 'biskuit',
          title: 'PM BISKUIT',
          type: 'item',
          icon: icons.IconFileSpreadsheet,
          url: '/utils/pm/biscuit',
          roles: ['all','biskuit']
        },
        {
          id: 'notif',
          title: 'PM Notifikasi',
          type: 'item',
          icon: icons.IconFileSpreadsheet,
          url: '/pm/notif',
          roles: ['all','biskuit','wafer']
        }
      ]
    },
  ]
};

export default pages;
