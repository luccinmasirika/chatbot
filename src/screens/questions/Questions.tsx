import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import { Layout } from '../../components';
import Container from '@mui/material/Container';
import InputBase from '@mui/material/InputBase';
import data from '../../data/question.json';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Checking = () => {
  return (
    <Layout>
      <Stack
        sx={{
          pt: 3,
          pb: 1,
          position: 'fixed',
          px: 2,
          left: 0,
          right: 0,
          bgcolor: 'background.paper',
        }}
        spacing={2}
      >
        <LinearProgress
          variant="determinate"
          value={15}
          sx={{ height: 6, borderRadius: 5 }}
        />
        <Typography textAlign="center" color="text.secondary">
          {data.title}
        </Typography>
      </Stack>

      <Stack
        sx={{
          overflow: 'scroll',
          height: '100vh',
          py: 12,
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        <Box sx={{ my: 4 }}>
          <Typography variant="h6" sx={{ px: 2 }} gutterBottom>
            {data.questions[0].question}
          </Typography>
          <Paper
            sx={{
              mx: 1,
              borderRadius: 5,
              py: 1,
              px: 2,
              bgcolor: 'primary.main',
              display: 'inline-block',
              color: 'white',
              width: 'max-content',
              my: 1,
            }}
          >
            {data.questions[0].ass[0]}
          </Paper>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography variant="h6" sx={{ px: 2 }} gutterBottom>
            {data.questions[0].question}
          </Typography>
          <Stack
            direction="row"
            sx={{
              overflowX: 'scroll',
              scrollBehavior: 'smooth',
              whiteSpace: 'nowrap',
              width: '100vw',
              '::-webkit-scrollbar': {
                display: 'none',
              },
              '&': {
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
              },
              py: 2,
            }}
          >
            <Box>
              {data.questions[0].ass.map((el, i) => (
                <Paper
                  key={i}
                  sx={{
                    mx: 1,
                    borderRadius: 5,
                    py: 1,
                    px: 2,
                    display: 'inline-block',
                  }}
                >
                  {el}
                </Paper>
              ))}
            </Box>
          </Stack>
        </Box>
      </Stack>
      <Stack
        sx={{
          position: 'fixed',
          left: 0,
          right: 0,
          p: 2,
          bottom: 10,
        }}
      >
        <InputBase
          sx={{
            borderRadius: 10,
            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
            width: 1,
            height: 50,
            bgcolor: 'white',
            px: 3,
          }}
          placeholder={data.placeholder}
        />
      </Stack>
    </Layout>
  );
};

export default Checking;
