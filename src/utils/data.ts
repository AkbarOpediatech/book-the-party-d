import type {
  IBookingAnalytics,
  IBookingData,
  IChartData,
  IDashboardBookingHistory,
  IEventFeatures,
  IListingsData,
  INavigationItem,
  ISubscriptionDetails,
  ITransactionType
} from './type'
import ICKid from '/public/assets//ic-kid.svg'
import BHistory2 from '/public/assets/booking-history-2.png'
import BHistory3 from '/public/assets/booking-history-3.png'
import BHistory4 from '/public/assets/booking-history-4.png'
import BHistory5 from '/public/assets/booking-history-5.png'
import BHistory6 from '/public/assets/booking-history-6.png'
import BHistory7 from '/public/assets/booking-history-7.png'
import BHistory from '/public/assets/booking-history.png'
import ICDisplay from '/public/assets/ic-display.svg'
import ICFood from '/public/assets/ic-food.svg'
import ICOutdoor from '/public/assets/ic-outdoor.svg'
import ICPackage from '/public/assets/ic-package.svg'
import ICTableSetting from '/public/assets/ic-table-setting.svg'
import ICVehicle from '/public/assets/ic-vehicle.svg'
import ICVisual from '/public/assets/ic-visual.svg'
import BankingIcon from '/public/assets/ic_banking.svg'
import BookingsIcon from '/public/assets/ic_booking.svg'
import Canceled from '/public/assets/ic_canceled.svg'
import LiveChatIcon from '/public/assets/ic_chat.svg'
import Complete from '/public/assets/ic_complete.svg'
import DashboardIcon from '/public/assets/ic_dashboard.svg'
import ListingIcon from '/public/assets/ic_ecommerce.svg'
import Pending from '/public/assets/ic_pending.svg'
import SubscriptionIcon from '/public/assets/ic_subscription.svg'
import Total from '/public/assets/ic_total.svg'

import PackImg1 from '/public/assets/package1.png'
import PackImg3 from '/public/assets/package3.png'
import PackImg4 from '/public/assets/package4.png'
import PackImg5 from '/public/assets/package5.png'
import PackImg6 from '/public/assets/package6.png'
import PackImg7 from '/public/assets/package7.png'
import PackImg8 from '/public/assets/package8.png'

import discoverImg from '/public/assets/discover-img.png'
import discoverImg2 from '/public/assets/discover-img2.png'
import discoverImg3 from '/public/assets/discover-img3.png'

import occasionImg1 from '/public/assets/occasion-img1.png'
import occasionImg2 from '/public/assets/occasion-img2.png'
import occasionImg3 from '/public/assets/occasion-img3.png'
import occasionImg4 from '/public/assets/occasion-img4.png'

export const vendorNavigation: INavigationItem[] = [
  {
    type: 'button',
    name: 'dashboard',
    href: '/dashboard/vendor/dashboard',
    icon: DashboardIcon
  },
  {
    type: 'button',
    name: 'banking',
    href: '/dashboard/vendor/banking',
    icon: BankingIcon
  },
  {
    type: 'button',
    name: 'bookings',
    href: '/dashboard/vendor/bookings',
    icon: BookingsIcon
  },
  {
    type: 'button',
    name: 'listing',
    href: '/dashboard/vendor/listings',
    icon: ListingIcon
  },

  {
    type: 'button',
    name: 'Live chat with admin',
    href: '/dashboard/vendor/chat',
    icon: LiveChatIcon
  },
  {
    type: 'button',
    name: 'Subscription',
    href: '/dashboard/vendor/subscription',
    icon: SubscriptionIcon
  }
]

export const dashboardBookingHistory: IDashboardBookingHistory[] = [
  {
    id: 1,
    img: BHistory,
    link: '/',
    title: 'Wedding Decoration',
    desc: 'Description about the vendor'
  },
  {
    id: 2,
    img: BHistory2,
    link: '/',
    title: 'Vehicle Hire',
    desc: 'Description about the vendor'
  },
  {
    id: 3,
    img: BHistory3,
    link: '/',
    title: 'Wedding Decoration',
    desc: 'Description about the vendor'
  },
  {
    id: 4,
    img: BHistory4,
    link: '/',
    title: 'Wedding Decoration',
    desc: 'Description about the vendor'
  },
  {
    id: 5,
    img: BHistory5,
    link: '/',
    title: 'Wedding Decoration',
    desc: 'Description about the vendor'
  },
  {
    id: 6,
    img: BHistory6,
    link: '/',
    title: 'Wedding Decoration',
    desc: 'Description about the vendor'
  },
  {
    id: 7,
    img: BHistory7,
    link: '/',
    title: 'Wedding Decoration',
    desc: 'Description about the vendor'
  }
]

export const salesData: IChartData[] = [
  {
    name: 'Page A',
    pv: 2400
  },
  {
    name: 'Page B',
    pv: 1398
  },
  {
    name: 'Page C',
    pv: 9800
  },
  {
    name: 'Page D',
    pv: 3908
  },
  {
    name: 'Page E',
    pv: 4800
  },
  {
    name: 'Page F',
    pv: 3800
  },
  {
    name: 'Page G',
    pv: 4300
  }
]

export const feesData: IChartData[] = [
  {
    name: 'Page A',
    pv: 3800
  },
  {
    name: 'Page B',
    pv: 1398
  },
  {
    name: 'Page C',
    pv: 2400
  },
  {
    name: 'Page D',
    pv: 3908
  },
  {
    name: 'Page E',
    pv: 4800
  },
  {
    name: 'Page F',
    pv: 4300
  },
  {
    name: 'Page G',
    pv: 9800
  }
]

export const payoutData: IChartData[] = [
  {
    name: 'Page A',
    pv: 4800
  },
  {
    name: 'Page B',
    pv: 1398
  },
  {
    name: 'Page C',
    pv: 2400
  },
  {
    name: 'Page D',
    pv: 3908
  },
  {
    name: 'Page E',
    pv: 9800
  },
  {
    name: 'Page F',
    pv: 4300
  },
  {
    name: 'Page G',
    pv: 3800
  }
]

export const transactions: ITransactionType[] = [
  {
    id: 1,
    title: 'Wedding Decoration',
    description: 'Description about the vendor',
    amount: '$250.00',
    date: '19 Jul 2022',
    status: 'Security deposit held',
    image: BHistory
  },
  {
    id: 2,
    title: 'Wedding Decoration',
    description: 'Description about the vendor',
    amount: '$250.00',
    date: '19 Jul 2022',
    status: 'Payout amount',
    image: BHistory
  },
  {
    id: 3,
    title: 'Wedding Decoration',
    description: 'Description about the vendor',
    amount: '$250.00',
    date: '19 Jul 2022',
    status: 'Amount withdrawn',
    image: BHistory
  }
]

export const bookingAnalytics: IBookingAnalytics[] = [
  {
    pic: Total,
    title: 'Total',
    amount: 24,
    price: 27500
  },
  {
    pic: Complete,
    title: 'Completed',
    amount: 20,
    price: 4460.61
  },
  {
    pic: Pending,
    title: 'Pending',
    amount: 4,
    price: 4900.51
  },
  {
    pic: Canceled,
    title: 'Cancelled',
    amount: 3,
    price: 4900.51
  }
]

export const bookingData: IBookingData[] = [
  {
    id: 1,
    eventTitle: 'Wedding Plan',
    eventId: 'INV1704-00061',
    startDate: '13 Jul 2021',
    endDate: '15 Jul 2021',
    saleTotal: 767.5,
    fee: 70.5,
    totalPayout: 690.48,
    status: 'Request payout',
    image: BHistory
  },
  {
    id: 2,
    eventTitle: 'Wedding Plan',
    eventId: 'INV1704-00061',
    startDate: '13 Jul 2021',
    endDate: '15 Jul 2021',
    saleTotal: 767.5,
    fee: 70.5,
    totalPayout: 690.48,
    status: 'Request payout',
    image: BHistory
  },
  {
    id: 3,
    eventTitle: 'Wedding Plan',
    eventId: 'INV1704-00061',
    startDate: '13 Jul 2021',
    endDate: '15 Jul 2021',
    saleTotal: 767.5,
    fee: 70.5,
    totalPayout: 690.48,
    status: 'Request payout',
    image: BHistory
  }
]

export const listingsData: IListingsData[] = [
  {
    id: 1,
    itemName: 'Wedding Decoration',
    itemDescription: 'Description about the vendor',
    category: 'Party Set up',
    price: 250.0,
    totalBookings: 42,
    image: BHistory
  },
  {
    id: 2,
    itemName: 'Wedding Decoration',
    itemDescription: 'Description about the vendor',
    category: 'Party Set up',
    price: 250.0,
    totalBookings: 42,
    image: BHistory
  },
  {
    id: 3,
    itemName: 'Wedding Decoration',
    itemDescription: 'Description about the vendor',
    category: 'Party Set up',
    price: 250.0,
    totalBookings: 42,
    image: BHistory
  }
]

export const categories: string[] = [
  'Party Packages',
  'Backdrops & Décor Props',
  'Tables & Seating',
  'Vehicle Hire',
  'Outdoor Hire',
  'Kid’s Party Entertainment',
  'Sound, lighting & visual',
  'Food & Beverage'
]

export const subCategories: string[] = [
  'Themed Party Packages',
  'Birthday',
  'Engagement',
  'Wedding',
  'Birthday',
  'Baby Shower',
  'Bridal Shower',
  'Gender Reveal',
  'Graduation',
  'Marriage Proposal',
  'Eid',
  'Fatiha',
  'Katab el kitab',
  'Christening',
  'Baptism'
]

// landing page
export const eventFeatures: IEventFeatures[] = [
  {
    id: 1,
    icon: ICPackage,
    name: 'Party Packages'
  },
  {
    id: 2,
    icon: ICDisplay,
    name: 'Backdrops, floral & display props'
  },
  {
    id: 3,
    icon: ICTableSetting,
    name: 'Table & Seating'
  },
  {
    id: 4,
    icon: ICVehicle,
    name: 'Vehicle hire'
  },
  {
    id: 5,
    icon: ICFood,
    name: 'Food & Bevarage'
  },
  {
    id: 6,
    icon: ICVisual,
    name: 'Sound, lighting & visual'
  },
  {
    id: 7,
    icon: ICOutdoor,
    name: 'Outdoor hire'
  },
  {
    id: 8,
    icon: ICKid,
    name: "Kid's party entertainment"
  }
]

export const specialPackages = [
  {
    id: 1,
    img: PackImg1,
    name: 'Painting',
    desc: '8 special packages',
    url: '#'
  },
  {
    id: 2,
    img: PackImg4,
    name: 'Magician',
    desc: '8 special packages',
    url: '#'
  },
  {
    id: 3,
    img: PackImg3,
    name: 'Clown',
    desc: '8 special packages',
    url: '#'
  },
  {
    id: 4,
    img: PackImg4,
    name: 'Animals',
    desc: '8 special packages',
    url: '#'
  },
  {
    id: 5,
    img: PackImg5,
    name: 'Catering',
    desc: '8 special packages',
    url: '#'
  },
  {
    id: 6,
    img: PackImg6,
    name: 'Sports car',
    desc: '8 special packages',
    url: '#'
  },
  {
    id: 7,
    img: PackImg7,
    name: 'Animals',
    desc: '8 special packages',
    url: '#'
  },
  {
    id: 8,
    img: PackImg8,
    name: 'Painting',
    desc: '8 special packages',
    url: '#'
  },
  {
    id: 9,
    img: PackImg3,
    name: 'Animals',
    desc: '8 special packages',
    url: '#'
  },
  {
    id: 10,
    img: PackImg1,
    name: 'Sports car',
    desc: '8 special packages',
    url: '#'
  },
  {
    id: 11,
    img: PackImg5,
    name: 'Magician',
    desc: '8 special packages',
    url: '#'
  },
  {
    id: 12,
    img: PackImg3,
    name: 'Clown',
    desc: '8 special packages',
    url: '#'
  },
  {
    id: 13,
    img: PackImg4,
    name: 'Animals',
    desc: '8 special packages',
    url: '#'
  },
  {
    id: 14,
    img: PackImg5,
    name: 'Catering',
    desc: '8 special packages',
    url: '#'
  }
]

export const discoverItems = [
  {
    id: 1,
    img: discoverImg,
    name: 'Sydney',
    url: '#'
  },
  {
    id: 2,
    img: discoverImg2,
    name: 'Brisbane',
    url: '#'
  },
  {
    id: 3,
    img: discoverImg3,
    name: 'Melbourne',
    url: '#'
  }
]

export const occasionItems = [
  {
    id: 1,
    img: occasionImg1,
    name: 'Capturing your love story',
    linkName: 'Marriage Proposal',
    url: '#',
    bgColor: '#96B487'
  },
  {
    id: 2,
    img: occasionImg2,
    name: 'Celebrate Faith',
    linkName: 'Religious Event',
    url: '#',
    bgColor: '#A1A3D8'
  },
  {
    id: 3,
    img: occasionImg3,
    name: 'Your dream wedding awaits',
    linkName: 'Wedding',
    url: '#',
    bgColor: '#D1AC73'
  },
  {
    id: 4,
    img: occasionImg4,
    name: 'A bundle of joy is on the way',
    linkName: 'Baby Shower',
    url: '#',
    bgColor: '#D89797'
  }
]
// landing page end
export const listingInclusions: string[] = [
  'The order should be placed atleast 3 days before the event to get this Cake Delivered on time.',
  'We will be able to match 90% to the picture of the cake on the website. The color, shape and size are indicative in nature.',
  'Delivery is available within the city limits.',
  'The order can only be cancelled <span>BEFORE 48 HOURS OF THE EVENT DATE.</span> '
]
export const listingImportantInfo: string[] = [
  'The order should be placed atleast 3 days before the event to get this Cake Delivered on time.',
  " Being perishable in nature, it's recommended to consume the cake within hours of receiving it.",
  'Flavor can be changed as per choice (charges may vary)'
]

export const detailsTab: string[] = ['Details', 'Inclusions', 'Important info', 'Reviews(4)']

export const subscriptionDetails: ISubscriptionDetails[] = [
  {
    title: 'Starter',
    price: 0,
    details: [
      'Submit 2 listing for 3 months',
      'Can list in 1 category',
      '20% referral fee of sale',
      'Limited admin support'
    ]
  },
  {
    title: 'Essential',
    price: 39,
    description: 'per user/month, billed monthly',
    details: [
      'Submit up to 5 listings for 6 months',
      'List in 2 categories',
      '15% referral fee',
      'Dedicated support'
    ]
  },
  {
    title: 'Pro ',
    price: 79,
    tag: 'Most Popular',
    description: 'per user/month, billed monthly',
    details: [
      ' Unlimited listings for 12 months',
      'Unlimited categories',
      '10% referral fee',
      'Prionitised admin support'
    ]
  }
]
