import React, {useEffect, useState, useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Button
} from 'react-native';
import { getAllGroups } from '../../../api/groups';
import { GroupType } from '../../../types/GroupType';
import { GroupCard } from '../../organisms/GroupCard';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, RootStackProps } from '../../../../App';
import { useNavigation } from '@react-navigation/native';
import { CurrentUserContext } from '../../../providers/CurrentUserProvider';
import { AppButton } from '../../atoms/AppButton';
import { GroupsContext } from '../../../providers/GroupsProvider';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen(props: HomeProps): JSX.Element {
    const {userToken} = useContext(CurrentUserContext);
    const {groups, setGroups} = useContext(GroupsContext);
    const navigation = useNavigation<RootStackProps>()


    async function loadPage(){
      try{
        if(!userToken) throw Error("No user assigned")
        const groups = await getAllGroups(userToken)
        setGroups(groups)
      }catch(err){
        navigation.navigate("Login")
      }
    }

    useEffect(() => {
      loadPage()
    }, [])

    function navigateGroupCreation(){
      navigation.navigate("FormScreen", {
        entity: "group",
        event: "create",
        values: {}
      })
    }
    
    function navigateTaskCreation(){
      navigation.navigate("FormScreen", {
        entity: "task",
        event: "create",
        values: {}
      })
    }

    return (
        <SafeAreaView
          style={{flex: 1}}
        >
            <ScrollView
              style={{height: "90%"}}
              contentInsetAdjustmentBehavior="automatic">
              {groups.map((group, idx) => (
                <GroupCard
                    group={group}
                    key={`group-${idx}`}
                    color={"#0FF"}
                />
              ))}
            </ScrollView>
            <View style={{width: "100%", justifyContent: "space-around", flexDirection: "row", alignSelf: "flex-end", backgroundColor: "#aaa", paddingVertical: 10}}>
              <AppButton
                style={{width: "30%"}}
                title="New Group"
                onPress={navigateGroupCreation}
              />
              <AppButton
                style={{width: "60%", backgroundColor: "#7fffd4", borderColor: ""}}
                title="New Task"
                onPress={navigateTaskCreation}
              />
            </View>
        </SafeAreaView>
    )
}