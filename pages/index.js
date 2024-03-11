import { Container, Box, Heading, Image, Button } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

const Page = () => {
  return (
    <Container>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jon Butterworth
          </Heading>
          <p>
            Platform/DevOps Engineer / Software Engineer / Amateur Dinosaur
            Catcher
          </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="images/jon.jpg"
            alt="Profile Image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Jon is a platform and software engineer who specializes in creating
          reliable, high-performance platforms and software. His expertise lies
          in leveraging technology to solve complex problems and improve system
          efficiency. Jons practical approach and technical skills enable him to
          develop solutions that meet the demands of today’s fast-paced tech
          environment. Hes dedicated to enhancing user experiences and
          operational capabilities, making him a pragmatic and valuable
          contributor to any tech project.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  )
}

export default Page
