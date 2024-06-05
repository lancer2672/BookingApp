import {History_Status, Room_Status} from '@src/utils/constant';

// Mock data for Agent
export const agentMock = {
  id: 1,
  name: 'Agent Name',
  gmail: 'agent@gmail.com',
  phone: '099999999',
  identityCard: '123456789',
  status: 'Đã xác minh',
  countHotelManager: hotelsMock?.filter(item => item.agentId === agentMock.id).length,
  countBooking: 5,
  password: '123456789',
};
export const staffMockData = [
  {
    id: 1,
    name: 'staff hotel 5',
    email: 'staff@email.com',
    avatar: 'https://picsum.photos/200',
    phone: '099999999',
    identityCard: '123456789',
    frontIdentityCard: 'https://picsum.photos/200',
    backIdentityCard: 'https://picsum.photos/200',
    hotelId: 5,
  },
  {
    id: 2,
    name: 'staff hotel 4',
    email: 'staff@email.com',
    avatar: 'https://picsum.photos/200',
    phone: '099999999',
    identityCard: '123456789',
    frontIdentityCard: 'https://picsum.photos/200',
    backIdentityCard: 'https://picsum.photos/200',
    hotelId: 4,
  }
]
export const userMock = {
  id: 111,
  name: 'User Name',
  email: 'User Name@gmail.com',
  name: 'User Name',
};
export const hotelsMock = [
  {
    id: 4,
    agentId: agentMock.id,
    name: 'Hotel 4',
    address: '1600 Amphitheatre Parkway, Mountain View, CA ',
    description: 'This is a description of Hotel 4.',
    policy: 'This is a policy of Hotel 4',
    province: 'Province 4',
    district: 'District 4',
    ward: 'Ward 4',
    rating: 4.2,
    avatar: 'https://picsum.photos/200',
    images: ['https://picsum.photos/200', 'https://picsum.photos/200'],
    around: {
      visit: ['Mountain', 'Beach'],
      food: ['KFC', 'HightLand'],
      transport: ['Airport', 'XanhSM'],
    },
    amenities: [
      {
        code: 'A7',
        name: 'Gym',
      },
      {
        code: 'A8',
        name: 'Restaurant',
      },
    ],
    location: {
      longitude: 106.80541083069399,
      latitude: 10.880393734396296,
    },
    provinceCode: 'PC4',
    districtCode: 'DC4',
    rooms: [
      {
        id: 7,
        name: 'Phòng đơn',
        hotelId: 4,
        pricePerNight: 120,
        numOfPeople: 2,
        numOfChildren: 0,
        bed: 1,
        images: ['https://picsum.photos/200', 'https://picsum.photos/200'],
        amenities: ['Air Conditioning', 'Tivi'],
        policy: 'Allow to Smoking, Pay before checkin',
        status: 'Đã đặt',
        status_code: Room_Status.BOOKED,
        bill: {
          inforCustomer: {
            email: 'cutomer1@gmail.com',
            firstName: 'customer',
            lastName: '1',
            phoneNumber: '0793333444',
            identityCard: '123456789',
            avatar: 'https://picsum.photos/200',
            frontIdentityCard: 'https://picsum.photos/200',
            backIdentityCard: 'https://picsum.photos/200',
          },
          duration: 3,
          startDay: '20/10/2024',
          endDay: '23/10/2024',
          status: 'Đã thanh toán online',
          note: '(Không có)',
        },
      },
      {
        id: 8,
        name: 'Phòng đôi',
        hotelId: 4,
        pricePerNight: 200,
        numOfPeople: 4,
        numOfChildren: 2,
        bed: 2,
        images: ['https://picsum.photos/200', 'https://picsum.photos/200'],
        amenities: ['Air Conditioning', 'Tivi'],
        policy: 'Allow to Smoking, Pay before checkin',
        status_code: Room_Status.NOT_BOOKED,
        status: 'Còn trống',

        bill: {
          inforCustomer: {
            email: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            identityCard: '',
            avatar: '',
            frontIdentityCard: '',
            backIdentityCard: '',
          },
          duration: 0,
          startDay: '',
          endDay: '',
          status: '',
          note: '',
        },
      },
    ],
  },
  {
    id: 5,
    agentId: agentMock.id,
    name: 'Hotel 5',
    address: '1 Infinite Loop, Cupertino, CA',
    description: 'This is a description of Hotel 5.',
    policy: 'This is a policy of Hotel 5',
    province: 'Province 5',
    district: 'District 5',
    ward: 'Ward 5',
    rating: 4.7,
    avatar: 'https://picsum.photos/200',
    images: ['https://picsum.photos/200', 'https://picsum.photos/200'],
    around: {
      visit: ['SuperMarket', 'Beach'],
      food: ['4p Pizza', 'Phuc Long'],
      transport: ['Airport', 'Taxi'],
    },
    amenities: [
      {
        code: 'A9',
        name: 'Conference Room',
      },
      {
        code: 'A10',
        name: 'Swimming Pool',
      },
    ],
    location: {
      longitude: 106.80150553454607,
      latitude: 10.87780187513427,
    },
    provinceCode: 'PC5',
    districtCode: 'DC5',
    rooms: [
      {
        id: 7,
        name: 'Phòng đơn 101',
        hotelId: 4,
        pricePerNight: 120,
        numOfPeople: 2,
        numOfChildren: 0,
        bed: 1,
        images: ['https://picsum.photos/200', 'https://picsum.photos/200'],
        amenities: ['Air Conditioning', 'Tivi'],
        policy: ['No Smoking', 'Pay after checkin'],
        status: 'Đã đặt',
        status_code: Room_Status.BOOKED,

        bill: {
          inforCustomer: {
            email: 'cutomer1@gmail.com',
            firstName: 'customer',
            lastName: '1',
            phoneNumber: '0793333444',
            identityCard: '123456789',
            avatar: 'https://picsum.photos/200',
            frontIdentityCard: 'https://picsum.photos/200',
            backIdentityCard: 'https://picsum.photos/200',
          },
          duration: 3,
          startDay: '20/10/2024',
          endDay: '23/10/2024',
          status: 'Đã thanh toán online',
          note: '(Không có)',
        },
      },
      {
        id: 8,
        name: 'Phòng đôi 202',
        hotelId: 4,
        pricePerNight: 200,
        numOfPeople: 4,
        numOfChildren: 2,
        bed: 2,
        images: ['https://picsum.photos/200', 'https://picsum.photos/200'],
        amenities: ['Air Conditioning', 'Tivi'],
        policy: ['Allow to Smoking', 'Pay before checkin'],
        status: 'Còn trống',
        status_code: Room_Status.NOT_BOOKED,

        bill: {
          inforCustomer: {
            email: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            identityCard: '',
            avatar: '',
            frontIdentityCard: '',
            backIdentityCard: '',
          },
          duration: 0,
          startDay: '',
          endDay: '',
          status: '',
          note: '',
        },
      },
    ],
  },
];
export const reviewBookingMock = [
  {
    id: 101,
    userId: 201,
    createdAt: '2024-05-12T08:00:00.000Z',
    checkInDate: '2024-05-10',
    roomId: 7,
    react: [201, 202, 203],
    hotelId: 4,
    parentId: null,
    description: 'Great experience, friendly staff and clean rooms.',
    images: ['https://picsum.photos/200', 'https://picsum.photos/200'],
    children: [
      {
        id: 103,
        userId: 203,
        createdAt: '2024-05-14T10:00:00.000Z',
        checkInDate: '2024-05-12',
        roomId: 7,
        react: [206, 207],
        hotelId: 4,
        parentId: 101,
        description: 'I had a wonderful stay, will definitely come back!',
        images: ['https://picsum.photos/200', 'https://picsum.photos/200'],
      },
      {
        id: 104,
        userId: 204,
        createdAt: '2024-05-15T11:30:00.000Z',
        checkInDate: '2024-05-13',
        roomId: 8,
        react: [208, 209],
        hotelId: 4,
        parentId: 101,
        description:
          'The room was spacious and clean, but the breakfast could be improved.',
        images: ['https://picsum.photos/200', 'https://picsum.photos/200'],
      },
    ],
  },
  {
    id: 102,
    userId: 202,
    createdAt: '2024-05-13T09:30:00.000Z',
    checkInDate: '2024-05-11',
    roomId: 8,
    react: [204, 205],
    hotelId: 5,
    parentId: 101,
    description: 'The food was not up to the mark, expected better quality.',
    images: ['https://picsum.photos/200', 'https://picsum.photos/200'],
    children: [],
  },
];

export const reviewRatingMock = [
  {
    userId: 301,
    hotelId: 5,
    room: 7,
    rating: 3.0,
    createdAt: new Date(),
  },
];
// Mock data for booking history
export const bookingHistoryMock = [
  {
    id: 301,
    userId: 111,
    hotel: hotelsMock.find(hotel => hotel.id === 4),
    checkInDate: '2024-06-15T12:00:00.000Z',
    checkOutDate: '2024-06-20T11:00:00.000Z',
    roomId: 7,
    totalPrice: 120 * 5 + 200 * 5,
    paymentMethod: 'Credit Card',
    createdAt: '2024-05-20T10:00:00.000Z',
    updatedAt: '2024-05-22T15:00:00.000Z',
    payment: null,
    roomCustomer: {
      children: 0,
      room: 1,
      mature: 2,
    },
    status: History_Status.CANCELED,
  },
  {
    id: 302,
    userId: 111,
    hotel: hotelsMock.find(hotel => hotel.id === 4),
    checkInDate: '2024-06-15T12:00:00.000Z',
    checkOutDate: '2024-06-20T11:00:00.000Z',
    roomId: 7,
    roomCustomer: {
      children: 0,
      room: 1,
      mature: 2,
    },
    totalPrice: 120 * 5 + 200 * 5,
    paymentMethod: 'Credit Card',
    createdAt: '2024-05-20T10:00:00.000Z',
    updatedAt: '2024-05-22T15:00:00.000Z',
    payment: null,
    status: History_Status.NOT_CHECKED_IN,
  },
  {
    id: 304,
    userId: 111,
    hotel: hotelsMock.find(hotel => hotel.id === 4),
    checkInDate: '2024-06-15T12:00:00.000Z',
    checkOutDate: '2024-06-20T11:00:00.000Z',
    roomId: 7,
    totalPrice: 120 * 5 + 200 * 5,
    paymentMethod: 'Credit Card',
    createdAt: '2024-06-20T10:00:00.000Z',
    updatedAt: '2024-05-22T15:00:00.000Z',
    payment: null,
    roomCustomer: {
      children: 0,
      room: 1,
      mature: 2,
    },
    status: History_Status.NOT_CHECKED_OUT,
  },
  {
    id: 305,
    userId: 111,
    hotel: hotelsMock.find(hotel => hotel.id === 4),
    checkInDate: '2024-06-15T12:00:00.000Z',
    checkOutDate: '2024-06-20T11:00:00.000Z',
    roomId: 7,
    roomCustomer: {
      children: 0,
      room: 1,
      mature: 2,
    },
    totalPrice: 120 * 5 + 200 * 5,
    paymentMethod: 'Credit Card',
    createdAt: '2024-06-20T10:00:00.000Z',
    updatedAt: '2024-05-22T15:00:00.000Z',
    payment: {
      amount: 200000,
    },
    status: History_Status.CHECKED_OUT,
  },
];
export const billAgent =[
  {
    id:1,
    agentId: 1,
    countRoom: 15,
    countBooking: 82,
    revenue: '$ 1.000.000',
    dayPay: '2024-05-28T12:34:56.789Z',
    price: '$300',
    status: false
  },
  {
    id:2,
    agentId: 1,
    countRoom: 15,
    countBooking: 82,
    revenue: '$ 1.000.000',
    dayPay: '2024-04-28T12:34:56.789Z',
    price: '$300',
    status: true
  },
  {
    id:2,
    agentId: 1,
    countRoom: 15,
    countBooking: 82,
    revenue: '$ 1.000.000',
    dayPay: '2024-03-28T12:34:56.789Z',
    price: '$300',
    status: true
  },
]