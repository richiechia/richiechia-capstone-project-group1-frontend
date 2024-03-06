import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  VStack,
  Link
} from '@chakra-ui/react'
import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from 'react-icons/bs'

const techVariable = [
  {
    'title':'VPS',
    'stat' : '3 public subnets'
  },
  {
    'title':'VPS',
    'stat' : '3 private subnets'
  },
  {
    'title' : 'VPS',
    'stat' : '3 AZs'
  },
  {
    'title' : 'Elastic Container Service',
    'stat' : '1 Front-end, 1 Backend'
  },
  {
    'title' : 'Elastic Container Service',
    'stat' : '2 application load balancers'
  },
  {
    'title' : 'Workflow',
    'stat' : 'Github actions & Terraform Cloud'
  },
  {
    'title' : 'Vulnerability Scanning',
    'stat' : 'Synk'
  },
  {
    'title' : 'Domain Name Service',
    'stat' : 'Route 53'
  },
  {
    'title' : 'Storage',
    'stat' : 'S3 Bucket'
  },
  {
    'title' : 'Monitoring',
    'stat' : 'Cloudwatch'
  }
]

function StatsCard({title, stat}) {
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <StatLabel fontWeight={'medium'} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        {stat}
      </StatNumber>
    </Stat>
  )
}

export default function BasicStatistics() {
  return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <Flex justifyContent={'center'} alignItems={'center'} gap={2} py={10}>
              <chakra.h1 fontSize={'4xl'} fontWeight={'bold'}>
                What is our system design like?
              </chakra.h1>
        <Link href="https://github.com/MushuTFD/capstone-project-group1" isExternal>
          <IconButton
            aria-label="GitHub"
            variant="ghost"
            size="lg"
            fontSize="3xl"
            icon={<BsGithub />}
            _hover={{
              bg: useColorModeValue('blue.500', 'blue.700'),
              color: useColorModeValue('white', 'gray.700'),
            }}
            isRound
          />
        </Link>
        </Flex>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        {techVariable.map((tech_detail) => (
          <StatsCard title={tech_detail.title} stat={tech_detail.stat}></StatsCard>
        ))}
      </SimpleGrid>
    </Box>
  )
}