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
const iconSize = 30;

const ShareButtonList = ({ title, url = window.location.href }) => {
  return (
    <>
      <div className="snsButton">
        <Wrapper>
          <ButtonWrapper>
            <FacebookShareButton url={url}>
              <FacebookIcon size={iconSize} round />
            </FacebookShareButton>
          </ButtonWrapper>

          <ButtonWrapper>
            <TwitterShareButton title={title} url={url}>
              <TwitterIcon size={iconSize} round />
            </TwitterShareButton>
          </ButtonWrapper>

          <ButtonWrapper>
            <ThreadsShareButton url={url}>
              <ThreadsIcon size={iconSize} round />
            </ThreadsShareButton>
          </ButtonWrapper>

          <ButtonWrapper>
            <LineShareButton url={url}>
              <LineIcon size={iconSize} round />
            </LineShareButton>
          </ButtonWrapper>
        </Wrapper>
      </div>
    </>
  );
};

export default ShareButtonList;
