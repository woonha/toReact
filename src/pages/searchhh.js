import { Breadcrumbs, Button, Container, createTheme, Grid, Link, Stack, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Attacker } from '../components/chart/attacker';
// import React from 'react';
import Title from '../components/chart/title';
import MainCard from '../components/lawCard';
import SearchTabs from '../components/search/search-tabs';
// --------------------------------------
const SearchHa = () => {
  <>
    <SearchTabs></SearchTabs>
  </>
};



SearchHa.getLayout = (page) => (
  { page }
);
export default SearchHa;