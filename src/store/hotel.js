import create from 'zustand';

const useHotelStore = create(set => ({
    hotels: [],
    hotels: [
        {
            "id": 0,
            "name": "hotel1",
            "description": "description of hotel 1",
            "address": "address of hotel 1",
            "longitude": 0,
            "latitude": 0,
            "depositPercent": 300,
            "status": "AVAILABLE",
            "images": [
                {
                    "id": 0,
                    "imageUrl": "https://picsum.photos/200"
                },
                {
                    "id": 1,
                    "imageUrl": "https://picsum.photos/200"
                }
            ],
            "amenities": [
                {
                    "id": 0,
                    "name": "Cho de xe"
                },
                {
                    "id": 1,
                    "name": "Ho boi"
                }
            ],
            "province": {
                "id": 0,
                "provinceName": "string",
                "provinceType": "string",
                "district": {
                    "id": 0,
                    "districtName": "string",
                    "districtType": "string",
                    "lat": 0,
                    "lng": 0,
                    "ward": {
                        "id": 0,
                        "wardName": "string",
                        "wardType": "string"
                    }
                }
            },
            "argent": {
                "id": 0,
                "firstName": "test",
                "lastName": "test",
                "phoneNumber": "test",
                "email": "test@gmail.com",
                "role": "AGENT",
                "status": "CREATED"
            },
            "rooms": [
                {
                    "id": 0,
                    "name": "Phong don",
                    "price": 120,
                    "status": "AVAILABLE",
                    "images": [
                        {
                            "id": 0,
                            "imageUrl": "https://picsum.photos/200"
                        },
                        {
                            "id": 1,
                            "imageUrl": "https://picsum.photos/200"
                        }
                    ],
                    "amenities": [
                        {
                            "id": 0,
                            "name": "Dieu hoa"
                        },
                        {
                            "id": 1,
                            "name": "Tu lanh"
                        },
                        {
                            "id": 2,
                            "name": "Ti vi NextFlix"
                        }
                    ]
                },
                {
                    "id": 1,
                    "name": "Phong doi",
                    "price": 200,
                    "status": "",
                    "images": [
                        {
                            "id": 0,
                            "imageUrl": "https://picsum.photos/200"
                        },
                        {
                            "id": 1,
                            "imageUrl": "https://picsum.photos/200"
                        }
                    ],
                    "amenities": [
                        {
                            "id": 0,
                            "name": "Dieu hoa"
                        },
                        {
                            "id": 1,
                            "name": "Tu quan ao"
                        },
                        {
                            "id": 2,
                            "name": "Ti vi NextFlix"
                        }
                    ]
                }
            ]
        }
    ],
    setHotels: hotels => set({ hotels: hotels }),
    removeHotels: () => set({ hotels: null }),
}));
export default useHotelStore;
