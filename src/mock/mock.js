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
    province: 'Province 4',
    district: 'District 4',
    rating: 4.2,
    avatar: 'https://picsum.photos/200',
    images: ['https://picsum.photos/200', 'https://picsum.photos/200'],
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
        hotelId: 4,
        pricePerNight: 120,
        numOfPeople: 2,
        numOfChildren: 0,
        bed: 1,
        amenities: ['Air Conditioning'],
      },
      {
        id: 8,
        hotelId: 4,
        pricePerNight: 200,
        numOfPeople: 4,
        numOfChildren: 2,
        bed: 2,
        amenities: ['Air Conditioning'],
      },
    ],
  },
  {
    id: 5,
    agentId: agentMock.id,
    name: 'Hotel 5',
    address: '1 Infinite Loop, Cupertino, CA',
    description: 'This is a description of Hotel 5.',
    province: 'Province 5',
    district: 'District 5',
    rating: 4.7,
    avatar: 'https://picsum.photos/200',
    images: ['https://picsum.photos/200', 'https://picsum.photos/200'],
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
        id: 9,
        hotelId: 5,
        pricePerNight: 150,
        numOfPeople: 2,
        numOfChildren: 1,
        bed: 1,
        amenities: ['Air Conditioning'],
      },
      {
        id: 10,
        hotelId: 5,
        pricePerNight: 250,
        numOfPeople: 3,
        numOfChildren: 1,
        bed: 2,
        amenities: ['Air Conditioning'],
      },
    ],
  },
];
