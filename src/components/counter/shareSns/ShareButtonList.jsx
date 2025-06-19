import {
  FacebookIcon,
  FacebookShareButton,
  HatenaIcon,
  HatenaShareButton,
  LineIcon,
  LineShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import styled from "@emotion/styled";

//ボタンのサイズは変数格納実施予定
const Wrapper = styled.div`
  display: flex;
  padding-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  padding-right: 10px;
`;

const ShareButtonList = ({ title, url = window.location.href }) => {
  return (
    <Wrapper>
      <ButtonWrapper>
        <FacebookShareButton url={url}>
          <FacebookIcon size={35} round />
        </FacebookShareButton>
      </ButtonWrapper>

      <ButtonWrapper>
        <LineShareButton url={url}>
          <LineIcon size={35} round />
        </LineShareButton>
      </ButtonWrapper>

      <ButtonWrapper>
        <TwitterShareButton title={title} url={url}>
          <TwitterIcon size={35} round />
        </TwitterShareButton>
      </ButtonWrapper>

      <ButtonWrapper>
        <HatenaShareButton url={url}>
          <HatenaIcon size={35} round />
        </HatenaShareButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default ShareButtonList;
