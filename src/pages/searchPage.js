import { Breadcrumbs, Button, Container, createTheme, Grid, Link, Stack, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Attacker } from '../components/chart/attacker';
// import React from 'react';
import Title from '../components/chart/title';
import MainCard from '../components/lawCard';
import SearchTabs from '../components/search/search-tabs';
// --------------------------------------
const SearchPage = () => {
  const params = new URLSearchParams(window.location.search)
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    console.debug("서치텍스트어케돼?", params.get("searchText"))
    setSearchText(params.get("searchText"));
  }, [searchText])
  return (
    <>
      <SearchTabs searchText={searchText}></SearchTabs>
    </>
  )
};



SearchPage.getLayout = (page) => (
  { page }
);
export default SearchPage;