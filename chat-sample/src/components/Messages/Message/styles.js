import { StyleSheet } from "react-native";

import { colors } from "../../../theme";

export default StyleSheet.create({
    rootView: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        backgroundColor: colors.white
    },
    messagesList: {
        width: "100%"
    },
    sectionHeaderView: {
        alignItems: "center",
        backgroundColor: colors.transparent,
        justifyContent: "center"
    },
    sectionHeaderTextView: {
        backgroundColor: colors.primary,
        borderColor: colors.gray,
        borderRadius: 10,
        borderWidth: StyleSheet.hairlineWidth,
        marginBottom: 5,
        marginTop: 5,
        padding: 5
    },
    sectionHeaderText: {
        color: colors.white,
        fontSize: 12,
        textAlign: "center"
    },
    messageView: {
        flexDirection: "row",
        marginVertical: 10,
        justifyContent: "flex-start"
    },
    myMessageView: {
        justifyContent: "flex-end",
        flexDirection: "row",
        marginVertical: 10
    },
    messageContent: {
        maxWidth: "80%"
    },
    senderCircleView: {
        alignSelf: "flex-end",
        alignItems: "center",
        borderRadius: 20,
        height: 40,
        justifyContent: "center",
        marginRight: 15,
        width: 40
    },
    senderCircleText: {
        color: colors.white,
        fontSize: 17,
        lineHeight: 20,
        textAlign: "center"
    },
    systemMessage: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        paddingVertical: 10
    },
    messageBodyView: {
        backgroundColor: colors.white,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 22,
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
        elevation: 2,
        flex: 1,
        paddingVertical: 6,
        shadowColor: colors.inputShadow,
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 0.75,
        shadowRadius: 6
    },
    myMessageBodyView: {
        backgroundColor: colors.primary,
        borderBottomLeftRadius: 22,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
        flex: 1,
        paddingVertical: 6,
        shadowColor: colors.primary,
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 0.75,
        shadowRadius: 4
    },
    messageMeta: {
        flexDirection: "row",
        paddingBottom: 5,
        paddingHorizontal: 15
    },
    mediaMessageMeta: {
        flexDirection: "row",
        paddingBottom: 5,
        paddingHorizontal: 6
    },
    messageSender: {
        color: colors.gray,
        fontSize: 13,
        fontWeight: "600",
        lineHeight: 15,
        maxWidth: "85%",
        paddingRight: 6
    },
    messageSentAt: {
        color: colors.gray,
        fontSize: 13,
        lineHeight: 15,
        paddingLeft: 6
    },
    messageForwardedText: {
        color: "#687a97",
        fontSize: 13,
        lineHeight: 15,
        paddingHorizontal: 15,
        paddingVertical: 8
    },
    messageForwardedBoldText: {
        color: "#687a97",
        fontSize: 13,
        fontWeight: "bold",
        lineHeight: 15
    },
    messageForwardedWithAttachmentText: {
        color: "#687a97",
        fontSize: 13,
        lineHeight: 15,
        paddingHorizontal: 6,
        paddingVertical: 8
    },
    myMessageForwardedText: {
        color: colors.white,
        fontSize: 13,
        lineHeight: 15,
        paddingHorizontal: 15,
        paddingVertical: 8
    },
    myMessageForwardedBoldText: {
        color: colors.white,
        fontSize: 13,
        fontWeight: "bold",
        lineHeight: 15
    },
    messageBodyText: {
        color: colors.black,
        fontSize: 15,
        lineHeight: 18,
        paddingVertical: 6,
        paddingHorizontal: 15
    },
    myMessageBodyText: {
        color: colors.white,
        fontSize: 15,
        lineHeight: 18,
        paddingVertical: 6,
        paddingHorizontal: 15
    },
    messageBodyMedia: {
        backgroundColor: colors.white,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 6,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        minHeight: 250,
        overflow: "hidden",
        shadowColor: colors.inputShadow,
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 0.75,
        shadowRadius: 6,
        width: 250
    },
    myMessageBodyMedia: {
        backgroundColor: colors.white,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        minHeight: 250,
        overflow: "hidden",
        shadowColor: colors.inputShadow,
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 0.75,
        shadowRadius: 6,
        width: 250
    },
    attachment: {
        height: 250,
        width: 250
    },
    shadowImg: {
        alignSelf: "center",
        bottom: -15,
        maxHeight: 40,
        position: "absolute",
        width: "100%",
        zIndex: -1
    },
    checkmark: {
        height: 15,
        resizeMode: "contain"
    },
    checkmarkRead: {
        height: 15,
        resizeMode: "contain",
        tintColor: colors.primary
    }
});
