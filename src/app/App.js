import { Formik } from 'formik';
import BasicFormSchema from "./BasicFormSсhema";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function App() {
  let response = async (date) => await fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(date)
  });
  return (
    <Formik
      initialValues={{
        card: "",
        dateCard: "",
        cvrCard: "",
        amount: "",
      }}
      validationSchema={BasicFormSchema}
      onSubmit={(values) => response(values).json()}
    >
      {({ errors,
      touched,
      handleSubmit,
      handleChange
      }) => (
        <form className="App" onSubmit={handleSubmit}>
          <Grid
          container
          justifyContent="center">
            <Box
              alignItems="center"
              justifyContent="center"
              sx={{
                boxShadow: 5,
                width: '35em',
                color: '#71757a',
                pb: 3,
                pt: 1,
                my: 15,
                borderRadius: 4,
                textAlign: 'center',
                fontSize: '0.875rem',
                fontWeight: '700',
              }}
            >
              <Typography variant="h6" >
                Deposit
              </Typography>
              <Divider variant="middle"  sx={{
                textAlign: 'center',
                my: 1,
              }}/>
              <TextField
                name="card"
                onChange={handleChange}
                id="outlined-basic"
                label="Card number"
                variant="outlined"
                size="small"
                sx={{
                  width: 9/10,
                  mb: 2
                }}
                inputProps={{
                  maxLength: 16,
                }}/>
              <TextField
                name="dateCard"
                onChange={handleChange}
                id="outlined-basic"
                label="Expiration Date"
                variant="outlined"
                size="small"
                placeholder="01/11"
                inputProps={{
                  maxLength: 5,
                }}
                sx={{ width: "42%",
                  mx: 1,
                  mb: 2
                }}/>
              <TextField
                name="cvrCard"
                onChange={handleChange}
                id="outlined-basic"
                label="CVV"
                variant="outlined"
                size="small"
                inputProps={{
                  maxLength: 3,
                }}
                sx={{ width: "45%",
                  mx: 1,
                  mb: 2
                  }} />
              <TextField
                name="amount"
                onChange={handleChange}
                id="outlined-basic"
                label="Amount"
                variant="outlined"
                inputProps={{
                  maxLength: 16,
                }}
                size="small"
                sx={{ width: 9/10,
                  mb: 3
              }} />
              <Button
                type='submit'
                variant="contained"
                sx={{
                  mx: 2,
                  width: 9/10
                }}>
                  Pay
              </Button>
              <Box
                sx={{
                  mx: 3,
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  {errors.card &&
                  touched.card && (
                    <Typography
                      variant="h10"
                      sx={{
                        color: '#c9141c'
                      }}>
                        {errors.card}
                    </Typography>
                  )}
                  {errors.dateCard &&
                  touched.dateCard && (
                    <Typography
                      variant="h10"
                      sx={{
                        color: '#c9141c'
                      }}>
                        {errors.dateCard}
                    </Typography>
                  )}
                  {errors.cvrCard &&
                  touched.cvrCard && (
                    <Typography
                      variant="h10"
                      sx={{
                        color: '#c9141c'
                      }}>
                        {errors.cvrCard}
                    </Typography>
                  )}
                  {errors.amount &&
                  touched.amount && (
                    <Typography
                      variant="h10"
                      sx={{
                        color: '#c9141c'
                      }}>
                        {"Enter the number at Amount"}
                    </Typography>
                  )}
              </Box>
            </Box>
          </Grid>
        </form>
      )}
    </Formik>
  );
}

export default App;