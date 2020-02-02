/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {commonStyle as cs} from '../../styles/common/styles';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {apiActions} from '../../actions';
import {Row, Col} from 'native-base';
import {InputField, Button, Header} from '../../components/widgets';
import Icon from 'react-native-vector-icons/FontAwesome';
import KnowModal from '../../components/KnowModal';

class StudentSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      username: '',
      password: '',
      icon: 'eye-slash',
      passwordShow: true,
    };
    this.signIn = this.signIn.bind(this);
    // this.toggleSwitch = this.toggleSwitch.bind(this);
  }

  _changeIcon() {
    this.setState(prevState => ({
      icon: prevState.icon === 'eye' ? 'eye-slash' : 'eye',
      passwordShow: !prevState.passwordShow,
    }));
  }

  signIn() {
    this.setState({
      username: this.state.username,
      password: this.state.password,
      // showPassword: true,
    });
    if (this.state.username && this.state.password) {
      this.props.dispatch(
        apiActions.login(this.state.username, this.state.password, 2),
      );
    }
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  };

  render() {
    let {
      username,
      password,
      rememberMe,
      emailActive,
      passwordActive,
    } = this.state;
    const {icon} = this.props;
    return (
      <View style={cs.mainContainer}>
        <View style={cs.columnContainer}>
          <Header name={'Inloggen'} />
        </View>

        <View style={cs.textLoginContainer}>
          <Text style={cs.textLogin}>Vul hier uw</Text>
          <Text style={cs.textLogin}>logingegevens in.</Text>
        </View>

        <View style={cs.inputsWrapper}>
          <InputField
            // heading="Email address"
            onfocus={() => {
              this.setState({emailActive: true, passwordActive: false});
            }}
            value={username}
            active={emailActive}
            keyboard={'email-address'}
            reference={component => (this.email = component)}
            placeholder="Uw e-mailadres"
            onSubmit={() => this.password.focus()}
            onChange={username => this.setState({username})}
          />
          <View style={cs.borderBottom} />
          <Icon active name={icon} />
          <InputField
            // heading="Password"
            onfocus={() => {
              this.setState({passwordActive: true, emailActive: false});
            }}
            value={password}
            active={passwordActive}
            secure={this.state.passwordShow}
            placeholder="Uw wachtwoord"
            reference={component => (this.password = component)}
            onSubmit={() => {
              this.setState({passwordActive: false});
            }}
            onChange={password => this.setState({password})}
          />
          <Icon
            color="#aaa"
            size={28}
            style={cs.passEye}
            name={this.state.icon}
            onPress={() => this._changeIcon()}
          />
          {/* <TouchableOpacity>
            <Image
              // onPress={this.toggleSwitch}
              style={cs.passEye}
              source={require('./../../assets/images/common/eye.png')}
            />
          </TouchableOpacity> */}
        </View>

        <View style={cs.columnContainer}>
          <View style={cs.rowContainer}>
            <CheckBox
              value={rememberMe}
              onValueChange={value => {
                this.setState({rememberMe: value});
              }}
              tintColors={{true: '#5467fd'}}
              style={cs.checkboxCustom}
            />
            <Text style={cs.checkEmailText}>
              E-mailadres onthouden op deze computer
            </Text>
          </View>
          <View style={{marginTop: 40}}>
            <Button
              colorButton="#5467fd"
              name="INLOGGEN"
              onClick={() => this.signIn()}
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
          <View>
            <TouchableOpacity onPress={this.toggleModal}>
              <View style={cs.WideButton}>
                <Text style={cs.wideButtonText}>Weet je het niet?</Text>
                <Text style={cs.wideButtonText}>KLIK HIER</Text>
                <Text style={cs.wideButtonSubText}>
                  om het aan je school te vragen
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <KnowModal
            navigation={this.props.navigation}
            visible={this.state.modal}
            toggle={this.toggle}
          />
        </View>
        <Row>
          <View style={cs.loginFooterWrapper}>
            <Col style={cs.textLogoWrapper}>
              <Text style={cs.textLogo}>Een project van </Text>
            </Col>
            <Col style={cs.imageLogoWrapper}>
              <Image
                source={require('./../../assets/images/common/NT2student_logo.png')}
              />
            </Col>
          </View>
        </Row>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(StudentSignIn);
