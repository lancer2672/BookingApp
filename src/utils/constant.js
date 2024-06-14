import { generalColor } from '@src/theme/color';
import { Dimensions } from 'react-native';

export const URL_API = 'localhost:8080';
// export const URL_API_SUB = '192.168.136.104:8082';
export const URL_API_SUB = 'https://bookingappsubserver.onrender.com';
export const REVIEW_TEXT = [
  '',
  'Trải nghiệm tệ',
  'Trải nghiệm không tốt',
  'Trải nghiệm trung bình',
  'Trải nghiệm tốt',
  'Trải nghiệm tuyệt vời',
];
export const ROLE = {
  ADMIN: 'ADMIN',
  // AGENT: 'AGENT',
  //TODO: fix typo
  AGENT: 'ARGENT',
  STAFF: 'STAFF',
  USER: 'USER',
};
export const History_Status = {
  CANCELED: -1,
  NOT_CHECKED_IN:"CONFIRMED",
  NOT_CHECKED_OUT: 1,
  CHECKED_OUT: 2,
  PENDING: 3,
  CONFIRMED:  "CONFIRMED",
};
export const Room_Status = {
  NOT_BOOKED: 'AVAILABLE',
  BOOKED: 1,
};
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const getStatusText = status => {
  switch (status) {
    case History_Status.CANCELED:
      return 'Đã huỷ phòng';
    case History_Status.NOT_CHECKED_IN:
      return 'Chưa nhận phòng';
    // case History_Status.CONFIRMED:
    //   return 'Đặt phòng thành công';
    case History_Status.NOT_CHECKED_OUT:
      return 'Chưa trả phòng';
    case History_Status.CHECKED_OUT:
      return 'Đã trả phòng';
    case History_Status.PENDING:
      return 'Đang chờ xác nhận';
    default:
      return 'Trạng thái không xác định';
  }
};
export const getStatusColor = status => {
  switch (status) {
    case History_Status.CANCELED:
      return generalColor.status.canceled; // Đã huỷ phòng
    case History_Status.NOT_CHECKED_IN:
      return generalColor.status.notCheckedIn; // Chưa nhận phòng
    case History_Status.PENDING:
      return generalColor.status.notCheckedIn; // Chưa nhận phòng
    case History_Status.NOT_CHECKED_OUT:
      return generalColor.status.notCheckedOut; // Chưa trả phòng
    case History_Status.CHECKED_OUT:
      return generalColor.status.checkedOut; // Đã trả phòng
    default:
      return generalColor.other.gray; // Màu mặc định cho trạng thái không xác định
  }
};
