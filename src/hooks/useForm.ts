import * as React from "react";

export function useForm<T extends Record<string, unknown>>(initial: T) {
  const [values, setValues] = React.useState<T>(initial);
  const [errors, setErrors] = React.useState<Partial<Record<string, string>>>({});

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;
    setValues((s) => ({ ...s, [name]: value } as T));
    setErrors((s) => ({ ...s, [name]: undefined }));
  }, []);

  const setFieldValue = React.useCallback((name: string, value: unknown) => {
    setValues((s) => ({ ...s, [name]: value } as T));
    setErrors((s) => ({ ...s, [name]: undefined }));
  }, []);

  const reset = React.useCallback(() => setValues(initial), [initial]);

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleChange,
    setFieldValue,
    reset,
  } as const;
}
