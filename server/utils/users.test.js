const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
    var users;
    beforeEach(() => {
      users = new Users();
      users.users = [{
          id: '1',
          name: 'Mike',
          room: 'Math'
      }, {
        id: '2',
        name: 'Jen',
        room: 'Science'
    }, {
        id: '3',
        name: 'July',
        room: 'Math'
    }];
    });

    it('should add new user', () => {
       var users = new Users();
       var user = {
           id:'123',
           name: 'Emre',
           room: 'Office'
       };
       var resUser = users.addUser(user.id, user.name, user.room);

       expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
       var userId = '1',
       var user = users.removeUser(userId);

       expect(user.id).toBe(userId);
       expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        var userId = '112',
        var user = users.removeUser(userId);
 
        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
       var userId = '2';
       var user = users.getUser(userId);

       expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        var userId = '99';
       var user = users.getUser(userId);

       expect(user).toNotExist();
    });

    it('should return names for math', () => {
       var userList = users.getUserList('Math');

       expect(userList).toEqual(['Mike, July']);
    });

    it('should return names for science', () => {
        var userList = users.getUserList('Science');
 
        expect(userList).toEqual(['Jen']);
     });
});