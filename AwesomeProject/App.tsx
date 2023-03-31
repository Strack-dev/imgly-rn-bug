import React from 'react';
import {SafeAreaView} from 'react-native';

import {VESDK, VideoEditorModal} from 'react-native-videoeditorsdk';

VESDK.unlockWithLicense(require('./config/imgly/vesdk_license'));

const App = () => {
  return (
    <SafeAreaView>
      <VideoEditorModal
        visible={true}
        video={require('./assets/video_sample.mp4')}
        onExport={result => console.log(result)}
        onError={error => console.log(error)}
        onCancel={() => console.log('canceled')}
      />
    </SafeAreaView>
  );
};

export default App;
