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
  margin-left: 22%;
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
          <p>SNSにシェア</p>

          <ButtonWrapper style={{ backgroundColor: "rgba(3, 159, 0, 0.31)" }}>
            <LineShareButton title={title} url={url}>
              <LineIcon size={ICON_SIZE} round />
            </LineShareButton>
          </ButtonWrapper>

          <ButtonWrapper style={{ backgroundColor: "rgba(0, 123, 255, 0.53)" }}>
            <FacebookShareButton title={title} url={url}>
              <FacebookIcon size={ICON_SIZE} round />
            </FacebookShareButton>
          </ButtonWrapper>

          <ButtonWrapper style={{ backgroundColor: "rgba(0, 123, 255, 0.28)" }}>
            <TwitterShareButton title={title} url={url}>
              <TwitterIcon size={ICON_SIZE} round />
            </TwitterShareButton>
          </ButtonWrapper>

          <ButtonWrapper style={{ backgroundColor: "rgba(8, 12, 27, 0.36)" }}>
            <ThreadsShareButton title={title} url={url}>
              <ThreadsIcon size={ICON_SIZE} round />
            </ThreadsShareButton>
          </ButtonWrapper>
        </Wrapper>
      </div>
    </>
  );
};

export default ShareButtonList;
