import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '..components/grid-item'
import thumbCasper from '../public/images/work/casper'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="casper" title="Casper" thumbnail={thumbCasper}>
            A Slack Bot written in Python.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}
export default Works
