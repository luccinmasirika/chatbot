import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import { Layout } from '../../components';
import Container from '@mui/material/Container';
import data from '../../data/data.json';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h6"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

const Processing = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 100 / 7
      );
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Layout>
      <Container sx={{ py: 4, height: '100vh' }}>
        <LinearProgress
          variant="determinate"
          value={100}
          sx={{ height: 6, borderRadius: 5 }}
        />
        <Stack sx={{ pt: 12 }}>
          <Typography variant="h5" textAlign="center" sx={{ my: 8 }}>
            {data.processing}
          </Typography>
        </Stack>
        <Stack alignItems="center">
          <CircularProgressWithLabel value={progress} size={100} />
        </Stack>
      </Container>
    </Layout>
  );
};

export default Processing;
