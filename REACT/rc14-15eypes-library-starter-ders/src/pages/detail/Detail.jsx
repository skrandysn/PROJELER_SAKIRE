import React from "react";
import {
  Description,
  DetailContainer,
  DetailImg,
  DetailTitle,
  InfoPart,
} from "./Detail.style";
import { useLocation } from "react-router-dom";
import defaultImg from "../../assets/book.jpg";

const Detail = () => {
  const { state } = useLocation();
  return (
    <DetailContainer>
      <DetailTitle>{state.volumeInfo.title}</DetailTitle>
      <DetailImg>
        <img
          src={state.volumeInfo.imageLinks?.smallThumbnail || defaultImg}
          alt=""
        />
      </DetailImg>
      <Description>{state.volumeInfo.description}</Description>
      <InfoPart>
        {state.volumeInfo.publishedDate}{" "}
        {state.volumeInfo.publisher && (
          <span>/ {state.volumeInfo.publisher} </span>
        )}
      </InfoPart>
    </DetailContainer>
  );
};

export default Detail;
