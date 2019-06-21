import { withAppSyncData } from 'next-apollo-appsync';
import config from './appsync-config';

export default withAppSyncData(config)