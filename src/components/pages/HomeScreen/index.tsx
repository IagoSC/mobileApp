import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View
} from 'react-native';
import { getAllGroups } from '../../../api/groups';
import { BottomBar } from '../../molecules/BottomBar';
import { GroupType } from '../../../types/GroupType';
import { GroupCard } from '../../organisms/GroupCard';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen(props: HomeProps): JSX.Element {

    const [groups, setGroups] = useState<GroupType[]>([]) 

    async function updateGroups(){
      const groups =  await getAllGroups()
      setGroups(groups)
    }

    useEffect(() => {
        updateGroups()
    }, [])

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
            <BottomBar/>
        </SafeAreaView>
    )
}