import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const Stats = () => {
    return (
    <Card sx={{ maxWidth: 250 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Stats
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          HP: valor
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Attack: valor
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Defense: valor
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Special-Attack: valor
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Special-Defense: valor
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Speed: valor
        </Typography>
      </CardContent>
    </Card>
    )
}

export default Stats