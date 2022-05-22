import React from 'react'
import {
    Bracket,
    Seed,
    SeedItem,
    SeedTeam
  } from "react-brackets";

//Dummy Tournament data
const rounds = [
    {
        title: 'Round one',
        seeds: [
            {
                id: 1,
                date: new Date().toDateString(),
                teams: [
                    { name: 'Team A',score: 7},
                    { name: 'Team B',score: 2}],
            },
            {
                id: 2,
                date: new Date().toDateString(),
                teams: [
                    { name: 'Team C',score: 2},
                    { name: 'Team D',score: 5}],
            },
            {
                id: 4,
                date: new Date().toDateString(),
                teams: [
                    { name: 'Team E',score: 2},
                    { name: 'Team F',score: 3}],
            },
            {
                id: 4,
                date: new Date().toDateString(),
                teams: [
                    { name: 'Team G',score: 1},
                    { name: 'Team H',score: 0}],
            },
            {
                id: 5,
                date: new Date().toDateString(),
                teams: [
                    { name: 'Team I',score: 2},
                    { name: 'Team J',score: 0}],
            },
            {
                id: 6,
                date: new Date().toDateString(),
                teams: [
                    { name: 'Team K',score: 0},
                    { name: 'Team L',score: 2}],
            },
            {
                id: 7,
                date: new Date().toDateString(),
                teams: [
                    { name: 'Team M',score: 1},
                    { name: 'Team N',score: 2}],
            },
            {
                id: 8,
                date: new Date().toDateString(),
                teams: [
                    { name: 'Team O',score: 2},
                    { name: 'Team P',score: 5}],
            },
        ],
    },
    {
        title: 'Quater Finals',
        seeds: [
            {
                id: 9,
                date: new Date().toDateString(),
                teams: [
                    { name: 'Team A',score: 0},
                    { name: 'Team D',score: 2}],
            },
            {
                id:10,
                date: new Date().toDateString(),
                teams: [
                    { name: 'Team F',score: 3},
                    { name: 'Team G',score: 2}],
            },
            {
                id: 11,
                date: new Date().toDateString(),
                teams: [
                    { name: 'Team I',score: 1},
                    { name: 'Team L',score: 2}],
            },
            {
                id: 12,
                date: new Date().toDateString(),
                teams: [
                    { name: 'Team N',score: 3},
                    { name: 'Team P',score: 2}],
            },
        ],
    },
    {
        title: 'Semi Finals',
        seeds: [
            {
                id: 13,
                date: new Date().toDateString(),
                teams: [
                    { name: 'Team D',score: 6},
                    { name: 'Team F',score: 2}],
            },
            {
                id: 14,
                date: new Date().toDateString(),
                teams: [
                    { name: 'Team L',score: 0},
                    { name: 'Team N',score: 1}],
            }
        ],
    },
    {
        title: 'Finals',
        seeds: [
            {
                id: 15,
                date: new Date().toDateString(),
                teams: [
                    { name: 'Team D',score: 2},
                    { name: 'Team N',score: 3}],
            }
        ],
    }
];

const Brackets = ({PlayerTeam}) => {

    const CustomSeed = ({ seed,breakpoint}) => {

        const homeTeam = seed.teams[0];
        const awayTeam = seed.teams[1];

        return (
            <Seed mobileBreakpoint={breakpoint} style={{ fontSize: 14 }}>
                <SeedItem>
                    <div>
                        <SeedTeam
                            style={{
                                backgroundColor: ((homeTeam.name === PlayerTeam && "#2a7fd5") || (homeTeam.score > awayTeam.score && "#e0e1e2") || (homeTeam.score < awayTeam.score && "#909090")),
                                color: ((homeTeam.name === PlayerTeam && "white") || (homeTeam.score > awayTeam.score && "black"))
                            }}
                        >
                            <div>{homeTeam.name}</div>
                            <div>{homeTeam.score}</div>
                        </SeedTeam>
                        <SeedTeam
                            style={{
                                backgroundColor: ((awayTeam.name === PlayerTeam && "#2a7fd5") || (homeTeam.score < awayTeam.score && "#e0e1e2") || (homeTeam.score > awayTeam.score && "#909090")),
                                color:((awayTeam.name === PlayerTeam && "white") || (homeTeam.score < awayTeam.score && "black"))
                            }}
                        >
                            <div>{awayTeam.name}</div>
                            <div>{awayTeam.score}</div>
                        </SeedTeam>
                    </div>
                </SeedItem>
                <div>{seed.date}</div>
            </Seed>
        );
    };

    return (
        <>
            <Bracket
                rounds={rounds}
                renderSeedComponent={CustomSeed}    
            />
        </>
    )
}

Brackets.defaultProps = {
    PlayerTeam:"Team D"
}
export default Brackets