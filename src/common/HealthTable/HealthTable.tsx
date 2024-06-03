import React from "react";
const HealthTable: React.FC<{
  tHead: string[];
  healthData: any[];
}> = ({ tHead, healthData }) => {
  const tHeadContent = tHead.map((thValue: string) => {
    return (
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
        {thValue}
      </th>
    );
  });
  const tbodyContent = healthData.map((trValue:any)=>{  
      return (
      <tr key={trValue.id}>
        <td className="px-6 py-4 whitespace-nowrap">{trValue['id']}</td>
        <td className="px-6 py-4 whitespace-nowrap">{trValue.name}</td>
        <td className="px-6 py-4 whitespace-nowrap">{trValue.HR}</td>
        <td className="px-6 py-4 whitespace-nowrap">{trValue.SBP}</td>
        <td className="px-6 py-4 whitespace-nowrap">{trValue.DBP}</td>
        <td className="px-6 py-4 whitespace-nowrap">{trValue.Sugar}</td>
        <td className="px-6 py-4 whitespace-nowrap">{trValue.cal}</td>
        <td className="px-6 py-4 whitespace-nowrap">{trValue.Hemoglobin}</td>
        <td className="px-6 py-4 whitespace-nowrap">{trValue.spo2}</td>
      </tr>
    );
})

  return (
    <table className="min-w-full divide-y divide-green-200">
      <thead className="bg-green-300">
        <tr>{tHeadContent}</tr>
      </thead>
      <tbody className="bg-white divide-y divide-green-200">
        {tbodyContent}
      </tbody>
    </table>
  );
};
export default HealthTable;
