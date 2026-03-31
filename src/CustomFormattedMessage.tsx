
import type { ComponentProps, ReactNode } from "react";
import { FormattedMessage } from "react-intl";

// Update formatjs/enforce-placeholders
export const baseFormatValues = {
  p: (chunks: ReactNode[]) => <p>{chunks}</p>,
  nbsp: "\u00A0",
};

export type CustomFormattedMessageProps = ComponentProps<typeof FormattedMessage>;

export const CustomFormattedMessage = (props: CustomFormattedMessageProps) => {
  return (
    <FormattedMessage
      {...props}
      values={
        props.values
          ? { ...baseFormatValues, ...props.values }
          : baseFormatValues
      }
    />
  );
};
