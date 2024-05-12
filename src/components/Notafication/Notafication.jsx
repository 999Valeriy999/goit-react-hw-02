import PropTypes from 'prop-types';

const Notafication = ({ message = '' }) => {
  return (
    <>
      <p>{message}</p>
    </>
  );
};

Notafication.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notafication;
