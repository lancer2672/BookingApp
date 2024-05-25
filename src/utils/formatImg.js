import RNFS from 'react-native-fs';

export const readImageAsBinary = async uri => {
  try {
    const binaryString = await RNFS.readFile(uri, 'base64');
    return binaryString;
  } catch (err) {
    console.error('Error reading file:', err);
    return null;
  }
};
