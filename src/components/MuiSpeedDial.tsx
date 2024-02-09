import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { Print } from "@mui/icons-material";
import { FileCopy } from "@mui/icons-material";
import { Share } from "@mui/icons-material";

const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation speed dial"
      sx={{bottom:16, right: 16, position: 'absolute'}}
      icon={<SpeedDialIcon />}
    >
      <SpeedDialAction icon={<FileCopy />} tooltipTitle="Copy"  />
      <SpeedDialAction icon={<Print />} tooltipTitle="Print" />
      <SpeedDialAction icon={<Share />} tooltipTitle="Share" />
    </SpeedDial>
  );
};

export default MuiSpeedDial;
