import React from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export class AppointmentsPage extends React.Component {
  state = {
    title: '',
    contact: '',
    date: '',
    time: ''
  };

  onTitleChange = (e) => {
    this.setState({ title: e.target.value })
  };

  onContactChange = (e) => {
    this.setState({ contact: e.target.value })
  };

  onDateChange = (e) => {
    this.setState({ date: e.target.value })
  };

  onTimeChange = (e) => {
    this.setState({ time: e.target.value })
  };

  clearData = () => {
    this.setState({
      title: '',
      contact: '',
      date: '',
      time: ''
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    this.props.addAppointment(this.state);
    this.clearData();
  };

  render() {
    return (
      <div>
        <section>
          <h2>Add Appointment</h2>
          <AppointmentForm 
            title={this.state.title}
            contact={this.state.contact}
            date={this.state.date}
            time={this.state.time}
            setTitle={this.onTitleChange}
            setContact={this.onContactChange}
            setTime={this.setTime}
            setDate={this.setDate}
            handleSubmit={this.handleSubmit} />
        </section>
        <hr />
        <section>
          <h2>Appointments</h2>
          <TileList arr={this.props.appointments} />
        </section>
      </div>
    );
  }

}
