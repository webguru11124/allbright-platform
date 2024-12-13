import { Image } from "expo-image";
import React, { FunctionComponent } from "react";

import FlipCard from "@/components/FlipCard";
import { AllBrightVector, Location } from "@/components/Icons/index";
import QRCodeGenerator from "@/components/QRCodeGenerator";
import Row from "@/components/Row";
import Space from "@/components/Space";
import { CS, H4 } from "@/components/Typography";
import config from "@/config";
import { Header, ImageWrap, Info, InfoSection, Main, TapMeTriangle, TapMeWrap } from "@/features/BusinessCard/partials";
import { BusinessCard as BusinessCardType } from "@/types/businessCard/BusinessCard";

type Props = {
  WIDTH: number;
  HEIGHT: number;
  card: BusinessCardType;
  textColor: string;
  role: string;
  userInterests: any;
  goals: string;
};

const BusinessCard: FunctionComponent<Props> = ({ WIDTH, HEIGHT, card, textColor, role, userInterests, goals }) => {
  const Front = () => (
    <Main style={{ backgroundColor: card?.businessCardColour }}>
      <Header>
        <Row>
          <AllBrightVector
            color={textColor}
            width={20}
            height={20}
          />
          <CS style={{ fontWeight: 600, letterSpacing: 2, color: textColor }}>BUSINESS CARD</CS>
        </Row>
        <H4>{card.displayName}</H4>
        {card.location && (
          <Row>
            <Location color={textColor} />
            <CS style={{ fontWeight: 500, letterSpacing: 2, color: textColor }}>{card.location}</CS>
          </Row>
        )}
      </Header>
      {card.imageSrc && card.displayPhoto && (
        <ImageWrap>
          <Image
            style={{ height: "100%", width: "100%" }}
            source={card.imageSrc}
            contentFit="cover"
          />
        </ImageWrap>
      )}
      <>
        <TapMeWrap style={{}}>
          <CS style={{ fontWeight: 500, color: card.businessCardColour }}>tap me</CS>
        </TapMeWrap>
        <TapMeTriangle style={{ borderBottomColor: textColor }} />
      </>
      <Info>
        {role.length > 3 ? (
          <InfoSection>
            <CS style={{ fontWeight: 600, color: textColor, marginBottom: 5 }}>Role</CS>
            <CS style={{ fontWeight: 500, color: textColor }}>{role}</CS>
          </InfoSection>
        ) : (
          userInterests && (
            <InfoSection>
              <CS style={{ fontWeight: 600, color: textColor, marginBottom: 5 }}>Interests</CS>
              <CS style={{ fontWeight: 500, color: textColor }}>{userInterests}</CS>
            </InfoSection>
          )
        )}
        {goals ? (
          <InfoSection>
            <CS style={{ fontWeight: 600, color: textColor, marginBottom: 5 }}>Seeking</CS>
            <CS style={{ fontWeight: 500, color: textColor }}>{goals}</CS>
          </InfoSection>
        ) : (
          <Space height={60} />
        )}
      </Info>
    </Main>
  );

  const Back = () => (
    <QRCodeGenerator
      width={WIDTH}
      height={HEIGHT}
      value={`${config.API_URL}/member/${card.id}?qrcode=true`}
    />
  );

  return (
    <FlipCard
      frontComponent={<Front />}
      backComponent={<Back />}
      width={WIDTH}
      height={HEIGHT}
    />
  );
};

export default BusinessCard;
