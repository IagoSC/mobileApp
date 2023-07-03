import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  View
} from 'react-native';
import { getAllGroups } from '../../../api/groups';
import { BottomBar } from '../../molecules/BottomBar';
import { GroupType } from '../../../types/GroupType';
import { GroupCard } from '../../organisms/GroupCard';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, RootStackProps } from '../../../../App';
import { useNavigation } from '@react-navigation/native';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen(props: HomeProps): JSX.Element {

    const [groups, setGroups] = useState<GroupType[]>([]) 
    const navigation = useNavigation<RootStackProps>()

    async function updateGroups(){
      const groups =  await getAllGroups()
      setGroups(groups)
    }

    useEffect(() => {
        updateGroups()
    }, [])

    function navigateGroupCreation(){
      navigation.navigate("FormScreen", {
        entity: "group",
        event: "create",
        values: {}
    })
    }

    return (
        <SafeAreaView >
            <ScrollView 
              contentInsetAdjustmentBehavior="automatic">
              {groups.map((group, idx) => (
                <GroupCard
                    group={group}
                    key={`group-${idx}`}
                    color={"#0FF"}
                />
              ))}
            </ScrollView>
            <View style={{justifyContent: "flex-end", backgroundColor: "#F0F"}}>
              <Button
                title="New Group"
                onPress={navigateGroupCreation}
                />
            </View>
        </SafeAreaView>
    )
}