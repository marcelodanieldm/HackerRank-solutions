pragma solidity 0.5.0;

contract Premios {
    
    enum EstadoPremio{CREADO, ACEPTADO, CANCELADO}
    
    struct Premio{
        address persona;
        uint deadline;
        string data;
        EstadoPremio estado;
        uint monto;
    }
    
    Premio[] public premios;
    
 
    constructor() public {}
    
    function publicarPremio(string memory _data, uint64 _deadline)
    public 
    payable
    tieneValor()
    validarDeadline(_deadline)
    returns(uint)
    {
        premios.push(Premio(msg.sender, _deadline, _data, EstadoPremio.CREADO, msg.value));
        emit PremioAgregado(premios.length -1, msg.sender, msg.value, _data);
        return (premios.length -1);
    }
    
    modifier validarDeadline(uint _nuevoDeadline){
       require(_nuevoDeadline > now); 
       _;
    }
    
    modifier tieneValor(){
        require(msg.value >0);
        _;
    }
    
    event PremioAgregado(uint id_premio, address persona, uint monto, string data);
    }
    
