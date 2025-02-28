import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


function BettingForm() {
  return (
    <>
    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
        >
            <MenuItem value={"Joewid"}>Joewid</MenuItem>
            <MenuItem value={"Faiq"}>Faiq</MenuItem>
            <MenuItem value={"Max"}>Max</MenuItem>
            <MenuItem value={"AJ"}>AJ</MenuItem>
        </Select>
    </FormControl>    
    </>
      
  )
}
export default BettingForm