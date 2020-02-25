const DASHBOARD_MENU_STRING = [
    {
        icon: 'appstore',
        menuKey: 'dashboard',
        menuText: 'Dashboard',
        menuUrl: ''
    },
    {
        icon: 'history',
        menuKey: 'operations',
        menuText: 'Operations',
    },
    {
        icon: 'file-text',
        menuKey: 'records',
        menuText: 'Records',
        menuUrl: 'records'
    },
    {
        icon: 'shopping-cart',
        menuKey: 'supply',
        menuText: 'Supply Store',
        menuUrl: 'supply'
    },
    {
        icon: 'gold',
        menuKey: 'market',
        menuText: 'Market Place',
        menuUrl: 'market'
    },
    {
        icon: 'wechat',
        menuKey: 'forums',
        menuText: 'Forums',
        menuUrl: 'forums'
    },
    {
        icon: 'setting',
        menuKey: 'settings',
        menuText: 'Settings',
        menuUrl: 'settings'
    },
];

const SUB_MENU_STRING = [
    {
        key: 'orders',
        text: 'Orders',
        url: 'orders'
    },
    {
        key: 'production',
        text: 'Production House',
        url: 'production'
    },
    {
        key: 'bids',
        text: 'Bids',
        url: 'bids'
    },
    {
        key: 'promotion',
        text: 'Promotion / Discount',
        url: 'promotion'
    },
    {
        key: 'outsourcing',
        text: 'Out Sourcing',
        url: 'outsourcing'
    },
]

const PAGINATION_CONFIG = {
    hideOnSinglePage: true,
    pageSize: 5,
    size: 'small'
}

export { 
    DASHBOARD_MENU_STRING,
    PAGINATION_CONFIG,
    SUB_MENU_STRING
};