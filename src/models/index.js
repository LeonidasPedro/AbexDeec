import User from './User';

(async () => {
    User.sync({ force: true });
})();    
