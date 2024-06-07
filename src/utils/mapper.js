export const mappingHotel = hotel => {
  return {
    ...hotel,
    location: {
      latitude: hotel.latitude,
      longitude: hotel.longitude,
    },
    avatar: hotel.images[0],
    
  };
};
