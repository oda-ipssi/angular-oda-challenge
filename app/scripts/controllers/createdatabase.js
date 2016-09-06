'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:CreatedatabaseCtrl
 * @description
 * # CreatedatabaseCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('CreatedatabaseCtrl', function ($scope, $http) {
    $scope.fieldTypes = [
        {
            'name': 'integer',
            'attributes': [
                'unsigned'
            ],
            params: [
              {
                'name' : 'ai',
                'controlType' : 'boolean'
              }
            ],
            'controlType' : 'number'
        },
        {
            'name': 'big-integer',
            'attributes': [
                'unsigned'
            ],
            'ai' : 'boolean',
            'controlType' : 'number'
        },
        {
            'name': 'medium-integer',
            'attributes': [
                'unsigned'
            ],
            'ai' : 'boolean',
            'controlType' : 'number'
        },
        {
            'name': 'small-integer',
            'attributes': [
                'unsigned'
            ],
            'ai' : 'boolean',
            'controlType' : 'number'
        },
        {
            'name': 'tiny-integer',
            'attributes': [
                'unsigned'
            ],
            'ai' : 'boolean',
            'controlType' : 'number'
        },
        {
            'name': 'float',
            'controlType' : 'number'
        },
        {
            'name': 'double',
            'digits': 10,
            'precision': 5,
            'controlType' : 'number'
        },
        {
            'name': 'decimal',
            'digits': 10,
            'precision': 5,
            'controlType' : 'number'
        },
        {
            'name': 'string',
            'length': 50,
            'controlType' : 'string'
        },
        {
            'name': 'char',
            'length': 10,
            'controlType' : 'string'
        },
        {
            'name': 'text',
            'controlType' : 'string'
        },
        {
            'name': 'long-text',
            'controlType' : 'string'
        },
        {
            'name': 'medium-text',
            'controlType' : 'string'
        },
        {
            'name': 'date',
            'controlType' : 'string'
        },
        {
            'name': 'time',
            'controlType' : 'string'
        },
        {
            'name': 'date-time',
            'controlType' : 'string'
        },
        {
            'name': 'timestamp',
            'controlType' : 'number'
        },
        {
            'name': 'enum',
            'values': ['wizard', 'muggle'],
            'controlType' : 'object'
        },
        {
            'name': 'boolean',
            'controlType' : 'bool'
        },
        {
            'name': 'json',
            'controlType' : 'string'
        },
        {
            'name': 'jsonb',
            'controlType' : 'string'
        },
        {
            'name': 'morphs',
            'controlType' : 'string'
        },
        {
            'name': 'binary',
            'controlType' : 'string'
        }
    ];

    $scope.fieldParams = [
      {
        'name' : 'default',
        'controlType' : 'string',
        'val' : ''
      },
      {
        'name' : 'nullable',
        'controlType' : 'boolean',
        'val' : false
      },
      {
        'name' : 'primary',
        'controlType' : 'boolean',
        'val' : false
      },
      {
        'name' : 'unique',
        'controlType' : 'boolean',
        'val' : false
      },
      {
        'name' : 'foreign',
        'controlType' : 'string',
        'val' : ''
      },
      {
        'name' : 'description',
        'controlType' : 'string',
        'val' : ''
      }
    ];

    $scope.tableParams = [
      {
        'name' : 'timestamps',
        'name': 'boolean'
      },
      {
        'name' : 'soft-deletes',
        'name': 'boolean'
      }
    ];

    $scope.fieldId = 0;

    $scope.currentFieldType = '';

    $scope.database = {
      'db': 'testDb',
      'fields': {}
    };

    $scope.setFieldType = function() {
      // Get current field type
      var fieldType = $scope.fieldTypes[$scope.fieldId];

      // Store defaults parameters
      var _tmpParams = angular.copy($scope.fieldParams);

      // For each specific elements in field type
      for(var i in fieldType.params) {
        // Add current speficic parameter in defaults parameters
        _tmpParams.push(fieldType.params[i]);
      }

      // Overwrite specifics parameters of field type
      fieldType.params = _tmpParams;
      _tmpParams = false;

      $scope.currentFieldType = fieldType;
    };

    $scope.addField = function() {
      if(typeof jQuery('#field-name').val() !== 'string') {
        throw new Error('Field name must be a string');
      }
      else {
        var fieldName = jQuery('#field-name').val();

        $scope.database.fields[ fieldName ] = {
          'type' : $scope.currentFieldType.name
        };

        for(var i in $scope.currentFieldType.params) {
          $scope.database.fields[ fieldName ][ $scope.currentFieldType.params[i].name ] = $scope.currentFieldType.params[i].val
        }

        console.log($scope.database);

        $scope.fieldId = 0;
        $scope.currentFieldType = '';
      }
    };

    $scope.createDb = function() {
      $http.post('127.0.0.1:8000/', {data: $scope.database}).then(
        function() {

        },

        function() {

        }
      );

    };
  });
