import './ItemListContainer.css';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Typography variant="h4" className="marginTop">{greeting}</Typography>
        </div>
      </div>
    </div>
  );
}

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired
}

export default ItemListContainer;