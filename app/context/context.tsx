import { createContext, useState } from 'react';

interface ReportData {
  jsonData: any;
}

export const ReportDataContext = createContext<ReportData>({
    jsonData: null,
     // This line is causing the error
  });

export const ReportDataProvider = ({ children }: { children: React.ReactNode }) => {
  const [jsonData, setJsonData] = useState<any>(null);

  return (
    <ReportDataContext.Provider value={{ jsonData }}>
      {children}
    </ReportDataContext.Provider>
  );
};