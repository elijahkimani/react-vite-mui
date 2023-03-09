import React from "react";
import BaseActionCard from "./BaseActionCard";
import QrCodeScannerRounded from "@mui/icons-material/QrCodeScannerRounded";

const ScanActionCard = () => {
  return (
    <BaseActionCard
      title="Scan"
      icon={QrCodeScannerRounded}
      description="Scan barcode or item number"
    ></BaseActionCard>
  );
};

export default ScanActionCard;
