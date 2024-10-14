// assets
import { IconClockPlay } from '@tabler/icons-react';

// constant
const icons = { IconClockPlay };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const downtime = {
  id: 'downtime',
  title: 'Downtime',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Downtime',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconClockPlay,
      breadcrumbs: false
    }
  ]
};

export default downtime;
