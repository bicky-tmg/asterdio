import styled from "styled-components";
import { DivContainer } from "../styles/container";

const HeroSectionWrapper = styled.section`
  position: relative;
  overflow: hidden;
  padding-top: 4rem;
  padding-bottom: 4rem;
  margin-top: 0;
  margin-bottom: 0;

  @media (min-width: 1024px) {
    margin-top: 3.5rem;
    margin-bottom: 2.5rem;
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
`;

const HeroBgImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  opacity: 1;
`;

const HeroTextContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  max-width: 64rem;
  flex-direction: column;
  align-items: center;
`;

const HeroTextSubContainer = styled.div`
  z-index: 10;
  dispaly: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
`;

const HeroTitle = styled.h1`
  font-size: 2rem;
  line-height: 2.25rem;
  margin-bottom: 1.5rem;
  text-wrap: pretty;
  font-weight: 700;

  @media (min-width: 1024px) {
    font-size: 3rem;
    line-height: 1;
  }
`;

const HeroDescription = styled.p`
  @media (min-width: 1024px) {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;

export default function Hero() {
  return (
    <HeroSectionWrapper>
      <DivContainer>
        <HeroBgImage>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 1125">
            <mask id="b" width={2000} height={1125} x={0} y={0}>
              <path fill="url(#a)" d="M0 0h2000v1125H0z" />
            </mask>
            <path fill="#fff" d="M0 0h2000v1125H0z" />
            <g
              stroke="#eee"
              strokeWidth={0.6}
              mask="url(#b)"
              style={{
                transformOrigin: "center center",
              }}
            >
              <path
                fill="none"
                d="M0 0h111.111v111.111H0zm111.111 0h111.111v111.111H111.111zm111.111 0h111.111v111.111H222.222zm111.111 0h111.111v111.111H333.333z"
              />
              <path fill="#eeeeeeaf" d="M444.444 0h111.111v111.111H444.444z" />
              <path
                fill="none"
                d="M555.556 0h111.111v111.111H555.556zm111.111 0h111.111v111.111H666.667zm111.111 0h111.111v111.111H777.778zm111.111 0H1000v111.111H888.889zM1000 0h111.111v111.111H1000zm111.111 0h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1222.222 0h111.111v111.111h-111.111zm111.111 0h111.111v111.111h-111.111z"
              />
              <path fill="none" d="M1444.444 0h111.111v111.111h-111.111z" />
              <path
                fill="#eeeeee0b"
                d="M1555.556 0h111.111v111.111h-111.111z"
              />
              <path fill="none" d="M1666.667 0h111.111v111.111h-111.111z" />
              <path
                fill="#eeeeeed1"
                d="M1777.778 0h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1888.889 0H2000v111.111h-111.111zM0 111.111h111.111v111.111H0z"
              />
              <path
                fill="#eeeeee1c"
                d="M111.111 111.111h111.111v111.111H111.111z"
              />
              <path fill="none" d="M222.222 111.111h111.111v111.111H222.222z" />
              <path
                fill="#eeeeee2b"
                d="M333.333 111.111h111.111v111.111H333.333z"
              />
              <path
                fill="#eeeeeec2"
                d="M444.444 111.111h111.111v111.111H444.444z"
              />
              <path fill="none" d="M555.556 111.111h111.111v111.111H555.556z" />
              <path
                fill="#eeeeeeef"
                d="M666.667 111.111h111.111v111.111H666.667z"
              />
              <path
                fill="none"
                d="M777.778 111.111h111.111v111.111H777.778zm111.111 0H1000v111.111H888.889z"
              />
              <path fill="#eeeeee77" d="M1000 111.111h111.111v111.111H1000z" />
              <path
                fill="#eeeeeeea"
                d="M1111.111 111.111h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1222.222 111.111h111.111v111.111h-111.111zm111.111 0h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1444.444 111.111h111.111v111.111h-111.111zm111.112 0h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1666.667 111.111h111.111v111.111h-111.111zm111.111 0h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1888.889 111.111H2000v111.111h-111.111zM0 222.222h111.111v111.111H0zm111.111 0h111.111v111.111H111.111z"
              />
              <path
                fill="#eeeeeed1"
                d="M222.222 222.222h111.111v111.111H222.222z"
              />
              <path
                fill="none"
                d="M333.333 222.222h111.111v111.111H333.333zm111.111 0h111.111v111.111H444.444zm111.112 0h111.111v111.111H555.556zm111.111 0h111.111v111.111H666.667z"
              />
              <path
                fill="#eeeeee04"
                d="M777.778 222.222h111.111v111.111H777.778z"
              />
              <path
                fill="#eeeeee1f"
                d="M888.889 222.222H1000v111.111H888.889z"
              />
              <path fill="none" d="M1000 222.222h111.111v111.111H1000z" />
              <path
                fill="#eeeeeeb1"
                d="M1111.111 222.222h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1222.222 222.222h111.111v111.111h-111.111zm111.111 0h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1444.444 222.222h111.111v111.111h-111.111zm111.112 0h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1666.667 222.222h111.111v111.111h-111.111zm111.111 0h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeee47"
                d="M1888.889 222.222H2000v111.111h-111.111z"
              />
              <path fill="#eeeeeed0" d="M0 333.333h111.111v111.111H0z" />
              <path
                fill="#eeeeeea6"
                d="M111.111 333.333h111.111v111.111H111.111z"
              />
              <path fill="none" d="M222.222 333.333h111.111v111.111H222.222z" />
              <path
                fill="#eeeeeebd"
                d="M333.333 333.333h111.111v111.111H333.333z"
              />
              <path fill="none" d="M444.444 333.333h111.111v111.111H444.444z" />
              <path
                fill="#eeeeee72"
                d="M555.556 333.333h111.111v111.111H555.556z"
              />
              <path
                fill="none"
                d="M666.667 333.333h111.111v111.111H666.667zm111.111 0h111.111v111.111H777.778zm111.111 0H1000v111.111H888.889z"
              />
              <path fill="#eeeeee58" d="M1000 333.333h111.111v111.111H1000z" />
              <path
                fill="none"
                d="M1111.111 333.333h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1222.222 333.333h111.111v111.111h-111.111zm111.111 0h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1444.444 333.333h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeeed7"
                d="M1555.556 333.333h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeee57"
                d="M1666.667 333.333h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeee75"
                d="M1777.778 333.333h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeeebf"
                d="M1888.889 333.333H2000v111.111h-111.111z"
              />
              <path fill="#eeeeee16" d="M0 444.444h111.111v111.111H0z" />
              <path
                fill="none"
                d="M111.111 444.444h111.111v111.111H111.111zm111.111 0h111.111v111.111H222.222zm111.111 0h111.111v111.111H333.333zm111.111 0h111.111v111.111H444.444zm111.112 0h111.111v111.111H555.556zm111.111 0h111.111v111.111H666.667zm111.111 0h111.111v111.111H777.778z"
              />
              <path
                fill="#eeeeee5b"
                d="M888.889 444.444H1000v111.111H888.889z"
              />
              <path
                fill="none"
                d="M1000 444.444h111.111v111.111H1000zm111.111 0h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeeefb"
                d="M1222.222 444.444h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1333.333 444.444h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1444.444 444.444h111.111v111.111h-111.111zm111.112 0h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1666.667 444.444h111.111v111.111h-111.111zm111.111 0h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1888.889 444.444H2000v111.111h-111.111zM0 555.556h111.111v111.111H0z"
              />
              <path
                fill="#eeeeee9e"
                d="M111.111 555.556h111.111v111.111H111.111z"
              />
              <path
                fill="#eeeeeef4"
                d="M222.222 555.556h111.111v111.111H222.222z"
              />
              <path
                fill="none"
                d="M333.333 555.556h111.111v111.111H333.333zm111.111 0h111.111v111.111H444.444zm111.112 0h111.111v111.111H555.556zm111.111 0h111.111v111.111H666.667z"
              />
              <path
                fill="#eeeeee87"
                d="M777.778 555.556h111.111v111.111H777.778z"
              />
              <path
                fill="none"
                d="M888.889 555.556H1000v111.111H888.889zm111.111 0h111.111v111.111H1000zm111.111 0h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1222.222 555.556h111.111v111.111h-111.111zm111.111 0h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeeed4"
                d="M1444.444 555.556h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1555.556 555.556h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeeeec"
                d="M1666.667 555.556h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1777.778 555.556h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeeece"
                d="M1888.889 555.556H2000v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M0 666.667h111.111v111.111H0zm111.111 0h111.111v111.111H111.111zm111.111 0h111.111v111.111H222.222z"
              />
              <path
                fill="#eeeeeebd"
                d="M333.333 666.667h111.111v111.111H333.333z"
              />
              <path
                fill="#eeeeeec7"
                d="M444.444 666.667h111.111v111.111H444.444z"
              />
              <path
                fill="#eeeeee2a"
                d="M555.556 666.667h111.111v111.111H555.556z"
              />
              <path
                fill="#eeeeee24"
                d="M666.667 666.667h111.111v111.111H666.667z"
              />
              <path
                fill="#eeeeeedd"
                d="M777.778 666.667h111.111v111.111H777.778z"
              />
              <path
                fill="none"
                d="M888.889 666.667H1000v111.111H888.889zm111.111 0h111.111v111.111H1000zm111.111 0h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeee9a"
                d="M1222.222 666.667h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1333.333 666.667h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1444.444 666.667h111.111v111.111h-111.111zm111.112 0h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1666.667 666.667h111.111v111.111h-111.111zm111.111 0h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeee12"
                d="M1888.889 666.667H2000v111.111h-111.111z"
              />
              <path fill="none" d="M0 777.778h111.111v111.111H0z" />
              <path
                fill="#eeeeee68"
                d="M111.111 777.778h111.111v111.111H111.111z"
              />
              <path
                fill="#eeeeee69"
                d="M222.222 777.778h111.111v111.111H222.222z"
              />
              <path
                fill="none"
                d="M333.333 777.778h111.111v111.111H333.333zm111.111 0h111.111v111.111H444.444zm111.112 0h111.111v111.111H555.556zm111.111 0h111.111v111.111H666.667zm111.111 0h111.111v111.111H777.778zm111.111 0H1000v111.111H888.889z"
              />
              <path fill="#eeeeee46" d="M1000 777.778h111.111v111.111H1000z" />
              <path
                fill="none"
                d="M1111.111 777.778h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeee0d"
                d="M1222.222 777.778h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeeeda"
                d="M1333.333 777.778h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeee60"
                d="M1444.444 777.778h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1555.556 777.778h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeee09"
                d="M1666.667 777.778h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeee2d"
                d="M1777.778 777.778h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1888.889 777.778H2000v111.111h-111.111zM0 888.889h111.111V1000H0z"
              />
              <path
                fill="#eeeeee1b"
                d="M111.111 888.889h111.111V1000H111.111z"
              />
              <path
                fill="#eeeeee05"
                d="M222.222 888.889h111.111V1000H222.222z"
              />
              <path
                fill="#eeeeee5d"
                d="M333.333 888.889h111.111V1000H333.333z"
              />
              <path fill="none" d="M444.444 888.889h111.111V1000H444.444z" />
              <path
                fill="#eeeeeefd"
                d="M555.556 888.889h111.111V1000H555.556z"
              />
              <path fill="none" d="M666.667 888.889h111.111V1000H666.667z" />
              <path
                fill="#eeeeee14"
                d="M777.778 888.889h111.111V1000H777.778z"
              />
              <path fill="#eeeeee2b" d="M888.889 888.889H1000V1000H888.889z" />
              <path
                fill="#eeeeee11"
                d="M1000 888.889h111.111V1000H1000zm111.111 0h111.111V1000h-111.111z"
              />
              <path fill="none" d="M1222.222 888.889h111.111V1000h-111.111z" />
              <path
                fill="#eeeeeecb"
                d="M1333.333 888.889h111.111V1000h-111.111z"
              />
              <path
                fill="none"
                d="M1444.444 888.889h111.111V1000h-111.111zm111.112 0h111.111V1000h-111.111z"
              />
              <path fill="none" d="M1666.667 888.889h111.111V1000h-111.111z" />
              <path
                fill="#eeeeee2f"
                d="M1777.778 888.889h111.111V1000h-111.111z"
              />
              <path
                fill="#eeeeeeec"
                d="M1888.889 888.889H2000V1000h-111.111z"
              />
              <path
                fill="none"
                d="M0 1000h111.111v111.111H0zm111.111 0h111.111v111.111H111.111zm111.111 0h111.111v111.111H222.222zm111.111 0h111.111v111.111H333.333zm111.111 0h111.111v111.111H444.444zm111.112 0h111.111v111.111H555.556z"
              />
              <path
                fill="#eeeeeef0"
                d="M666.667 1000h111.111v111.111H666.667z"
              />
              <path
                fill="none"
                d="M777.778 1000h111.111v111.111H777.778zm111.111 0H1000v111.111H888.889z"
              />
              <path fill="#eeeeeef0" d="M1000 1000h111.111v111.111H1000z" />
              <path
                fill="#eeeeeea8"
                d="M1111.111 1000h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeeecf"
                d="M1222.222 1000h111.111v111.111h-111.111z"
              />
              <path fill="none" d="M1333.333 1000h111.111v111.111h-111.111z" />
              <path fill="none" d="M1444.444 1000h111.111v111.111h-111.111z" />
              <path
                fill="#eeeeeede"
                d="M1555.556 1000h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeee29"
                d="M1666.667 1000h111.111v111.111h-111.111z"
              />
              <path fill="none" d="M1777.778 1000h111.111v111.111h-111.111z" />
              <path fill="none" d="M1888.889 1000H2000v111.111h-111.111z" />
              <path fill="#eeeeeefd" d="M0 1111.111h111.111v111.111H0z" />
              <path
                fill="#eeeeee48"
                d="M111.111 1111.111h111.111v111.111H111.111z"
              />
              <path
                fill="none"
                d="M222.222 1111.111h111.111v111.111H222.222zm111.111 0h111.111v111.111H333.333zm111.111 0h111.111v111.111H444.444zm111.112 0h111.111v111.111H555.556zm111.111 0h111.111v111.111H666.667z"
              />
              <path
                fill="#eeeeee6d"
                d="M777.778 1111.111h111.111v111.111H777.778z"
              />
              <path
                fill="none"
                d="M888.889 1111.111H1000v111.111H888.889zm111.111 0h111.111v111.111H1000z"
              />
              <path
                fill="#eeeeeee4"
                d="M1111.111 1111.111h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1222.222 1111.111h111.111v111.111h-111.111zm111.111 0h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1444.444 1111.111h111.111v111.111h-111.111zm111.112 0h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeeeb8"
                d="M1666.667 1111.111h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1777.778 1111.111h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeeeea"
                d="M1888.889 1111.111H2000v111.111h-111.111z"
              />
            </g>
            <defs>
              <radialGradient id="a">
                <stop offset={0} stopColor="#fff" />
                <stop offset={1} stopColor="#fff" stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
        </HeroBgImage>
        <HeroTextContainer>
          <HeroTextSubContainer>
            <HeroTitle>Unbeatable Deals, Unmatched Quality</HeroTitle>
            <HeroDescription>
              Find top-quality products at incredible prices. Shop now and enjoy
              fast, hassle-free delivery. Shop the latest trends in fashion,
              curated for you. Free shipping on all orders.
            </HeroDescription>
          </HeroTextSubContainer>
        </HeroTextContainer>
      </DivContainer>
    </HeroSectionWrapper>
  );
}
