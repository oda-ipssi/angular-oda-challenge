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

              // Listener on change grid value
              tbDatas.opts.onRegisterApi = function(gridApi) {
                //set gridApi on scope
                $scope.gridApi = gridApi;
                gridApi.edit.on.afterCellEdit($scope, function(rowEntity, colDef, newValue, oldValue) {
                  //Do your REST call here via $http.get or $http.post
                  if(newValue !== oldValue) {
                    console.log('ID de la colonne modifiée : ' + rowEntity.id);
                    console.log('Colonne modifiée : ' + colDef.name);
                    console.log('Ancienne valeure : ' + oldValue);
                    console.log('Nouvelle valeure : ' + newValue);
                    console.log('Dans la base de donnée : '+ database.name);
                    console.log('Et dans la table : '+ tbDatas.name);
                    console.log(rowEntity);
                  }
                });
              };

              // Push column definition
              tbDatas.opts.columnDefs.push(columnDef);
            });

            dbDatas.tables.push(tbDatas);
          });

          // Push grid options in tab
          $scope.gridsDatas.push(dbDatas);
        });

        console.log($scope);
      },

      function(error) {
        console.log(error);
      }
    );
  });
