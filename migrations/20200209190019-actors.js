'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  db.createTable('actors', {
    seqId: {type: 'string'},
    id: { type: 'string', primaryKey: true },
    name: 'string',
    birthyear: 'string',
    deathyear: 'string',
    primaryProfession: {type: 'text[]'},
    knownForTitles: {type: 'text[]'}
  });
  return null;
};

exports.down = function(db) {
  db.dropTable('actors');
};

exports._meta = {
  "version": 1
};
