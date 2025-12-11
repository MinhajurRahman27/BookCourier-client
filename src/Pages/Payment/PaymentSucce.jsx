import React, { useEffect } from "react";
import { useSearchParams } from "react-router";
import useAxios from "../../Hooks/useAxios";

const PaymentSucce = () => {
  const [searchParams] = useSearchParams();
  const axiosSecure = useAxios();
  const sessionId = searchParams.get("session_id");
  console.log(sessionId);

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
    <div>
      <h1>Pyament successfull</h1>
    </div>
  );
};

export default PaymentSucce;
