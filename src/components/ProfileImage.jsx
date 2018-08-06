// @flow
import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Image } from 'cloudinary-react';
import styled from 'styled-components';

const uploadUrl = 'https://api.cloudinary.com/v1_1/hhz4dqh1x/image/upload';

const ProfileImageWrapper = styled.label.attrs({
  htmlFor: 'profile-upload',
})`
  user-select: none;
`;

const FileInput = styled.input.attrs({
  type: 'file',
  id: 'profile-upload',
  accept: 'image/*',
})`
  display: none;
`;

interface IProfileImage {
  profileImage: string;
}

class ProfileImage extends React.Component<IProfileImage, { file?: File, url?: string }> {
  state = {
    file: undefined,
    url: '',
  };

  handleOnChange = (e: SyntheticEvent<HTMLInputElement>): void => {
    this.setState({ file: e.currentTarget.files[0] }, () => {
      this.uploadImage();
    });
  };

  uploadImage = async (): Promise<void> => {
    try {
      const form = new FormData();
      if (this.state.file) {
        form.append('file', this.state.file);
      }
      form.append('upload_preset', 'profile-pic');
      form.append('public_id', '1');

      const res = await fetch(uploadUrl, {
        method: 'POST',
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: form,
      });
      this.setState({ url: res.url });
    } catch (error) {
      throw new Error(error);
    }
  };

  render() {
    return (
      <ProfileImageWrapper>
        <Image
          cloudName="hhz4dqh1x"
          publicId="profile/1.jpg"
          height="120"
          width="120"
          crop="thumb"
          radius="max"
          gravity="face"
        />
        <FileInput onChange={this.handleOnChange} />
      </ProfileImageWrapper>
    );
  }
}

export default inject(({ store: { userStore } }) => ({ profileImage: userStore.profileImage }))(
  observer(ProfileImage)
);
