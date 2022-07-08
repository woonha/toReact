const Blank = () => {
  return (
    <>
      <Container component="main" maxWidth="sm">
        <Box
          component="main"
          sx={{
            alignItems: 'center',
            // display: 'flex',
            flexGrow: 1,
            minHeight: '100%',
            mt: 2
          }}
        >
          <Container maxWidth="sm">
            
          </Container>
        </Box>
      </Container>
    </>
  );
};

Blank.getLayout = (page) => (
    {page}
);


export default Blank;

