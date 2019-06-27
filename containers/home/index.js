// import { graphql, compose } from 'react-apollo';
import withData from '../../withData';
// import { query, mutation, subscription } from './_graphql';
import Index from './_component';

// const ComposedComponent = compose()(Index);

const ComposedComponent = (Index);

export default withData(ComposedComponent);
