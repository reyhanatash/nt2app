/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {commonStyle as cs} from './../styles/common/styles';

export default class DashboardBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let attendance_Img = require('./../assets/images/student/dashboard/Image217.png');
    let messages_Img = require('./../assets/images/student/dashboard/Image218.png');
    let help_Img = require('./../assets/images/student/dashboard/Image220.png');
    let anything_Img = require('./../assets/images/student/dashboard/Image221.png');
    let travel_Img = require('./../assets/images/student/dashboard/Image222.png');

    return (
      <View style={{padding: 20}}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Presence');
          }}
          style={cs.boxesWrapper}>
          <Image style={cs.boxImageStyle} source={attendance_Img} />
          <Text style={cs.attendanceFont}>Taking Attendance</Text>
        </TouchableOpacity>
        <View style={cs.pairBox}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Messages');
            }}
            style={cs.boxesPairWrapper}>
            <Image style={cs.boxPairImageStyle} source={messages_Img} />
            <Text style={cs.pairBoxFont}>Lees berichten</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('HelpCentre');
            }}
            style={cs.boxesPairWrapper}>
            <Image style={cs.boxPairImageStyle} source={help_Img} />
            <Text style={cs.pairBoxFont}>Help</Text>
          </TouchableOpacity>
        </View>
        <View style={cs.pairBox}>
          <TouchableOpacity style={cs.boxesPairWrapper}>
            <Image style={cs.boxPairImageStyle} source={anything_Img} />
            <Text style={cs.pairBoxFont}>Nog iets?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('TravelsCostSetting');
            }}
            style={cs.boxesPairWrapper}>
            <Image style={cs.boxPairImageStyle} source={travel_Img} />
            <Text style={cs.pairBoxFont}>Reiskosten</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
