export const mappingHotel = hotel => {
  return {
    ...hotel,
    location: {
      latitude: hotel.latitude,
      longitude: hotel.longitude,
    },
    rooms: hotel.rooms.map(r => ({
      ...r,
      pricePerNight: r.price,
      images: r.images.map(t => t.imageUrl),
    })),
    avatar:
      hotel.images[0]?.imageUrl ||
      'https://cdn.icon-icons.com/icons2/2490/PNG/512/hotel_icon_150155.png',
    images:
      hotel.images.length > 0
        ? hotel.images.map(t => t.imageUrl)
        : [
            'https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg',
          ],
  };
};
