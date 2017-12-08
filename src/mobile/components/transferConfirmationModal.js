import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import OnboardingButtons from '../components/onboardingButtons.js';

import { width, height } from '../util/dimensions';

class TransferConfirmationModal extends React.Component {
    constructor(props) {
        super(props);
    }

    onSendPress() {
        this.props.hideModal(() => {
            this.props.sendTransfer();
            this.props.clearOnSend();
        });
    }

    render() {
        const { t } = this.props;
        var transferContents = null;
        if (this.props.amount === 0) {
            transferContents = <Text style={styles.iotaText}>a message</Text>;
        } else {
            transferContents = (
                <Text style={styles.iotaText}>
                    {' '}
                    {this.props.amount} {this.props.denomination}{' '}
                </Text>
            );
        }
        return (
            <ImageBackground
                source={require('iota-wallet-shared-modules/images/bg-blue.png')}
                style={{ width: width / 1.15, alignItems: 'center' }}
            >
                <View style={styles.modalContent}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            <Text style={styles.regularText}>You are about to send </Text>
                            {transferContents}
                            <Text style={styles.middleText}> to the address:</Text>
                        </Text>
                        <Text numberOfLines={3} style={styles.addressText}>
                            {this.props.address}
                        </Text>
                    </View>
                    <OnboardingButtons
                        onLeftButtonPress={() => this.props.hideModal()}
                        onRightButtonPress={() => this.onSendPress()}
                        leftText={'CANCEL'}
                        rightText={'SEND'}
                    />
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    modalContent: {
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.8)',
        paddingVertical: height / 30,
        width: width / 1.15,
        paddingHorizontal: width / 20,
    },
    textContainer: {
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        backgroundColor: 'transparent',
        fontFamily: 'Lato-Light',
        fontSize: width / 31.8,
    },
    regularText: {
        color: 'white',
        backgroundColor: 'transparent',
        fontFamily: 'Lato-Light',
        fontSize: width / 31.8,
    },
    middleText: {
        color: 'white',
        backgroundColor: 'transparent',
        fontFamily: 'Lato-Light',
        fontSize: width / 31.8,
        paddingBottom: height / 80,
    },
    addressText: {
        color: 'white',
        backgroundColor: 'transparent',
        fontFamily: 'Lato-Regular',
        fontSize: width / 31.8,
        marginBottom: height / 30,
        marginTop: height / 70,
    },
    iotaText: {
        color: 'white',
        backgroundColor: 'transparent',
        fontFamily: 'Lato-Regular',
        fontSize: width / 27.6,
    },
});

export default TransferConfirmationModal;
