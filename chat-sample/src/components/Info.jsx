import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-navigation";

import { colors } from "../theme";
import { LOGO } from "../images";
import json from "../../package.json";
import QBjson from "quickblox-react-native-sdk/package.json";

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: colors.primary,
        flex: 1
    },
    scrollView: {
        backgroundColor: colors.whiteBackground,
        flex: 1,
        width: "100%"
    },
    scrollViewContent: {
        paddingTop: 20
    },
    formControlView: {
        paddingHorizontal: 20,
        paddingBottom: 20,
        width: "100%"
    },
    fieldText: {
        color: colors.black,
        fontSize: 17,
        lineHeight: 20
    },
    logoView: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 15,
        width: "100%"
    },
    logoImage: {
        height: 27,
        width: 137
    }
});

const Label = ({ children }) => <Text style={{ color: colors.gray, fontSize: 13, paddingBottom: 7 }}>{children}</Text>;

const Field = ({ value }) => (
    <Text numberOfLines={1} style={styles.fieldText}>
        {value}
    </Text>
);

export default class Info extends React.Component {
    static navigationOptions = { title: "Informações" };

    componentDidMount() {
        this.props.getSdkInfo();
    }

    render() {
        const { appId = " ", authKey = " ", authSecret = " ", accountKey = " ", apiEndpoint = " ", chatEndpoint = " ", sdkVersion = " " } = this.props.info;
        return (
            <SafeAreaView style={styles.safeArea}>
                <ScrollView contentContainerStyle={styles.scrollViewContent} style={styles.scrollView}>
                    <View style={styles.logoView}>
                        <Image style={styles.logoImage} source={LOGO} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
