import React from 'react';
import {View, TextInput, Button} from 'react-native';

import styles from './styles.js';

const AddressInput = ({...props}) => {
  return (
    <View style={styles.textInputStyle}>
      <TextInput {...props} style={styles.placeholderStyle} />
    </View>
  );
};

export default AddressInput;

// import React from 'react';
// import {Controller} from 'react-hook-form';
// import {StyleSheet} from 'react-native';
// import {TextInput} from 'react-native-paper';
// import styles from './styles.js'

// const AddressInput = ({name, control, placeholder}) => {
//   return (
//     <Controller
//       render={({field: {onChange, onBlur, value}}) => (
//         <>
//           <TextInput
//             value={value}
//             onChangeText={onChange}
//             onBlur={onBlur}
//             placeholder={placeholder}
//             style={styles.placeholderStyle}
//             placeholderTextColor="black"
//             textColor="gray"
//           />
//         </>
//       )}
//       control={control}
//       name={name}
//       rules={{
//         required: {
//           value: true,
//           message: 'Required',
//         },
//       }}
//     />
//   );
// };

// export default AddressInput;
