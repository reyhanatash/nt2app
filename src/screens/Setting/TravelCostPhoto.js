/* eslint-disable react-native/no-inline-styles */
import React, {Component, useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {commonStyle as cs} from '../../styles/common/styles';
import {View, ScrollView} from 'react-native';
import {Button} from '../../components/widgets';
import Icon from 'react-native-vector-icons/FontAwesome';
import {apiActions} from '../../actions';

const PhotoPopUp = props => {
  const id = props.navigation.getParam('id');
  const costTypeId = props.navigation.getParam('costTypeId');
  const date = props.navigation.getParam('date');
  const costFile = props.navigation.getParam('costFile');
  const costFileName = props.navigation.getParam('costFileName');
  const studentId = props.navigation.getParam('studentId');

  const addTravelCost = () => {
    props.dispatch(
      apiActions.addTravelCost(
        id,
        costTypeId,
        date,
        costFile,
        costFileName,
        studentId,
      ),
    );
  };
  return (
    <ScrollView>
      <View style={cs.mainContainer}>
        <View style={cs.textLoginContainer}>
          <View style={cs.ImageSectionsZone}>
            <View>
              {props.navigation.getParam('renderFileData')}
              {/* <Text style={{textAlign: 'center'}}>Base 64 String</Text> */}
            </View>
            {/* <View>
              {props.navigation.getParam('renderFileUri')}
              <Text style={{textAlign: 'center'}}>File Uri</Text>
            </View> */}
          </View>
          <View style={{flexDirection: 'row', flex: 1}} />
          <View>
            <Button
              colorButton="#CD51C9"
              name="UPLOAD"
              onClick={addTravelCost}
            />
            <View style={cs.nextIconPresenceWrapper}>
              <Icon
                name="chevron-right"
                color="white"
                size={12}
                style={{marginLeft: 8, marginTop: 5}}
              />
            </View>
          </View>
          <View>
            <Button colorButton="#5467fd" name="ANNULEER" />
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
    </ScrollView>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(PhotoPopUp);
