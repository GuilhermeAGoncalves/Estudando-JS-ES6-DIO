(() => {
    this.name = 'Arrow function'
    const getNameArrowFn = () => this.name

    function getName(){
        return this.name;
    }

    const user = {
        name : 'Guilherme de Araújo Gonçalves',
        getNameArrowFn,
        getName
    }

    console.log(user.getName());
    console.log(user.getNameArrowFn());

})();