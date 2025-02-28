import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function BettingForm() {
    const namesArray = [
        { id: 1, name: "AJ Zimmerman" },
        { id: 2, name: "Max Girasol" },
        { id: 3, name: "Faiq Ahmad" },
        { id: 4, name: "joewid Sharza" },
        { id: 5, name: "CMoney." },
        { id: 6, name: "DJ Chrispy." },
        { id: 7, name: "Stephen Thomas" },
        { id: 8, name: "Ani Undrakonda" },
        { id: 9, name: "Anish Ivaturi" },
        { id: 10, name: "Joshua St. Laurent" },
        { id: 11, name: "Matt Cheng" },
        { id: 12, name: "Timothy Germano" },
        { id: 13, name: "Dev Patel" },
        { id: 14, name: "Hilarion Wilkenson" },
        { id: 15, name: "Lavanya Goel" },
        { id: 16, name: "Robin Pan" },
        { id: 17, name: "Henry Daley" },
        { id: 18, name: "Tia Nguyen" },
        { id: 19, name: "Ben Baiel" },
        { id: 20, name: "weiting Huang" },
        { id: 21, name: "Chris Park" },
        { id: 22, name: "Kasey Simmons" },
        { id: 23, name: "Nate Notterman" }
    ];

    return (
        <>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Bettor</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Bettor"
                >
                    {namesArray.map((row) => (
                        <MenuItem key={row.id} value={row.name}>
                            {row.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Betting For</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Betting For"
                >
                    {namesArray.map((row) => (
                        <MenuItem key={row.id} value={row.name}>
                            {row.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    );
}

export default BettingForm;
