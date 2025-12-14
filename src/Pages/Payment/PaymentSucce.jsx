import React, { useEffect } from "react";
import { useSearchParams } from "react-router";
import useAxios from "../../Hooks/useAxios";
import { MdVerifiedUser } from "react-icons/md";

const PaymentSucce = () => {
  const [searchParams] = useSearchParams();
  const axiosSecure = useAxios();
  const sessionId = searchParams.get("session_id");
  // console.log(sessionId);

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/session-status?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);
        });
    }
  }, [sessionId]);

  return (
    <div className="flex items-center justify-center  h-[500px]">
      <div className="flex  flex-col items-center">
        <MdVerifiedUser className="text-[150px] md:text-[250px] text-green-500" />
      <h1 className="font-semibold text-xl  md:text-4xl">Pyament successfull</h1>
      </div>
    </div>
  );
};

export default PaymentSucce;
