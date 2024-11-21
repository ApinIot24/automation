import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import PrivateRoute from './PrivateRoute';
// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const CentralKitchenL1 = Loadable(lazy(() => import('views/cenkit/CenkitL1')));
const CentralKitchenL2 = Loadable(lazy(() => import('views/cenkit/CenkitL2')));
const TableDefault = Loadable(lazy(() => import('views/dashboard/Default/BB/OptionTablePL2')));
const TableDefaultTwo = Loadable(lazy(() => import('views/dashboard/Default/BB/OptionTablePL1')));
const TableDefaultThree = Loadable(lazy(() => import('views/cenkit/OptionTableCk1')));
const TableDefaultFour = Loadable(lazy(() => import('views/cenkit/OptionTableCk2')));
const TableDefaultSix = Loadable(lazy(() => import('views/dashboard/Default/BB/OptionTablePL7')));
const TableDefaultFive = Loadable(lazy(() => import('views/listrik/CkWafer')));
const TableDefaultSeven = Loadable(lazy(() => import('views/biskuit/Biskuit')));
const TableAll = Loadable(lazy(() => import('views/dashboard/Default/BB/TablePackingL2')));
const TableLhpL1 = Loadable(lazy(() => import('views/dashboard/Default/BB/TableLhpL1')));
const TableLhpL2 = Loadable(lazy(() => import('views/dashboard/Default/BB/TableLhpL2')));
const TableLhpL5 = Loadable(lazy(() => import('views/dashboard/Default/BB/TableLhpL5')));
const TableLhpL7 = Loadable(lazy(() => import('views/dashboard/Default/BB/TableLhpL7')));
const TableWeekly = Loadable(lazy(() => import('views/dashboard/Default/BB/TableWeeklyPL2')));
const TableDaily = Loadable(lazy(() => import('views/dashboard/Default/BB/TableDailyPL2')));
const TableHourly = Loadable(lazy(() => import('views/dashboard/Default/BB/TableHourlyPL2')));
const TableMonthly = Loadable(lazy(() => import('views/dashboard/Default/BB/TableMonthlyPL2')));
const TableAllTwo = Loadable(lazy(() => import('views/dashboard/Default/BB/TablePackingL1')));
const TableWeeklyTwo = Loadable(lazy(() => import('views/dashboard/Default/BB/TableWeeklyPL1')));
const TableDailyTwo = Loadable(lazy(() => import('views/dashboard/Default/BB/TableDailyPL1')));
const TableHourlyTwo = Loadable(lazy(() => import('views/dashboard/Default/BB/TableHourlyPL1')));
const TableMonthlyTwo = Loadable(lazy(() => import('views/dashboard/Default/BB/TableMonthlyPL1')));
const TableAllThree = Loadable(lazy(() => import('views/cenkit/TableCenkitL1')));
const TableWeeklyThree = Loadable(lazy(() => import('views/cenkit/TableWeeklyCL1')));
const TableDailyThree = Loadable(lazy(() => import('views/cenkit/TableDailyCL1')));
const TableHourlyThree = Loadable(lazy(() => import('views/cenkit/TableHourlyCL1')));
const TableMonthlyThree = Loadable(lazy(() => import('views/cenkit/TableMonthlyCL1')));
const TableAllFour = Loadable(lazy(() => import('views/cenkit/TableCenkitL2')));
const TableWeeklyFour = Loadable(lazy(() => import('views/cenkit/TableWeeklyCL2')));
const TableDailyFour = Loadable(lazy(() => import('views/cenkit/TableDailyCL2')));
const TableHourlyFour = Loadable(lazy(() => import('views/cenkit/TableHourlyCL2')));
const TableMonthlyFour = Loadable(lazy(() => import('views/cenkit/TableMonthlyCL2')));
const TableAllFive = Loadable(lazy(() => import('views/listrik/TableCkWafer')));
const TableWeeklyFive = Loadable(lazy(() => import('views/listrik/TableWeeklyCW')));
const TableDailyFive = Loadable(lazy(() => import('views/listrik/TableDailyCW')));
const TableHourlyFive = Loadable(lazy(() => import('views/listrik/TableHourlyCW')));
const TableMonthlyFive = Loadable(lazy(() => import('views/listrik/TableMonthlyCW')));
const TableAllSix = Loadable(lazy(() => import('views/biskuit/TablePackingL5')));
const TableWeeklySix = Loadable(lazy(() => import('views/biskuit/TableWeeklyPL5')));
const TableDailySix = Loadable(lazy(() => import('views/biskuit/TableDailyPL5')));
const TableHourlySix = Loadable(lazy(() => import('views/biskuit/TableHourlyPL5')));
const TableMonthlySix = Loadable(lazy(() => import('views/biskuit/TableMonthlyPL5')));
const TableAllSeven = Loadable(lazy(() => import('views/dashboard/Default/BB/TablePackingL7')));
const TableWeeklySeven = Loadable(lazy(() => import('views/dashboard/Default/BB/TableWeeklyPL7')));
const TableDailySeven = Loadable(lazy(() => import('views/dashboard/Default/BB/TableDailyPL7')));
const TableHourlySeven = Loadable(lazy(() => import('views/dashboard/Default/BB/TableHourlyPL7')));
const TableMonthlySeven = Loadable(lazy(() => import('views/dashboard/Default/BB/TableMonthlyPL7')));
// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsBiskuit = Loadable(lazy(() => import('views/utilities/Biskuit')));
const Packingl7 = Loadable(lazy(() => import('views/utilities/Packingl7')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilityListrik = Loadable(lazy(() => import('views/utilities/Listrik')));
const UtilityAir = Loadable(lazy(() => import('views/utilities/Air')));
const UtilityGas = Loadable(lazy(() => import('views/utilities/Listrik')));
//new
const WaferLine1 = Loadable(lazy(() => import('views/pages/LHP/Wafer/wafer_line1/WaferLine1')));
const WaferLine2 = Loadable(lazy(() => import('views/pages/LHP/Wafer/wafer_line2/WaferLine2')));
const WaferLine7 = Loadable(lazy(() => import('views/pages/LHP/Wafer/wafer_line7/WaferLine7')));
const BscLine5 = Loadable(lazy(() => import('views/pages/LHP/Bsc/bsc_line5/BscLine5')));
// PM
const PMWAFER = Loadable(lazy(() => import('views/pages/PM/wafer/PMWafer')));
const PMnotifikasi = Loadable(lazy(() => import('views/pages/PM/PMnotifikasi')));


// const WaferLine1Table = Loadable(lazy(() => import('views/pages/LHP/Wafer/wafer_line1/WaferLine1Table')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <PrivateRoute element={<DashboardDefault />} />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <PrivateRoute element={<DashboardDefault />}  />
        }
      ]
    },
    {
      path: 'cenkit',
      children: [
        {
          path: 'central-kitchen1',
          element: <PrivateRoute element={<CentralKitchenL1 />}/>
        }
      ]
    },
    {
      path: 'cenkit',
      children: [
        {
          path: 'central-kitchen2',
          element: <PrivateRoute element={<CentralKitchenL2/>} />
        }
      ]
    },
    {
      path: 'utility',
      children: [
        {
          path: 'listrik',
          element: <PrivateRoute element={<UtilityListrik/>} />
        }
      ]
    },
    {
      path: 'utility',
      children: [
        {
          path: 'air',
          element: <PrivateRoute element={<UtilityAir/>} />
        }
      ]
    },
    {
      path: 'utility',
      children: [
        {
          path: 'gas',
          element: <PrivateRoute element={<UtilityGas/>} />
        }
      ]
    },
    {
      path: 'cenkit',
      children: [
        {
          path: 'central-kitchen1/table',
          element: <PrivateRoute element={<TableDefaultThree/>} />
        }
      ]
    },
    {
      path: 'cenkit',
      children: [
        {
          path: 'central-kitchen1/table/all',
          element: <PrivateRoute element={<TableAllThree/>} />
        }
      ]
    },
    {
      path: 'cenkit',
      children: [
        {
          path: 'central-kitchen1/table/hourly',
          element: <PrivateRoute element={<TableHourlyThree/>} />
        }
      ]
    },
    {
      path: 'cenkit',
      children: [
        {
          path: 'central-kitchen1/table/daily',
          element: <PrivateRoute element={<TableDailyThree/>} />
        }
      ]
    },
    {
      path: 'cenkit',
      children: [
        {
          path: 'central-kitchen1/table/weekly',
          element: <PrivateRoute element={<TableWeeklyThree/>} />
        }
      ]
    },
    {
      path: 'cenkit',
      children: [
        {
          path: 'central-kitchen1/table/monthly',
          element: <PrivateRoute element={<TableMonthlyThree/>} />
        }
      ]
    },
    {
      path: 'cenkit',
      children: [
        {
          path: 'central-kitchen2/table',
          element: <PrivateRoute element={<TableDefaultFour/>} />
        }
      ]
    },
    {
      path: 'cenkit',
      children: [
        {
          path: 'central-kitchen2/table/all',
          element: <PrivateRoute element={<TableAllFour/>} />
        }
      ]
    },
    {
      path: 'cenkit',
      children: [
        {
          path: 'central-kitchen2/table/hourly',
          element: <PrivateRoute element={<TableHourlyFour/>} />
        }
      ]
    },
    {
      path: 'cenkit',
      children: [
        {
          path: 'central-kitchen2/table/daily',
          element: <PrivateRoute element={<TableDailyFour/>} />
        }
      ]
    },
    {
      path: 'cenkit',
      children: [
        {
          path: 'central-kitchen2/table/weekly',
          element: <PrivateRoute element={<TableWeeklyFour/>} />
        }
      ]
    },
    {
      path: 'cenkit',
      children: [
        {
          path: 'central-kitchen2/table/monthly',
          element: <PrivateRoute element={<TableMonthlyFour/>} />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'packing-line2/table',
          element: <PrivateRoute element={<TableDefault/>} />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'packing-line2/table/all',
          element: <PrivateRoute element={<TableAll/>} />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'packing-line2/table/lhp',
          element: <PrivateRoute element={<TableLhpL2/>} />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'packing-line1/table/lhp',
          element: <PrivateRoute element={<TableLhpL1/>} />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'packing-line2/table/hourly',
          element: <PrivateRoute element={<TableHourly/>} />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'packing-line2/table/daily',
          element: <PrivateRoute element={<TableDaily/>} />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'packing-line2/table/weekly',
          element: <PrivateRoute element={<TableWeekly/>} />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'packing-line2/table/monthly',
          element: <PrivateRoute element={<TableMonthly/>} />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'packing-line2',
          element: <PrivateRoute element={<UtilsTypography/>} />
        }
      ]
    },

    {
      path: 'utils',
      children: [
        {
          path: 'packing-line7',
          element: <PrivateRoute element={<Packingl7/>} />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'packing-line7/table/all',
          element: <PrivateRoute element={<TableAllSeven/>} />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'packing-line7/table/lhp',
          element: <PrivateRoute element={<TableLhpL7/>} />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'packing-line7/table',
          element: <PrivateRoute element={<TableDefaultSix/>}/>
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'packing-line7/table/hourly',
          element: <PrivateRoute element={<TableHourlySeven/>} />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'packing-line7/table/daily',
          element: <PrivateRoute element={<TableDailySeven/>} />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'packing-line7/table/weekly',
          element: <PrivateRoute element={<TableWeeklySeven/>} />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'packing-line7/table/monthly',
          element: <PrivateRoute element={<TableMonthlySeven/>} />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'packing-line5-bsc',
          element: <PrivateRoute element={<UtilsBiskuit/>} />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-color',
          element: <PrivateRoute element={<UtilsColor/>} />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'packing-line1/table',
          element: <PrivateRoute element={<TableDefaultTwo/>} />
        }
      ]
    },
   
    {
      path: 'utils',
      children: [
        {
          path: 'packing-line5-bsc/table',
          element: <PrivateRoute element={<TableDefaultSeven/>}/>
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'packing-line1/table/all',
          element: <PrivateRoute element={<TableAllTwo/>} />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'packing-line1/table/hourly',
          element: <PrivateRoute element={<TableHourlyTwo/>} />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'packing-line1/table/daily',
          element: <PrivateRoute element={<TableDailyTwo/>} />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'packing-line1/table/weekly',
          element: <PrivateRoute element={<TableWeeklyTwo/>} />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'packing-line1/table/monthly',
          element: <PrivateRoute element={<TableMonthlyTwo/>} />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'packing-line1',
          element: <PrivateRoute element={<UtilsShadow/>} />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'lhp-line1',
          element: <PrivateRoute element={<WaferLine1/>} />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'lhp-line2',
          element: <PrivateRoute element={<WaferLine2/>} />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'lhp-line7',
          element: <PrivateRoute element={<WaferLine7/>} />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'lhp-line5',
          element: <PrivateRoute element={<BscLine5/>} />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'lhp-line1table',
          element: <PrivateRoute element={<TableLhpL1/>} />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'material-icons',
          element: <PrivateRoute element={<UtilsMaterialIcons/>} />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <PrivateRoute element={<SamplePage/>} />
    },
    {
      path: 'utility',
      children: [
        {
          path: 'listrik/ckwafer/table',
          element: <PrivateRoute element={<TableDefaultFive/>} />
        }
      ]
    },
    {
      path: 'utility',
      children: [
        {
          path: 'listrik/ckwafer/table/all',
          element: <PrivateRoute element={<TableAllFive/>} />
        }
      ]
    },
    {
      path: 'utility',
      children: [
        {
          path: 'listrik/ckwafer/table/hourly',
          element: <PrivateRoute element={<TableHourlyFive/>} />
        }
      ]
    },
    {
      path: 'utility',
      children: [
        {
          path: 'listrik/ckwafer/table/daily',
          element: <PrivateRoute element={<TableDailyFive/>} />
        }
      ]
    },
    {
      path: 'utility',
      children: [
        {
          path: 'listrik/ckwafer/table/weekly',
          element: <PrivateRoute element={<TableWeeklyFive/>} />
        }
      ]
    },
    {
      path: 'utility',
      children: [
        {
          path: 'listrik/ckwafer/table/monthly',
          element: <PrivateRoute element={<TableMonthlyFive/>} />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'packing-line5-bsc/table/all',
          element: <PrivateRoute element={<TableAllSix/>} />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'packing-line5-bsc/table/hourly',
          element: <PrivateRoute element={<TableHourlySix/>} />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'packing-line5-bsc/table/daily',
          element: <PrivateRoute element={<TableDailySix/>} />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'packing-line5-bsc/table/weekly',
          element: <PrivateRoute element={<TableWeeklySix/>} />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'packing-line5-bsc/table/monthly',
          element: <PrivateRoute element={<TableMonthlySix/>} />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'packing-line5-bsc/table/lhp',
          element: <PrivateRoute element={<TableLhpL5 />} />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'pm/wafer',
          element: <PrivateRoute element={<PMWAFER />} />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'pm/notif',
          element: <PrivateRoute element={<PMnotifikasi />} />
        }
      ]
    },

  ]
};

export default MainRoutes;
