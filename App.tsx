/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { TaskCard } from './src/components/organisms/TaskCard';
import {
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { GroupCard } from './src/components/organisms/GroupCard';


function App(): JSX.Element {
  return (
    <SafeAreaView style={{}}>
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{}}>

      {
        ([
          {id: "a", title: "asdasd", description: "asdsad", tasks: []},
          {id: "a", title: "asdasd", description: "asdsad", tasks: []},
          {id: "a", title: "asdasd", description: "asdsad", tasks: []},
          {id: "a", title: "asdasd", description: "asdsad", tasks: []},
          {id: "a", title: "asdasd", description: "asdsad", tasks: []},
          {id: "a", title: "asdasd", description: "asdsad", tasks: []},
          {id: "a", title: "asdasd", description: "asdsad", tasks: []},
          {id: "a", title: "asdasd", description: "asdsad", tasks: []},
        ]).map(group => {
          return (
            <GroupCard
              color='#f0f'
              group={group}
            />
            )
          })
        }
        </ScrollView>
        </SafeAreaView>
  )
}


export default App;
