import { Box, Paper } from "@mui/material"
import { Masonry } from "@mui/lab"

const MuiMasonry = () => {
    const heights = [150, 80, 60, 120, 25, 50, 90, 130, 160, 110, 70, 100, 75, 130, 80]

  return (
    <Box sx={{width: 500, minHeight: 400}}  >
        <Masonry columns={4} spacing={1} >
            {heights.map((height, index) => (
                <Paper key={index} sx={{display: 'flex', justifyContent: 'center', alignItems:'center', height, border: '1px solid' }}>
                    {index + 1}
                </Paper>
            ))}
        </Masonry>
    </Box>
  )
}

export default MuiMasonry