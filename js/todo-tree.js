var todoApp = angular.module('todoApp', ['ui.tree']);

todoApp.controller('todoCtrl', function($scope) {
    console.log("todoCtrl");

    $scope.newSubItem = function(scope) {
	var nodeData = scope.$modelValue;
	nodeData.nodes.push({
	    id: nodeData.id * 10 + nodeData.nodes.length,
	    title: 'new item',
	    nodes: []
	});
    };

    $scope.data = [
	{
	    "id": 1,
	    "title": "ToDo1",
	    "nodes": [
		{
		    "id": 11,
		    "title": "ToDo1.1",
		    "nodes": []
		}
	    ]
	},
	{
	    "id": 2,
	    "title": "ToDo2",
	    "nodes": [
		{
		    "id": 21,
		    "title": "ToDo2.1",
		    "nodes": []
		}
	    ]
	}
    ];

});
