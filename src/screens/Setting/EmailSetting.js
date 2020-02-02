/* eslint-disable react-native/no-inline-styles */
import React, {Component, useState} from 'react';
import {connect} from 'react-redux';
import {commonStyle as cs} from '../../styles/common/styles';
import {View, Text, TouchableOpacity, Picker, Image} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Row, Col} from 'native-base';
import ActionSheet from 'react-native-actionsheet';
import {InputField, Button, Header} from '../../components/widgets';
import {apiActions} from './../../actions';
import Icon from 'react-native-vector-icons/FontAwesome';

const EmailSetting = props => {
  const [email, updateEmail] = useState('');
  const editMail = () => {
    updateEmail(email);
    const {dispatch} = props;
    dispatch(apiActions.editMobile(email));
  };
  return (
    <View style={cs.mainContainer}>
      <View style={cs.textLoginContainer}>
        <Text style={cs.titleSettingPage}>Nieuw e-mail adres</Text>
        <Text style={cs.subTitleSettingPage}>
          Schrijf hieronder je nieuwe e-mail adres op.
        </Text>
        <View style={cs.settingInputWrapper}>
          <InputField
            value={email}
            // keyboardType={'numeric'}
            onSubmit={() => email.focus()}
            onChange={email => updateEmail(email)}
          />
        </View>
        <View style={{alignItems: 'center', marginTop: 20}}>
          <Text style={{color: '#31455E', fontSize: 13}}>
            Wij sturen je een e-mail om
          </Text>
          <Text style={{color: '#31455E', fontSize: 13}}>
            de verandering te bevestigen{' '}
          </Text>
        </View>
        <View style={cs.columnContainer}>
          <View>
            <Button
              onClick={() => editMail()}
              name="OPSLAAN"
              colorButton="#5467fd"
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
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(EmailSetting);
