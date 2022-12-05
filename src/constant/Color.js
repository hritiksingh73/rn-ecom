import remoteConfig from '@react-native-firebase/remote-config';

export const Color = {
  red: '#db0000',
  black: '#000000',
  white: 'rgb(255,255,255)',
  darkGrey: '#564d4d',
  maroon: '#831010',
  green: '#70c03b',
};

remoteConfig()
  .setDefaults({
    awesome_new_feature: 'disabled',
  })
  .then(() => remoteConfig().fetchAndActivate())
  .then(fetchedRemotely => {
    if (fetchedRemotely) {
      console.log('Configs were retrieved from the backend and activated.');
    } else {
      console.log(
        'No configs were fetched from the backend, and the local configs were already activated',
      );
    }
  });