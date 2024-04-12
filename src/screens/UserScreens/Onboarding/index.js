import {OnboardFlow} from 'react-native-onboard';

const OnboardingScreen = ({onDone}) => {
  return (
    <OnboardFlow
      onDone={onDone}
      pages={[
        {
          title: 'Meal Planning',
          subtitle: 'Create your meal plan, choose your favorite foods',
          imageUri: 'https://frigade.com/img/example2.png',
        },
        {
          title: 'Workout',
          subtitle: 'Create your workout routine, choose your exercises',
          imageUri: 'https://frigade.com/img/example1.png',
        },
      ]}
      type={'fullscreen'}
    />
  );
};

export default OnboardingScreen;
