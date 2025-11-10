export const MENU = {
    BUYER: [
        {id: 1, label: 'HOME', link: "/"},
        {id: 2, label: 'SHOP', link: "/shop"},
        {id: 3, label: 'BLOG', link: "/blog"},
        {id: 4, label: 'ABOUT', link: "/about"},
        {id: 5, label: 'CONTACT', link: "/contact"},
    ],
    VENDOR:  [
        {id: 1, label: 'DASHBOARD', link: "/admin/vendor"},
        {id: 2, label: 'PRODUCTS', link: "/admin/vendor/products"},
        {id: 3, label: 'ORDERS', link: "/admin/vendor/orders"},
    ],
    ADMIN:  [
        {id: 1, label: 'DASHBOARD', link: "/admin/admin"},
        {id: 2, label: 'VENDORS', link: "/admin/admin/vendors"},
        {id: 3, label: 'ORDERS', link: "/admin/admin/orders"},
    ],
}