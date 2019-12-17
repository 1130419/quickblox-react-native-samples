import React from "react";
import { ActionSheetIOS, Image, TouchableOpacity } from "react-native";
import ImagePicker from "react-native-image-picker";

import { ATTACHMENT } from "../../images";
import styles from "./styles";

export default class AttachButton extends React.PureComponent {
    attachmentType = {
        PHOTO: "Selecionar foto",
        VIDEO: "Selecionar video",
        CAMERA_PHOTO: "Tirar foto com a camara",
        CAMERA_VIDEO: "Gravar video com a camara",
        CANCEL: "Cancelar"
    };

    handleMenuPress = e => {
        const options = Object.keys(this.attachmentType).map(key => this.attachmentType[key]);
        ActionSheetIOS.showActionSheetWithOptions(
            {
                anchor: e.target,
                cancelButtonIndex: options.indexOf(this.attachmentType.CANCEL),
                options,
                title: "Escolher tipo de anexo"
            },
            this.onMenuItemPress
        );
    };

    onMenuItemPress = index => {
        const key = Object.keys(this.attachmentType)[index];
        const type = this.attachmentType[key];
        const { onAttachment } = this.props;
        const cameraOptions = {
            noData: true,
            storageOptions: { skipBackup: true }
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
            <TouchableOpacity disabled={this.props.disabled} onPress={this.handleMenuPress} style={styles.attachButton}>
                <Image source={ATTACHMENT} style={styles.attachButtonImage} />
            </TouchableOpacity>
        );
    }
}
