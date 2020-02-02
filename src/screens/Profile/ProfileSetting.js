/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {commonStyle as cs} from '../../styles/common/styles';
import SettingItem from '../../components/SettingItem';
import {apiActions} from '../../actions';
import AsyncStorage from '@react-native-community/async-storage';

class ProfileSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // window.scrollTo(0, 0);
    const {dispatch} = this.props;
    dispatch(apiActions.loadMobilePerson());
    dispatch(apiActions.loadAppContactInfo());
    dispatch(apiActions.loadMobileAddress());
    dispatch(apiActions.loadAppSetting());
    dispatch(apiActions.loadBasicList(30));
  }

  logout() {
    AsyncStorage.setItem('@token', '');
    this.props.navigation.navigate('SignIn');
  }

  static navigationOptions = {
    title: 'Instellingen',
    headerRight: () => (
      <TouchableOpacity
        style={{alignSelf: 'flex-end'}}
        onPress={() => {
          this.props.dispatch(apiActions.changeMode(true));
        }}>
        <Image
          style={{marginTop: -45, marginRight: 10, alignSelf: 'flex-end'}}
          source={require('./../../assets/images/student/setting/Image208.png')}
        />
      </TouchableOpacity>
    ),
  };
  render() {
    return (
      <ScrollView>
        <View
          style={
            this.props.darkMode ? {backgroundColor: 'red'} : cs.mainContainer
          }>
          <View style={cs.pageTitleWrapper}>
            {/* <Text style={cs.pageTitle}>Instellingen</Text> */}
            <View style={cs.settingContainer}>
              <View style={cs.settingWrapper}>
                <SettingItem
                  routeNavigationName="nothing"
                  navigation={this.props.navigation}
                  title="Naam"
                  desc="Rania Wanadali"
                  settingImg={require('./../../assets/images/student/setting/user.png')}
                />
                <SettingItem
                  routeNavigationName="EmailSetting"
                  navigation={this.props.navigation}
                  title="E-mail"
                  desc="Raniawanadali@gmail.com"
                  nameIcon="angle-right"
                  settingImg={require('./../../assets/images/student/setting/email.png')}
                />
                <SettingItem
                  routeNavigationName="PasswordSetting"
                  navigation={this.props.navigation}
                  title="Wachtwoord"
                  desc="Opnieuw aanvragen"
                  nameIcon="angle-right"
                  settingImg={require('./../../assets/images/student/setting/unlock.png')}
                />
                <SettingItem
                  routeNavigationName="PhoneSetting1"
                  navigation={this.props.navigation}
                  title="Telefoonnummer"
                  desc="0616663251"
                  nameIcon="angle-right"
                  settingImg={require('./../../assets/images/student/setting/smartphone.png')}
                />
              </View>
            </View>
            <View style={cs.settingContainer}>
              <View style={cs.settingWrapper}>
                <SettingItem
                  basicListData={this.props.loadBasicList}
                  routeNavigationName="TravelsCostSetting"
                  navigation={this.props.navigation}
                  title="Reiskosten sturen"
                  desc="Stuur de bonnetjes op!"
                  nameIcon="angle-right"
                  settingImg={require('./../../assets/images/student/setting/metro.png')}
                />
              </View>
            </View>
            <View style={cs.settingContainer}>
              <View style={cs.settingWrapper}>
                <SettingItem
                  routeNavigationName="HelpCentre"
                  navigation={this.props.navigation}
                  title="Helpcentrum"
                  nameIcon="angle-right"
                  desc="Heb je hulp nodig?"
                  settingImg={require('./../../assets/images/student/setting/light-bulb.png')}
                />
                <SettingItem
                  appSettingData={this.props.loadAppSetting}
                  routeNavigationName="Privacy"
                  navigation={this.props.navigation}
                  title="Privacy & Klachten"
                  desc="De reglementen"
                  nameIcon="angle-right"
                  settingImg={require('./../../assets/images/student/setting/document.png')}
                />
                <SettingItem
                  personData={this.props.loadMobilePerson}
                  infoData={this.props.loadAppContactInfo}
                  addressData={this.props.loadMobileAddress}
                  routeNavigationName="MySchool"
                  navigation={this.props.navigation}
                  title="Over jouw school"
                  desc="Alle contact informatie"
                  nameIcon="angle-right"
                  settingImg={require('./../../assets/images/student/setting/notification.png')}
                />
                <SettingItem
                  routeNavigationName="AboutApp"
                  navigation={this.props.navigation}
                  title="Over deze APP"
                  desc="Contract informatie"
                  nameIcon="angle-right"
                  settingImg={require('./../../assets/images/student/setting/smartphone-1.png')}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => this.logout()}
              style={cs.powerSetting}>
              <Text
                style={{
                  fontSize: 21,
                  color: '#31455E',
                  marginRight: 12,
                  top: 3,
                }}>
                Uitloggen
              </Text>
              <Image
                style={cs.passEye}
                source={require('./../../assets/images/student/setting/quit001-E005.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    loadMobilePerson: state.api.mobilePerson,
    loadAppContactInfo: state.api.contactInfo,
    loadMobileAddress: state.api.mobileAddress,
    loadAppSetting: state.api.loadSetting,
    loadBasicList: state.api.loadBasic,
  };
};

export default connect(mapStateToProps)(ProfileSetting);
