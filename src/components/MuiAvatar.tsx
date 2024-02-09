import { Stack, Avatar } from "@mui/material";

const MuiAvatar = () => {
  return (
    <Stack spacing={4} sx={{top: 16, right: 16, position: 'absolute'}}>
      <Stack direction="row" spacing={1}>
        <Avatar sx={{bgcolor: 'primary.light'}}>EP</Avatar>
        <Avatar sx={{bgcolor: 'success.light'}}>CA</Avatar>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Avatar src="https://tse2.mm.bing.net/th?id=OIP.UzlT3kWsYm-wG7b3TFFEdwHaE7&pid=Api&P=0&h=180" alt="Lily" >CA</Avatar>
        <Avatar>CA</Avatar>
      </Stack>
    </Stack>
  );
};

export default MuiAvatar;
