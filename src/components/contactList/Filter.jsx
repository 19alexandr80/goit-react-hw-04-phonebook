import PropTypes from 'prop-types';

export const Filter = ({ filter, onChange }) => {
  return (
    <label>
      Name
      <input
        type="text"
        name="filter"
        placeholder="Neme Surname"
        value={filter}
        onChange={onChange}
        required
      />
    </label>
  );
};
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
