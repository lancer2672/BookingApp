// Mock data for Agent
export const agentMock = {
  id: 1,
  name: 'Agent Name',
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
        policy: ['No Smoking, Pay after checkin'],
        status: 'Đã đặt',
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
          endDay:'23/10/2024',
          status: 'Đã thanh toán online',
          note:'(Không có)'
        }
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
          endDay:'',
          status: '',
          note:''
        }
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
        name: 'Phòng đơn',
        hotelId: 4,
        pricePerNight: 120,
        numOfPeople: 2,
        numOfChildren: 0,
        bed: 1,
        images: ['https://picsum.photos/200', 'https://picsum.photos/200'],
        amenities: ['Air Conditioning', 'Tivi'],
        policy: ['No Smoking', 'Pay after checkin'],
        status: 'Đã đặt',
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
          endDay:'23/10/2024',
          status: 'Đã thanh toán online',
          note:'(Không có)'
        }
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
        policy: ['Allow to Smoking', 'Pay before checkin'],
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
          endDay:'',
          status: '',
          note:''
        }
      },
    ],
  },
];

export const reviewBookingMock = [
  {
    id: 101,
    userId: 201,
    createdAt: '2024-05-12T08:00:00.000Z',
    react: [201, 202, 203],
    hotelId: 4,
    parentId: null,
    description: 'Great experience, friendly staff and clean rooms.',
    images: ['https://picsum.photos/200', 'https://picsum.photos/200'],
  },
  {
    id: 102,
    userId: 202,
    createdAt: '2024-05-13T09:30:00.000Z',
    react: [204, 205],
    hotelId: 5,
    parentId: 101,
    description: 'The food was not up to the mark, expected better quality.',
    images: ['https://picsum.photos/200', 'https://picsum.photos/200'],
  },
];

export const reviewRatingMock = [
  {
    userId: 201,
    hotelId: 5,
    rating: 3.0,
  },
];
