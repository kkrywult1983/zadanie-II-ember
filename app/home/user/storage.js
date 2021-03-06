import StorageObject from 'ember-local-storage/local/object';

const Storage = StorageObject.extend();

// Uncomment if you would like to set initialState
Storage.reopenClass({
  initialState() {
    return {
      id: 1,
      username: 'Kamil',
      password: 'admin123',
      email: 'admin@admin.com',
      isDeleted: false,
      isAdmin: true,
    };
  },
});

export default Storage;
