var todoApp = angular.module('todoApp', ['ui.tree']);

todoApp.controller('todoCtrl', function($scope) {
    console.log("todoCtrl");

    // add sub item
    $scope.addSubItem = function(scope) {
	var nodeData = scope.$modelValue;
	nodeData.nodes.push({
	    id: nodeData.id * 10 + nodeData.nodes.length,
	    title: 'new item',
	    done: false,
	    nodes: []
	});
    };

    // add item
    $scope.addItem = function(newitem) {
	console.log("add item");
	console.log(newitem);
	$scope.data.push({
	    id: $scope.data.length + 1,
	    title: newitem,
	    done: false,
	    nodes: []
	});
    };

    // edit item
    $scope.editing = null;
    var originalTitle;
    $scope.startEdit = function(node) {
	console.log("edit todo");
	console.log(node);
	console.log(node.title);
	originalTitle = node.title;
	$scope.editing = node;
    };
    $scope.doneEdit = function() {
	console.log("done edit");
	$scope.editing = null;
    };

    $scope.data = [
	{
	    "id": 1,
	    "title": "ToDo1",
	    "done": false,
	    "nodes": [
		{
		    "id": 11,
		    "title": "ToDo1.1",
		    "done": false,
		    "nodes": []
		}
	    ]
	},
	{
	    "id": 2,
	    "title": "ToDo2",
	    "done": false,
	    "nodes": [
		{
		    "id": 21,
		    "title": "ToDo2.1",
		    "done": false,
		    "nodes": []
		}
	    ]
	}
    ];
});
