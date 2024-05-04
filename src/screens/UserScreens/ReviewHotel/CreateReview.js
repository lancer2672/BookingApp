import ButtonComponent from '@src/components/Button';
import TextInputComponent from '@src/components/TextInputComponent';
import {generalColor} from '@src/theme/color';
import {rowCenter} from '@src/theme/style';
import textStyle from '@src/theme/text';
import {REVIEW_TEXT} from '@src/utils/constant';
import {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {launchImageLibrary} from 'react-native-image-picker';
import {Avatar} from 'react-native-paper';
import StarRating from 'react-native-star-rating';
import AntDesign from 'react-native-vector-icons/AntDesign';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const CreateReviewModal = ({isVisible, onClose}) => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [rating, setRating] = useState(0);
  const selectImages = () => {
    const options = {
      noData: true,
      mediaType: 'photo',
      maxSelection: 4,
      multiple: true,
    };

    launchImageLibrary(options, response => {
      if (response.assets) {
        setImages(response.assets.map(asset => asset.uri));
      }
    });
  };
  const handleCreateReview = () => {
    showMessage({
      message: 'Đánh giá của bạn đã được tạo',
      type: 'success',
    });
    onClose();
  };
  return (
    <Modal transparent visible={isVisible} onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={{padding: 12, ...rowCenter}}>
          <Text
            style={{
              textTransform: 'uppercase',
              color: generalColor.primary,
              ...textStyle.h[2],
              flex: 1,
              textAlign: 'center',
              margiLeft: 24,
            }}>
            Đánh giá
          </Text>
          <Pressable onPress={onClose}>
            <AntDesign
              name="close"
              size={24}
              color={generalColor.other.gray}></AntDesign>
          </Pressable>
        </View>

        <View style={rowCenter}></View>
        <View style={{flex: 1}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.row}>
              <Avatar.Image
                size={80}
                source={{uri: 'https://picsum.photos/200'}}
              />
            </View>
            <View style={styles.row}>
              <Text style={[textStyle.h[2], {color: generalColor.primary}]}>
                Tên
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={textStyle.content.medium}>Địa chỉ</Text>
            </View>
            <View style={styles.row}>
              <StarRating
                disabled={false}
                maxStars={5}
                rating={rating}
                selectedStar={value => setRating(value)}
                starSize={30}
              />
            </View>
            {rating != 0 && (
              <View style={styles.row}>
                <Text style={textStyle.content.medium}>
                  {REVIEW_TEXT[rating]}
                </Text>
              </View>
            )}

            <TextInputComponent
              placeholder="Viết đánh giá"
              placeholderColor="black"
              multiline
              styleTextInput={{color: 'black'}}
            />
            {images.length != 0 && (
              <View style={{height: 120, paddingVertical: 12, width: '100%'}}>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={images}
                  renderItem={({item}) => (
                    <TouchableOpacity onPress={() => setSelectedImage(item)}>
                      <Image
                        source={{uri: 'https://picsum.photos/200'}}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item, index) => index.toString()}
                />
                <Modal
                  visible={!!selectedImage}
                  onRequestClose={() => setSelectedImage(null)}>
                  <Image
                    source={{uri: 'https://picsum.photos/200'}}
                    // source={{uri: selectedImage}}
                    resizeMode="contain"
                    style={styles.fullImage}
                  />
                </Modal>
              </View>
            )}
            <ButtonComponent
              text="Thêm ảnh"
              onPress={selectImages}
              style={{
                backgroundColor: undefined,
                borderColor: generalColor.primary,
                borderWidth: 2,
                marginBottom: 12,
              }}
              txtStyle={{color: generalColor.primary}}
            />
          </ScrollView>
          <ButtonComponent
            style={{marginTop: 12}}
            text="Gửi"
            onPress={handleCreateReview}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CreateReviewModal;

const styles = StyleSheet.create({
  container: {
    height: (SCREEN_HEIGHT * 2) / 3,
    marginTop: 'auto',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    elevation: 12,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 20,
  },
  fullImage: {
    width: '100%',

    height: '100%',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    color: generalColor.primary,
  },
  image: {
    width: 80,
    borderRadius: 8,
    height: '100%',
  },
  row: {
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
