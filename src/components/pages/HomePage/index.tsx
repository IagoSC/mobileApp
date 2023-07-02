import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View
} from 'react-native';
import { GroupList } from '../../molecules/GroupList';
import { getAllGroups } from '../../../api/groups';
import { BottomBar } from '../../molecules/BottomBar';
import { GroupType } from '../../../types/GroupType';
import { GroupCard } from '../../organisms/GroupCard';

export function HomePage(): JSX.Element {
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
              <View style={{flex: 1}}>
              {groups.map((group, idx) => (
                <GroupCard
                    group={group}
                    key={`group-${idx}`}
                    color={"#0FF"}
                />
              ))}
              </View>
            </ScrollView>
            <BottomBar/>
        </SafeAreaView>
    )
}