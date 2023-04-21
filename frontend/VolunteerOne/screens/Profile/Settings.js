import React from "react";
import { useState } from "react";
import { StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { Block, theme, Text } from "galio-framework";
const { width,height } = Dimensions.get("screen");
import { withNavigation } from '@react-navigation/compat';
import { Images, argonTheme } from "../../constants";
import { TextInput } from "react-native-gesture-handler";
import mockData from "../../constants/ProfileTab/profile";


class Settings extends React.Component {
  render() {
    const { navigation } = this.props;
    function handleNameSetting(input) {
      console.log(input);      
    }


    return (
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
      <Block flex center style={styles.home} paddingTop={100} gap={15}>
        <Block middle style={styles.avatarContainer}>
          <Image
            source={{ uri: mockData.image }}
            style={styles.avatar}
          />
        </Block>
        <Block>
          <TouchableOpacity
            onPress={console.log("Editing img")}
          >
            <Text
              color={argonTheme.COLORS.ACTIVE}
              size={15}
              paddingBottom={25}
              style={{
                fontWeight: "bold",
              }}
            >
              Edit Image
            </Text>
          </TouchableOpacity>
        </Block>
        <Block style={styles.settingContainer}>
          <Block>
                <Text 
                  color="#000000" 
                  size={20}
                  style={{fontWeight: "bold"}}
                >
                  Name 
                </Text>
          </Block>
            <TextInput
              paddingLeft={50}
              color="#000000"
              placeholder="Place Holder Name"
              onChangeText={handleNameSetting}
            />
        </Block>
        <Block style={styles.settingContainer}>
          <Block>
          <TouchableWithoutFeedback onPress={() => navigation.push('Profile', {theUser: "Noah Fernandez",})}> 
                <Text 
                  color="#000000" 
                  size={20}
                  style={{fontWeight: "bold"}}
                >
                  Email 
                </Text>
          </TouchableWithoutFeedback>
          </Block>
          <TextInput
              paddingLeft={50}
              color="#000000"
              placeholder="Place Holder Email"
              // onChangeText={handleNameSetting}
            />
        </Block>
        <Block style={styles.settingContainer}>
          <Block>
                <Text 
                  color="#000000" 
                  size={20}
                  style={{fontWeight: "bold"}}
                >
                  Location 
                </Text>
          </Block>
          <TextInput
              paddingLeft={50}
              color="#000000"
              placeholder="Place Holder Email"
              // onChangeText={handleNameSetting}
            />
        </Block>
        <Block style={styles.bioContainer}>
          <Block>
                <Text 
                  color="#000000" 
                  size={20}
                  style={{fontWeight: "bold"}}
                >
                  Bio 
                </Text>
          </Block>
          <TextInput
              paddingLeft={50}
              color="#000000"
              placeholder="Place Holder bio"
              // onChangeText={handleNameSetting}
            />
        </Block>
      </Block>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  settingContainer: {
    width: width * 0.8,
    height: height * 0.05,
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    flex: 1,
    justifyContent: "left",
    paddingLeft: 5,
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    flexDirection: 'row',
    alignItems: 'flex-start', 
    alignItems: 'center',
  },
  bioContainer: {
    width: width * 0.8,
    height: height * 0.3,
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    flex: 1,
    paddingTop: 10,
    paddingLeft: 5,
    shadowRadius: 8,
    shadowOpacity: 0.1,
    flexDirection: 'row',
    alignItems: 'flex-start', 
  },
  avatarContainer: {
    position: "relative",
    marginTop: -80,
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0,
  },
});

export default Settings;
