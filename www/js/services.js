angular.module('starter.services', [])

        .factory('UserFactory', function ($localForage, $q) {
            var usersTable = $localForage.createInstance({name: 'users'});
            return {
                createUser: function (username, name) {
                    usersTable.setItem(username, {"username": username, "name": name});
                },
                listUsers: function () {
                    var defer = $q.defer();

                    var users = [];
                    usersTable.iterate(function (value, key, i) {
                        users.push(value);
                    }).then(function (data) {
                        defer.resolve(users);
                    });

                    return defer.promise;
                }
            };
        });