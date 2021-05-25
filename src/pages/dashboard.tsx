import { Box, Flex, SimpleGrid, Text, theme} from "@chakra-ui/react";
import dynamic from 'next/dynamic'
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";


const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false, 
})

const options = {
    chart: {
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
        
        foreColor:  theme.colors.gray[500],
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        categories: [],
        
    },
    axisBorder: {
        color: theme.colors.gray[600]
    },
    axisTicks: {
        color: theme.colors.gray[600]
    },
    fill: {
    opacity:0.3,
    type: 'gradient',
    gradient: {
        shade: 'dark',
        opacityFrom: 0.7,
        opacityTo: 0.3,
    }
    }
    
};

const series = [
    { name: 'series1', data: [1, 120, 222, 10, 20, 211, 124]}
]
const twoseries = [
    { name: 'series1', data: [124, 120, 222, 110, 220, 111, 124]}
]

export default function Dashboard(){
    return (
        <Flex direction="column" h="100vh">
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start" bg="red.200">
                    <Box 
                        p={["6", "8"]}
                        bg="gray.800"
                        borderRadius={8}
                        pb="4"
                    >
                        <Text fontSize="lg" mb="4">Inscritos da Semana</Text>
                        <Chart options={options} series={series} type="area" heigth={160} />
                    </Box>
                    <Box 
                        p={["6", "8"]}
                        bg="gray.800"
                        borderRadius={8}
                        pb="4"
                    >
                        <Text fontSize="lg" mb="4">Taxa de abertura</Text>
                        <Chart  options={options} series={twoseries} type="area" heigth={160}/>
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    );
}