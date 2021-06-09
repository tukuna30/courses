/* eslint-disable class-methods-use-this */
const users = [
    { id: 1, firstName: 'Subhasmita', lastName: 'Khamari', active: true },
    { id: 2, firstName: 'Akankshya', lastName: 'Behera', active: true },
    { id: 3, firstName: 'Suman', lastName: 'Patra', active: true },
    { id: 4, firstName: 'Deepak', lastName: 'Naik', active: true }
];

// CRUD
// View : GET /users
// view one user : GET /user/:id
// Add : POST /user
// Delete : DELETE /user/:id
// Update : PUT/PATCH /user/:id

class UserUtil {
    getUsers() {
        return users;
    }

    getUser(id) {
        const user = users.find((u) => {
            return u.id === parseInt(id, 10);
        });

        return user || {};
    }

    addUser(user) {
        users.push({ ...user, id: users.length + 1 });
        return user;
    }

    updateUser(id, updates) {
        const index = users.findIndex((u, i) => {
            return u.id === parseInt(id, 10);
        });
        const oldUser = users[index];
        users[index] = { oldUser, ...updates };
        return users[index];
    }

    deleteUser(id) {
        const index = users.findIndex((u, i) => {
            return u.id === parseInt(id, 10);
        });
        users.splice(index, 1);
    }
}

module.exports = new UserUtil();
