import React from "react";
import { Image, TouchableNativeFeedback, UIManager, View } from "react-native";
import ImagePicker from "react-native-image-picker";

import { ATTACHMENT } from "../../images";
import { showError } from "../../NotificationService";
import styles from "./styles";

export default class AttachButton extends React.PureComponent {
    attachmentType = {
        PHOTO: "Selecionar foto",
        VIDEO: "Selecionar video",
        CAMERA_PHOTO: "Tirar foto com a camara",
        CAMERA_VIDEO: "Gravar video com a camara"
    };

    handleMenuPress = e => {
        const actions = Object.keys(this.attachmentType).map(key => this.attachmentType[key]);
        UIManager.showPopupMenu(e.target, actions, this.handleShowPopupError, this.onMenuItemPress);
    };

    handleShowPopupError = () => {
        showError("Falha ao mostrar o menu do anexo");
    };

    onMenuItemPress = (item, index) => {
        const key = Object.keys(this.attachmentType)[index];
        const type = this.attachmentType[key];
        const { onAttachment } = this.props;
        const cameraOptions = {
            noData: true,
            storageOptions: {
                path: "images",
                skipBackup: true
            }
        };
        switch (type) {
            case this.attachmentType.PHOTO:
                return ImagePicker.launchImageLibrary(
                    {
                        mediaType: "photo",
                        noData: true,
                        chooseWhichLibraryTitle: null
                    },
                    onAttachment
                );
            case this.attachmentType.VIDEO:
                return ImagePicker.launchImageLibrary(
                    {
                        mediaType: "video",
                        noData: true,
                        chooseWhichLibraryTitle: null
                    },
                    onAttachment
                );
            case this.attachmentType.CAMERA_PHOTO:
                return ImagePicker.launchCamera(
                    {
                        ...cameraOptions,
                        mediaType: "photo"
                    },
                    onAttachment
                );
            case this.attachmentType.CAMERA_VIDEO:
                return ImagePicker.launchCamera(
                    {
                        ...cameraOptions,
                        mediaType: "video"
                    },
                    onAttachment
                );
            default:
                return;
        }
    };

    render() {
        return (
            <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()} disabled={this.props.disabled} onPress={this.handleMenuPress}>
                <View style={styles.attachButton}>
                    <Image source={ATTACHMENT} style={styles.attachButtonImage} />
                </View>
            </TouchableNativeFeedback>
        );
    }
}
