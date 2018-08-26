import React from 'react';
import styled from 'styled-components';
import sha1 from 'sha1';

import logger from 'Services/logger';
import { Loading } from '.';

// const spinner = <Icon type="loading" style={{ fontSize: 24 }} spin />;

// TODO: Need another spinner here
// const Loader = styled(Spin)`
//   max-width: 120px;
//   max-height: 120px;
// `;

const ProfileImageWrapper = styled.label.attrs({
  htmlFor: 'profile-upload',
})`
  user-select: none;
  display: flex;
  height: 120px;
  width: 120px;
`;

const FileInput = styled.input.attrs({
  type: 'file',
  id: 'profile-upload',
  accept: 'image/*',
})`
  display: none;
`;

const StyledImage = styled.img`
  max-width: 200px;
  height: 100%;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`;

export default class ProfileImage extends React.Component {
  static uploadUrl = 'https://api.cloudinary.com/v1_1/hhz4dqh1x/image/upload';

  constructor(props) {
    super(props);
    this.state = {
      file: undefined,
      url: `http://res.cloudinary.com/hhz4dqh1x/image/upload/c_thumb,g_face,h_120,r_max,w_120,d_avatar.png/profile/${
        props.id
      }.png`,
      isLoading: false,
    };
  }

  get apiSecret() {
    return process.env.REACT_APP_CLOUDINARY_API_SECRET || '';
  }

  get apiKey() {
    return process.env.REACT_APP_CLOUDINARY_API_KEY || '';
  }

  handleOnChange = e => {
    this.setState({ file: e.currentTarget.files[0], isLoading: true }, () => {
      this.uploadImage();
    });
  };

  createHash = params => {
    const query = `${new URLSearchParams(params).toString()}${this.apiSecret}`;
    return sha1(query);
  };

  uploadImage = async () => {
    try {
      const timestamp = (+new Date()).toString();
      const hash = this.createHash({
        public_id: '123',
        timestamp,
        upload_preset: 'profile',
      });
      const form = new FormData();
      if (this.state.file) {
        form.append('file', this.state.file);
      }
      form.append('upload_preset', 'profile');
      form.append('public_id', '123');
      form.append('api_key', this.apiKey);
      form.append('signature', hash);
      form.append('timestamp', timestamp);

      const res = await fetch(ProfileImage.uploadUrl, {
        method: 'POST',
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: form,
      });
      const j = await res.json();
      this.setState({ url: j.secure_url, isLoading: false });
    } catch (error) {
      this.setState({ isLoading: false });
      logger.error('Error uploading profile image', error);
    }
  };

  render() {
    return (
      <ProfileImageWrapper>
        <StyledImage src={this.state.url} />
        <Loading isLoading={this.state.isLoading} />
        <FileInput onChange={this.handleOnChange} />
      </ProfileImageWrapper>
    );
  }
}
