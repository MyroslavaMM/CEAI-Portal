import {
  type Dispatch,
  type FC,
  type PropsWithChildren,
  type SetStateAction,
} from "react";
import { createContext, useContext, useState } from "react";
import { htmlContent } from "../components/toolsContent";

type ContextProps = {
  emailBody: string;
  setEmailBody: Dispatch<SetStateAction<string>>;
  emailFrom: string;
  setEmailFrom: Dispatch<SetStateAction<string>>;
  emailTo: string;
  setEmailTo: Dispatch<SetStateAction<string>>;
  emailSubject: string;
  setEmailSubject: Dispatch<SetStateAction<string>>;
};

export const defaultValues: ContextProps = {
  emailBody: htmlContent,
  setEmailBody: () => null,
  emailFrom: "exampleFrom@email.com",
  setEmailFrom: () => null,
  emailTo: "exampleTo@email.com",
  setEmailTo: () => null,
  emailSubject:
    "Your Gift is Bringing New Hope to Brownsville’s Catholic Community",
  setEmailSubject: () => null,
};
const Context = createContext(defaultValues);

const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [emailBody, setEmailBody] = useState(defaultValues.emailBody);
  const [emailSubject, setEmailSubject] = useState(defaultValues.emailSubject);
  const [emailFrom, setEmailFrom] = useState(defaultValues.emailFrom);
  const [emailTo, setEmailTo] = useState(defaultValues.emailTo);

  return (
    <Context.Provider
      value={{
        emailBody,
        setEmailBody,
        emailSubject,
        setEmailSubject,
        emailTo,
        setEmailFrom,
        emailFrom,
        setEmailTo,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const useGeneralContext = () => useContext(Context);

export { ContextProvider, useGeneralContext };
