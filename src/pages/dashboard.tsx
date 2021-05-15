import { Flex, SimpleGrid, Box, Text, theme } from '@chakra-ui/react'
import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
import { Header, Sidebar } from 'components/Templates/Dashboard'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const options: ApexOptions = {
  chart: {
    toolbar: { show: false },
    zoom: { enabled: false },
    foreColor: theme.colors.gray['500']
  },
  grid: { show: false },
  dataLabels: { enabled: false },
  tooltip: { enabled: false },
  xaxis: {
    type: 'category',
    axisBorder: { color: theme.colors.gray['600'] },
    axisTicks: { color: theme.colors.gray['600'] },
    categories: ['Jan', 'Fav', 'Mar', 'Abr', 'Mai', 'Jun']
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
}

const series = [
  {
    name: 'serie1',
    data: [12, 32, 54, 45, 89, 10]
  }
]
export default function Dashboard() {
  return (
    <Flex direction="column" height="100vh">
      <Header />

      <Flex
        width="100%"
        marginY="6"
        maxWidth={1480}
        marginX="auto"
        paddingX="6"
      >
        <Sidebar />
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box
            padding={['4', '8']}
            backgroundColor="gray.800"
            borderRadius={8}
            paddingBottom={['2', '4']}
          >
            <Text fontSize="lg" marginBottom="4">
              Balanço Mensal
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box
            padding={['4', '8']}
            backgroundColor="gray.800"
            borderRadius={8}
            paddingBottom={['2', '4']}
          >
            <Text fontSize="lg" marginBottom="4">
              Despesas Mensais
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
