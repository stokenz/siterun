import { Link } from "@tanstack/react-router";
import { Button, Divider, Flex, Stack } from "@mantine/core";
import {
  FieldValues,
  useForm,
  UseFormReturn,
  FormProvider,
  useController,
  Path,
  UseFormRegisterReturn,
  DefaultValues,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { UseMutationOptions, UseMutationResult } from "@tanstack/react-query";
import { showNotification } from "@mantine/notifications";
import { useRef } from "react";

// T is a generic type that represents the form data (ie default values).
// TData is a generic type that represents the data that the mutation will return.
// TVars is a generic type that represents the variables that the mutation will accept.
type Props<T extends FieldValues, TData, TVars, TDefaultValues> = {
  // Zod validation schema
  schema: z.ZodType<T, any>;
  // Form default values
  defaultValues: TDefaultValues;
  // Get variables for the mutationFn
  getVars: (values: T) => TVars;
  // React Query mutation function
  mutationFn: <TError = unknown, TContext = unknown>(
    options?: Omit<
      UseMutationOptions<TData, TError, TVars, TContext>,
      "mutationFn"
    >,
  ) => UseMutationResult<TData, TError, TVars, TContext>;
  // Form elements
  children: (
    form: Omit<UseFormReturn<T>, "register"> & {
      register: <Name extends Path<T>>(
        name: Name,
      ) => UseFormRegisterReturn<Path<T>> & { error: string | undefined };
      triggerSubmit: () => void;
    },
  ) => React.ReactNode;
  successMessage: string;
  errorMessage?: string;
  // Invalidate queries [cache] after mutation
  invalidateQueries: () => void;
  cancelUrl?: string;
  submitLabel?: string;
  customActions?: (
    form: UseFormReturn<T>,
    triggerSubmit: () => void,
  ) => React.ReactNode;
  actionsJustify?: "start" | "center" | "end";
  actionsDirection?: "row" | "row-reverse";
  defaultActions?: boolean;
  cancelLabel?: string;
  afterSuccess?: (id: string) => void;
};

export type FormProps<
  T extends FieldValues,
  TData,
  TVars,
  TDefaultValues extends DefaultValues<T> = DefaultValues<T>,
> = Omit<Props<T, TData, TVars, TDefaultValues>, "schema" | "children">;

/**
 * Form component that sets up a form with validation and mutation handling,
 * keeping things consistent across the app.
 */
export default function Form<
  T extends FieldValues,
  TData extends { id: string },
  TVars,
  TDefaultValues extends DefaultValues<T> = DefaultValues<T>,
>({
  schema,
  defaultValues,
  children,
  mutationFn,
  getVars,
  successMessage,
  errorMessage = "Please try again later",
  invalidateQueries,
  cancelUrl,
  submitLabel = "Save",
  actionsJustify = "end",
  customActions,
  actionsDirection,
  defaultActions = true,
  cancelLabel = "Cancel",
  afterSuccess,
}: Props<T, TData, TVars, TDefaultValues>) {
  const form = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const { mutateAsync } = mutationFn({
    onSuccess: (data) => {
      showNotification({
        title: "Success",
        message: successMessage,
        color: "green",
      });
      invalidateQueries();
      afterSuccess?.(data.id);
    },
    onError: () => {
      showNotification({
        title: "Something went wrong",
        message: errorMessage,
        color: "red",
      });
    },
  });

  const handleSubmit = async (values: T) => {
    await mutateAsync(getVars(values));
  };

  const submitRef = useRef<HTMLButtonElement>(null);

  // Programmatically trigger form submission
  const triggerSubmit = () => {
    submitRef?.current?.click();
  };

  // Helper function to register form fields and include error messages in props
  const register = (name: Path<T>) => {
    const field = form.register<Path<T>>(name);
    const { fieldState } = useController<T, Path<T>>({
      name,
      control: form.control,
    });

    return { ...field, error: fieldState.error?.message };
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Stack>
          {children({ ...form, register, triggerSubmit })}

          <Divider />

          <Flex justify={actionsJustify} direction={actionsDirection} gap="md">
            {customActions?.(form, triggerSubmit)}

            {defaultActions && cancelUrl && (
              <Button variant="light" component={Link} to={cancelUrl}>
                {cancelLabel}
              </Button>
            )}

            {defaultActions && (
              <Button type="submit" loading={form.formState.isSubmitting}>
                {submitLabel}
              </Button>
            )}

            <button hidden={true} ref={submitRef} type={"submit"} />
          </Flex>
        </Stack>
      </form>
    </FormProvider>
  );
}
