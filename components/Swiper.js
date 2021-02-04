import { css } from '@emotion/core'
import { Carousel } from 'react-responsive-carousel'
import Head from 'next/head'
import styled from '@emotion/styled'
import { Button, Text, Box, Heading } from '@chakra-ui/core'

const CarouselItem = styled.div`
  position: relative;  
  & > div {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    color: white;
    padding-top: 180px;
    text-align: left;
    width: 100%;
    max-width: 1200px;
    & > p {
      margin: 10px 0;
      font-size: 14px;
      width: 450px;
    }
  }
  & > img {
    filter: brightness(50%)
  }
`

const swiperContainer = css`
  position: relative;
  & > .carousel:last-child {
    position: absolute;
    left: 0;
    bottom: 0;
    & > .thumbs-wrapper > .thumbs {
      display: flex;
      justify-content: center;
    }
  }
`

export default function Swiper () {
  return <>
    <Head>
      <link rel="stylesheet" href="/css/carousel.min.css" />
    </Head>
    <Carousel css={swiperContainer} showArrows={false} showIndicators={false} showStatus={false}>
      <CarouselItem>
        <img src="/images/1.jpg" />
        <Box>
          <Heading as="h2" size="lg">11111</Heading>
          <Text>22222</Text>
          <Button colorScheme="red" size="lg">CHECK DETAIL</Button>
        </Box>
      </CarouselItem>
      <CarouselItem>
        <img src="/images/2.jpg" />
      </CarouselItem>
      <CarouselItem>
        <img src="/images/3.jpg" />
      </CarouselItem>
    </Carousel>
    <Button colorScheme="red" color="black">Test</Button>
  </>
}