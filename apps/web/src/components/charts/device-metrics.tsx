import { Stack, ButtonGroup, Button, Paper, Title } from "@mantine/core";
import dayjs from "dayjs";
import { useState } from "react";
import { LineChart } from "@mantine/charts";
import { useMetricsServiceFindManyMetrics } from "~/api/queries";

const { format: formatPercent } = new Intl.NumberFormat("en-NZ", {
  style: "percent",
  maximumFractionDigits: 2,
});

export default function DeviceMetricChart({ deviceId }: { deviceId: string }) {
  const [timeInterval, setTimeInterval] = useState("15 minutes");
  const [startTime] = useState(dayjs().subtract(1, "month").toISOString());
  const [endTime] = useState(dayjs().toISOString());

  const { data: metrics } = useMetricsServiceFindManyMetrics({
    deviceId,
    interval: timeInterval,
    startTime,
    endTime,
  });

  const chartData =
    metrics?.map((metric) => ({
      ...metric,
      datetime: dayjs(metric.period).toISOString(),
    })) ?? [];

  return (
    <Paper p="xl">
      <Stack>
        <Title order={3}>Battery Percentage and Solar Power</Title>

        <Stack>
          <ButtonGroup>
            <Button
              onClick={() => setTimeInterval("15 minutes")}
              variant={timeInterval === "15 minutes" ? "filled" : "outline"}
            >
              15 minutes
            </Button>
            <Button
              onClick={() => setTimeInterval("30 minutes")}
              variant={timeInterval === "30 minutes" ? "filled" : "outline"}
            >
              30 minutes
            </Button>
            <Button
              onClick={() => setTimeInterval("1 hour")}
              variant={timeInterval === "1 hour" ? "filled" : "outline"}
            >
              1 hour
            </Button>
          </ButtonGroup>

          <LineChart
            title="Battery Percentage and Solar Power"
            h={400}
            data={chartData}
            series={[
              { name: "batteryPercentage", label: "Battery Percentage" },
              { name: "solarPower", label: "Solar Power" },
            ]}
            dataKey="datetime"
            type="gradient"
            gradientStops={[
              { offset: 0, color: "red.6" },
              { offset: 20, color: "orange.6" },
              { offset: 40, color: "yellow.5" },
              { offset: 70, color: "lime.5" },
              { offset: 80, color: "cyan.5" },
              { offset: 100, color: "blue.5" },
            ]}
            strokeWidth={5}
            curveType="natural"
            yAxisProps={{ domain: [0, 75] }}
            valueFormatter={formatPercent}
          />
        </Stack>
      </Stack>
    </Paper>
  );
}
