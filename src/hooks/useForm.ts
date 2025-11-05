import * as React from "react";

// Small reusable form helper to reduce repeated state boilerplate across forms.
// Keeps the same public behavior (values/errors) but provides a shared change handler
// and a convenience setter for non-input value changes (selects, custom components).
export function useForm<T extends Record<string, any>>(initial: T) {
  const [values, setValues] = React.useState<T>(initial);
  const [errors, setErrors] = React.useState<Partial<Record<string, string>>>({});

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as any;
    setValues((s) => ({ ...s, [name]: value }));
    setErrors((s) => ({ ...s, [name]: undefined }));
  }, []);

  const setFieldValue = React.useCallback((name: string, value: any) => {
    setValues((s) => ({ ...s, [name]: value }));
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
