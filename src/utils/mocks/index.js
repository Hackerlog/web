import user from './user';
import job from './job';
import project from './project';

const types = { user, job };

const mock = (mockType, overrides = {}, times) => ({ ...types[mockType](times), ...overrides });

export default mock;
export { user, job, project };
