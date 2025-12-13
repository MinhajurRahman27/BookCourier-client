import React from "react";
import { GiCancel } from "react-icons/gi";

const PaymentCancled = () => {
  return (
    <div className="flex items-center justify-center  h-[500px]">
      <div className="flex  flex-col items-center">
        <GiCancel className="text-[250px] text-red-500" />
        <h1 className="font-semibold text-4xl">Pyament not successfull</h1>
      </div>
    </div>
  );
};

export default PaymentCancled;
