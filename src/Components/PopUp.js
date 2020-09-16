import React from "react";

function PopUp({ employeeData, handlePopUp }) {
  return (
    <div>
      <div
        className={
          employeeData.status === 'Active' ? "popup popActive" : "popup popNonActive"
        }
        onClick={handlePopUp}
      ></div>
      <div className="popup_inner">
          <i className="fa fa-times" onClick={handlePopUp}></i>
        <div className="text-center">
          <i className="fa fa-user"></i>
        </div>
        <table className="userData">
          <tbody>
            <tr>
              <td>Name</td>
              <td>:</td>
              <td className="employeeVal">{employeeData.employee_name}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>:</td>
              <td className={employeeData.status === 'Active' ? "active employeeVal" : "nonActive employeeVal"}>{employeeData.status}</td>
            </tr>
            <tr>
              <td>Salary</td>
              <td>:</td>
              <td className="employeeVal">{employeeData.employee_salary}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>:</td>
              <td className="employeeVal">{employeeData.employee_age}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PopUp;
