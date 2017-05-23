angular.module("meuModulo")
.controller("indexController",function($scope){
	$scope.titulo = "Cadastro de Clientes";
	$scope.clientes = [
		{nome: "Camila",cpf:"206.053.791-65",email:"camila@mail.com",cidade:"Franca",estado:"SP"},
		{nome: "Pedro",cpf:"220.414.375-88",email:"pedro@mail.com",cidade:"Franca",estado:"SP"},
		{nome: "Murilo",cpf:"030.205.175-91",email:"murilo@mail.com",cidade:"Franca",estado:"SP"},
		{nome: "João",cpf:"175.336.348-96",email:"joao@mail.com",cidade:"Franca",estado:"SP"},
		{nome: "Ana",cpf:"583.091.648-74",email:"ana@mail.com",cidade:"Franca",estado:"SP"}
	];

	var init = function(){
		limpaForm();
	};

	$scope.abreAddCliente = function(){
		$scope.editando = false;
		limpaForm();
		$('#modal1').openModal();
	};

	$scope.addCliente = function(Cliente){
		$scope.clientes.push(Cliente);
		$('#modal1').closeModal();
		limpaForm();
	};

	$scope.editando = false;
	var clienteEditar;

	$scope.editarCliente = function(Cliente){
		$scope.editando = true;
		angular.copy(Cliente,$scope.Cliente);
		$('#modal1').openModal();
		clienteEditar = Cliente;
	};

	$scope.salvarCliente = function(Cliente){
		clienteEditar.nome = Cliente.nome;
		clienteEditar.nota1 = Cliente.cpf;
		clienteEditar.email = Cliente.email;
		clienteEditar.nota2 = Cliente.cidade;
		clienteEditar.nota3 = Cliente.estado;
		$('#modal1').closeModal();
	};

	$scope.deletarCliente = function(Cliente){
		for(var index in $scope.clientes){
			var aux = $scope.clientes[index];
			if(Cliente === aux){
				$scope.clientes.splice(index,1);
			}
		}
	};

	var limpaForm = function(){
		$scope.Cliente = {nome: "",cpf:"",email:"",cidade:'',estado:''};
	};

	init();


})
.controller("contatoController",function($scope){
	$scope.titulo = "Contato";
})
