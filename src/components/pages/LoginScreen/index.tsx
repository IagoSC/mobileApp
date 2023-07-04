import React, {useEffect, useState} from 'react';
import {
  Button,
  TextInput,
  View
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';
import { getData, setData } from '../../../storage';
import { userSignIn, userSignUp } from '../../../api/user';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export function LoginScreen(props: LoginProps): JSX.Element {
    const [email, setEmail] = useState<string>()

    useEffect(() => {
      const userId = getData("userId")
      if(userId){
        console.log("Signing In")
        props.navigation.navigate("Home", {userId})
      }
    }, [])
    

    async function signIn(){
      if(!email) return
      const result = await userSignIn(email)
      setData("user", result)
      props.navigation.navigate("Home", {userId: result.id})
    }
    
    async function signUp(){
      if(!email) return
      const result = await userSignUp(email)
      setData("user", result)
      props.navigation.navigate("Home", {userId: result.id})
    }

    return (
      <View style={{justifyContent: "center", alignContent: "center", flex: 1, width: 300, alignSelf: "center"}}>
        <TextInput
          onChangeText={setEmail}
        />
        <Button
          title='Login'
          onPress={signIn}
        />
        <Button
          title='Create Account'
          onPress={signUp}
        />
      </View>
    )
}