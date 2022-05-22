import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import { Layout } from '../../components';
import InputBase from '@mui/material/InputBase';
import data from '../../data/question.json';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

interface Steps {
  id: string;
  message: string;
  trigger?: string;
  choices?: string[];
}

const Checking = () => {
  const steps: Steps[] = [
    {
      id: '1',
      message: 'Lorem ispum dolor sit amet',
      trigger: 'answer 0',
    },
    {
      id: '2',
      message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      choices: ['Yes', 'No'],
      trigger: 'answer 1',
    },
    {
      id: '3',
      message: 'Molestias distinctio commodi voluptatum ratione.',
      trigger: 'Yes',
    },
    {
      id: '4',
      message: 'Reprehenderit in voluptates veritatis porro sunt cupiditate.',
      trigger: 'No',
    },
    {
      id: '4',
      message: 'Reprehenderit in voluptates veritatis porro sunt cupiditate.',
      trigger: 'answer 2',
    },
  ];

  const [userInput, setUserInput] = React.useState('');
  const [userHistory, setUserHistory] = React.useState<string[]>([]);
  const [botHistory, setBotHistory] = React.useState<Steps[]>([]);
  const [botInput, setBotInput] = React.useState('answer 0');

  const onChange = (e: { target: { value: string } }) => {
    setUserInput(e.target.value);
  };

  const trigger = (input: string) => {
    for (let i = 0; i < steps.length; i++) {
      if (steps[i].trigger === input) {
        setBotHistory([...botHistory, steps[i]]);
      } else {
        setUserHistory([...userHistory]);
      }
    }
  };

  const onClick = (value: string) => {
    setTimeout(() => {
      trigger(value);
    }, 1000);
    setUserHistory([...userHistory, value]);
  };

  const onSubmit = () => {
    setTimeout(() => {
      setBotInput(userInput);
    }, 1000);
    setUserHistory([...userHistory, userInput]);
    setUserInput('');
  };

  React.useEffect(() => {
    trigger(botInput);
  }, [botInput]);

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
          py: 8,
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        {botHistory.map((el, i) => (
          <Box key={i} sx={{ my: 2 }}>
            <Typography variant="h6" sx={{ px: 2 }} gutterBottom>
              {el.message}
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
              {el.choices && (
                <Box>
                  {el.choices.map((el, i) => (
                    <Paper
                      key={i}
                      onClick={() => onClick(el)}
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
              )}
            </Stack>
            {userHistory[i] && (
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
                {userHistory[i]}
              </Paper>
            )}
          </Box>
        ))}
      </Stack>
      <Stack
        direction="row-reverse"
        sx={{
          position: 'fixed',
          left: 0,
          right: 0,
          p: 2,
          bottom: 10,
        }}
      >
        <Button onClick={onSubmit}>{data.submit}</Button>
        <InputBase
          onChange={onChange}
          value={userInput}
          sx={{
            borderRadius: 10,
            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
            width: 1,
            height: 50,
            bgcolor: 'white',
            px: 3,
            mx: 1,
          }}
          placeholder={data.placeholder}
        />
      </Stack>
    </Layout>
  );
};

export default Checking;
