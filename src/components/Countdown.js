import React, { useState, useEffect } from "react";
import CountDown from "react-native-countdown-component";

export default ({ handleFinish, time }) => {
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    return () => {
      setIsCounting(false);
    };
  }, []);

  return (
    <CountDown
      until={time * 60}
      timeToShow={["M", "S"]}
      digitStyle={{ backgroundColor: "#FEFFED" }}
      timeLabelStyle={{ color: "#FEFFED" }}
      size={50}
      running={isCounting}
      onPress={() => setIsCounting(!isCounting)}
      onFinish={handleFinish}
    />
  );
};
