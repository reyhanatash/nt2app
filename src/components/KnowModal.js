/* eslint-disable react-native/no-inline-styles */
import React, {Component, useEffect, useState} from 'react';
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert,
  Image,
} from 'react-native';
import {ModalButton, InputField} from '../components/widgets';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {commonStyle as cs} from './../styles/common/styles';
import {Row, Col, Picker} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {apiActions} from './../actions';
import SimpleCrypto from 'simple-crypto-js';

const KnowModal = props => {
  // const [selected, changeSelected] = useState('key3');
  const [bsnNumber, changeBsnNumber] = useState('');
  const [toggleModal, updateToggleModal] = useState(false);
  // const SendMessage = () => {
  //   updateToggleModal(true);
  // };
  const data = props.forgotPass;
  let pass2;

  const forgotPass = () => {
    const {dispatch} = props;
    dispatch(apiActions.forgotPassword(bsnNumber));
    if (data && data.length > 0) {
      const pass = data[0].Fld_Pass2;
      var _secretKey = 'apple2020Nt2';
      var simpleCrypto = new SimpleCrypto(_secretKey);
      pass2 = simpleCrypto.decrypt(pass);
      updateToggleModal(true);
    } else {
      alert('BSN Number does not exist');
    }
  };
  // TODO:
  // useEffect(() => {
  //   console.log(props.forgotPass);
  // });
  return (
    <>
      <Modal
        animationType="slide"
        transparent={false}
        visible={props.visible}
        toggle={props.toggle}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={cs.modalCustomize}>
          <Text style={cs.titleModal}>Inloggen</Text>

          <View style={cs.modalBox}>
            <View style={cs.modalContainer}>
              <TouchableHighlight onPress={props.toggle} style={cs.closeIcon}>
                <Icon
                  name="close"
                  color="white"
                  size={14}
                  style={{marginLeft: 6, marginTop: 4}}
                />
              </TouchableHighlight>
              <View style={cs.textLoginContainer}>
                <Text style={cs.textModalLogin}>Zoek je school en stuur</Text>
                <Text style={cs.textModalLogin}>een bericht.</Text>
              </View>
              <View style={cs.forgotContainer}>
                <InputField
                  placeholder={'BSN nummer'}
                  value={bsnNumber}
                  onSubmit={() => bsnNumber.focus()}
                  onChange={password => changeBsnNumber(password)}
                />
              </View>
              {/* <View style={cs.pickerContainer}>
                <Picker
                  placeholder="Selecteer uw taalschool"
                  style={cs.knowPickerWrapper}
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  selectedValue={selected}
                  onValueChange={changeSelected}>
                  <Picker.Item
                    color="#31455E"
                    label="Delken & Boot"
                    value="key0"
                  />
                  <Picker.Item
                    color="#31455E"
                    label="De taalkans"
                    value="key1"
                  />
                  <Picker.Item
                    color="#31455E"
                    label="Taalschool NU"
                    value="key2"
                  />
                  <Picker.Item
                    color="#31455E"
                    label="De beste school"
                    value="key3"
                  />
                  <Picker.Item
                    color="#31455E"
                    label="Mumbara School"
                    value="key4"
                  />
                </Picker>
                <View style={cs.nextModalIconBtn}>
                  <Icon
                    name="chevron-down"
                    color="white"
                    size={12}
                    style={{marginLeft: 5, marginTop: 5}}
                  />
                </View>
              </View> */}

              <View style={cs.textLoginContainer}>
                <Text style={cs.textModalLogin}>Heb je je taalschool</Text>
                <Text style={cs.textModalLogin}>gevonden. Stuur dan</Text>
                <Text style={cs.textModalLogin}>hieronder een bericht</Text>
              </View>
              {/* <View style={{marginTop: 40}}>
                <TouchableOpacity style={{marginTop: 40, marginBottom: 30}}>
                  <ModalButton
                    colorText="#31455E"
                    name="BERICHT VERSTUREN"
                    onClick={() => SendMessage()}
                  />
                  <View style={cs.nextModalIconWrapper}>
                    <Icon
                      name="chevron-right"
                      color="white"
                      size={12}
                      style={{marginLeft: 8, marginTop: 5}}
                    />
                  </View>
                </TouchableOpacity>
              </View> */}
              <View style={{marginTop: 40}}>
                <TouchableOpacity style={{marginTop: 40, marginBottom: 30}}>
                  <ModalButton
                    colorText="#31455E"
                    name="LAAT ZIEN"
                    onClick={() => forgotPass()}
                  />
                  <View style={cs.nextModalIconWrapper}>
                    <Icon
                      name="chevron-right"
                      color="white"
                      size={12}
                      style={{marginLeft: 8, marginTop: 5}}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Row>
            <View style={cs.loginModalFooterWrapper}>
              <Col style={cs.textLogoWrapper}>
                <Text style={cs.textLogo}>Een project van </Text>
              </Col>
              <Col style={cs.imageLogoWrapper}>
                <Image
                  source={require('./../assets/images/common/NT2student_logo.png')}
                />
              </Col>
            </View>
          </Row>
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent={false}
        visible={toggleModal}
        // toggle={toggleModal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={cs.modalCustomize}>
          <Text style={cs.titleModal}>Inloggen</Text>

          <View style={cs.loadModalBox}>
            <View style={cs.modalContainer}>
              <TouchableHighlight
                onPress={() => updateToggleModal(false)}
                style={cs.closeIcon}>
                <Icon
                  name="close"
                  color="white"
                  size={14}
                  style={{marginLeft: 6, marginTop: 4}}
                />
              </TouchableHighlight>
              <View style={cs.textLoginModalContainer}>
                <Text style={cs.textInfoModalLogin}>gebruikersnaam</Text>
                {data && data.length > 0 ? (
                  <Text style={cs.subtextInfoModalLogin}>
                    {data[0].FLD_USERNAME}
                  </Text>
                ) : null}
              </View>
              <View style={cs.textLoginModalContainer}>
                <Text style={cs.textInfoModalLogin}>wachtwoord</Text>
                {data && data.length > 0 ? (
                  <Text style={cs.subtextInfoModalLogin}>{pass2}</Text>
                ) : null}
              </View>
              {/* <View style={{marginTop: 40, marginBottom: 30}}>
                <ModalButton name="Schrijf hier je naam" colorText="#D4D4D4" />
              </View> */}
            </View>
          </View>
          <Row>
            <View style={cs.loginModalFooterWrapper}>
              <Col style={cs.textLogoWrapper}>
                <Text style={cs.textLogo}>Een project van </Text>
              </Col>
              <Col style={cs.imageLogoWrapper}>
                <Image
                  source={require('./../assets/images/common/NT2student_logo.png')}
                />
              </Col>
            </View>
          </Row>
        </View>
      </Modal>
    </>
    // </View>
  );
};

const mapStateToProps = state => {
  return {
    forgotPass: state.api.forgotPass,
  };
};

export default connect(mapStateToProps)(KnowModal);
