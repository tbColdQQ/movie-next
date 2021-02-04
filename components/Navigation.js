import { Box, HStack } from '@chakra-ui/core'
import Link from 'next/link'

export default function Navigation () {

  return <Box h={52} bgColor="#202020" color="white">
    <HStack spacing={14} fontSize="12px" justifyContent="center" alignItems="center" lineHeight="52px">
      <Link href="#"><a>影片</a></Link>
      <Link href="#"><a>漫画</a></Link>
      <Link href="#"><a>电影</a></Link>
      <Link href="#"><a>电视</a></Link>
      <Link href="#"><a>新闻</a></Link>
    </HStack>
  </Box>
}