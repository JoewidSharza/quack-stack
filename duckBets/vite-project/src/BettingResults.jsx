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
  { id: 20, name: "Weiting Huang" },
  { id: 21, name: "Chris Park" },
  { id: 22, name: "Kasey Simmons" },
  { id: 23, name: "Nate Notermann" },
];

function BettingResults() {
  return (
    <table>
      <thead>
        <tr>
          <th>Ducks</th>
          <th>W/L</th>
        </tr>
      </thead>
      <tbody>
        {namesArray.map((duckName) => (
          <tr key={duckName.id}>
            <td>{duckName.name}</td>
            <td>{duckName.id}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BettingResults;
