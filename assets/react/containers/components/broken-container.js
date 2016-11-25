/* @flow */

import { compose, defaultProps } from 'recompose';
import Container from 'containers/components/container';
import withConnectToStore from 'containers/hocs/withConnectToStore';
import withInitialSideEffects from 'containers/hocs/withInitialSideEffects';

/**
 * Add the UI fields that are specific for this container.
 */
const withDefaultUI = defaultProps({
	ui: {}
});

export default compose(
	withDefaultUI,
	withConnectToStore,
	withInitialSideEffects,
)(Container);
