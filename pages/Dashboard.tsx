import React from 'react'
import { StyleSheet, Image, Alert, TouchableOpacity, Animated } from 'react-native'
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import HomeScreen from './Home';
import SearchScreen from './Search';
import DonationRequest from './DonationRequest';
import Profile from './Profile';

export default function Dashboard({ navigation }: { navigation: any }) {

  const _renderIcon = (routeName: any, selectedTab: any) => {
    let icon = <Image
      source={require("../assets/active_home.png")}
    />

    switch (routeName) {
      case 'Home':
        icon = selectedTab === routeName ? <Image
          source={require("../assets/active_home.png")}
        /> : <Image
          source={require("../assets/home.png")}
        />
        break;
      case 'Search':
        icon = selectedTab === routeName ? <Image
          source={require("../assets/search_active.png")}
        /> : <Image
          source={require("../assets/search.png")}
        />
        break;
      case 'DonationRequest':
        icon = selectedTab === routeName ? <Image
          source={require("../assets/donationRequest_active.png")}
        /> : <Image
          source={require("../assets/donationRequest.png")}
        />
        break;
      case 'Profile':
        icon = selectedTab === routeName ? <Image
          source={require("../assets/user_active.png")}
        /> : <Image
          source={require("../assets/user.png")}
        />
        break;
    }

    return icon;
  };

  const renderTabBar = ({ routeName, selectedTab, navigate }: any) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <CurvedBottomBar.Navigator
      type="DOWN"
      style={styles.bottomBar}
      shadowStyle={styles.shawdow}
      height={55}
      circleWidth={50}
      bgColor="white"
      initialRouteName="Home"
      borderTopLeftRight
      renderCircle={({ selectedTab, navigate }) => (
        <Animated.View style={styles.btnCircleUp}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert('Click Action')}
          >
            <Image
              source={require("../assets/blood_drop.png")} style={{ width: 130 }} />
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}
    >
      <CurvedBottomBar.Screen
        name="Home"
        position="LEFT"
        component={() => <HomeScreen navigation={navigation}/>}
        options={{
          headerShown: false
        }}
      />
      <CurvedBottomBar.Screen
        name="Search"
        component={() => <SearchScreen />}
        position="LEFT"
      />
      <CurvedBottomBar.Screen
        name="DonationRequest"
        component={() => <DonationRequest />}
        position="RIGHT"
      />
      <CurvedBottomBar.Screen
        name="Profile"
        component={() => <Profile />}
        position="RIGHT"
      />
    </CurvedBottomBar.Navigator>

  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 10,
    height: 10,
    tintColor: 'red',
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: '#BFEFFF',
  },
  screen2: {
    flex: 1,
    backgroundColor: '#FFEBCD',
  },
});