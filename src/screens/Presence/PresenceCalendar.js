/* eslint-disable radix */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, ScrollView} from 'react-native';
import {commonStyle as cs} from '../../styles/common/styles';
import CalendarsScreen from './../../components/calendar';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button} from './../../components/widgets';
import Icon from 'react-native-vector-icons/FontAwesome';
import {apiActions} from '../../actions';
import AsyncStorage from '@react-native-community/async-storage';
import PickerScreen from './../../components/Picker';
class PresenceCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
      groupName: '',
      groupId: '',
      month: parseInt(
        this.props.navigation.getParam('date').dateString.substring(5, 7),
        10,
      ),
    };
    this.getGroupFunction = this.getGroupFunction.bind(this);
  }

  async getGroupFunction(newGroup) {
    const userId = parseInt(await AsyncStorage.getItem('@userId'));
    this.setState({
      groupName: newGroup.FLD_GROUP_NAME,
      groupId: newGroup.FLD_FK_GROUP,
    });
    this.props.dispatch(
      apiActions.loadMonthAttendance(
        newGroup.FLD_FK_GROUP,
        userId,
        this.state.month,
      ),
    );
  }

  async componentDidMount() {
    const {dispatch} = this.props;
    dispatch(apiActions.loadStudentGroup(-1));
  }

  render() {
    return (
      <ScrollView>
        <View style={cs.mainContainer}>
          <View style={cs.profileInfo} />

          <View>
            <View style={{alignItems: 'center', marginTop: 20}}>
              <View style={{alignItems: 'center', direction: 'row'}}>
                <Text>
                  <Text style={cs.BoldProfileInfo}>
                    {/* TODO: */}
                    Rania
                  </Text>
                  <Text style={cs.RegularProfileInfo}>, jouw groep </Text>
                </Text>
                <View>
                  <Text style={cs.colorProfileInfo}>
                    {this.state.groupName}
                  </Text>
                </View>
              </View>
              <Text>
                <Text style={cs.RegularProfileInfo}>
                  heeft les op <Text style={cs.colorProfileInfo}>dinsdag </Text>
                  en <Text style={cs.colorProfileInfo}>donderdag.</Text>
                </Text>
              </Text>
            </View>
            <View>
              <PickerScreen
                getGroup={this.getGroupFunction}
                data={this.props.loadStudentGroup}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                alignSelf: 'center',
              }}>
              <TouchableOpacity style={cs.presenceStatusColor}>
                <Text style={cs.presenceColorText}>AANWEZIG</Text>
              </TouchableOpacity>
              <TouchableOpacity style={cs.lateStatusColor}>
                <Text style={cs.presenceColorText}>TE LAAT</Text>
              </TouchableOpacity>
              <TouchableOpacity style={cs.absentStatusColor}>
                <Text style={cs.presenceColorText}>AFWEZIG</Text>
              </TouchableOpacity>
            </View>
            <View style={cs.calendarsWrapper}>
              <View style={{width: '100%'}}>
                <CalendarsScreen navigation={this.props.navigation} />
              </View>
            </View>
            <View
              style={{
                marginBottom: 20,
                width: '100%',
              }}>
              <Button
                name="AANWEZIG"
                imgSource={require('./../../assets/images/student/presence/saveImge.png')}
                colorButton="#CD51C9"
                onClick={() =>
                  this.props.navigation.navigate('PresenceCalendar')
                }
              />
              {/* <View style={cs.nextIconPresenceWrapper}>
                    <Icon
                      name="chevron-right"
                      color="white"
                      size={12}
                      style={{marginLeft: 8, marginTop: 5}}
                    />
                  </View> */}
              <View
                style={{
                  marginTop: 5,
                  flex: 1,
                  backgroundColor: 'rgba(238,196,97,0.57)',
                  marginLeft: 12,
                  marginRight: 12,
                  padding: 5,
                  borderColor: '#C99400',
                  borderWidth: 2,
                  borderRadius: 8,
                }}>
                <Text
                  style={{color: '#31455E', fontSize: 12, fontStyle: 'italic'}}>
                  LET OP: De aanwezigheid voor vandaag is nog niet 'bewaard'
                </Text>
              </View>

              <View>
                <Text style={cs.summaryPresence}>
                  Bekijk een samenvatting van je aanwezigheid.{' '}
                </Text>
              </View>
              <View
                style={{
                  width: '100%',
                  marginBottom: 20,
                }}>
                <Button
                  name="SAMENVATTING"
                  colorButton="#5467FD"
                  onClick={() =>
                    this.props.navigation.navigate('PresenceCalendar')
                  }
                />
                <View style={cs.nextIconWrapper}>
                  <Icon
                    name="chevron-right"
                    color="white"
                    size={12}
                    style={{marginLeft: 8, marginTop: 5}}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    loadStudentGroup: state.api.loadStudentGroup,
    loadMonthAttendance: state.api.loadMonthAttendance,
  };
};

export default connect(mapStateToProps)(PresenceCalendar);
