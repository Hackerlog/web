import * as React from 'react';
import styled from 'styled-components';
import * as sha1 from 'sha1';
import { Spin, Icon } from 'antd';

import logger from '../services/logger';

const spinner = <Icon type="loading" style={{ fontSize: 24 }} spin />;

const Loader = styled(Spin)`
  max-width: 120px;
  max-height: 120px;
`;

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

  &:hover {
    cursor: pointer;
  }
`;

type Params = {|
  public_id: string,
  timestamp: number,
  upload_preset: string,
|};

export default class ProfileImage extends React.Component<
  { id?: string },
  { file?: File, url?: string, isLoading: boolean }
> {
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

  handleOnChange = (e: SyntheticEvent<HTMLInputElement>): void => {
    this.setState({ file: e.currentTarget.files[0], isLoading: true }, () => {
      this.uploadImage();
    });
  };

  createHash = (params: Params): string => {
    const query = `${new URLSearchParams(params).toString()}${
      process.env.REACT_APP_CLOUDINARY_API_SECRET
    }`;
    return sha1(query);
  };

  uploadImage = async (): Promise<void> => {
    try {
      const timestamp = +new Date();
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
      form.append('api_key', process.env.REACT_APP_CLOUDINARY_API_KEY);
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
        <Loader spinning={this.state.isLoading} indicator={spinner}>
          <StyledImage src={this.state.url} />
        </Loader>
        <FileInput onChange={this.handleOnChange} />
      </ProfileImageWrapper>
    );
  }
}
