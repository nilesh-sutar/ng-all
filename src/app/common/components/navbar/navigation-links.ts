export class NavigationLinks {
  routeLinks = [
    {
      name: 'Login',
      link: '/auth/login',
      isLoggedIn: false,
    },
    {
      name: 'Register',
      link: '/auth/register',
      isLoggedIn: false,
    },
    {
      name: 'Home',
      link: '/home',
      isLoggedIn: true,
    },
    {
      name: 'Dashboard',
      link: '/dashboard',
      isLoggedIn: true,
    },
    {
      name: 'Products',
      link: '/products',
      isLoggedIn: true,
    },
    {
      name: 'My Account',
      link: '',
      isLoggedIn: true,
      children: [
        {
          name: 'Profile',
          link: '/my-account/profile',
          icon : `account_circle`
        },
        {
          name: 'My Wishlist',
          link: '/my-account/wishlist',
          icon : `favorite`
        },
        {
          name: 'Logout',
          link: '/auth',
          icon : `logout`
        }
      ],
    },
    {
      name: 'Cart',
      link: '/cart',
      isLoggedIn: true,
    }
  ];
}
