import React, { PureComponent } from "react";
import axios from "axios";
import PopUp from "./PopUp";

class Articles extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPopActive: false,
    };
  }

  componentDidMount = async () => {
    await axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then((res) => {
        this.setState({ data: res.data.data });
      });
  };

  handleEmployee = (e) => {
    this.setState({ isPopActive: true });
    let employee = this.state.data.find((emp) => emp.id === e);

    if (employee.employee_age <= 58) {
      employee.status = "Active";
    }
    else {
        employee.status = "Non-Active";
    }
    console.log(employee);
    this.setState({ employeeData: employee });
  };

  handlePopUp = () => {
    this.setState({
      isPopActive: false,
    });
  };

  render() {
    const { data, isPopActive } = this.state;
    return (
      <section className="article">
        <div className="container">
          {data ? (
            <ul className="users-list">
              {data.map((emp) => (
                <li key={emp.id}>
                  <div>
                    <i className="fa fa-user"></i>
                  </div>
                  <h4>{emp.employee_name}</h4>
                  <button
                    className="primary-btnClass"
                    onClick={() => this.handleEmployee(emp.id)}
                  >
                    View Details
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
          {isPopActive ? (
            <PopUp
              handlePopUp={this.handlePopUp}
              employeeData={this.state.employeeData}
            />
          ) : null}
        </div>
      </section>
    );
  }
}

export default Articles;
