import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import data from '../../data/data.json';
import Button from '@mui/material/Button';
import Logo from '../../assets/logo.png';
import { styled } from '@mui/material';
import { Layout } from '../../components';
import { useNavigate } from 'react-router-dom';

const Image = styled('img')(({ theme }) => ({
  width: 100,
  p: 2,
}));

const CtaButton = styled(Button)(({ theme }) => ({
  '& .MuiButton-endIcon': { position: 'absolute', left: 10, bgcolor: 'red' },
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
}));

const Home = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Stack sx={{ px: 4, py: 10 }} spacing={4}>
        <Stack>
          <Typography variant="h4" textAlign="center" gutterBottom>
            {data.home.title}
          </Typography>
          <Typography textAlign="center" gutterBottom>
            {data.home.subtitle}
          </Typography>
        </Stack>
        <Stack sx={{ px: 3 }} spacing={1}>
          <CtaButton
            variant="contained"
            onClick={() => navigate('questions')}
            endIcon={
              <svg
                width="6"
                height="9"
                viewBox="0 0 6 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 4.23028C0 4.3442 0.0215517 4.45042 0.064655 4.54894C0.107758 4.64438 0.177032 4.73829 0.272475 4.83065L3.76385 8.24813C3.90547 8.38975 4.07634 8.46057 4.27647 8.46057C4.41193 8.46057 4.53509 8.4267 4.64592 8.35897C4.75984 8.29431 4.85067 8.20656 4.9184 8.09573C4.98613 7.98489 5.02 7.86174 5.02 7.72627C5.02 7.52307 4.93995 7.34142 4.77985 7.18132L1.73645 4.22567L4.77985 1.27463C4.93995 1.12069 5.02 0.940576 5.02 0.734296C5.02 0.598828 4.98613 0.475676 4.9184 0.364839C4.85067 0.254002 4.75984 0.166256 4.64592 0.101601C4.53509 0.0338669 4.41193 0 4.27647 0C4.07634 0 3.90547 0.0692732 3.76385 0.20782L0.272475 3.6253C0.18011 3.71766 0.112377 3.8131 0.0692732 3.91163C0.0261699 4.00707 0.00307881 4.11329 0 4.23028Z"
                  fill="#FEFEFE"
                />
              </svg>
            }
          >
            {data.home.primaryBtn}
          </CtaButton>
          <CtaButton>{data.home.secondaryBtn}</CtaButton>
        </Stack>
      </Stack>
      <Stack
        sx={{
          bgcolor: 'primary.dark',
          py: 4,
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: 1,
        }}
        color="white"
        alignItems="center"
      >
        <Typography>{data.home.footer.title}</Typography>
        <Image src={Logo} alt="" />
        <Stack justifyContent="space-evenly" direction="row" sx={{ width: 1 }}>
          <Typography variant="caption">
            {data.home.footer.copyright}
          </Typography>
          <Typography
            component="a"
            sx={{ textDecoration: 'underline' }}
            variant="caption"
          >
            {data.home.footer.link}
          </Typography>
        </Stack>
      </Stack>
    </Layout>
  );
};

export default Home;
