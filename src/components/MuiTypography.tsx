import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function MuiTypography() {
  return (
    <Box sx={{ width: "100%", maxWidth: 500 }}>
      <Typography variant="h1" gutterBottom>
        h1
      </Typography>
      <Typography variant="h2" gutterBottom>
        h2
      </Typography>
      <Typography variant="h3" gutterBottom>
        h3
      </Typography>
      <Typography variant="h4" gutterBottom>
        h4
      </Typography>
      <Typography variant="h5" gutterBottom>
        h5
      </Typography>
      <Typography variant="h6" gutterBottom>
        h6
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>

   
      <Typography variant="button" display="block" gutterBottom>
        button text
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        caption text
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        overline text
      </Typography>
    </Box>
  );
}
