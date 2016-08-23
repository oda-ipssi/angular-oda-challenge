'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:TestjsonCtrl
 * @description
 * # TestjsonCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('TestjsonCtrl', function ($http, $scope, $location) {
    $scope.gridsDatas = [];

    $http.get('http://' + $location.host() + ':' + $location.port() + '/json/databases.json' ).then(
      function(success) {

        // Loop on databases
        success.data.databases.forEach(function(database) {
          var dbDatas = {
            name: database.name,
            tables: []
          };

          // Loop on tables
          database.tables.forEach(function(table) {

            var tbDatas = {
              name: table.name,
              opts: {
                enableCellEditOnFocus: true,
                paginationPageSizes: [25, 50, 75],
                paginationPageSize: 25,
                data: table.datas,
                columnDefs: []
              }
            };

            // Loop on fields
            table.fields.forEach(function(field) {

              // Create column definition
              var columnDef = {
                name: field.title,
                enableCellEdit: false,
                width: field.maxSize
              };

              // If the field isn't a primary key
              if( !field.pk ) {
                columnDef.enableCellEdit = true;
              }

              // Push column definition
              tbDatas.opts.columnDefs.push(columnDef);
            });

            dbDatas.tables.push(tbDatas);
          });

          // Push grid options in tab
          $scope.gridsDatas.push(dbDatas);
        });
      },

      function(error) {
        console.log(error);
      }
    );
  });
