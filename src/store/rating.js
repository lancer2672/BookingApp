import create from 'zustand';

const useRatingStore = create(set => ({
  ratings: [],
  ratings: [
    {
      "id": 0,
      "comment": "rating test 1",
      "star": 4.5,
      "createdDate": "2024-06-10T05:41:04.478Z",
      "user": {
        "id": 0,
        "firstName": "user1",
        "lastName": "test",
        "phoneNumber": "0905123123",
        "email": "test@gmail.com",
        "role": "USER",
        "status": "CREATED",
        "argent": {
          "id": 0,
          "identityNumber": "string",
          "frontIdentityCard": "string",
          "backIdentityCard": "string",
          "selfieImg": "string"
        }
      }
    },
    {
        "id": 1,
        "comment": "rating test 2",
        "star": 4.8,
        "createdDate": "2024-06-10T05:41:04.478Z",
        "user": {
          "id": 0,
          "firstName": "user2",
          "lastName": "test",
          "phoneNumber": "0905123123",
          "email": "test2@gmail.com",
          "role": "USER",
          "status": "CREATED",
          "argent": {
            "id": 0,
            "identityNumber": "string",
            "frontIdentityCard": "string",
            "backIdentityCard": "string",
            "selfieImg": "string"
          }
        }
      }
  ],
  setRating: ratings => set({ratings: ratings}),
  removeRating: async () => {set({rating: null});},
}));
export default useRatingStore;
