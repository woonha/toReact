import { Box, Breadcrumbs, Button, Container, createTheme, Grid, Link, Stack, TableContainer, Typography } from '@mui/material';
// import React from 'react';
import Title from '../components/chart/title';
import MainCard from '../components/lawCard';
import { styled } from "@mui/material/styles";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import axios from 'axios';


// --------------------------------------
const StatuteTest = () => {

    const [testData, setTestData] = useState([{
        "_id": {
            "$oid": "62b1848c2b16e3f2b1c0578e"
        },
        "법령아이디": "009620",
        "법령명한글": "학교폭력예방 및 대책에 관한 법률",
        "법령명약칭": "학교폭력예방법",
        "조문키": "0001001",
        "조문번호": "1",
        "조문가지번호": null,
        "조문제목": "목적",
        "조문내용": "제1조(목적) 이 법은 학교폭력의 예방과 대책에 필요한 사항을 규정함으로써 피해학생의 보호, 가해학생의 선도ㆍ교육 및 피해학생과 가해학생 간의 분쟁조정을 통하여 학생의 인권을 보호하고 학생을 건전한 사회구성원으로 육성함을 목적으로 한다.\n",
        "항": []
    }, {
        "_id": {
            "$oid": "62b1848c2b16e3f2b1c0578f"
        },
        "법령아이디": "009620",
        "법령명한글": "학교폭력예방 및 대책에 관한 법률",
        "법령명약칭": "학교폭력예방법",
        "조문키": "0002001",
        "조문번호": "2",
        "조문가지번호": null,
        "조문제목": "정의",
        "조문내용": "제2조(정의) 이 법에서 사용하는 용어의 정의는 다음 각 호와 같다. <개정 2009.5.8, 2012.1.26, 2012.3.21>\n",
        "항": [
            {
                "항번호": 1,
                "항내용": null,
                "호": [
                    {
                        "호번호": 1,
                        "호내용": "  1. \"학교폭력\"이란 학교 내외에서 학생을 대상으로 발생한 상해, 폭행, 감금, 협박, 약취ㆍ유인, 명예훼손ㆍ모욕, 공갈, 강요ㆍ강제적인 심부름 및 성폭력, 따돌림, 사이버 따돌림, 정보통신망을 이용한 음란ㆍ폭력 정보 등에 의하여 신체ㆍ정신 또는 재산상의 피해를 수반하는 행위를 말한다.\n\t\t\t\t\t"
                    },
                    {
                        "호번호": 2,
                        "호내용": "  1의2. \"따돌림\"이란 학교 내외에서 2명 이상의 학생들이 특정인이나 특정집단의 학생들을 대상으로 지속적이거나 반복적으로 신체적 또는 심리적 공격을 가하여 상대방이 고통을 느끼도록 하는 일체의 행위를 말한다.\n\t\t\t\t\t"
                    },
                    {
                        "호번호": 3,
                        "호내용": "  1의3. \"사이버 따돌림\"이란 인터넷, 휴대전화 등 정보통신기기를 이용하여 학생들이 특정 학생들을 대상으로 지속적, 반복적으로 심리적 공격을 가하거나, 특정 학생과 관련된 개인정보 또는 허위사실을 유포하여 상대방이 고통을 느끼도록 하는 일체의 행위를 말한다.\n\t\t\t\t\t"
                    },
                    {
                        "호번호": 4,
                        "호내용": "  2. \"학교\"란 「초ㆍ중등교육법」 제2조에 따른 초등학교ㆍ중학교ㆍ고등학교ㆍ특수학교 및 각종학교와 같은 법 제61조에 따라 운영하는 학교를 말한다.\n\t\t\t\t\t"
                    },
                    {
                        "호번호": 5,
                        "호내용": "  3. \"가해학생\"이란 가해자 중에서 학교폭력을 행사하거나 그 행위에 가담한 학생을 말한다.\n\t\t\t\t\t"
                    },
                    {
                        "호번호": 6,
                        "호내용": "  4. \"피해학생\"이란 학교폭력으로 인하여 피해를 입은 학생을 말한다.\n\t\t\t\t\t"
                    },
                    {
                        "호번호": 7,
                        "호내용": "  5. \"장애학생\"이란 신체적ㆍ정신적ㆍ지적 장애 등으로 「장애인 등에 대한 특수교육법」 제15조에서 규정하는 특수교육을 필요로 하는 학생을 말한다.\n\t\t\t\t\t"
                    }
                ]
            }
        ]
    }, {
        "_id": {
            "$oid": "62b1848c2b16e3f2b1c05790"
        },
        "법령아이디": "009620",
        "법령명한글": "학교폭력예방 및 대책에 관한 법률",
        "법령명약칭": "학교폭력예방법",
        "조문키": "0003001",
        "조문번호": "3",
        "조문가지번호": null,
        "조문제목": "해석ㆍ적용의 주의의무",
        "조문내용": "제3조(해석ㆍ적용의 주의의무) 이 법을 해석ㆍ적용함에 있어서 국민의 권리가 부당하게 침해되지 아니하도록 주의하여야 한다.\n",
        "항": []
    }, {
        "_id": {
            "$oid": "62b1848c2b16e3f2b1c05791"
        },
        "법령아이디": "009620",
        "법령명한글": "학교폭력예방 및 대책에 관한 법률",
        "법령명약칭": "학교폭력예방법",
        "조문키": "0004001",
        "조문번호": "4",
        "조문가지번호": null,
        "조문제목": "국가 및 지방자치단체의 책무",
        "조문내용": "제4조(국가 및 지방자치단체의 책무)\n",
        "항": [
            {
                "항번호": 1,
                "항내용": " ① 국가 및 지방자치단체는 학교폭력을 예방하고 근절하기 위하여 조사ㆍ연구ㆍ교육ㆍ계도 등 필요한 법적ㆍ제도적 장치를 마련하여야 한다.\n\t\t\t\t",
                "호": []
            },
            {
                "항번호": 1,
                "항내용": "  ② 국가 및 지방자치단체는 청소년 관련 단체 등 민간의 자율적인 학교폭력 예방활동과 피해학생의 보호 및 가해학생의 선도ㆍ교육활동을 장려하여야 한다.\n\t\t\t\t",
                "호": []
            },
            {
                "항번호": 1,
                "항내용": "  ③ 국가 및 지방자치단체는 제2항에 따른 청소년 관련 단체 등 민간이 건의한 사항에 대하여는 관련 시책에 반영하도록 노력하여야 한다.\n\t\t\t\t",
                "호": []
            },
            {
                "항번호": 1,
                "항내용": "  ④ 국가 및 지방자치단체는 제1항부터 제3항까지의 규정에 따른 책무를 다하기 위하여 필요한 행정적ㆍ재정적 지원을 하여야 한다. <개정 2012.3.21>\n\t\t\t\t",
                "호": []
            }
        ]
    }, {
        "_id": {
            "$oid": "62b1848c2b16e3f2b1c05792"
        },
        "법령아이디": "009620",
        "법령명한글": "학교폭력예방 및 대책에 관한 법률",
        "법령명약칭": "학교폭력예방법",
        "조문키": "0005001",
        "조문번호": "5",
        "조문가지번호": null,
        "조문제목": "다른 법률과의 관계",
        "조문내용": "제5조(다른 법률과의 관계)\n",
        "항": [
            {
                "항번호": 1,
                "항내용": " ① 학교폭력의 규제, 피해학생의 보호 및 가해학생에 대한 조치에 있어서 다른 법률에 특별한 규정이 있는 경우를 제외하고는 이 법을 적용한다.\n\t\t\t\t",
                "호": []
            },
            {
                "항번호": 1,
                "항내용": "  ② 제2조제1호 중 성폭력은 다른 법률에 규정이 있는 경우에는 이 법을 적용하지 아니한다.\n\t\t\t\t",
                "호": []
            }
        ]
    }
    ])
    useEffect(() => {
        axios.post("/statute/getList", {})
            .then(res => res)
            .then(res => {
                setTestData(res.data)
                console.debug(res, " 어떻게fhk")
            })
    }, [])

    function test(test) {
        const 조문제목 = test["조문제목"] + ")"
        return [test["조문내용"].split(조문제목)[0] + test["조문제목"] + ")", test["조문내용"].split(조문제목)[1]]
    }
    return (
        <Container maxWidth="lg" sx={{ mb: 4 }}>
            <Box
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    m: 1
                }}
            >
                <Typography
                    sx={{ m: 2 }}
                    variant="h4"
                >
                    법령
                </Typography>
            </Box>

            <Grid item xs={12} lg={6}>

                <TableContainer>
                    <Table sx={{ minWidth: 1000 }} >
                        {/* <TableHead>
                            <TableRow>
                                <TableCell>조</TableCell>
                                <TableCell>법령 내용</TableCell>
                            </TableRow>
                        </TableHead> */}
                        <TableBody
                            borderBottom='1px solid #FE4279'>
                            {testData.map(data => (
                                <TableRow

                                    key={test(data)[1]}

                                // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell
                                        borderBottom='1px solid ##FE4279' >
                                        {test(data)[0]}
                                    </TableCell >
                                    <TableCell align="left">
                                        <Typography variant="body2" gutterBottom>
                                            {test(data)[1]}
                                        </Typography>
                                        {data["항"].map(hang => {
                                            return (
                                                <>
                                                    <Typography variant="body2" gutterBottom>
                                                        {hang["항내용"]}
                                                    </Typography>

                                                    {hang["호"].map(ho => {
                                                        return (
                                                            <Typography color="textSecondary" variant="body2" gutterBottom>
                                                                {ho["호내용"]}
                                                            </Typography>
                                                        )
                                                    })}
                                                </>
                                            )
                                        })
                                        }
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid >
        </Container >
    );
};

StatuteTest.getLayout = (page) => (
    { page }
    // <DashboardLayout>
    //     {page}
    // </DashboardLayout>
);
export default StatuteTest;