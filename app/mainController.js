myApp.controller('mainController', ['$scope', function($scope) {
    var employeeList = [{
        id: 1,
        firstname: 'Renuka',
        lastname: 'Jogade',
        empcode: 101,
        joiningdate: '14 Feb 2016'
    }, {
        id: 2,
        firstname: 'Aman',
        lastname: 'Vinal',
        empcode: 102,
        joiningdate: '22 Feb 2016'
    }, {
        id: 3,
        firstname: 'Tanisha',
        lastname: 'Moze',
        empcode: 103,
        joiningdate: '19 Feb 2016'
    }, {
        id: 4,
        firstname: 'Bani',
        lastname: 'Lour',
        empcode: 104,
        joiningdate: '12 Feb 2016'
    }, {
        id: 5,
        firstname: 'Mayuri',
        lastname: 'Kadam',
        empcode: 105,
        joiningdate: '17 Feb 2016'
    }, {
        id: 6,
        firstname: 'Lokesh',
        lastname: 'Jha',
        empcode: 104,
        joiningdate: '15 Feb 2016'
    }]

    $scope.employeeList = employeeList;
    //hide employee edit page on page load
    $scope.showEditEmployeeModal = 'display-none';
    $scope.addEmployeeModal = 'display-none';

    // show employee edit page on edit button click
    $scope.editEmployeeInformation = function(empId) {
            //Display edit page
            $scope.showEditEmployeeModal = 'display-block';
            $scope.addEmployeeModal = 'display-none';
            for (var i = 0; i < employeeList.length; i++) {
                if (employeeList[i].id === empId) {
                    $scope.editEmpInfo = employeeList[i];
                }
            }
        }
        //update the employee information
    $scope.updateEmployeeInfo = function() {
        for (var i = 0; i < $scope.employeeList.length; i++) {
            if ($scope.employeeList[i].id === $scope.employeeList.id) {
                $scope.employeeList[i] = $scope.employeeList;
            }
        }
        $scope.showEditEmployeeModal = 'display-none';
    };
    // close employee edit page on close button click
    $scope.closeEditEmployeeInformation = function() {
            $scope.showEditEmployeeModal = 'display-none';
        }
        //remove record from list
    $scope.removeEmployeeInformation = function(empId) {
            var index = -1;
            var empArr = eval($scope.employeeList);
            for (var i = 0; i < empArr.length; i++) {
                if (empArr[i].id === empId) {
                    index = i;
                    break;
                }
            }
            if (index === -1) {
                alert("Something gone wrong");
            }
            $scope.employeeList.splice(index, 1);
        }
        //Add new employee information
    $scope.addEmployeeInfo = function() {
            $scope.addEmployeeModal = 'display-block';
            $scope.showEditEmployeeModal = 'display-none';
            $scope.lastEmpId = employeeList[employeeList.length - 1];
            $scope.newEmpId = $scope.lastEmpId.id + 1; alert($scope.newEmpId);
            //$scope.addEmp = function(){
            $scope.employeeList.push({
                'id': $scope.newEmpId,
                'firstname': $scope.firstname,
                'lastname': $scope.lastname,
                'empcode': $scope.empcode,
                'joiningdate': $scope.joiningdate
            });
            $scope.newEmpId= '';
            $scope.firstname= '';
            $scope.lastname= '';
            $scope.empcode= '';
            $scope.joiningdate= '';
            //}

        }
        // close employee edit page on close button click
    $scope.closeAddEmployee = function() {
        $scope.addEmployeeModal = 'display-none';
    }
}]);
