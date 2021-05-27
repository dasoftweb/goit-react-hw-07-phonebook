import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactActions from '../../redux/contacts/contacts-actions';

const Filter = ({ value, onChange }) => (
  <label className="label">
    Find contacts by name
    <input
      className="input"
      type="text"
      value={value}
      onChange={onChange}
    ></input>
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
