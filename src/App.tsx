import { IntlProvider, FormattedMessage } from "react-intl";
import { CustomFormattedMessage } from "./CustomFormattedMessage.tsx";

export default function App() {
  return (
    <IntlProvider locale="en" defaultLocale="en">
      <CustomFormattedMessage id="hello" defaultMessage="<p>Hello, world!</p>" />
      <FormattedMessage
        id="fails-properly"
        defaultMessage="this is a {placeholder}"
      />
      <CustomFormattedMessage
        id="should-fail"
        defaultMessage="this is a {placeholder}"
      />
    </IntlProvider>
  );
}
