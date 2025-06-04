import z from "zod";

export const metricPowerSystemOutputSchema = z.object({
  period: z.date().nullable(),
  acVoltage: z.number().nullable(),
  busVoltage: z.number().nullable(),
  loadCurrent: z.number().nullable(),
  rectifierCurrent: z.number().nullable(),
  batteryCurrent: z.number().nullable(),
  batteryTemperature: z.number().nullable(),
  batteryRuntime: z.number().nullable(),
  batteryPercentage: z.number().nullable(),
  solarCurrent: z.number().nullable(),
  solarPower: z.number().nullable(),
  deviceId: z.string(),
});

export const metricPowerSystemInputSchema = z.object({
  observedTime: z.string().datetime(),
  acVoltage: z
    .number()
    .nullable()
    .optional()
    .transform((val) => val ?? null),
  busVoltage: z
    .number()
    .nullable()
    .optional()
    .transform((val) => val ?? null),
  loadCurrent: z
    .number()
    .nullable()
    .optional()
    .transform((val) => val ?? null),
  rectifierCurrent: z
    .number()
    .nullable()
    .optional()
    .transform((val) => val ?? null),
  batteryCurrent: z
    .number()
    .nullable()
    .optional()
    .transform((val) => val ?? null),
  batteryTemperature: z
    .number()
    .nullable()
    .optional()
    .transform((val) => val ?? null),
  batteryRuntime: z
    .number()
    .nullable()
    .optional()
    .transform((val) => val ?? null),
  batteryPercentage: z
    .number()
    .nullable()
    .optional()
    .transform((val) => val ?? null),
  solarCurrent: z
    .number()
    .nullable()
    .optional()
    .transform((val) => val ?? null),
  solarPower: z
    .number()
    .nullable()
    .optional()
    .transform((val) => val ?? null),
});
