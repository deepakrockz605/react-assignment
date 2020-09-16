import React, { PureComponent } from "react";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Contact extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      dob: null,
      ageNow: 0,
      lastName: "",
      email: "",
      errors: {},
      isFormCorrect: false,
    };
  }

  handleChange = (input) => (event) => {
    this.setState({ [input]: event.target.value });
  };

  handleDatePicker = (input) => async (date) => {
    await this.setState({
      dob: date,
    });

    var today = new Date();
    var birthDate = new Date(this.state.dob);
    var ageNow = today.getFullYear() - birthDate.getFullYear();
    this.setState({ ageNow });
  };

  handleFormSubmit = async (e) => {
    e.preventDefault();

    let result = this.handleValidation(this.state);
    if (result.count <= 0) {
      this.setState({ isFormCorrect: true });
    } else {
      await this.setState({ errors: result.errors });
    }
  };

  handleValidation = (e) => {
    const errors = [];
    let count = 0;
    if (this.state.firstName === "") {
      errors.firstName = "FirstName cannot be Empty !!";
      count = count + 1;
    } else {
      if (!this.state.firstName.match(/^[a-zA-Z]+$/)) {
        errors.firstName = "FirstName cannot contains spaces or Numbers !!";
        count = count + 1;
      }
    }

    if (this.state.lastName === "") {
      errors.lastName = "LastName cannot be Empty !!";
      count = count + 1;
    } else {
      if (!this.state.lastName.match(/^[a-zA-Z]+$/)) {
        errors.lastName = "LastName cannot contains spaces or Numbers !!";
        count = count + 1;
      }
    }

    if (this.state.email === "") {
      errors.email = "Email cannot be Empty !!";
      count = count + 1;
    } else {
      if (
        !this.state.email.match(
          /^[a-z0-9][a-z0-9-_.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/
        )
      ) {
        errors.email = "Invalid Email !!";
        count = count + 1;
      }
    }

    if (this.state.dob === null) {
      errors.dob = "Date Of Birth cannot be Empty !!";
      count = count + 1;
    } else {
      const agedata = new Date().getFullYear() - this.state.dob.getFullYear();
      if (agedata <= 4) {
        errors.dob = "Minimum Age should be 5 Years";
        count = count + 1;
      }
    }

    return { errors, count };
  };

  handleClose = () =>{
      this.props.history.push('/')
  }

  render() {
    const errors = this.state.errors;
    return (
      <div className="contactus">
        <div className="container">
          {this.state.isFormCorrect ? (
            <div>
              <div className="popup" onClick={this.handleClose}></div>
              <div className="popup_inner">
                <i className="fa fa-times" onClick={this.handleClose}></i>
                Thank You for your information soon one of our executive will
                contact you
              </div>
            </div>
          ) : (
            <div className="innerContact">
              <h1>Contact US</h1>
              <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="inputBox"
                    placeholder="First Name"
                    value={this.state.firstName}
                    onChange={this.handleChange("firstName")}
                  />
                  {errors.firstName ? (
                    <span className="error">{errors.firstName}</span>
                  ) : null}
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="inputBox"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    onChange={this.handleChange("lastName")}
                  />
                  {errors.lastName ? (
                    <span className="error">{errors.lastName}</span>
                  ) : null}
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="inputBox"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange("email")}
                  />
                  {errors.email ? (
                    <span className="error">{errors.email}</span>
                  ) : null}
                </div>

                <div className="form-group">
                  <Datepicker
                    placeholderText="Click to select a date"
                    onChange={this.handleDatePicker("dob")}
                    selected={this.state.dob}
                    className="u-full-width "
                    dateFormat="yyyy-MM-dd"
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                  />
                  {errors.dob ? (
                    <span className="error">{errors.dob}</span>
                  ) : null}
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="inputBox"
                    placeholder="Age"
                    onChange={this.handleChange("ageNow")}
                    disabled
                    value={this.state.ageNow + " Years"}
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="primary-btnClass">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Contact;
