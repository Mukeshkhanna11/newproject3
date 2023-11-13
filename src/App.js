function App() {
  const userInfo = [
    { username: "rejesh", location: "Madurai" },
    { username: "rejesh", location: "Madurai" },
  ];
  return (
    <>
      {userInfo.map((user) => (
        <ul key={Math.random() * user.length}>
          <li>{user.username}</li>
          <li>{user.location}</li>
        </ul>
      ))}
    </>
  );
}

export default App;
