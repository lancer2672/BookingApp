export const getNumberOfNights = (checkInDate, checkOutDate) => {
  // Chuyển đổi ngày vào định dạng Date
  const checkIn = new Date(checkInDate);
  const checkOut = new Date(checkOutDate);

  // Tính số mili giây giữa hai ngày
  const timeDiff = checkOut.getTime() - checkIn.getTime();

  // Chuyển đổi số mili giây thành số ngày (làm tròn xuống)
  const numberOfNights = Math.floor(timeDiff / (1000 * 3600 * 24));

  return numberOfNights;
};
