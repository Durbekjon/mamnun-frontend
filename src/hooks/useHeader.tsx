import { InfoService } from "@/services/info.service";
import { useEffect, useState } from "react";

export const useHeader = () => {
  const [announcement] = useState({
    name: "EduFair 2025",
    link: "/edufair",
  });

  const [info, setInfo] = useState({
    phoneNumber: "+998949181305",
    mail: "info@mamnunagency.com",
  });

  const fetchInformations = async () => {
    const { data } = await InfoService.get();
    setInfo(data);
  };

  return { announcement, info, fetchInformations };
};
