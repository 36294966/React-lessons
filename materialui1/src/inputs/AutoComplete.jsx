import { Stack } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import React from "react";

const AutoComplete = () => {
  const names = ["clint", "sarah", "James", "John", "Ashley"];

  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
    {
      label: "The Lord of the Rings: The Return of the King",
      year: 2003
    },
    { label: "The Good, the Bad and the Ugly", year: 1966 },
    { label: "Fight Club", year: 1999 },
    {
      label: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001
    }
  ];
  const options = top100Films.map((option) => {
    const firstLetter = option.label[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option
    };
  });
  return (
    <div>
      <Stack paddingY={3}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={names}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Names" />}
        />
      </Stack>
      <Stack paddingY={3}>
        <Autocomplete
          limitTags={2}
          multiple
          defaultValue={[top100Films[0], top100Films[1]]}
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Films" />}
        />
      </Stack>
      <Stack paddingY={3}>
        <Autocomplete
          multiple
          limitTags={2}
          id="grouped-demo"
          options={options.sort(
            (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
          )}
          groupBy={(option) => option.firstLetter}
          getOptionLabel={(option) => option.label}
          sx={{ width: 500 }}
          renderInput={(params) => (
            <TextField {...params} label="With categories" />
          )}
        />
      </Stack>
    </div>
  );
};

export default AutoComplete;
