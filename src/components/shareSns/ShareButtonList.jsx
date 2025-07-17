import './ShareButtonList.css'
import {
  FacebookIcon,
  FacebookShareButton,
  LineIcon,
  LineShareButton,
  TwitterIcon,
  TwitterShareButton,
  ThreadsShareButton,
  ThreadsIcon,
} from "react-share";
import styled from "@emotion/styled"; //リアクトシェアアイコン、ボタンインポート

//横並びアイコン下側のCSS定義
const Wrapper = styled.div`
  display: flex;
  padding-bottom: 1px;
`;

//アイコンの間隔定数
const ButtonWrapper = styled.div`
  padding-right: 9.5px;
`;

//SNSのアイコンサイズ定数
const ICON_SIZE = 30;

const ShareButtonList = ({ title, url = window.location.href }) => {
  return (
    <>
      <div className="snsButton">
        <Wrapper>
          <ButtonWrapper>
            <FacebookShareButton title={title} url={url}>
              <FacebookIcon size={ICON_SIZE} round />
            </FacebookShareButton>
          </ButtonWrapper>

          <ButtonWrapper>
            <TwitterShareButton title={title} url={url}>
              <TwitterIcon size={ICON_SIZE} round />
            </TwitterShareButton>
          </ButtonWrapper>

          <ButtonWrapper>
            <ThreadsShareButton title={title} url={url}>
              <ThreadsIcon size={ICON_SIZE} round />
            </ThreadsShareButton>
          </ButtonWrapper>

          <ButtonWrapper>
            <LineShareButton title={title} url={url}>
              <LineIcon size={ICON_SIZE} round />
            </LineShareButton>
          </ButtonWrapper>
        </Wrapper>
      </div>
    </>
  );
};

export default ShareButtonList;
