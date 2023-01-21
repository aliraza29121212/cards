import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Component/Header";
import Employees from "./Component/Employees";
import Footer from "./Component/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GroupedTeamMembers from "./Component/GroupedTeamMembers";
import Nav from "./Component/Nav";
import NotFound from "./Component/NotFound";

const App = () => {
  const [selectedTeam, setSelectedTeam] = useState(
    JSON.parse(localStorage.getItem("selectedTeam")) || ""
  );
  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employeList")) || [
      {
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamC",
      },
      {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB",
      },
      {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC",
      },
      {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD",
      },
    ]
  );

  // save data in localStorage
  useEffect(() => {
    localStorage.setItem("employeList", JSON.stringify(employees));
  }, [employees]);
  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  // function for getting the option feild value
  function handleTeamSelectionChange(event) {
    setSelectedTeam(event.target.value);
  }

  function handleEmployeeCardClick(event) {
    const transformedEmployees = employees.map((employee) =>
      employee.id === parseInt(event.currentTarget.id)
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectedTeam }
        : employee
    );

    setEmployees(transformedEmployees);
  }
  return (
    <Router>
      <Nav />
      <Header
        selectedTeam={selectedTeam}
        members={
          employees.filter((employee) => employee.teamName === selectedTeam)
            .length
        }
      />
      <Routes>
        <Route
          path="/"
          element={
            <Employees
              employees={employees}
              selectedTeam={selectedTeam}
              handleEmployeeCardClick={handleEmployeeCardClick}
              handleTeamSelectionChange={handleTeamSelectionChange}
            />
          }
        ></Route>
        <Route
          path="/GroupedTeamMembers"
          element={
            <GroupedTeamMembers
              employees={employees}
              selectedTeam={selectedTeam}
              setTeam={setSelectedTeam}
            />
          }
        ></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
