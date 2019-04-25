import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import DatePicker from 'react-date-picker';
import moment from 'moment';

class QuoteForm extends React.Component {
  addDays = days => {
    var date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  };

  renderError({ error, touched }) {
    if (touched && error) {
      return <div>{error}</div>;
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <div>
        <label>{label}</label>
        <input {...input} autocomplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  renderDatePicker = ({
    input: { onChange, value },
    filterDate,
    label,
    meta
  }) => {
    return (
      <div>
        <label>{label}</label>
        <DatePicker
          onChange={onChange}
          format="MM-dd-y"
          minDate={new Date()}
          filterDate={filterDate}
          value={!value ? null : new Date(value)}
        />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          name="startDate"
          label="Enter the Start date"
          component={this.renderDatePicker}
        />
        <Field
          name="endDate"
          label="Enter the End date"
          filterDate={date => {
            return moment() > date;
          }}
          component={this.renderDatePicker}
        />
        <Field
          name="policyMax"
          label="Polici max"
          component={this.renderInput}
        />
        <Field
          name="citizenship"
          label="Citizenship"
          component={this.renderInput}
        />
        <Field name="age" label="Age" component={this.renderInput} />
        <Field
          name="mailingState"
          label="Mailing State"
          component={this.renderInput}
        />
        <button>Submit</button>
      </form>
    );
  }
}

QuoteForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};
const validate = formValues => {
  const errors = {};
  if (!formValues.startDate) {
    errors.title = 'You must eneter an start date';
  }
  return errors;
};

export default reduxForm({
  form: 'quoteForm',
  validate: validate
})(QuoteForm);
