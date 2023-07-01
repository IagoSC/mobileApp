import { Button, ColorValue, Text, View } from "react-native";
import { styles } from "./styles";
import { PropsWithChildren } from "react";

type TaskType = {
    title: string
    description: string
}
  
type TaskCardProps = PropsWithChildren<TaskType & {}>;


export function TaskCard({title, description}: TaskCardProps): JSX.Element {

    function confirmTask(){
      console.log("OI MUNDO")
    }
    
    function deleteTask(){
    
    }
    
    return (
      <View style={styles.sectionContainer}>
        <View style={styles.textSection}>
          <Text
            style={styles.sectionTitle}>
            {title}
          </Text>
          <Text
            style={styles.sectionDescription}>
            {description}
          </Text>
        </View>
        <View style={styles.actionsSection}>
            <Button 
              title="Confirm"
              color={"green"}
              onPress={confirmTask}
            />
            <Button 
              title='Delete'
              color={"red"}
              onPress={deleteTask}
            />
        </View>
      </View>
    );
}
  