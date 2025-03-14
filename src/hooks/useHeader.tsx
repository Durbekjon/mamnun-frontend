import { EventService } from "@/services/event.service";
import { InfoService } from "@/services/info.service";
import { useState } from "react";

export const useHeader = () => {
  const [event, setEvent] = useState<any>(null);

  const [info, setInfo] = useState({
    phoneNumber: "+998949181305",
    mail: "info@mamnunagency.com",
  });

  const fetchInformations = async () => {
    const { data } = await InfoService.get();
    setInfo(data);
  };

  const fetchEvent = async () => {
    const { data } = await EventService.getEvent();
    setEvent(data);
  };

  return { info, fetchInformations, event, fetchEvent };
};
